// import MyCard from "./MyCard";
// import * as React from "react";
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
//
// import ClickableChips from "./ClickableChips";
//
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
function App() {
  // const [title, setTitle] = useState('');
  //  const [body, setBody] = useState('');
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("top");
  const feild = [
    "business",
    "education",
    "politics",
    "technology",
    "sports",
    "health",
    "world",
    "environment",
    "tourism",
  ];

  const getNews = async () => {
    const api = `https://newsdata.io/api/1/news?apikey=pub_40776da4d9a5d24ae3ee3e5ecdf6b1d101293&language=en&country=in&category=${category}`;
    // const data = await fetch(
    //   "https://newsapi.org/v2/top-headlines?country=in&from=2024-02-26&sortBy=publishedAt&apiKey=d5f7b3ce225348c589cfed774acc91b5"
    // );
    // const data = await fetch(
    //   'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json'
    // );
    const data = await fetch(api);
    // https://newsdata.io/api/1/archive?apikey=pub_40776da4d9a5d24ae3ee3e5ecdf6b1d101293&q=example&language=en&from_date=2023-01-19&to_date=2023-01-25
    const obj = await data.json();
    console.log("json");
    console.log(obj.results);
    setNews(obj.results);

    console.log(news);
  };

  useEffect(() => {
    getNews(category);
  }, [category]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center font-medium text-white ">News WebApp</h1>
      <div className="flex justify-center items-center m-5 flex-wrap ">
        {/* <ClickableChips value="business" />
        <ClickableChips value="education" />
        <ClickableChips value="politics" />
        <ClickableChips value="technology" />
        <ClickableChips value="sports" />
        <ClickableChips value="health" />
        <ClickableChips value="world" />
        <ClickableChips value="environment" />
        <ClickableChips value="tourism" /> */}

        {feild.map((feild) => (
          <Stack direction="row" spacing={1} className="m-5">
            <Chip
              key={feild}
              label={feild}
              onClick={() => {
                setCategory(feild);
              }}
              style={{ color: "black", backgroundColor: "#ccc" }}
            />
          </Stack>
        ))}

        
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap  justify-center">
          {news.map((news) => (
            <Card sx={{ maxWidth: 345 }} className="m-2">
              <CardActionArea>
                <CardMedia
                  component="img"
                  // height="140"
                  image={news.image_url}
                  // alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {news.title}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {news.category}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {news.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className=" pt-2"
                  >
                    {news.link}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
