import { useState } from "react";
import { Heading, Span, Paragraph } from "../../components/Typography";
import data from "../../data/data.json";
import {
  StyledTechnology,
  HeadingWrap,
  StyledTabbed,
  Content,
  Article,
  Header,
  StyledTabs,
  StyledButton,
} from "./Technology.styles";

function Technology() {
  const { technology } = data;

  return (
    <StyledTechnology>
      <HeadingWrap>
        <Heading as="h1">
          <Span aria-hidden="true">03</Span>SPACE LAUNCH 101
        </Heading>
      </HeadingWrap>

      <Tabbed technology={technology} />
    </StyledTechnology>
  );
}

export default Technology;

function Tabbed({ technology }) {
  const [activeTab, setActiveTab] = useState(0);
  const activeTechnology = technology[activeTab];

  return (
    <StyledTabbed>
      <picture>
        <source
          srcSet={activeTechnology.images.portrait}
          media="(min-width: 64rem)"
        />
        <source
          srcSet={activeTechnology.images.landscape}
          media="(min-width: 41.25rem)"
        />
        <img
          src={activeTechnology.images.portrait}
          alt={activeTechnology.name}
        />
      </picture>

      <Content>
        <Tabs
          technology={technology}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <TabContent techType={activeTechnology} index={activeTab} />
      </Content>
    </StyledTabbed>
  );
}

function TabContent({ techType, index }) {
  return (
    <Article id={`tab-panel-${index}`} role="tabpanel" aria-live="polite">
      <Header>
        <Heading as="h2">THE TERMINOLOGY…</Heading>
        <Heading as="h3">{techType.name}</Heading>
      </Header>

      <Paragraph>{techType.description}</Paragraph>
    </Article>
  );
}

function Tabs({ activeTab, setActiveTab }) {
  return (
    <StyledTabs role="tablist">
      {[0, 1, 2].map((tabIndex) => (
        <Tab
          key={tabIndex}
          isActive={activeTab === tabIndex}
          onClick={() => setActiveTab(tabIndex)}
          index={tabIndex}
        >
          {tabIndex + 1}
        </Tab>
      ))}
    </StyledTabs>
  );
}

function Tab({ children, isActive, onClick, index }) {
  return (
    <StyledButton
      role="tab"
      onClick={onClick}
      aria-selected={isActive}
      aria-controls={`tab-panel-${index}`}
      className={isActive ? "active" : ""}
    >
      {children}
    </StyledButton>
  );
}
