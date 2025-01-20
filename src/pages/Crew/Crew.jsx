import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isMounted, setIsMounted] = useState(false);
  const activeCrew = crew[activeTab];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <StyledTabbed>
      <Content>
        <TabContent crewMember={activeCrew} index={activeTab} />

        <Tabs crew={crew} activeTab={activeTab} setActiveTab={setActiveTab} />
      </Content>

      {isMounted && (
        <AnimatePresence mode="wait">
          <motion.div
            style={{ display: "flex", justifyContent: "center" }}
            key={activeCrew.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.9 }}
          >
            <Img src={activeCrew.images.png} alt={activeCrew.name} />
          </motion.div>
        </AnimatePresence>
      )}
    </StyledTabbed>
  );
}

function TabContent({ crewMember, index }) {
  return (
    <Article id={`tab-panel-${index}`} role="tabpanel" aria-live="polite">
      <Header>
        <AnimatePresence mode="wait">
          <motion.div
            key={crewMember.role}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Heading as="h2">{crewMember.role}</Heading>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={crewMember.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Heading as="h3">{crewMember.name}</Heading>
          </motion.div>
        </AnimatePresence>
      </Header>

      <AnimatePresence mode="wait">
        <motion.div
          key={crewMember.bio}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Paragraph>{crewMember.bio}</Paragraph>
        </motion.div>
      </AnimatePresence>
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
