import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledPageNotFound = styled.main`
  min-height: 100dvh;
  background-color: var(--clr-cinder);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const Box = styled.div`
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box>
        {/* <Heading as="h1"> */}
        <h1>The page you are looking for could not be found 😢</h1>
        {/* </Heading> */}

        <button onClick={moveBack} size="large">
          &larr; Go back
        </button>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;

function useMoveBack() {
  const navigate = useNavigate();
  return () => navigate(-1);
}
