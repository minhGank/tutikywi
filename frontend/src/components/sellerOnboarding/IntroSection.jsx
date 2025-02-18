import styled from "styled-components";

const IntroSection = ({ introName, introDes }) => {
  return (
    <Container>
      <div className="general_label">
        <h2>{introName}</h2>
        <p>{introDes}</p>
      </div>
    </Container>
  );
};

export default IntroSection;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  .general_label {
    width: 90%;
    h2 {
      font-size: 33px;
      margin: 30px 0 0 0;
    }
    p {
      width: 50%;
      margin: 10px 0 30px 0;
    }
  }
`;
