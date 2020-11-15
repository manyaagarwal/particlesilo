import { useEffect, useState } from "react";
import { FirebaseDB } from "../utils/firebase";
import { Card, Tag, Typography, Input } from "antd";
import ReactPlayer from "react-player";
import PlainBackground from "../assets/Images Website/Background_old.png";

const { Meta } = Card;
const { Title } = Typography;
const { Search } = Input; 

export const VideoResources = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(async () => {
    const videoRef = FirebaseDB.collection("videos");
    const snapshot = await videoRef.get();
    const videos = [];
    snapshot.forEach(async (doc) => {
      const data = doc.data();
      videos.push({ id: doc.id, ...data });
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
  const onSearch = (value) => { 
    console.log(value)
  }
  return (
    <div style={{ background: `url(${PlainBackground})`, minHeight: "85vh" }}>
      <Title>Video Resources</Title>
      <Search
        placeholder="Search for videos"
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
        {videoData.map((video) => (
          <Card
            hoverable
            style={{ width:"500", backgroundColor: "#DAE5FF", margin: "10px" }}
            cover={<ReactPlayer url={video.videoUrl} width="500px" />}
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
