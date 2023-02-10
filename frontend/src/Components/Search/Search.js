import React from "react";
import { useSelector } from "react-redux";

import Google_Image from "../../Images/googlelogo_color_272x92dp.png";
import "./Search.css";
import SearchField from "../layout/SearchField";

export default function Search() {
  const data = useSelector((state) => state.Search.data);
  const value = useSelector((state) => state.Search.value);

  const Activate = (e) => {
    let a = (e.target.className = "A");

    console.log(a);
  };

  return (
    <div className="seacrh_page">
      <div className="search_page_logo">
        <img src={Google_Image} alt="" />
      </div>
      <div className="seacrh_form_field">
        <SearchField initial_value={value} />
      </div>
      <div className="buttonsoptions">
        <div
          onClick={Activate}
          className="activate options_item options_item_first"
        >
          All
        </div>
        <div className="options_item">Images</div>
        <div className="options_item">Videos</div>
        <div className="options_item"></div>
      </div>
      <div className="horizontal_line"></div>
      {data &&
        data.map((item,index) => {
          return (
            <div key={index} className="result_s">
              <div className="items">
                <span>{item.displayLink}</span>
                <a href={item.link}>
                  <h2>{item.title}</h2>
                </a>
                <p>{item.snippet}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
