import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const CardVideos = ({ status }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3}>
        {status.data.length > 0 ? (
          status.data.map((item, index) => {
            return (
              <Grid key={item.title} item xs={4}>
                <Card key={index} className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      key={item.image_url}
                      component="img"
                      alt={item.title}
                      height="140"
                      image={item.image_url}
                      title={item.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })
        ) : (
          <h2 style={{ padding: "5vw" }}>Waiting for search</h2>
        )}
      </Grid>
    </>
  );
};
export default CardVideos;
