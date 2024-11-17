import { useState } from "react";
import styled from "styled-components";
import { IoAddCircle } from "react-icons/io5";

const RightPage = () => {
  const [selectedType, setSelectedType] = useState(1);
  return (
    <Container>
      <div className="gig_div">
        <div
          onClick={() => setSelectedType(1)}
          className={`gig_type ${selectedType == 1 ? "active" : ""}`}
        >
          ACTIVE GIGS
        </div>
        <div
          onClick={() => setSelectedType(2)}
          className={`gig_type ${selectedType == 2 ? "active" : ""}`}
        >
          DRAFTED
        </div>
        <div
          onClick={() => setSelectedType(3)}
          className={`gig_type ${selectedType == 3 ? "active" : ""}`}
        >
          PAUSED
        </div>
      </div>
      <div className="display_gig_div">
        <div className="creat_new_gig_square">
          <IoAddCircle className="create_new_icon" />
          <span>Create a new Gig</span>
        </div>
      </div>
    </Container>
  );
};

export default RightPage;

const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  .gig_div {
    background-color: white;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
    border: solid 1px #d7d9dc;
    width: 80%;
    ${"" /* box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1); */}
    color: #626481;
    font-weight: 500;
    padding: 0 30px;
    .gig_type {
      cursor: pointer;
      padding: 15px 0px 15px 0px;
      &:hover {
        color: #3a7ff9;
      }
    }
    .active {
      color: black;
      border-bottom: solid 4px #3a7ff9;
      &:hover {
        color: black !important;
      }
    }
  }
  .display_gig_div {
    width: 80%;
    .creat_new_gig_square {
      background-color: white;
      border: solid 1px #d7d9dc;
      ${"" /* box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1); */}
      cursor: pointer;
      height: 200px;
      width: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 15px;
      color: #555555;
      font-size: 15px;
      font-weight: 500;
      .create_new_icon {
        font-size: 70px;
        color: black;
      }
    }
  }
`;
