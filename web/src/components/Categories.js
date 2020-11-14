import React from "react";
import { Card } from "antd";
import RoyaltyFree from "../assets/royaltyfreeimage.png";

const { Meta } = Card;
const categories = [
  {
    title: "ROYALTY-FREE PICTURES",
    description:
      "High-quality, free-to-use pictures of CERN facilities, experiments and so on",
    image: RoyaltyFree,
  },
  {
    title: "SHORT VIDEOS AND ANIMATIONS",
    description:
      "Instructional YouTube videos, GIFs and cartoons to explain the foundations of quantum mechanics and particle physics",
    image: RoyaltyFree,
  },
  {
    title: "DATA VISUALIZATIONS, CHARTS, PLOTS",
    description:
      "Experimental data from CERN and other research centers in particle physics worldwide made visible and accessible",
    image: "",
  },
  {
    title: "INTERACTIVE ACTIVITIES AND WORKSHOPS",
    description:
      "A collection of online and offline quizzes, tools and materials to get your audience to interact",
    image: "",
  },
  {
    title: "PAPER DIGEST",
    description:
      "Some of the most fundamentals research in particle physics and science communication, summarized and made easy to be explained",
    image: RoyaltyFree,
  },
  {
    title: "TALKS AND PRESENTATIONS",
    description:
      "Speeches and presentations about particle physics themes and research topics",
    image: "",
  },
];

export const Categories = () => {
  return (
    <div style={{display:"flex", flexDirection:"row", flexFlow:"row wrap", justifyContent:"center"}}>
      {categories.map((category) => (
        <Card
          hoverable
          style={{ width: "350px", backgroundColor: "#DAE5FF", margin:"10px"}}
          cover={
            <img src={category.image === "" ? "//:0" : category.image} />
          }
        >
          <Meta title={<div style={{whiteSpace:"pre-wrap"}}>{category.title}</div>} description={category.description} />
        </Card>
      ))}
    </div>
  );
};
