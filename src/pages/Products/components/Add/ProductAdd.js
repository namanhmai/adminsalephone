import Master from "../../../../components/Layouts/Master";
import "./ProductAdd.css"
import {Box} from "@material-ui/core";
import {TextField} from "@mui/material";
import CateSelect from "../../Template/CategorySelect/CateSelect";
import Upload from "../../Template/UploadImage/Upload";
import CKEditorApp from "../../Template/CKEditorApp/CKEditorApp";


const ProductAdd = () =>{
    return(
        <Master title={"Thêm sản phẩm"} url={"products/add"}>
            <div className="ProductAdd">
                <Box component="form">
                    <div className="form-group">
                        <div className="left">

                            <TextField
                                required
                                id="outlined-required"
                                label="Tiêu đề"
                                className="form-control"
                            />

                        </div>
                        <div className="right">
                            <CateSelect />

                        </div>
                    </div>
                    <div className="form-group">
                        <div className="left">
                            <Upload />
                        </div>
                        <div className="right">


                        </div>
                    </div>
                    <div className="form-group">
                        <div className="left">
                            <TextField
                                required
                                id="outlined-required"
                                label="Giá"
                                className="form-control"
                                type={"number"}
                            />
                        </div>
                        <div className="right">
                        </div>
                    </div>
                    <div className="ckeditor" >
                        <CKEditorApp />
                    </div>
                    <div className="mt-5">
                        <input type='submit' className="btn btn-submit p-10-35 b-none"/>
                    </div>
                </Box>
            </div>
        </Master>
    )
}
export default ProductAdd