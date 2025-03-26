import { Link } from "react-router-dom";
import styled from "styled-components";

const SellerProfileShortcut = ({ currentSeller }) => {
  return (
    <Container>
      <div className="profile">
        <div className="profile_img">
          <img src={currentSeller?.img} />
        </div>
        <div className="profile_username">
          {currentSeller?.firstName} {currentSeller?.lastName}
        </div>
        <Link to="/seller/profile">View Profile</Link>
      </div>
      <div className="selling_history">
        <div className="selling_history_line">
          <span>My level</span>
          <span>{"New Seller"}</span>
        </div>
        <div className="selling_history_line">
          <span>Tasks completed</span>
          <span>{"-"}</span>
        </div>
        <div className="selling_history_line">
          <span>Rating</span>
          <span>{"-"}</span>
        </div>
      </div>
    </Container>
  );
};

export default SellerProfileShortcut;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 30%;
  .profile {
    border: solid 0.5px #d7d9dc;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: fit-content;
    padding: 30px 0;
    gap: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
    img {
      width: 30px;
      border-radius: 50%;
    }
    a {
      text-decoration: none;
      color: black;
      border: solid 1px #d7d9dc;
      padding: 10px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      font-weight: 500;
    }
    .profile_username {
      font-weight: 500;
    }
  }
  .selling_history {
    border: solid 0.5px #d7d9dc;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: fit-content;
    gap: 5px;
    padding: 30px 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;

    .selling_history_line {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 80%;
    }
  }
`;
