import * as React from 'react';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
// import HomeIcon from '@mui/icons-material/Home';
import "./Breadcrumb.css"
import Heading from "../Heading/Heading";
import PropTypes from "prop-types";

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}
const Breakcrumbs = props =>{
    const {
        nameBreakcrumbs = '',
        url = '',

    } = props
    return (
        <div role="presentation" onClick={handleClick} className="Breakcrumbs">
            <Heading nameHeading={nameBreakcrumbs}/>
            <Breadcrumbs aria-label="breadcrumb" className="custom-breakcrumbs">

                <Link
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    href="/"
                >
                    Home
                </Link>
                <Link
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    href={url}
                >
                    {nameBreakcrumbs}
                </Link>
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

Breakcrumbs.propType = {
    nameBreakcrumbs:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired,
}

export default Breakcrumbs;
