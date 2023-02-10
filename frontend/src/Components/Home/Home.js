import React from "react";

import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";


import "./Home.css";
import Google_Image from "../../Images/googlelogo_color_272x92dp.png";
import Search from "../layout/SearchField";

const Home = () => {
  return (
    <div className="home">
      <div className="top">
        <div>
          <a href="https://mail.google.com/mail">Gmail</a>
        </div>
        <div>
          <a href="https://www.google.co.in/imghp?hl=en&authuser=0&ogbl">
            Images
          </a>
        </div>
        <div>
          <AppsIcon />
        </div>
        <div>
          <Avatar></Avatar>
        </div>
      </div>
      <div className="google_logo">
        <img src={Google_Image} alt="" />
      </div>
      <div className="search">
        <Search />
      </div>
    </div>
  );
};

export default Home;
