

import SimpleHeader from 'components/Headers/SimpleHeader';
import { Box, Container, makeStyles } from '@material-ui/core';
import componentStyles from 'assets/theme/views';

import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import SectionForm from './SectionForm';

const useStyles = makeStyles(componentStyles);
const SectionEdit = () => {

    const classes = useStyles();
    
    const history = useHistory();

    // get artcile id from state
    const location = useLocation();

    const articleId = location.state?.articleId;
    const section = location.state?.section;








   


    const handleBack = () => {
        history.push("/admin/article-edit/"+articleId, {articleId: articleId}); 
    }




    

   



    return (
        <>
        <SimpleHeader section="Sections" subsection="Edit"   onRightButtonClick={handleBack} rightButton="retour" />
        {/* Page content */}
        <Container
          maxWidth={false}
          component={Box}
          marginTop="-4.5rem"
          classes={{ root: classes.containerRoot }}
        >
        <SectionForm articleId={articleId} section={section} handleSub={handleBack} />
        </Container>
        </>

    );
    }



export default SectionEdit;