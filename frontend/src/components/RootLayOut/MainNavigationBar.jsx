import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { MdLanguage } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const MainNavigationBar = ({ showOnlyLeftSide }) => {
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();
  const [displaySearchBar, setDisplaySearchBar] = useState(false);
  const [displayBorderBottom, setDisplayBorderBottom] = useState(false);

  const [sellerDisplay, setSellerDisplay] = useState(false);
  console.log(displaySearchBar);
  console.log(location);
  useEffect(() => {
    // Determine search bar and seller display based on the location path
    if (location.pathname.includes("/seller")) {
      setDisplaySearchBar(false);
      setSellerDisplay(true);
      setDisplayBorderBottom(true);
    } else {
      setDisplaySearchBar(location.pathname !== "/");
      setDisplayBorderBottom(location.pathname !== "/");
      setSellerDisplay(false);
    }
  }, [location]);
  return (
    //left nav bar
    <NavigationBar style={{ borderBottom: displayBorderBottom ? "" : "0" }}>
      <Link to="/" className="div_for_logo">
        <img src="/Icons/tutikywi_logo.png" />
        {/* <h3>CityTeam</h3> */}
      </Link>
      {/* main nav bar */}

      <div
        className={`${displaySearchBar ? "" : "hidden"} ${
          showOnlyLeftSide ? "hidden" : ""
        } div_for_search_bar `}
      >
        <div className="div_for_textArea">
          <textarea
            rows="1"
            placeholder="What service are you looking for today?"
          />
        </div>
        <div className="search_button">
          <IoSearch />
        </div>
      </div>

      {/* right nav bar */}
      <div
        className={`div_for_user_shortcut ${showOnlyLeftSide ? "hidden" : ""}`}
      >
        {currentUser ? <MdNotificationsNone className="div_icon" /> : ""}
        {currentUser ? <MdMailOutline className="div_icon" /> : ""}
        <MdLanguage className="div_icon" />
        {currentUser ? (
          <>
            {sellerDisplay ? (
              <Link to={"/"}>Switch To Buyer</Link>
            ) : (
              <Link to={"/seller"}>Switch To Seller</Link>
            )}
            <img src={currentUser.img} className="img_icon" />
          </>
        ) : (
          <Link to="/login" className="login_button">
            Login
          </Link>
        )}
      </div>
    </NavigationBar>
  );
};

const NavigationBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: -5px;
  border-bottom: solid 1px #d7d9dc;

  .div_for_logo {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 60px;
    h3 {
      font-size: 23px;
      color: black;
      font-weight: 800;
      margin-left: -8px;
    }
    img {
      width: 150px;
    }
  }

  .div_for_search_bar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
    height: 50px;
    .div_for_textArea {
      border: solid gray 0.01px;
      border-radius: 10px 0 0 10px;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      textarea {
        padding: 0px 10px 0 10px;
        width: 100%;
        border: none;
        text-decoration: none;
        resize: none; /* Prevent resizing */
        outline: none; /* Remove outline on focus */
        margin: 0;
        font-size: 16px;
        overflow: none;
        overflow: hidden; /* Prevent overflow */
      }
    }
    .search_button {
      background-color: #3a7ff9;
      width: 12%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      z-index: 5;
      border-radius: 0 10px 10px 0;
      padding: 17px;
      cursor: pointer;
      height: 100%;
    }
  }
  .hidden {
    visibility: hidden !important;
  }
  .div_for_user_shortcut {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 10px;
    width: 30%;
    height: 100%;
    .div_icon {
      width: 100%;
      cursor: pointer;
      margin-top: 7px;
      font-weight: 400;
      border-radius: 30%;
      width: 25px;
      height: 25px;
      height: 100%;
      &:hover {
        background-color: #d6d6d6;
      }
    }
    .img_icon {
      cursor: pointer;
      margin-top: 7px;
      font-weight: 400;
      border-radius: 30%;
      width: 20px;
      height: 25px;
    }
    a {
      color: black;
      text-decoration: none;
      cursor: pointer;
      margin-top: 7px;
      border-radius: 5px;
      font-weight: 500;
      ${"" /* padding: 10px; */}
      color: #3a7ff9;
      &:hover {
      }
    }

    img {
      cursor: pointer;
      border-radius: 30%;
      width: 20px;
      ${"" /* padding: 10px; */}
      &:hover {
        background-color: #d6d6d6;
      }
    }
    .login_button {
      border: solid 2px black;
      padding: 5px 10px;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      margin-bottom: 2px;
      font-weight: 500;
      text-decoration: none;
      color: black;
    }
  }
`;
export default MainNavigationBar;
