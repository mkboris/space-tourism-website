import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
      <motion.div
        key={activeTechnology.name}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.9 }}
      >
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
      </motion.div>

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
        <AnimatePresence mode="wait">
          <motion.div
            key={techType.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Heading as="h3">{techType.name}</Heading>
          </motion.div>
        </AnimatePresence>
      </Header>

      <AnimatePresence mode="wait">
        <motion.div
          key={techType.description}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Paragraph>{techType.description}</Paragraph>
        </motion.div>
      </AnimatePresence>
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
