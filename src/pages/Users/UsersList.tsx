import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    bold: {
        fontWeight: 600
    }
})

const Users = () => {
    const classes = useStyles();

    const [users, setUsers] = useState<any[]>([]);

    const getUserData = async () => {
        try {
            const data = await axios.get("https://jsonplaceholder.typicode.com/users");
            console.log(data.data);
            setUsers(data.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <div className="Users">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.bold}>Name</TableCell>
                            <TableCell className={classes.bold} align="right">Username</TableCell>
                            <TableCell className={classes.bold} align="right">Email</TableCell>
                            <TableCell className={classes.bold} align="right">Address</TableCell>
                            <TableCell className={classes.bold} align="right">Phone</TableCell>
                            <TableCell className={classes.bold} align="right">Website</TableCell>
                            <TableCell className={classes.bold} align="right">Company</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => {
                            return (
                                <TableRow
                                    key={user.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {user.name}
                                    </TableCell>
                                    <TableCell align="right">{user.username}</TableCell>
                                    <TableCell align="right">{user.email}</TableCell>
                                    <TableCell align="right">{user.address.street}</TableCell>
                                    <TableCell align="right">{user.phone}</TableCell>
                                    <TableCell align="right">{user.website}</TableCell>
                                    <TableCell align="right">{user.company.name}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Users;