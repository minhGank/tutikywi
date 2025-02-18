import styled from "styled-components";
import SearchBar from "../../components/Home/SearchBar";
import SearchResultList from "../../components/Home/SearchResultList";
import { useState } from "react";
import PopularService from "../../components/Home/PopularService/PopularService";
const Home = () => {
  const [result, setResult] = useState("");
  console.log("this is result", result);
  const setResultFunction = (value) => {
    setResult(value);
  };
  return (
    <>
      <Container>
        <div className="div_for_search_bar_and_titlte">
          <div className="title">
            <h2>What service are you looking for?</h2>
          </div>
          <div className="search_bar">
            <SearchBar setResultFunction={setResultFunction} />
            <SearchResultList result={result} />
          </div>
        </div>
        <PopularService />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  .div_for_search_bar_and_titlte {
    width: 100%;
    .title {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 35px;
      h2 {
        font-size: 35px;
      }
    }
    .search_bar {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;
export default Home;
