import { useNavigate } from "react-router-dom";
import { StyledPageNotFound, Box, Button } from "./PageNotFound.styles";
import { Heading } from "../../components/Typography";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box>
        <Heading style={{ alignSelf: "center" }} as="h1">
          Sorry, we can’t find the page you’re looking for
        </Heading>
        <Button onClick={moveBack} size="large">
          &larr; Go back
        </Button>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;

function useMoveBack() {
  const navigate = useNavigate();
  return () => navigate(-1);
}
