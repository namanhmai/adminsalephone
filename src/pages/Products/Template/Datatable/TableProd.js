import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {productColumn,productRow} from "../../../productsResource"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ListAltIcon from '@mui/icons-material/ListAlt';
import "./TableProd.css"
import {Button} from "@mui/material";
const TableProd = () => {
    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 300,
            renderCell:(params) => {
            return(
                <div className="cellAction">
                    <Button variant="contained" href={'products/'+ params.id} color="primary" className="ProdAddBtn"><ListAltIcon /></Button>
                    <Button variant="contained" href={'products/edit/'+ params.id} color="success" className="ProdAddBtn"><EditIcon /></Button>
                    <Button variant="contained" href={'products/delete/'+ params.id} color="error" className="ProdAddBtn"><DeleteIcon /></Button>
                </div>
            )
    }
    }]
    return (
        <div className="datatable">
            <DataGrid
                rows={productRow}
                columns={productColumn.concat(actionColumn)}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                autoHeight={true}
            />
        </div>
    );
}
export default TableProd;