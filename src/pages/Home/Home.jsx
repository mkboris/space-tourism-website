import { Paragraph } from "../../components/Typography";
import {
  StyledHome,
  Content,
  Heading,
  Span,
  ActionWrapper,
  StyledLink,
} from "../Home/Home.styles";

function Home() {
  return (
    <StyledHome>
      <Content>
        <Heading>
          So, you want to travel to
          <Span> Space</Span>
        </Heading>

        <Paragraph>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Paragraph>
      </Content>

      <ActionWrapper>
        <StyledLink
          to="/destination"
          aria-label="Navigate to destinations page"
        >
          Explore
        </StyledLink>
      </ActionWrapper>
    </StyledHome>
  );
}

export default Home;
