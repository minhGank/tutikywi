import styled from "styled-components";
import { useState } from "react";
import ServiceExample from "./ServiceExamples";
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
            <ServiceExample
              img={
                "https://www.scoutnetworkblog.com/wp-content/uploads/2018/11/Plumber-Sink-201709-003.jpg"
              }
            />
            <ServiceExample
              img={
                "https://augerpros.com/wp-content/uploads/2022/08/plumbing-costs.jpg"
              }
            />
            <ServiceExample
              img={
                "https://cdn-dnbld.nitrocdn.com/NfqFWGwEhQpozpiSBtvSlumZGJCvggcI/assets/images/optimized/rev-369c446/johntheplumber.ca/wp-content/uploads/2024/02/plumbing-repairs-london-ontario-plumber.jpg"
              }
            />
            <ServiceExample
              img={
                "https://d17x34b9fcvxk7.cloudfront.net/static/marketing/images/hero-backgrounds/plumber.jpg"
              }
            />
          </div>
        ) : categoryType == 2 ? (
          <div className="div_for_service_example">
            <ServiceExample
              img={
                "https://homecleanheroes.com/augusta/wp-content/uploads/sites/14/2022/03/Home-Clean-Heroes-cleaner-wiping-down-baseboards.jpg"
              }
            />
            <ServiceExample
              img={
                "https://cdn.prod.website-files.com/640051ce8a159067e1042e74/65d5b19950d874f282b5c35f_woman-with-gloves-cleaning-floor_23-2148520978.jpg"
              }
            />
            <ServiceExample
              img={
                "https://www.doforms.com/wp-content/uploads/2023/10/professional-house-cleaning-checklist.jpeg%E2%80%8B.jpg"
              }
            />
            <ServiceExample
              img={
                "https://www.maids.com/wp-content/uploads/2022/12/bigstock-Handsome-Young-Man-Cleaning-Wi-276105073.jpg"
              }
            />
          </div>
        ) : categoryType == 3 ? (
          <div className="div_for_service_example">
            <ServiceExample
              img={
                "https://www.housesittersuk.co.uk/files/Destinations/pet-sitting-house-sitting-06.jpg"
              }
            />
            <ServiceExample
              img={
                "https://www.petbusinessinsurance.co.uk/img/0-featured-man-giving-golden-labrador-he-is-pet-sitting-a-high-five.jpg"
              }
            />
            <ServiceExample
              img={
                "https://www.petsit.com/stuff/contentmgr/files/0/b54b67c8fc3178e47a4564632904324d/image/pet_sitters_international_main.jpg"
              }
            />
            <ServiceExample
              img={
                "https://images.ctfassets.net/2djrn56blv6r/1dOoUk87fqAuPN5r9uTDt8/b5f8f442439a28d0e33975e2956a8739/shutterstock_2048121821_header.jpg?fm=webp&q=75&w=3840"
              }
            />
          </div>
        ) : (
          <div className="div_for_service_example">
            <ServiceExample
              img={
                "https://lirp.cdn-website.com/25f3632c/dms3rep/multi/opt/vancelectric-northern-virginia-install-generator-640w.jpg"
              }
            />
            <ServiceExample
              img={
                "https://www.electricianstoronto.ca/wp-content/uploads/2018/08/ELECTRICAL-REPAIRS-AND-MAINTENANCE.jpg"
              }
            />
            <ServiceExample
              img={
                "https://3eelectrical.ca/wp-content/uploads/2021/10/electrical_questions-e1634777345165.jpeg"
              }
            />
            <ServiceExample
              img={
                "https://primeappliancerepairs.com/wp-content/uploads/2022/07/repair-service-provider.jpg"
              }
            />
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
      justify-content: center;
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
      margin-left: 40px;
      width: 100%;
    }
  }
`;
