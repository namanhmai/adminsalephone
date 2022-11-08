import {Button} from "@mui/material";
import Master from "../../../../components/Layouts/Master";
import React from "react";
import "./ProductList.css"
import TableProd from "../../Template/TableProd";


const ProductList = () =>{
    return(
        <Master title="Danh sách sản phẩm" url="/product">
            <div className="ProdList">
                <div className="btn-add-block">
                    <Button variant="contained" href="/products/add" className="btn-add">
                        Thêm mới
                    </Button>
                </div>
                <div className="table-list">
                    <TableProd />
                </div>
            </div>
        </Master>
    )
}
export default ProductList