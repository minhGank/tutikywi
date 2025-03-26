import styled from "styled-components";
import SellerProfileShortcut from "../../components/SellerPage/SellerProfileShortcut";
import SellerDashBoard from "../../components/SellerPage/SellerDashBoard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import API from "../../../utils/AxiosUtils";
import { sellerAction } from "../../../redux/sellerSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toastFunction } from "../../../utils/helperFunction";

const Seller = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getSeller();
  }, []);

  const getSeller = async () => {
    try {
      const res = await API.get(`/seller/getSeller`);
      if (res.status == 200 && res.data.success == true) {
        console.log("Im here");
        return dispatch(sellerAction.sellerChange(res.data.seller));
      }
      if (res.status == 401 && res.success == false) {
        return navigate("/seller_onboarding");
      }
    } catch (error) {
      return toastFunction("error", error);
    }
  };

  const { currentSeller } = useSelector((state) => state.seller);

  return (
    <Container>
      <SellerProfileShortcut currentSeller={currentSeller} />
      <SellerDashBoard currentSeller={currentSeller} />
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
