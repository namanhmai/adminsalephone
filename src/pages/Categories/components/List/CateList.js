import React from "react";
import "./CateList.css"
import Master from "../../../../components/Layouts/Master";
import {Button} from "@mui/material";


const CateList = () =>{
    return(
        <Master>
            <div className="CateList">
                <Button variant="contained" href="/categories/add" className="btn-add">
                    Thêm mới
                </Button>

            </div>
        </Master>
    )
}
export default CateList