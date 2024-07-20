import React, { useState } from 'react';
import { Box, Button, Card, Grid, makeStyles } from '@material-ui/core';
import componentStyles from 'assets/theme/views';
import { resolveFileUrl } from 'utils/helpers';

const useStyles = makeStyles(componentStyles);

const CoverUpload = ({ onCoverChange, coverUrl }) => {
  const [cover, setCover] = useState(null);
  const classes = useStyles();

  const handleCoverChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCover(reader.result);
        
        onCoverChange(file);
      };
      reader.readAsDataURL(file);
    }
  };


  console.log("coverUrl", coverUrl);
  

  return (
    <Card classes={{ root: classes.cardRoot }} style={{ marginBottom: '1rem' }}>
      <Box padding="1rem" textAlign="center">
        {cover ? (
          <img src={resolveFileUrl(coverUrl)} alt="Cover Preview" style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'cover',}} />
        ) : (
          <img src={ coverUrl ? resolveFileUrl(coverUrl) : 'https://via.placeholder.com/300' }
          
          alt="Cover Preview" style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'cover',}} />
        )}
        <div className="d-flex justify-content-center">
            <Grid item xs={12} sm={6} md={6}>
                <Button variant="contained" component="label" color="primary" style={{ marginTop: '1rem' }}>
                    Choisir une image
                <input type="file" accept="image/*" hidden onChange={handleCoverChange} />
                </Button>
            </Grid>
        </div>

      </Box>
    </Card>
  );
};

export default CoverUpload;
