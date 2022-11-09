import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {productColumn,productRow} from "../../../productsResource"
import "./TableProd.css"
const TableProd = () => {
    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell:(params) => {
            return(
                <div className="cellAction">
                    <a href={'products/'+ params.id} className="btn btn-success">Detail</a>
                    <a href={'products/edit/'+ params.id} className="btn btn-warning">Edit</a>
                    <a href={'products/delete/'+ params.id} className="btn btn-danger">Delete</a>
                    {/*<div className="viewButton">View</div>*/}
                    {/*<div className="warningButton">Edit</div>*/}
                    {/*<div className="deleteButton">Delete</div>*/}
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