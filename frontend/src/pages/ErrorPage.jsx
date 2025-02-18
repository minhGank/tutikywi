import styled from "styled-components";
import MainNavigationBar from "../components/RootLayOut/MainNavigationBar";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = Navigate();
  return (
    <Container>
      <MainNavigationBar />
      <h1>This page content is not for you</h1>
      <Button
        onClick={() => {
          navigate("/");
        }}
        variant="contained"
      >
        Go Back
      </Button>
    </Container>
  );
};

export default ErrorPage;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .go_to_homepage_button {
  }
`;
