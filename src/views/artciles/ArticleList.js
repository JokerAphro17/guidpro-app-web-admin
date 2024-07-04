
import DataTable from 'react-data-table-component';

import { useEffect, useState } from 'react';
import SimpleHeader from 'components/Headers/SimpleHeader';
import { Box, Container, makeStyles } from '@material-ui/core';
import componentStyles from 'assets/theme/views';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { formatXOF } from 'utils/helpers';
import moment from 'moment';
import { resolveStatus } from 'utils/helpers';
import { alertPending } from 'components/alert';
import { alertClosed } from 'components/alert';
import { getAdviceByUserRequest } from 'api/request';

const useStyles = makeStyles(componentStyles);
const ArticleList = () => {

    const columns = [
    {
        name: "N°",
        selector: row => row.index,
        sortable: true,
    },
    {
        name: "Titre",
        selector: row => row.title,
        sortable: true,
    },
    {
        name: "Domaine",
        selector: row => row.domain.name,
        sortable: true,
    },
   
    {
        name: "Budget Minamal",
        selector: row => formatXOF(row.budget),
        sortable: true,
    },
    {
        name: "Créé le",
        selector: row => moment(row.created_at).format("DD/MM/YYYY"),
        sortable: true,
    },
    {
        name: "publié le",
        selector: row => row.status === "PUBLISHED" ? moment(row.published_at).format("DD/MM/YYYY") : "---",
    },
    {
        name: "Statut",
        selector: row => <span className={`badge badge-${row.status === "PUBLISHED" ? "success" : "warning"}`}>{resolveStatus(row.status)}</span>,
    },
    ];


   

    const [articles, setArticles] = useState([]);
  
    const classes = useStyles();
    const history = useHistory();
    const handleNew = () => {
        history.push("/admin/article/new");
    }
    
    useEffect(() => {
        fetchArticles();
    }
    , []);

    const onClicRow = (row) => {
        history.push(`/admin/article-edit/${row.id}`, { article: row });
    }


    const fetchArticles = async () => {
        alertPending("Chargement des articles", "Veuillez patienter...");
        try {
            const response = await getAdviceByUserRequest();
            const data = response.data;
            console.log("data", data?.data);
            const articles = data?.data;

            // add index to each article
            const articlesWithIndex = articles.map((article, index) => {
                return {
                    ...article,
                    index: index + 1
                }
            });
            // sort articles by created_at
            const sortedArticles = articlesWithIndex.sort((a, b) => {
                return new Date(b.created_at) - new Date(a.created_at);
            });

            setArticles(sortedArticles);
            
        
        } catch (error) {
            console.log(error);
        }
        alertClosed();

    }


    

   



    return (
        <>
        <SimpleHeader section="Articles" subsection="List"   onRightButtonClick={handleNew} rightButton="Nouveau" />
        {/* Page content */}
        <Container
          maxWidth={false}
          component={Box}
          marginTop="-4.5rem"
          classes={{ root: classes.containerRoot }}
        >
        <DataTable
            title="Articles"
            onRowClicked={onClicRow}
            pointerOnHover
            highlightOnHover
            columns={columns}
            data={articles}
            pagination
            noDataComponent={<div className="text-center mb-3">Pas d'articles</div>}
        />
        </Container>
        </>

    );
    }



export default ArticleList;