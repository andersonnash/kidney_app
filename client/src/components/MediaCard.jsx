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
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div>
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
              When you get a kidney transplant, a healthy kidney is placed
              inside your body to do the work your own kidneys can no longer do.
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
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
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
    </div>
  );
}
