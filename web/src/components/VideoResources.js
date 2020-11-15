import { useEffect, useState } from "react";
import { FirebaseDB } from "../utils/firebase";
import { Card, Tag, Typography } from "antd";
import ReactPlayer from "react-player";
// import getThumb from "video-thumbnail-url";

const { Meta } = Card;
const { Title } = Typography;

export const VideoResources = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(async () => {
    const videoRef = FirebaseDB.collection("videos");
    const snapshot = await videoRef.get();
    const videos = [];
    snapshot.forEach(async (doc) => {
      const data = doc.data();
      videos.push({ id: doc.id, ...data,});
    });
    setVideoData(videos);
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
      <Title>Video Resources</Title>
      <div style={{ display: "flex" }}>
        {videoData.map((video) => (
          <Card
            hoverable
            style={{ width: "500", backgroundColor: "#DAE5FF", margin: "10px" }}
            cover={<ReactPlayer url={video.videoUrl} width="auto"/>}
          >
            <Meta
              title={<div style={{ fontSize: "1.4em" }}>{video.name}</div>}
              description={topics(video.topic)}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};
