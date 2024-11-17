import styled from "styled-components";
import SellerProfileShortcut from "../components/SellerPage/SellerProfileShortcut";
import SellerDashBoard from "../components/SellerPage/SellerDashBoard";
import { useSelector } from "react-redux";

const Seller = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Container>
      <SellerProfileShortcut currentUser={currentUser} />
      <SellerDashBoard currentUser={currentUser} />
    </Container>
  );
};
export default Seller;

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
