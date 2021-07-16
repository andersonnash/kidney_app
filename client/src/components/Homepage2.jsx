import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 300,
  },
  media: {
    height: 140,
  },
});

export default function Homepage2() {
  const classes = useStyles();

  return (
    <div className="cardContainer">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://www.kidney.org/sites/default/files/styles/nephron_custom_scale_crop_300_225/public/transplant_friends.jpg"
            title="Transplant"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Transplant
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              When you get a kidney transplant
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            <Link to="/Transplant"> Learn More</Link>
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://www.codlearningtech.org/wp-content/uploads/2020/07/discussionboard-1.png"
            title="Transplant"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Forum
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Share your story with the community
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
            Share
          </Button> */}
          <Button size="small" color="primary">
            <Link to="/Forum"> Share Your Story</Link>
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="http://cdn.shopify.com/s/files/1/0379/5923/7764/files/body-fail-kidney-man-organs-people-sad-7EtK4d-clipart_large.jpeg?v=1595044917"
            title="Transplant"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Living with IgA
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              IgA nephropathy is a chronic kidney disease.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
            Share
          </Button> */}
          <Button size="small" color="primary">
            <Link to="/iga">Learn More</Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
