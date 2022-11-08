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
import "./TableProd.css"

function createData(url,title, price, category) {
    return { url,title, price, category };
}

const rows = [
    createData('https://znews-photo.zingcdn.me/w1200/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg','Samsung test 1', 159, "Cm1"),
    createData('https://znews-photo.zingcdn.me/w1200/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg','Samsung test 2', 237, "Cm2"),
    createData('https://znews-photo.zingcdn.me/w1200/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg','Samsung test 3', 262, "Cm2"),
    createData('https://znews-photo.zingcdn.me/w1200/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg','Samsung test 4', 305, "Cm1"),
    createData('https://znews-photo.zingcdn.me/w1200/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg','Samsung test 5', 356, "Cm3"),
];

const TableProd = () => {
    let count = 0;
    return (
        <TableContainer component={Paper} variant='outlined'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                <TableHead>
                    <TableRow>
                        <TableCell align="center">STT</TableCell>
                        <TableCell align="center">Ảnh</TableCell>
                        <TableCell align="center">Title</TableCell>
                        <TableCell align="center">Giá</TableCell>
                        <TableCell align="center">Chuyên mục</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">{count++}</TableCell>
                            <TableCell align="center">
                                <img src={row.url} alt="" className="img-prod"/>
                            </TableCell>
                            <TableCell align="center">
                                {row.title}
                            </TableCell>
                            <TableCell align="center">{row.price}</TableCell>
                            <TableCell align="center">{row.category}</TableCell>
                            <TableCell align="center">
                                <Button
                                    variant="outlined"
                                    startIcon={<InfoIcon />}
                                    color="success"
                                    href={"#"}
                                    className="btn-common"
                                >
                                    Detail
                                </Button>
                                <Button
                                    variant="outlined"
                                    startIcon={<EditIcon />}
                                    color="warning"
                                    href={"#"}
                                    className="btn-common"
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="outlined"
                                    startIcon={<DeleteIcon />}
                                    color="error"
                                    href={"#"}
                                    className="btn-common"
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

// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// const CustomLink = () => '<h1>cvscscs</h1>';
//
// const columns = [
//     { field: 'id', headerName: 'STT', width: 70 },
//     {field: 'avatar', headerName: 'Ảnh đại diện sản phẩm',width: 70},
//     { field: 'title', headerName: 'Tiêu đề', width: 300 },
//     { field: 'price', headerName: 'Giá', width: 130,type: 'number' },
//     {
//         field: 'category',
//         headerName: 'Chuyên mục',
//         width: 130
//     },
//     {
//         field:'action',
//         headerName: 'Action',
//         children:{CustomLink}
//     }
// ];
//
//
//
// const rows = [
//     { id: 1, title: 'Samsung test 1', price: 30300000, category: "Chuyen muc 1" },
//     { id: 2, title: 'Samsung test 2', price: 3400000, category: "Chuyen muc 2" },
//     { id: 3, title: 'Samsung test 3', price: 3200000, category: "Chuyen muc 4" },
//     { id: 4, title: 'Samsung test 4', price: 1000000, category: "Chuyen muc 6" },
//     { id: 5, title: 'Samsung test 5', price: 3400000, category: "Chuyen muc 1" },
//     { id: 6, title: 'Samsung test 6', price: 3200000, category: "Chuyen muc 3" },
//     { id: 7, title: 'Samsung test 7', price: 5000000, category: "Chuyen muc 4" },
//     { id: 8, title: 'Samsung test 8', price: 13000000, category: "Chuyen muc 7" },
//     { id: 9, title: 'Samsung test 9', price: 34000000, category: "Chuyen muc 1" },
// ];
//
// export default function TableProd() {
//     return (
//         <div style={{ height: 400, width: '100%' }}>
//             <DataGrid
//                 rows={rows}
//                 columns={columns}
//                 pageSize={5}
//                 rowsPerPageOptions={[5]}
//                 // component={CustomLink}
//             />
//         </div>
//     );
// }