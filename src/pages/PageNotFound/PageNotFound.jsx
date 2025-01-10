import { useNavigate } from "react-router-dom";
import { Container, Box } from "./PageNotFound.styles";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <Container>
      <Box>
        {/* <Heading as="h1"> */}
        <h1>The page you are looking for could not be found 😢</h1>
        {/* </Heading> */}

        <button onClick={moveBack} size="large">
          &larr; Go back
        </button>
      </Box>
    </Container>
  );
}

export default PageNotFound;

function useMoveBack() {
  const navigate = useNavigate();
  return () => navigate(-1);
}
