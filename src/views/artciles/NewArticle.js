import { Box, Container, makeStyles } from "@material-ui/core";
import componentStyles from "assets/theme/views";
import SimpleHeader from "components/Headers/SimpleHeader"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ArticleForm from "./ArticleForm";


const useStyles = makeStyles(componentStyles);
const NewArticle = () => {
    const history = useHistory();
    const back = () => {
        history.push("/admin/articles");
    }

    const  classes = useStyles();
    return (
        <>
        <SimpleHeader section="Articles" subsection="Nouvel Article" onRightButtonClick={back} rightButton="Retour" />
            <Container
            maxWidth={false}
            component={Box}
            marginTop="-4.5rem"
            classes={{ root: classes.containerRoot }}
             >
              
                   
                        <ArticleForm />
           
            </Container>
        </>



    )
}


export default NewArticle