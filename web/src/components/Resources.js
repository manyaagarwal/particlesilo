import React from "react";
import { Tabs, Card, Input, Typography } from "antd";
import { Categories } from "./Categories";
import Background from "../assets/Images Website/Background.png";
import { Audience } from "./Audience";

const { TabPane } = Tabs;
const { Search } = Input;
const { Title } = Typography;

export const Resources = () => {
  const onSearch = (value) => console.log("Start Search for ", value);
  return (
    <div
      className="container-card"
      style={{ background: `url(${Background})` }}
    >
      <Title>Resources</Title>
      <Search
        placeholder="Search for Resources"
        allowClear
        enterButton
        size="large"
        onSearch={onSearch}
        style={{ marginBottom: "15px" }}
      />
      <Tabs defaultActiveKey="1" type="card" size="large">
        <TabPane tab="Category" key="1">
          <Card className="tab-card">
            <Categories />
          </Card>
        </TabPane>
        <TabPane tab="Audience" key="2">
          <Card className="tab-card">
            <Audience />
          </Card>
        </TabPane>
      </Tabs>
    </div>
  );
};
