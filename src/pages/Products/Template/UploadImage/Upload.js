import React, { Component } from "react";
import { IconButton} from "@mui/material";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import "./Upload.css"


class Upload extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: null
        };

        // if we are using arrow function binding is not required
        //  this.onImageChange = this.onImageChange.bind(this);
    }

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img)
            });
        }


    };

    render() {
        return (
            <div>
                <div>
                    <div>
                        <img src={this.state.image} className="anh-dai-dien" alt=""/>
                        {/*<input type="file" name="myImage" onChange={this.onImageChange} />*/}

                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" name="upload" onChange={this.onImageChange} />
                            <FileUploadIcon className="icon"/>
                        </IconButton>
                    </div>
                </div>
            </div>
        );
    }
}
export default Upload;
