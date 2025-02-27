import styled from "styled-components";
import { useState } from "react";
import ServiceExample from "./ServiceExamples";
import test_plumber_seller_info from "../../../../testData/popularService";
import test_house_cleaning_seller_info from "../../../../testData/popularCleaning";
import test_pet_sitting_seller_info from "../../../../testData/popularPetSitter";
import test_electrical_engineer_info from "../../../../testData/popularElectrical";
const PopularService = () => {
  const [categoryType, setCategoryType] = useState(1);

  return (
    <Container>
      <h3>Explore Popular Services In Your Area:</h3>
      <div className="div_for_choosing_categories_and_some_examples">
        <div className="div_for_categories">
          <div
            className={`div_for_each_categories ${
              categoryType == 1 ? "active" : ""
            }`}
            onClick={() => {
              setCategoryType(1);
            }}
          >
            Plumbing Repairs
          </div>
          <div
            className={`div_for_each_categories ${
              categoryType == 2 ? "active" : ""
            }`}
            onClick={() => {
              setCategoryType(2);
            }}
          >
            House Cleaning
          </div>
          <div
            className={`div_for_each_categories ${
              categoryType == 3 ? "active" : ""
            }`}
            onClick={() => {
              setCategoryType(3);
            }}
          >
            Pet Sittings
          </div>
          <div
            className={`div_for_each_categories ${
              categoryType == 4 ? "active" : ""
            }`}
            onClick={() => {
              setCategoryType(4);
            }}
          >
            Electrical Repairs and Installations
          </div>
        </div>
        {categoryType == 1 ? (
          <div className="div_for_service_example">
            {test_plumber_seller_info.map((s, i) => {
              return (
                <ServiceExample
                  seller_description={s.seller_description}
                  seller_name={s.seller_name}
                  seller_rate={s.seller_rate}
                  img={s.img}
                  seller_rate_count={s.seller_rate_count}
                  key={i}
                />
              );
            })}
          </div>
        ) : categoryType == 2 ? (
          <div className="div_for_service_example">
            {test_house_cleaning_seller_info.map((s, i) => {
              return (
                <ServiceExample
                  seller_description={s.seller_description}
                  seller_name={s.seller_name}
                  seller_rate={s.seller_rate}
                  img={s.img}
                  seller_rate_count={s.seller_rate_count}
                  key={i}
                />
              );
            })}
          </div>
        ) : categoryType == 3 ? (
          <div className="div_for_service_example">
            {test_pet_sitting_seller_info.map((s, i) => {
              return (
                <ServiceExample
                  seller_description={s.seller_description}
                  seller_name={s.seller_name}
                  seller_rate={s.seller_rate}
                  img={s.img}
                  seller_rate_count={s.seller_rate_count}
                  key={i}
                />
              );
            })}
          </div>
        ) : (
          <div className="div_for_service_example">
            {test_electrical_engineer_info.map((s, i) => {
              return (
                <ServiceExample
                  seller_description={s.seller_description}
                  seller_name={s.seller_name}
                  seller_rate={s.seller_rate}
                  img={s.img}
                  seller_rate_count={s.seller_rate_count}
                  key={i}
                />
              );
            })}
          </div>
        )}
      </div>
    </Container>
  );
};

export default PopularService;

const Container = styled.div`
  width: 80%;
  h3 {
    font-size: 20px;
    font-weight: 600;
  }
  .div_for_choosing_categories_and_some_examples {
    display: grid;
    grid-template-columns: 1fr 4fr;
    width: 100%;
    .div_for_categories {
      display: flex;
      align-items: start;
      justify-content: start;
      flex-direction: column;
      gap: 10px;
      width: 180px;
      .div_for_each_categories {
        font-size: 16px;
        width: 100%;
        border-radius: 10px;
        padding: 15px 10px;
        cursor: pointer;
        &:hover {
          background-color: #eeeeee;
        }
      }
      .active {
        border: solid black;
        &:hover {
          background-color: white !important;
        }
      }
    }
    .div_for_service_example {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      margin-left: 10px;
      width: 100%;
    }
  }
`;
