

import { Box, Container, makeStyles } from "@material-ui/core";
import componentStyles from "assets/theme/views";
import SimpleHeader from "components/Headers/SimpleHeader"
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import ArticleForm from "./ArticleForm";


const useStyles = makeStyles(componentStyles);
const ArticleEdit = () => {
    const history = useHistory();
    // get the article id from state
    const location = useLocation();
    const {articleId} = location.state;
    console.log(articleId);
    const back = () => {
        history.push("/admin/articles");
    }

    const  classes = useStyles();
    return (
        <>
        <SimpleHeader section="Articles" subsection="" onRightButtonClick={back} rightButton="Retour" />

            
            <Container
            maxWidth={false}
            component={Box}
            marginTop="-4.5rem"
            classes={{ root: classes.containerRoot }}
             >  
              
                   
                        <ArticleForm  articleId={articleId}  />
           
            </Container>
        </>



    )
}


export default ArticleEdit