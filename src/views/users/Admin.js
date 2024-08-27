import { Box, Container, makeStyles } from "@material-ui/core";
import { getUsersRequest } from "api/request";
import componentStyles from "assets/theme/views";
import SimpleHeader from "components/Headers/SimpleHeader";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const useStyles = makeStyles(componentStyles);

const AdminList = () => {


    const [users, setUsers] = useState([]);

    const classes = useStyles();

    const columns = [
        {
            name: "N°",
            selector: row => row.index,
            sortable: true,
        },
        {
            name: "Nom",
            selector: row => row.lastName,
            sortable: true,
        },
        {
            name: "Prénom",
            selector: row => row.firstName,
            sortable: true,
        },
        {
            name: "Email",
            selector: row => row.email,
            sortable: true,
        },
        {
            name: "Téléphone",
            selector: row => row.phone,
            sortable: true,
        },
        {
            name: "Statut",
            selector: row => row.status,
            sortable: true,
        },
        
    ];

    const fecthUsers = async () => {
        try {
            const response = await getUsersRequest("ADMIN");
            console.log("response", response)
            const _users = response.data.data.map((user, index) => {
                return {
                    ...user,
                    index: index + 1
                }
            });

            setUsers(_users);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fecthUsers();
    }
    , []);


    

    return (
        <>
        <SimpleHeader section="Expert" subsection="List"   
        // onRightButtonClick={handleNew} 
         />
        {/* Page content */}
        <Container
          maxWidth={false}
          component={Box}
          marginTop="-4.5rem"
          classes={{ root: classes.containerRoot }}
        >
        <DataTable
            title="Admins"
            // onRowClicked={onClicRow}
            pointerOnHover
            highlightOnHover
            columns={columns}
            data={users}
            pagination
            noDataComponent={<div className="text-center mb-3">
                Pas d'utilisateurs
            </div>}
        />
        </Container>
        </>

    );
    }

export default AdminList;
