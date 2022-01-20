import React from 'react'
import {Card, CardContent, Grid, makeStyles, Typography} from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    image:{
        height:268,
        width:"88%",
        borderRadius:5,
        objectFit:"cover",
        [theme.breakpoints.down("xs")]:{
            width:"100%",
        }
    },
    component:{
        marginBottom:20,
        boxShadow:"0 2px 5px 0 rgb(0 0 0 /16%), 0 2px 10px 0 rgb(0 0 0 /12%)",
    },
    container:{
        padding:8,
        paddingBottom:"4px!important",
    },
    rightContainer:{
        margin:"5px 0 0 -25px",
        [theme.breakpoints.down('sm')]:{
            margin:"5px 0",
        },
        display:"flex",
        flexDirection:"column",
    },
    title:{
        color:"#44444d",
        fontWeight:300,
        fontSize:22,
        lineHeight:"27px"
    },
    author:{
        fontSize:12,
        color:"#808290",
        lineHeight:"22px",
    },
    description:{
        lineHeight:"22px",
        color:"#44444d",
        marginTop:5,
    },
    publisher:{
        marginTop:"auto",
        marginBottom:10,
        fontSize:12,
        "& > *":{
            textDecoration:"none",
            color:"#000",
            fontWeight:900,
        }
    }
}))

export default function ArticleBox({news}) {

    const classes = useStyle();

    return (
        
            <Card className={classes.component}>
                <CardContent className={classes.container}>
                    <Grid container>
                        <Grid item lg={5} md={5} sm={5} xs={12}>
                            <img src={news.url} alt="news pic" className={classes.image}/>
                        </Grid>
                        <Grid item lg={7} md={7} sm={7} xs={12} className={classes.rightContainer}>
                            <Typography className={classes.title}>{news.title}</Typography>
                            <Typography className={classes.author}>
                                <b>short</b> by {news.author}/{new Date(news.timestamp).toDateString()}
                            </Typography>
                            <Typography className={classes.description}>{news.description}</Typography>
                            <Typography className={classes.publisher}>
                                read more at <a href={news.link} target="_blank">{news.publisher}</a>
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        
    )
}