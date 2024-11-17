import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const ServiceExample = ({ img }) => {
  const shortenDescriptionFunction = (des) => {
    return des.slice(0, 100);
  };
  return (
    <Container>
      <div className="div_for_img">
        <img src={img} />
      </div>
      <div className="div_for_seller_name_and_rate">
        <span className="seller_name">Ian Sherwood</span>
        <div className="seller_rate">
          4.9 <FaStar style={{ color: "#FFD700" }} /> <span>(64)</span>
        </div>
      </div>
      <div className="div_for_seller_description">
        {shortenDescriptionFunction(
          "Hello! I'm John, a licensed and insured plumber with over a decade of experience serving Austin and the surrounding areas. I specialize in residential plumbing repairs, installations, and emergency services. Whether you have a leaking pipe, need a new water heater installed, or require a complete bathroom remodel, I've got you covered. My goal is to provide fast, reliable, and affordable service with a 100% satisfaction guarantee."
        )}
        ...
      </div>

      <div className="div_for_price"></div>
    </Container>
  );
};

export default ServiceExample;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3px;
  cursor: pointer;
  .div_for_img {
    img {
      width: 220px;
    }
  }
  .div_for_seller_name_and_rate {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
  }
`;
