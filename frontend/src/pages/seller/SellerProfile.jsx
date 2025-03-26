import styled from "styled-components";
import LeftPage from "../../components/SellerProfilePage/LeftPage";
import RightPage from "../../components/SellerProfilePage/RightPage";
import { useSelector } from "react-redux";
import { useState } from "react";
import CreateGigPopUp from "../../components/SellerProfilePage/LeftPage/CreateGigPopUp";

const SellerProfile = () => {
  const { currentSeller } = useSelector((state) => state.seller);
  const [createNewGig, setCreateNewGig] = useState(false);
  return (
    <Container>
      <LeftPage currentSeller={currentSeller} />
      <RightPage setCreateNewGig={setCreateNewGig} />
      {createNewGig && <CreateGigPopUp setCreateNewGig={setCreateNewGig} />}
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
