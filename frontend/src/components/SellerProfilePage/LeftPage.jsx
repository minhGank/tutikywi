import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";
import PortfolioEachLine from "./LeftPage/portfolioEachLine";

const LeftPage = ({ currentUser }) => {
  return (
    <Container>
      <div className="sellerProfileMain">
        <div className="profile_top">
          <img src={currentUser.img}></img>
          <h4>{"Your display name"}</h4>
          <span>@{currentUser.username}</span>
        </div>
        <hr></hr>
        <div className="profile_bottom">
          <div className="from_div">
            <span>
              <MdLocationOn /> From
            </span>
            <span>{"Location"}</span>
          </div>
        </div>
      </div>
      <div className="portfolio_div">
        <PortfolioEachLine
          title={"Description"}
          subTitle={"Edit Description"}
        />
        <hr></hr>
        <PortfolioEachLine title={"Language"} subTitle={"Add New"} />
        <hr></hr>
        <PortfolioEachLine title={"Skills"} subTitle={"Add New"} />
      </div>
    </Container>
  );
};

export default LeftPage;

const Container = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  .sellerProfileMain {
    background-color: white;

    border: solid 1px #d7d9dc;
    ${"" /* box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1); */}
    max-width: 80%;
    min-width: 50%;
    .profile_top {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding: 0 50px 0 50px;
      img {
        width: 70px;
        padding-top: 20px;
        padding-bottom: 20px;
      }
      h4 {
        margin: 0;
      }
      span {
        padding-bottom: 10px;
        color: gray;
        font-size: 14px;
        font-weight: 500;
      }
    }
    hr {
      width: 80%;
      border: 0;
      border-top: 1px solid #d7d9dc;
    }
    .profile_bottom {
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .from_div {
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 5px 20px 20px 20px;
        span {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 3px;
        }
      }
    }
  }
  .portfolio_div {
    background-color: white;

    border: solid 1px #d7d9dc;
    ${"" /* box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1); */}
    max-width: 80%;
    min-width: 50%;
    padding: 20px 20px 15px 20px;
    hr {
      border: 0;
      border-top: 1px solid #d7d9dc;
    }
  }
`;
