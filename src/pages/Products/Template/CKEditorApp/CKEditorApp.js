import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./CKEditorApp.css"
import {ImageCaption, ImageResize, ImageStyle, ImageToolbar} from "@ckeditor/ckeditor5-image";
import {LinkImage} from "@ckeditor/ckeditor5-link";

class CKEditorApp extends Component {
    render() {
        return (
                <CKEditor
                    editor={ ClassicEditor}
                    config={{
                        plugins : [Image, ImageToolbar, ImageCaption, ImageStyle, ImageResize, LinkImage],
                        toolbar: [
                            'imageStyle:block',
                            'imageStyle:side',
                            '|',
                            'toggleImageCaption',
                            'imageTextAlternative',
                            '|',
                            'linkImage'
                        ]

                    }}
                    data=""
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />

        );
    }
}

export default CKEditorApp;