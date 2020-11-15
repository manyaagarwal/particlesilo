import { useEffect, useState } from "react";
import { FirebaseDB } from "../utils/firebase";
import { Card, Tag, Typography } from "antd";

const { Meta } = Card;
const { Title } = Typography;

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
  return (
    <div>
      <Title>Royalty-Free Image Resources</Title>
      <div style={{display:"flex"}}>
      {imageData.map((image) => (
        <Card
          hoverable
          style={{ width: 400, margin:"10px", }}
          cover={<img alt={image.name} src={image.imageUrl} />}
        >
          <Meta title={<div style={{fontSize:"1.4em"}}>{image.name}</div>} description={topics(image.topic)} />
        </Card>
      ))}
      </div>
    </div>
  );
};
