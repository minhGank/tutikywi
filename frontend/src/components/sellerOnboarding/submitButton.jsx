import styled from "styled-components";
import Button from "@mui/material/Button";

const SubmitButton = ({ handleSubmitFunction }) => {
  return (
    <Container>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#3A7FF9",
        }}
        onClick={() => {
          handleSubmitFunction();
        }}
      >
        Continue
      </Button>
    </Container>
  );
};

export default SubmitButton;

const Container = styled.div`
  margin-top: -30px;
  display: flex;
  width: 90%;
  gap: 200px;
  margin: 0 0 100px 0;
`;
