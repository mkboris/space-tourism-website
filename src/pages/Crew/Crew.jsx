import { useState } from "react";
import Heading from "../../components/Heading";
import data from "../../data/data.json";
import {
  Container,
  StyledTabbed,
  Content,
  Span,
  Img,
  Article,
  Header,
  StyledTabs,
  StyledButton,
  Paragraph,
} from "./Crew.styles";

function Crew() {
  const { crew } = data;

  return (
    <Container>
      <Heading as="h1">
        <Span aria-hidden="true">02</Span>MEET THE CREW
      </Heading>

      <Tabbed crew={crew} />
    </Container>
  );
}

export default Crew;

function Tabbed({ crew }) {
  const [activeTab, setActiveTab] = useState(0);
  const activeCrew = crew[activeTab];

  return (
    <StyledTabbed>
      <Content>
        <TabContent crewMember={activeCrew} />

        <Tabs crew={crew} activeTab={activeTab} setActiveTab={setActiveTab} />
      </Content>

      <Img src={activeCrew.images.png} alt={activeCrew.name} />
    </StyledTabbed>
  );
}

function TabContent({ crewMember }) {
  return (
    <Article>
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
    <StyledTabs>
      {crew.map((crew, index) => (
        <Tab
          key={crew.name}
          isActive={index === activeTab}
          onClick={() => setActiveTab(index)}
        ></Tab>
      ))}
    </StyledTabs>
  );
}

function Tab({ children, isActive, onClick }) {
  return (
    <StyledButton
      onClick={onClick}
      aria-selected={isActive}
      className={isActive ? "active" : ""}
    >
      {children}
    </StyledButton>
  );
}
