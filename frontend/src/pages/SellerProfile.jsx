import styled from "styled-components";
import LeftPage from "../components/SellerProfilePage/LeftPage";
import RightPage from "../components/SellerProfilePage/RightPage";
import { useSelector } from "react-redux";

const SellerProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Container>
      <LeftPage currentUser={currentUser} />
      <RightPage />
    </Container>
  );
};

export default SellerProfile;

const Container = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #f7f7f7;
  min-height: 100vh;
`;
