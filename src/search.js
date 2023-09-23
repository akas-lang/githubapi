import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import "./App.css";

const Searchapi = () => {
  const [post, getpost] = useState([]);
  const [searchs, searchbar] = useState("");
  useEffect(() => {
    axios.get("https://api.github.com/users").then((res) => {
      getpost(res.data);
      console.log(res);
    });
  });
  const cardstyles = {
    width: "250px",
    borderRadius: "20px",
    height: 350,
  };
  const handle = (e) => {
    searchbar(e.target.value);
  };
  const butstyle = {
    marginLeft: "20px",
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="serach..."
          className="searchbar"
          onChange={handle}
        />
      </div>

      <Grid container spacing={6}>
        {post
          .filter((element) => {
            if (element.login.toLowerCase().includes(searchs.toLowerCase())) {
              return element;
            }
          })
          .map((element)=>{
            return  <Grid item>
                  <Card sx={cardstyles}>
                    <CardContent>
                      <img src={element.avatar_url} className="img1" />
                      <h3 className="name">{element.login}</h3>
                    </CardContent>
                    <CardActions sx={butstyle}>
                      <Button size="small" variant="contained">
                        Share
                      </Button>
                      <Button size="small" variant="contained">
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
          })
     
       
       }
      </Grid>
    </>
  );
};
export default Searchapi;
