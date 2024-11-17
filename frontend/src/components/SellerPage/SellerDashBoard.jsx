import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

const SellerDashBoard = ({ currentUser }) => {
  return (
    <Container>
      <div className="intro_div">
        <h3>Welcome, {currentUser.username} </h3>
      </div>
      <div className="order_button">
        <h4>Active orders</h4>
        <button>
          Active orders <IoIosArrowDown />
        </button>
      </div>
      <div className=""></div>
    </Container>
  );
};

export default SellerDashBoard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  .intro_div {
    h3 {
      font-size: 25px;
      font-weight: 600;
      margin: 0 0 20px 0;
    }
  }
  .order_button {
    display: flex;
    width: 80%;
    justify-content: space-between;
    border: solid 1px #d7d9dc;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 0px 15px;
    align-items: center;
    h4 {
      font-weight: 600;
      font-size: 17px;
    }
    button {
      color: gray;
      display: flex;
      justify-content: center;
      align-items: center;
      border: solid 1px #d7d9dc;
      padding: 10px;
      cursor: pointer;
      background-color: white;
      gap: 3px;
      border-radius: 3px;
      font-size: 15px;
    }
  }
`;
