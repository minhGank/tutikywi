import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ImCheckmark } from "react-icons/im";
import { useSelector } from "react-redux";
import { toastFunction } from "../../../utils/helperFunction";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProcessBar = () => {
  let path = useLocation().pathname;
  const [atStep, setAtStep] = useState(1);

  useEffect(() => {
    if (path == "/seller_onboarding/personal_info") {
      setAtStep(1);
    } else if (path == "/seller_onboarding/professional_info") {
      setAtStep(2);
    } else if (path == "/seller_onboarding/account_security") {
      setAtStep(3);
    }
  }, [path]);

  const navigate = useNavigate();
  const { personalInfo } = useSelector((state) => state.onboarding);
  const { professionalInfo } = useSelector((state) => state.onboarding);

  const navigateToSecondStep = () => {
    if (
      !personalInfo.firstName ||
      !personalInfo.lastName ||
      !personalInfo.img ||
      !personalInfo.description ||
      !personalInfo.languages
    ) {
      return toastFunction(
        "error",
        "Please fill out your personal info before going to the next page."
      );
    } else {
      navigate("/seller_onboarding/professional_info");
    }
  };

  const navigateToThirdStep = () => {
    if (
      !personalInfo.firstName ||
      !personalInfo.lastName ||
      !personalInfo.img ||
      !personalInfo.description ||
      !personalInfo.languages
    ) {
      return toastFunction(
        "error",
        "Please fill out your personal info before going to the next page."
      );
    } else if (!professionalInfo.age) {
      return toastFunction(
        "error",
        "Please fill out your professional info  before going to the next page."
      );
    } else {
      navigate("/seller_onboarding/account_security");
    }
  };

  return (
    <Container>
      <div className="wrapper">
        <div
          className="each_step"
          onClick={() => {
            navigate("/seller_onboarding/personal_info");
          }}
        >
          {atStep == 1 ? (
            <div className="step_number at_step_number">1</div>
          ) : (
            <div className="step_number pass_step_number">
              <ImCheckmark className="mark_icon" />
            </div>
          )}
          <div className={`step_title ${atStep == 1 ? "at_step_title" : ""}`}>
            Personal Info
          </div>
        </div>
        <IoIosArrowForward className="arrowIcon" />

        <div
          className="each_step"
          onClick={() => {
            navigateToSecondStep();
          }}
        >
          {atStep == 1 || atStep == 2 ? (
            <div
              className={`step_number ${atStep == 2 ? "at_step_number" : ""}`}
            >
              2
            </div>
          ) : (
            <div className="step_number pass_step_number">
              <ImCheckmark className="mark_icon" />
            </div>
          )}
          <div className={`step_title ${atStep == 2 ? "at_step_title" : ""}`}>
            Professional Info
          </div>
        </div>
        <IoIosArrowForward className="arrowIcon" />

        <div
          className="each_step"
          onClick={() => {
            navigateToThirdStep();
          }}
        >
          <div className={`step_number ${atStep == 3 ? "at_step_number" : ""}`}>
            3
          </div>

          <div className={`step_title ${atStep == 3 ? "at_step_title" : ""}`}>
            Account Security
          </div>
        </div>
      </div>

      <ToastContainer />
    </Container>
  );
};

export default ProcessBar;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 30px;
  .wrapper {
    display: flex;
    width: 90%;
    gap: 10px;
    align-items: center;
    .arrowIcon {
      color: rgb(152, 154, 158);
    }
    .each_step {
      display: flex;
      gap: 10px;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      .step_number {
        width: 30px;
        height: 30px;
        background-color: #c5c6c9;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        .mark_icon {
          font-size: 17px;
        }
      }
      .at_step_number {
        background-color: #3a7ff9 !important;
      }
      .pass_step_number {
        background-color: #3a7ff9 !important;
      }
      .step_title {
        color: rgb(141, 143, 148);
        font-weight: 500;
      }
      .at_step_title {
        color: #3a7ff9 !important;
      }
    }
  }
`;
