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
      <AnimatePresence mode="wait">
        <motion.div
          key={activeDestination.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Img
            src={activeDestination.images.png}
            alt={activeDestination.name}
          />
        </motion.div>
      </AnimatePresence>

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
        <StyledButton
          key={destination.name}
          role="tab"
          onClick={() => setActiveTab(index)}
          aria-selected={index === activeTab}
          aria-controls={`tab-panel-${index}`}
          className={index === activeTab ? "active" : ""}
        >
          {destination.name}
        </StyledButton>
      ))}
    </StyledTabs>
  );
}

function TabContent({ destination }) {
  return (
    <Article
      id={`tab-panel-${destination.name}`}
      role="tabpanel"
      aria-live="polite"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={destination.name}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
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
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Paragraph>{destination.description}</Paragraph>
        </motion.div>
      </AnimatePresence>

      <Line />

      <Stats>
        <Stat>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <StatHeading>Avg. distance</StatHeading>
            <StatParagraph>{destination.distance}</StatParagraph>
          </motion.div>
        </Stat>

        <Stat>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <StatHeading>Est. travel time</StatHeading>
            <StatParagraph>{destination.travel}</StatParagraph>
          </motion.div>
        </Stat>
      </Stats>
    </Article>
  );
}
