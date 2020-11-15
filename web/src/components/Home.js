import { Row, Col, Button, Typography } from "antd";
import { GithubOutlined, TranslationOutlined } from "@ant-design/icons";
import { Redirect } from "react-router-dom";
import Background from "../assets/Images Website/Background.png";
import Splash from "../assets/Images Website/Splash.png";

export const Home = () => {
  return (
    <div>
      <Row style={{ flexDirection: "column", justifyContent:"flex-start" }}>
        <div
          style={{
            background: `url(${Splash})`,
            height: "80vh",
            width: "65%",
            backgroundSize: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography.Title style={{ fontSize: "5em", marginBottom:"0" }}>
            Particle Silo
          </Typography.Title>
          <Typography.Title style={{ fontSize: "3em" }}>
            The best Science Communication materials for your next outreach
            activities in one place!{" "}
          </Typography.Title>
          <Row
            style={{
              // height:"80vh",
              // width:"100%",
              flexDirection: "row-reverse",
              justifyContent: "center",
              // margin: "10em 3em",
            }}
          >
            <Col
              style={{
                display: "flex",
                justifyContent: "space-between",
                minWidth: "200px",
              }}
            >
              <Button
              type="primary"
                style={{
                  backgroundColor: "#31abc0",
                  color: "white",
                  border: "0",
                  width: "150px",
                  height: "auto",
                  padding: "10px",
                  fontSize: "1.2em",
                  marginRight: "1em",
                }}
                icon={<GithubOutlined />}
                onClick={() =>
                  window.open(
                    "https://github.com/particlesilo/particlesilo",
                    "_blank"
                  )
                }
              >
                Contribute
              </Button>
              <Button
              type="primary"
                style={{
                  backgroundColor: "#31abc0",
                  color: "white",
                  border: "0",
                  width: "150px",
                  height: "auto",
                  padding: "10px",
                  fontSize: "1.2em",
                }}
                icon={<TranslationOutlined />}
                onClick={() =>
                  window.open(
                    "https://github.com/particlesilo/particlesilo/blob/main/README.md",
                    "_blank"
                  )
                }
              >
                Translate
              </Button>
            </Col>
          </Row>
        </div>
      </Row>
    </div>
  );
};
