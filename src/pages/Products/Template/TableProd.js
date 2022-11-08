import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import IconButton from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import {Button} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';


function createData(title, price, category) {
    return { title, price, category };
}

const rows = [
    createData('Samsung test 1', 159, "Cm1"),
    createData('Samsung test 2', 237, "Cm2"),
    createData('Samsung test 3', 262, "Cm2"),
    createData('Samsung test 4', 305, "Cm1"),
    createData('Samsung test 5', 356, "Cm3"),
];

const TableProd = () => {
    let count = 0;
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Giá</TableCell>
                        <TableCell align="right">Chuyên mục</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{count++}</TableCell>
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">{row.category}</TableCell>
                            <TableCell align="right">
                                <Button
                                    variant="outlined"
                                    startIcon={<InfoIcon />}
                                    color="success"
                                    href={"/products/:prodId"}
                                >
                                    Detail
                                </Button>
                                <Button
                                    variant="outlined"
                                    startIcon={<EditIcon />}
                                    color="warning"
                                    href=""
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="outlined"
                                    startIcon={<DeleteIcon />}
                                    color="error"
                                    href=""
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default TableProd