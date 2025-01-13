import { useState } from "react";
import { Heading, Span, Paragraph } from "../../components/Typography";
import data from "../../data/data.json";
import {
  StyledDestination,
  StyledTabbed,
  Img,
  Content,
  StyledTabs,
  StyledButton,
  Article,
  Title,
  Line,
  Stats,
  Stat,
  StatHeading,
  StatParagraph,
} from "./Destination.styles";

function Destination() {
  const { destinations } = data;

  return (
    <StyledDestination>
      <Heading as="h1">
        <Span aria-hidden="true">01</Span>PICK YOUR DESTINATION
      </Heading>

      <Tabbed destinations={destinations} />
    </StyledDestination>
  );
}

export default Destination;

function Tabbed({ destinations }) {
  const [activeTab, setActiveTab] = useState(0);
  const activeDestination = destinations[activeTab];

  return (
    <StyledTabbed>
      <Img src={activeDestination.images.png} alt={activeDestination.name} />

      <Content>
        <Tabs
          destinations={destinations}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <TabContent destination={activeDestination} />
      </Content>
    </StyledTabbed>
  );
}

function Tabs({ destinations, activeTab, setActiveTab }) {
  return (
    <StyledTabs role="tablist">
      {destinations.map((destination, index) => (
        <Tab
          key={destination.name}
          isActive={index === activeTab}
          onClick={() => setActiveTab(index)}
        >
          {destination.name}
        </Tab>
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

function TabContent({ destination }) {
  return (
    <Article>
      <Title>{destination.name}</Title>
      <Paragraph>{destination.description}</Paragraph>

      <Line />

      <Stats>
        <Stat>
          <StatHeading>Avg. distance</StatHeading>
          <StatParagraph>{destination.distance}</StatParagraph>
        </Stat>

        <Stat>
          <StatHeading>Est. travel time</StatHeading>
          <StatParagraph>{destination.travel}</StatParagraph>
        </Stat>
      </Stats>
    </Article>
  );
}
