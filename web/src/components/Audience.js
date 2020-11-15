import { Card } from "antd";
import { useHistory } from "react-router-dom";
import Children from "../assets/Images Website/Audiences Children.png";
import University from "../assets/Images Website/Audiences University.png";
import HighSchool from "../assets/Images Website/Audiences High School.png";
import General from "../assets/Images Website/Audience General.png";

const { Meta } = Card;

const audience = [
  {
    title: "CHILDREN",
    image: Children,
    route: "/",
  },
  {
    title: "HIGH SCHOOL",
    image: HighSchool,
    route: "/",
  },
  {
    title: "UNIVERSITY",
    image: University,
    route: "/",
  },
  {
    title: "ANYONE",
    image: General,
    route: "/",
  },
];
export const Audience = () => {
  const history = useHistory();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexFlow: "row wrap",
        justifyContent: "center",
      }}
    >
      {audience.map((category) => (
        <Card
          hoverable
          style={{
            width: "500px",
            backgroundColor: "#DAE5FF",
            margin: "10px",
            padding: "10px",
            minHeight: "320px",
            display:"flex", 
            flexDirection:"column",
            justifyContent:"center"
          }}
          cover={<img src={category.image === "" ? "//:0" : category.image} />}
          onClick={() => history.push(category.route)}
        >
          <Meta
            title={
              <div style={{ whiteSpace: "pre-wrap" }}>{category.title}</div>
            }
          />
        </Card>
      ))}
    </div>
  );
};
