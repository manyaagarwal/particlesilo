import React from "react";
import { Tabs, Card, Input, Typography } from "antd";
import { Categories } from "./Categories";

const { TabPane } = Tabs;
const { Search } = Input;
const { Title } = Typography;

export const Resources = () => {
  const onSearch = (value) => console.log("Start Search for ", value);
  return (
    <div className="container-card">
      <Title>Resources</Title>
      <Search
        placeholder="Search for Resources"
        allowClear
        enterButton
        size="large"
        onSearch={onSearch}
        style={{ marginBottom: "10px" }}
      />
      <Tabs defaultActiveKey="1" type="card" size="large" tabPosition="bottom">
        <TabPane tab="Category" key="1">
          <Card
            className="tab-card"
          >
            <Categories />
          </Card>
        </TabPane>
        <TabPane tab="Topic" key="2">
          <Card className="tab-card">Content of card tab 2</Card>
        </TabPane>
        <TabPane tab="Audience" key="3">
          <Card className="tab-card">Content of card tab 3</Card>
        </TabPane>
      </Tabs>
    </div>
  );
};
