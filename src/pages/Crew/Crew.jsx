import { useState } from "react";
import { Heading, Span, Paragraph } from "../../components/Typography";
import data from "../../data/data.json";
import {
  StyledCrew,
  StyledTabbed,
  Content,
  Img,
  Article,
  Header,
  StyledTabs,
  StyledButton,
} from "./Crew.styles";

function Crew() {
  const { crew } = data;

  return (
    <StyledCrew>
      <Heading as="h1">
        <Span aria-hidden="true">02</Span>MEET THE CREW
      </Heading>

      <Tabbed crew={crew} />
    </StyledCrew>
  );
}

export default Crew;

function Tabbed({ crew }) {
  const [activeTab, setActiveTab] = useState(0);
  const activeCrew = crew[activeTab];

  return (
    <StyledTabbed>
      <Content>
        <TabContent crewMember={activeCrew} index={activeTab} />

        <Tabs crew={crew} activeTab={activeTab} setActiveTab={setActiveTab} />
      </Content>

      <Img src={activeCrew.images.png} alt={activeCrew.name} />
    </StyledTabbed>
  );
}

function TabContent({ crewMember, index }) {
  return (
    <Article id={`tab-panel-${index}`} role="tabpanel" aria-live="polite">
      <Header>
        <Heading as="h2">{crewMember.role}</Heading>
        <Heading as="h3">{crewMember.name}</Heading>
      </Header>

      <Paragraph>{crewMember.bio}</Paragraph>
    </Article>
  );
}

function Tabs({ crew, activeTab, setActiveTab }) {
  return (
    <StyledTabs role="tablist">
      {crew.map((member, index) => (
        <Tab
          key={member.name}
          isActive={index === activeTab}
          onClick={() => setActiveTab(index)}
          index={index}
        ></Tab>
      ))}
    </StyledTabs>
  );
}

function Tab({ isActive, onClick, index }) {
  return (
    <StyledButton
      role="tab"
      onClick={onClick}
      aria-selected={isActive}
      aria-controls={`tab-panel-${index}`}
      className={isActive ? "active" : ""}
    ></StyledButton>
  );
}
