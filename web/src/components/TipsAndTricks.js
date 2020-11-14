import { Collapse, Typography } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

const { Panel } = Collapse;
const { Title } = Typography;

const data = [
  {
    question: "How can I identify my audience?",
    answer: 'It is important that you know how to identify the audience you are communicating to so you can communicate the topics you want  properly. There are many possible audiences inside a population so you must ask “who am I communicating to?” \n When looking at the audience,  it is important that you always consider the non-scientific public as being made of by people that are not experts in the area. Members of the public can differ in age, interests, experiences, opinions and academic background but, many of the times they are not completely lay in the theme.\n It is important that you verify if, inside the audience, there is more specific audiences (e.g., more elderly people, teenagers, children) and if you have access to more detailed information that allow you to adapt your communication to a more targeted audience (e.g., interests, financial background, geographical localisation). \n Besides the importance of identifying the audience , it is also important that you know how to characterize it - the more information you have about the audience, the bigger is the chance of adapting  the message correctly - and segment the audience - to segment an audience is to turn it into small groups with similar interests, behavioural patterns and needs.\n In order to properly segment the audience you must previously define the criteria that will characterize these groups. This will allow the groups to be the more homogenous possible, you can use: \n \t Sociodemographic data (e.g., age, academic background, gender); \n \t Geographic localisation (e.g., region, district, country); \n \t Psychosocial data (e.g., values, interests, attitudes) ',
    images: [],
  },
];
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export const TipsTricks = () => {
  return (
    <div className="container-card">
      <Title> 
        Welcome to the Science Communication World
      </Title>

    <Collapse
      bordered={false}
      defaultActiveKey={["1"]}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      className="site-collapse-custom-collapse"
    >
      {data.map((item, index) => (
        <Panel
          header={item.question}
          key={index}
          className="site-collapse-custom-panel"
        >
          <p>{item.answer}</p>
        </Panel>
      ))}
      {/* <Panel
        header="This is panel header 1"
        key="1"
        className="site-collapse-custom-panel"
      >
        <p>{text}</p>
      </Panel>
      <Panel
        header="This is panel header 2"
        key="2"
        className="site-collapse-custom-panel"
      >
        <p>{text}</p>
      </Panel>
      <Panel
        header="This is panel header 3"
        key="3"
        className="site-collapse-custom-panel"
      >
        <p>{text}</p>
      </Panel> */}
    </Collapse>
    </div>
  );
};
