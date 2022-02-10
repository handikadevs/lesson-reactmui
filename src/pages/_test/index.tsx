import axios from "axios"
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const Test = () => {
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
        <div className="Test">
            {/* <h1>Tes</h1>
            {users.map((user) => {
                return (
                    <p>
                        {user.fullname} - {user.email}
                    </p>
                );
            })} */}

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="left">Username</StyledTableCell>
                            <StyledTableCell align="left">Email</StyledTableCell>
                            <StyledTableCell align="right">Address</StyledTableCell>
                            <StyledTableCell align="right">Phone</StyledTableCell>
                            <StyledTableCell align="right">Website</StyledTableCell>
                            <StyledTableCell align="right">Company</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => {
                            return (
                                <StyledTableRow >
                                    <StyledTableCell component="th" scope="row">
                                        {user.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{user.username}</StyledTableCell>
                                    <StyledTableCell align="left">{user.email}</StyledTableCell>
                                    <StyledTableCell align="right">{user.address.street}, {user.address.suite}, {user.address.city}</StyledTableCell>
                                    <StyledTableCell align="right">{user.phone}</StyledTableCell>
                                    <StyledTableCell align="right">{user.website}</StyledTableCell>
                                    <StyledTableCell align="right">{user.company.name}</StyledTableCell>
                                </StyledTableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
};

export default Test;