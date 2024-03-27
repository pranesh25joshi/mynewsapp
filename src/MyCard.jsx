import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function MyCard(title, body, image, url) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          // component="img"
          height="140"
          image={MyCard.image}
          // alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {MyCard.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {MyCard.body}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {MyCard.url}
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
