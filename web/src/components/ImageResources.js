import { useEffect, useState } from "react";
import { FirebaseDB } from "../utils/firebase";
import { Card, Tag, Typography, Input } from "antd";
import PlainBackground from "../assets/Images Website/Background_old.png";

const { Meta } = Card;
const { Title } = Typography;
const { Search } = Input

export const ImageResources = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(async () => {
    const imageRef = FirebaseDB.collection("images");
    const snapshot = await imageRef.get();
    const images = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      images.push({ id: doc.id, ...data });
    });
    setImageData(images);
  }, []);

  const topics = (topics) => {
    return (
      <div>
        {topics.map((topic) => (
          <Tag>{topic}</Tag>
        ))}
      </div>
    );
  };

  const onSearch = (value) => { 
    console.log(value)
  }
  return (
    <div style={{ background: `url(${PlainBackground})`, minHeight: "85vh", padding:"15px" }}>
      <Title>Royalty-Free Image Resources</Title>
      <Search
        placeholder="Search for images"
        allowClear
        enterButton
        size="large"
        onSearch={onSearch}
        style={{ marginBottom: "15px" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexFlow: "row wrap",
          justifyContent: "center",
          width: "auto",
        }}
      >
        {imageData.map((image) => (
          <Card
            hoverable
            style={{
              width: 400,
              margin: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            cover={<img alt={image.name} src={image.imageUrl} width="400"/>}
          >
            <Meta
              title={<div style={{ fontSize: "1.4em" }}>{image.name}</div>}
              description={topics(image.topic)}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};
