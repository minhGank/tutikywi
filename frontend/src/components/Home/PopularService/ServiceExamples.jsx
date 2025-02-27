import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const ServiceExample = ({
  seller_name,
  seller_rate,
  seller_description,
  img,
  seller_rate_count,
}) => {
  const shortenDescriptionFunction = (des) => {
    return des?.slice(0, 100);
  };
  return (
    <Container>
      <div className="div_for_img">
        <img src={img} />
      </div>
      <div className="div_for_seller_name_and_rate">
        <span className="seller_name">{seller_name}</span>
        <div className="seller_rate">
          {seller_rate} <FaStar style={{ color: "#FFD700" }} />{" "}
          <span>({seller_rate_count})</span>
        </div>
      </div>
      <div className="div_for_seller_description">
        {shortenDescriptionFunction(seller_description)}
        ...
      </div>

      <div className="div_for_price"></div>
    </Container>
  );
};

export default ServiceExample;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 3px;
  cursor: pointer;
  height: 320px;
  padding: 10px;
  border-radius: 5px;
  .div_for_img {
    img {
      width: 220px;
      height: 150px;
      object-fit: cover;
    }
  }
  .div_for_seller_name_and_rate {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    font-size: 15px;
  }

  &:hover {
    background-color: #f3f3f3;
  }
`;
