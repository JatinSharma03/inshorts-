import React from 'react'
import '../index.css';

import {Box, Typography, makeStyles} from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    container:{
        backgroundColor:"#f44336",
        marginBottom:30,
        color:"#ffffff",
        height:48,
        display:"flex",
        alignItems:"center",
        [theme.breakpoints.down("md")]:{
            display:"none"
        }
    },
    text:{
        fontSize:14,
        margin:"0 14px",
        fontFamily: 'Robot',
        fontWeight:300,
    },
    logo:{
        marginLeft:"auto",
        "&>*":{
            height:34,
            "&:last-child":{
                margin:"0 50px 0 20px",
            },
        },
        "@media(max-width:600px)":{
            width:"100%",
            marginLeft:0,
            display:"flex",
            alignItems:"center",
            justifyContent:"space-around",
            marginTop:8,
            "&>*":{
                height:30,
                margin:0,
            }
        }
    }
}))

export default function InfoHeader() {

    const classes = useStyle();

    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

    return (
        <Box className={classes.container}>
            <Typography className={classes.text}>For the best experience use <b>inshort</b> app on your smartphone</Typography>
            <Box className={classes.logo}>
                <img src={appleStore} alt="apple store" />
                <img src={googleStore} alt="google store" />
            </Box>
        </Box>
    )
}
