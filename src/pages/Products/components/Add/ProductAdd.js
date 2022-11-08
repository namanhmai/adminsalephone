import Master from "../../../../components/Layouts/Master";
import {Box} from "@mui/material";
import "./ProductAdd.css"
import {Grid} from "@material-ui/core";

function Item() {
    return null;
}

const ProductAdd = () =>{
    return(
        <Master title={"Thêm sản phẩm"} url={"products/add"}>
            <div className="ProductAdd">
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={6}>
                            <Item>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>xs=8</Item>
                        </Grid>
                    </Grid>

                </Box>
            </div>
        </Master>
    )
}
export default ProductAdd