import { useEffect, useState } from "react";
import { FirebaseDB } from "../utils/firebase";
import { Collapse, Tag, Typography } from "antd";
import { Document, Page } from "react-pdf";
import Iframe from "react-iframe";

const { Title } = Typography;
const { Panel } = Collapse;

export const PresentationResources = () => {
  const [presentationData, setPresentationData] = useState([]);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLoadStatus, setPageLoadStatus] = useState(false);

  useEffect(async () => {
    const presentationRef = FirebaseDB.collection("presentations");
    const snapshot = await presentationRef.get();
    const presentations = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      presentations.push({ id: doc.id, ...data });
    });
    setPresentationData(presentations);
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

  const frame = (url) => {
    <Iframe url={url} width="80%" height="600px" display="initial" />;
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageLoadStatus(true);
  }

  return (
    <div>
      <Title>Talks and Presentations</Title>
      <Collapse accordion>
        {presentationData.map((presentation, index) => (
          <Panel
            header={presentation.name}
            extra={topics(presentation.topic)}
            key={index}
          >
            <Document
              file={presentation.presentationUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              error=""
            >
              {pageLoadStatus && <Page pageNumber={pageNumber} />}
            </Document>
            {pageLoadStatus && (
              <p>
                Page {pageNumber} of {numPages}
              </p>
            )}
            <Iframe
              url={presentation.presentationUrl}
              width="80%"
              height="600px"
              display="initial"
            />
            ;
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};
