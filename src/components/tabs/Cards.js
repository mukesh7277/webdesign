import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    maxWidth: 305,
  },
  media: {
    height: 300,
  },
});

export default function Cards(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="love"
        />
        <CardContent>
          <div>
            <h4>{props.title}</h4>
            </div>
          <div style={{display: 'flex',flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
            <div>{props.price1}</div>
            <div style={{color:"orange",marginLeft:10,fontSize:15}}>{props.price2}</div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}