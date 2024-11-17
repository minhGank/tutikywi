import styled from "styled-components";

const PortfolioEachLine = ({ title, subTitle }) => {
  return (
    <Container>
      <div className="portfolio_div_each_line_title">
        <h5>{title}</h5>
        <span>{subTitle}</span>
      </div>
      <p>Description Text</p>
    </Container>
  );
};

export default PortfolioEachLine;

const Container = styled.div`
  .portfolio_div_each_line_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h5 {
      margin: 0 0 0 0;
      font-size: 15px;
    }
    span {
      font-size: 13px;
      color: #3a7ff9;
      cursor: pointer;
    }
  }
  p {
    margin: 10px 10px 15px 0px;
  }
`;
