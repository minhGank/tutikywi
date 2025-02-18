import styled from "styled-components";
import MainNavigationBar from "../../../components/RootLayOut/MainNavigationBar";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { toastFunction } from "../../../../utils/helperFunction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onboardingAction } from "../../../../redux/onboardingSlice";
import IntroSection from "../../../components/sellerOnboarding/IntroSection";
import SubmitButton from "../../../components/sellerOnboarding/submitButton";
import ProcessBar from "../../../components/sellerOnboarding/ProcessBar";
import API from "../../../../utils/AxiosUtils";
import { userAction } from "../../../../redux/userSlice";
import { sellerAction } from "../../../../redux/sellerSlice";

const UpdateAccountSecurity = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { accountSecurity } = useSelector((state) => state.onboarding);
  const { professionalInfo } = useSelector((state) => state.onboarding);
  const { personalInfo } = useSelector((state) => state.onboarding);
  const [phoneNumber, setPhoneNumber] = useState(accountSecurity.phoneNumber);
  const [emailAddress, setEmailAddress] = useState(
    accountSecurity.emailAddress
  );

  useEffect(() => {
    if (!currentUser) {
      return navigate("/login");
    }
  }, [currentUser, navigate]);

  //function to update input fields
  const updateInputFunction = (e, inputType) => {
    if (inputType == "emailAddress") {
      setEmailAddress(e.target.value);
    } else if (inputType == "phoneNumber") {
      setPhoneNumber(e.target.value);
    }
  };

  //function that submit to back-end
  const submitAllInfo = async () => {
    console.log("im here");
    if (
      !personalInfo.firstName ||
      !personalInfo.lastName ||
      !personalInfo.displayName ||
      !personalInfo.img ||
      !personalInfo.description ||
      !personalInfo.languages ||
      !professionalInfo.age ||
      !phoneNumber ||
      !emailAddress
    ) {
      return toastFunction(
        "error",
        "Some fields missing, double check all your steps"
      );
    }
    try {
      const res = await API.post(`/seller/createSellerProfile`, {
        firstName: personalInfo.firstName,
        lastName: personalInfo.lastName,
        displayName: personalInfo.displayName,
        img: personalInfo.img,
        description: personalInfo.description,
        languages: personalInfo.languages,
        age: professionalInfo.age,
        workExperience: professionalInfo.workExperience,
        educationHistory: professionalInfo.educationHistory,
        phoneNumber: phoneNumber,
        email: emailAddress,
      });

      if (res.data.success) {
        const { newUser } = res.data;
        const { newSeller } = res.data;

        dispatch(userAction.userChange(newUser));
        dispatch(sellerAction.sellerChange(newSeller));
        dispatch(onboardingAction.resetOnboarding());
        navigate("/seller");
      }
    } catch (error) {
      toastFunction("error", error);
    }
  };

  // function when user click submit
  const handleSubmitFunction = async () => {
    if (!phoneNumber || !emailAddress) {
      return toastFunction("error", "Please fill out all your information.");
    }
    dispatch(
      onboardingAction.updateAccountSecurity({
        phoneNumber,
        emailAddress,
      })
    );

    submitAllInfo();
  };

  return (
    <Container>
      <MainNavigationBar showOnlyLeftSide={true} />
      <ProcessBar />
      <IntroSection
        introDes="Provide your personal contact details, so buyers can reach out to discuss services or ask questions. Rest assured, your data will only be shared with relevant buyers."
        introName={"Account Security"}
      />
      <hr></hr>
      {/* start the form */}
      <div className="div_for_form">
        <div
          style={{
            alignItems: "center",
          }}
          className="div_for_line"
        >
          <div className="div_for_label">
            <h4>Phone Number</h4>
            <span>*</span>
          </div>
          <div className="input_field">
            <TextField
              type="number"
              id="outlined-basic"
              label="Personal Phone Number"
              variant="outlined"
              onChange={(e) => updateInputFunction(e, "phoneNumber")}
              value={phoneNumber}
              sx={{ width: "300px" }}
            />
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
          }}
          className="div_for_line"
        >
          <div className="div_for_label">
            <h4>Email Address</h4>
            <span>*</span>
          </div>
          <div className="input_field">
            <TextField
              type="email"
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              onChange={(e) => updateInputFunction(e, "emailAddress")}
              value={emailAddress}
              sx={{ width: "300px" }}
            />
          </div>
        </div>
        <SubmitButton handleSubmitFunction={handleSubmitFunction} />
      </div>
    </Container>
  );
};

export default UpdateAccountSecurity;
const Container = styled.div`
  hr {
    width: 90%;
    border-top: solid 1px #d7d9dc;
  }
  .div_for_form {
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .div_for_line {
      display: flex;
      width: 90%;
      gap: 200px;
      margin: 0 0 100px 0;
      .input_field {
        display: flex;
        gap: 10px;
        width: 50%;
        .education_box {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 13px;
          .first_row_in_box {
            display: flex;
            width: 100%;
            gap: 10px;
          }
          .second_row_in_box {
            display: flex;
            width: 100%;
            gap: 10px;
          }
        }
      }
      .div_for_label {
        display: flex;
        width: 200px;
        align-items: center;
        h4 {
          margin: 0;
        }
        span {
          display: flex;
          color: red;
        }
      }
    }
  }
  .pointer {
    cursor: pointer !important;
  }
  .colorBlue {
    color: rgb(58, 127, 249) !important;
    font-weight: 600;
    font-size: 15px;
  }
  .backgroundBlue {
    background-color: rgb(58, 127, 249) !important;
    color: white !important;
  }
`;
