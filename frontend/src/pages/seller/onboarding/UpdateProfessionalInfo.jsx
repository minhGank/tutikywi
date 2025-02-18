import styled from "styled-components";
import MainNavigationBar from "../../../components/RootLayOut/MainNavigationBar";
import Select from "@mui/material/Select";
import { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";

import { toastFunction } from "../../../../utils/helperFunction";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onboardingAction } from "../../../../redux/onboardingSlice";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import Input from "@mui/material/Input";
import { FormControl, InputLabel } from "@mui/material";
import IntroSection from "../../../components/sellerOnboarding/IntroSection";
import Autocomplete from "@mui/material/Autocomplete";
import countryArray from "../../../../utils/countryArray";
import MenuItem from "@mui/material/MenuItem";
import majorTitleList from "../../../../utils/majorTitle";
import SubmitButton from "../../../components/sellerOnboarding/submitButton";
import ProcessBar from "../../../components/sellerOnboarding/ProcessBar";

const UpdateProfessionalInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { professionalInfo } = useSelector((state) => state.onboarding);

  const [age, setAge] = useState(
    professionalInfo.age ? professionalInfo.age : 0
  );

  // states for occupation object
  const [occupation, setOccupation] = useState(
    professionalInfo.workExperience?.occupation
      ? professionalInfo.workExperience?.occupation
      : ""
  );

  const [yearStart, setYearStart] = useState(
    professionalInfo.workExperience?.yearStart
      ? professionalInfo.workExperience?.yearStart
      : ""
  );
  const [yearEnd, setYearEnd] = useState(
    professionalInfo.workExperience?.yearEnd
      ? professionalInfo.workExperience?.yearEnd
      : ""
  );

  //state for education history
  const [countryOfSchool, setCountryOfSchool] = useState(
    professionalInfo.educationHistory?.countryOfSchool
      ? professionalInfo.educationHistory?.countryOfSchool
      : ""
  );
  const [nameOfTheSchool, setNameOfTheSchool] = useState(
    professionalInfo.educationHistory?.nameOfTheSchool
      ? professionalInfo.educationHistory?.nameOfTheSchool
      : ""
  );
  const [typeOfStudy, setTypeOfStudy] = useState(
    professionalInfo.educationHistory?.typeOfStudy
      ? professionalInfo.educationHistory?.typeOfStudy
      : ""
  );
  const [yearOfCompletion, setYearOfCompletion] = useState(
    professionalInfo.educationHistory?.yearOfCompletion
      ? professionalInfo.educationHistory?.yearOfCompletion
      : ""
  );
  const [major, setMajor] = useState(
    professionalInfo.educationHistory?.major
      ? professionalInfo.educationHistory?.major
      : ""
  );

  useEffect(() => {
    if (!currentUser) {
      return navigate("/login");
    }
  }, [currentUser, navigate]);

  //slider functions
  const handleSliderChange = (event, newValue) => {
    setAge(newValue);
  };

  const handleInputChange = (event) => {
    setAge(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (age < 0) {
      setAge(0);
    } else if (age > 100) {
      setAge(100);
    }
  };

  //function to update input fields
  const updateInputFunction = (e, inputType) => {
    if (inputType == "occupation") {
      setOccupation(e.target.value);
    } else if (inputType == "yearStart") {
      setYearStart(e.target.value);
    } else if (inputType == "yearEnd") {
      setYearEnd(e.target.value);
    } else if (inputType == "nameOfTheSchool") {
      setNameOfTheSchool(e.target.value);
    } else if (inputType == "typeOfStudy") {
      setTypeOfStudy(e.target.value);
    } else if (inputType == "yearOfCompletion") {
      setYearOfCompletion(e.target.value);
    } else if (inputType == "major") {
      setMajor(e.target.value);
    }
  };

  //dispatch function to send the inputs to redux
  const handleSubmitFunction = async () => {
    if (!age) {
      return toastFunction("error", "Please enter your age.");
    }

    dispatch(
      onboardingAction.updateProfessionalInfo({
        age,
        educationHistory: {
          nameOfTheSchool,
          yearOfCompletion,
          major,
          countryOfSchool,
        },
        workExperience: {
          occupation,
          yearStart,
          yearEnd,
        },
      })
    );

    navigate("/seller_onboarding/account_security");
  };

  return (
    <Container>
      <MainNavigationBar showOnlyLeftSide={true} />
      <ProcessBar />
      <IntroSection
        introDes="This is your moment to stand out. Share what you excel at and
            highlight how you developed your skills, gained valuable experience"
        introName={"Professional Info"}
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
            <h4>Age</h4>
            <span>*</span>
          </div>
          <div className="input_field">
            <Slider
              style={{
                width: "20%",
                marginRight: "10px",
                marginLeft: "8px",
              }}
              value={typeof age === "number" ? age : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
            />
            <Input
              style={{
                width: "7%",
              }}
              value={age ? age : 0}
              size="small"
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                step: 1,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
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
            <h4>Your Occupation</h4>
            <span>*</span>
          </div>
          <div className="input_field">
            <TextField
              id="outlined-basic"
              label="Type your occupation title"
              variant="outlined"
              onChange={(e) => updateInputFunction(e, "occupation")}
              value={occupation}
            />
            <FormControl
              style={{
                width: "18%",
              }}
            >
              <InputLabel id="select-label-year-start">Year Start</InputLabel>
              <Select
                labelId="select-label-year-start"
                value={yearStart}
                label="Year Start"
                onChange={(e) => updateInputFunction(e, "yearStart")}
              >
                {Array.from({ length: 2031 - 1970 }, (_, i) => {
                  const year = 2030 - i;
                  return <MenuItem value={year}>{year}</MenuItem>;
                })}
              </Select>
            </FormControl>
            <FormControl
              style={{
                width: "18%",
              }}
            >
              <InputLabel id="select-label-year-end">Year End</InputLabel>
              <Select
                labelId="select-label-year-end"
                value={yearEnd}
                label="Year End"
                onChange={(e) => updateInputFunction(e, "yearEnd")}
              >
                {" "}
                {Array.from({ length: 2031 - 1970 }, (_, i) => {
                  const year = 1970 + i;
                  return <MenuItem value={year}>{year}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </div>
        </div>

        {/* div for education line */}
        <div className="div_for_line">
          <div
            className="div_for_label"
            style={{
              marginTop: "7px",
            }}
          >
            <h4>Your Education</h4>
            <span>*</span>
          </div>

          <div className="input_field">
            <div className="education_box">
              <div className="first_row_in_box">
                {/* countryOfSchool */}
                <Autocomplete
                  disablePortal
                  options={countryArray}
                  sx={{ width: "50%" }}
                  value={countryOfSchool}
                  onChange={(e, value) => setCountryOfSchool(value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Country of College/University"
                    />
                  )}
                />

                {/* nameOfTheSchool */}
                <TextField
                  id="outlined-basic"
                  label="College/University Name"
                  variant="outlined"
                  onChange={(e) => updateInputFunction(e, "nameOfTheSchool")}
                  value={nameOfTheSchool}
                  sx={{ width: "50%" }}
                />
              </div>
              <div className="second_row_in_box">
                {/* typeOfStudy */}
                <FormControl sx={{ width: "20%" }}>
                  <InputLabel id="demo-simple-select-label">Title</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={typeOfStudy}
                    label="Title"
                    onChange={(e) => updateInputFunction(e, "typeOfStudy")}
                  >
                    {majorTitleList.map((major) => {
                      return <MenuItem value={major}>{major}</MenuItem>;
                    })}
                  </Select>
                </FormControl>

                {/* major */}
                <TextField
                  id="outlined-basic"
                  label="Major"
                  variant="outlined"
                  onChange={(e) => updateInputFunction(e, "major")}
                  value={major}
                  sx={{ width: "60%" }}
                />

                {/* yearOfCompletion */}
                <FormControl
                  style={{
                    width: "20%",
                  }}
                >
                  <InputLabel id="select-label-year">Year</InputLabel>
                  <Select
                    labelId="select-label-year"
                    value={yearOfCompletion}
                    label="Year"
                    onChange={(e) => updateInputFunction(e, "yearOfCompletion")}
                  >
                    {Array.from({ length: 2031 - 1970 }, (_, i) => {
                      const year = 1970 + i;
                      return <MenuItem value={year}>{year}</MenuItem>;
                    })}
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
        <SubmitButton handleSubmitFunction={handleSubmitFunction} />
      </div>
    </Container>
  );
};

export default UpdateProfessionalInfo;
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
        aling-items: center;
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
