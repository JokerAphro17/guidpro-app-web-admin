
import DataTable from 'react-data-table-component';

import { useState } from 'react';
import SimpleHeader from 'components/Headers/SimpleHeader';
import { Box, Container, makeStyles } from '@material-ui/core';
import componentStyles from 'assets/theme/views';

const useStyles = makeStyles(componentStyles);
const ArticleList = () => {

    const columns = [
    {
        name: "ID",
        selector: row => row.id,
        sortable: true,
    },
    {
        name: "Title",
        selector: row => row.title,
        sortable: true,
    },
    {
        name: "Description",
        selector: row => row.description,
        sortable: true,
    },
    {
        name: "Created At",
        selector: row => row.created_at,
        sortable: true,
    },
    {
        name: "Updated At",
        selector: row => row.updated_at,
        sortable: true,
    },
   
    ];


    const handlePageChange = (page) => {
        console.log(page);
    }

    const [articles, setArticles] = useState([]);
    const [totalRows, setTotalRows] = useState(0);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const classes = useStyles();



    return (
        <>
        <SimpleHeader section="Articles" subsection="List" />
        {/* Page content */}
        <Container
          maxWidth={false}
          component={Box}
          marginTop="-4.5rem"
          classes={{ root: classes.containerRoot }}
        >
        <DataTable
            title="Articles"
            columns={columns}
            data={articles}
            pagination
            paginationServer
            paginationTotalRows={totalRows}
            onChange={handlePageChange}
            noDataComponent="Pas d'articles"
        />
        </Container>
        </>
        


    );
    }



export default ArticleList;