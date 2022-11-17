import React, { Component } from 'react';
import {CKEditor} from "ckeditor4-react";


class CKEditorApp extends Component {
    render() {
        return (
            <CKEditor
                editorUrl= "https://cdn.ckeditor.com/4.20.0/standard/ckeditor.js"

                config={{
                }}

            />

        );
    }
}

export default CKEditorApp;