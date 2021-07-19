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
// import Intro from "./components/Intro";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Homepage2() {
  const classes = useStyles();

  return (
    <div className="cardContainer">
      <Link to="/Transplant">
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
            {/* <Button size="small" color="primary">
              Share
            </Button> */}
            <Button size="small" color="primary"></Button>
          </CardActions>
        </Card>
      </Link>
      <Link to="/Forum">
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
            <Button size="small" color="primary"></Button>
          </CardActions>
        </Card>
      </Link>
      <Link to="/iga">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://www.kidney.org/sites/default/files/styles/nephron_custom_scale_crop_300_225/public/things_to_consider.jpg"
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
            <Button size="small" color="primary"></Button>
          </CardActions>
        </Card>
      </Link>
    </div>
  );
}
