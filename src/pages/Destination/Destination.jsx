import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
      <motion.div
        key={activeDestination.name}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.9 }}
      >
        <Img src={activeDestination.images.png} alt={activeDestination.name} />
      </motion.div>

      <Content>
        <Tabs
          destinations={destinations}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <TabContent destination={activeDestination} index={activeTab} />
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
          index={index}
        >
          {destination.name}
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

function TabContent({ destination, index }) {
  return (
    <Article id={`tab-panel-${index}`} role="tabpanel" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.div
          key={destination.name}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          <Title>{destination.name}</Title>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={destination.description}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Paragraph>{destination.description}</Paragraph>
        </motion.div>
      </AnimatePresence>

      <Line />

      <Stats>
        <Stat>
          <AnimatePresence mode="wait">
            <motion.div
              key={destination.distance}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <StatHeading>Avg. distance</StatHeading>
              <StatParagraph>{destination.distance}</StatParagraph>
            </motion.div>
          </AnimatePresence>
        </Stat>

        <Stat>
          <AnimatePresence mode="wait">
            <motion.div
              key={destination.travel}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <StatHeading>Est. travel time</StatHeading>
              <StatParagraph>{destination.travel}</StatParagraph>
            </motion.div>
          </AnimatePresence>
        </Stat>
      </Stats>
    </Article>
  );
}
