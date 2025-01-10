import {
  Container,
  Content,
  Heading,
  Span,
  Paragraph,
  Wrapper,
  StyledLink,
} from "../Home/Home.styles";

function Home() {
  return (
    <Container>
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

      <Wrapper>
        <StyledLink to="/destination">Explore</StyledLink>
      </Wrapper>
    </Container>
  );
}

export default Home;
