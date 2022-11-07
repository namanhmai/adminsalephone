import {Button} from "@mui/material";
import Master from "../../../../components/Layouts/Master";
import React from "react";

const ProductList = () =>{
    return(
        <Master title="Danh sách sản phẩm">
            <div className="ProdList">
                <Button variant="contained" href="/categories/add" className="btn-add">
                    Thêm mới
                </Button>

            </div>
        </Master>
    )
}
export default ProductList