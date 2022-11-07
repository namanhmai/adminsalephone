import * as React from 'react';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import "./Breadcrumb.css"
import Heading from "../Heading/Heading";
import PropTypes from "prop-types";

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}
const Breakcrumbs = props =>{
    const {
        namePage = '',

    } = props
    return (
        <div role="presentation" onClick={handleClick} className="Breakcrumbs">
            <Heading />
            <Breadcrumbs aria-label="breadcrumb" className="custom-breakcrumbs">

                <Link
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    href="/"
                >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Trang chủ
                </Link>
                {/*<Link*/}
                {/*    underline="hover"*/}
                {/*    sx={{ display: 'flex', alignItems: 'center' }}*/}
                {/*    color="inherit"*/}
                {/*    href="Home/xyz"*/}
                {/*>*/}
                {/*    <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />*/}
                {/*    Core*/}
                {/*</Link>*/}
                {/*<Typography*/}
                {/*    sx={{ display: 'flex', alignItems: 'center' }}*/}
                {/*    color="text.primary"*/}
                {/*>*/}
                {/*    <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />*/}
                {/*    Breadcrumb*/}
                {/*</Typography>*/}
            </Breadcrumbs>
        </div>
    );
}
export default Breakcrumbs;

Breakcrumbs.propType = {
    namePage:PropTypes.string.isRequired
}