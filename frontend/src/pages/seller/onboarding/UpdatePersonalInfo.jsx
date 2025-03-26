import styled from "styled-components";
import MainNavigationBar from "../../../components/RootLayOut/MainNavigationBar";
import Avatar from "@mui/material/Avatar";
import { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import languageOriginalList from "../../../../utils/languagesArray";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, InputLabel } from "@mui/material";
import { MdModeEdit } from "react-icons/md";

import { toastFunction } from "../../../../utils/helperFunction";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onboardingAction } from "../../../../redux/onboardingSlice";
import IntroSection from "../../../components/sellerOnboarding/IntroSection";
import SubmitButton from "../../../components/sellerOnboarding/submitButton";
import ProcessBar from "../../../components/sellerOnboarding/ProcessBar";
import { Country, State, City } from "country-state-city";
const UpdatePersonalInfo = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const { personalInfo } = useSelector((state) => state.onboarding);
  const avatarInputRef = useRef(null);
  const [showAddNewBox, setShowAddNewBox] = useState(true);
  const [language, setLanguage] = useState(personalInfo.languages || []);
  const [descriptionIsFocus, setDescriptionIsFocus] = useState(false);
  const [firstName, setFirstName] = useState(personalInfo.firstName);
  const [lastName, setLastName] = useState(personalInfo.lastName);
  const [displayName, setDisplayName] = useState(personalInfo.displayName);
  const [img, setImg] = useState(personalInfo.img);
  const [description, setDescription] = useState(personalInfo.description);
  const [country, setCountry] = useState(Country.getAllCountries());
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [currentCountry, setCurrentCountry] = useState();
  const [currentState, setCurrentState] = useState();
  const [currentCity, setCurrentCity] = useState();
  const [languageList, setLanguageList] = useState(languageOriginalList);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!currentUser) {
      return navigate("/login");
    }
  }, [currentUser, navigate]);

  //useState for edditing/ adding new languages
  const [newLanguage, setNewLanguage] = useState("");
  const [newLanguageLevel, setNewLanguageLevel] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [newLanguageIndex, setNewLanguageIndex] = useState(null);

  //function to remove the language after got selected
  const removeLanguageFromList = (languageSelected) => {
    setLanguageList((prev) => {
      const newLanguageArray = prev.filter(
        (language) => language != languageSelected
      );
      return newLanguageArray;
    });
  };

  //function to edit/add languages

  const editAndAddLanguageFunction = () => {
    if (!newLanguage || !newLanguageLevel) {
      return;
    }
    if (isEditing) {
      setLanguage((prev) =>
        prev.map((languageCombo, index) =>
          index == newLanguageIndex
            ? { language: newLanguage, level: newLanguageLevel }
            : languageCombo
        )
      );
      setIsEditing(false);
      resetNewLanguageStates();
    } else {
      if (language.some((l) => l.language == newLanguage)) {
        return;
      }
      setLanguage((prev) => [
        ...prev,
        {
          language: newLanguage,
          level: newLanguageLevel,
        },
      ]);

      removeLanguageFromList(newLanguage);
      resetNewLanguageStates();
    }
  };

  const resetNewLanguageStates = () => {
    setNewLanguage();
    setNewLanguageLevel();
    setNewLanguageIndex();
  };

  //function to update inputs:
  const updateInputFunction = (e, inputType) => {
    const value = e.target.value;
    switch (inputType) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "displayName":
        setDisplayName(value);
        break;
      case "img":
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
          setImg(URL.createObjectURL(file));
        }
        break;
      case "description":
        setDescription(value);
        break;
      case "language":
        setNewLanguage(value);
        break;
      case "level":
        setNewLanguageLevel(value);
        break;
      case "country":
        const selectedCountry = e.target.value;
        setState(State.getStatesOfCountry(selectedCountry.isoCode));
        setCurrentCountry(selectedCountry);
        setCurrentState("");
        setCurrentCity("");
        break;
      case "state":
        const selectedState = e.target.value;
        setCity(
          City.getCitiesOfState(currentCountry.isoCode, selectedState.isoCode)
        );
        setCurrentState(selectedState);
        setCurrentCity("");
        break;
      case "city":
        setCurrentCity(value);
        break;
      default:
        break;
    }
  };

  const handleSubmitFunction = async () => {
    if (
      !firstName ||
      !lastName ||
      !displayName ||
      !img ||
      !description ||
      !language ||
      !currentCity ||
      !currentState ||
      !currentCountry
    ) {
      return toastFunction(
        "error",
        "Please fill out all the information before going to next page."
      );
    }

    dispatch(
      onboardingAction.updatePersonalInfo({
        firstName: firstName,
        lastName: lastName,
        displayName: displayName,
        img: img,
        description: description,
        languages: language,
        country: currentCountry.name,
        state: currentState.name,
        city: currentCity.name,
      })
    );

    navigate("/seller_onboarding/professional_info");
  };

  return (
    <Container>
      <MainNavigationBar showOnlyLeftSide={true} />
      <ProcessBar />
      <IntroSection
        introDes=" Share a little about yourself! This description will be visible on
            your public profile, helping potential buyers learn more about you
            and what you offer. The more you share, the higher your chances of
            getting offers from customers."
        introName="Personal Info"
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
            <h4>Full Name</h4>
            <span>*</span>
          </div>
          <div className="input_field">
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              onChange={(e) => updateInputFunction(e, "firstName")}
              value={firstName}
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(e) => updateInputFunction(e, "lastName")}
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
            <h4>Display Name</h4>
            <span>*</span>
          </div>
          <div className="input_field">
            <TextField
              id="outlined-basic"
              label="Type your display name"
              variant="outlined"
              value={displayName}
              onChange={(e) => updateInputFunction(e, "displayName")}
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
            <h4>Profile Picture</h4>
            <span>*</span>
          </div>
          <div className="input_field">
            <div className="div_for_avatar">
              <Avatar
                className="avatar"
                sx={{ width: 120, height: 120 }}
                onClick={() => {
                  avatarInputRef.current.click();
                }}
                src={
                  img
                    ? img
                    : "https://static.vecteezy.com/system/resources/thumbnails/004/640/699/small_2x/circle-upload-icon-button-isolated-on-white-background-vector.jpg"
                }
              />
            </div>
            <input
              ref={avatarInputRef}
              style={{ visibility: "hidden" }}
              type="file"
              onChange={(e) => updateInputFunction(e, "img")}
            />
          </div>
        </div>
        <div className="div_for_line">
          <div className="div_for_label" style={{ marginTop: "5px" }}>
            <h4>Description</h4>
            <span>*</span>
          </div>
          <div className="input_field">
            <TextField
              id="outlined-basic"
              onFocus={() => setDescriptionIsFocus(true)}
              onBlur={() => setDescriptionIsFocus(false)}
              label={`${
                !descriptionIsFocus
                  ? "Share a bit about yourself, your personallity, your work experience,... "
                  : "Descripion"
              }`}
              variant="outlined"
              value={description}
              rows={5}
              multiline
              fullWidth
              onChange={(e) => updateInputFunction(e, "description")}
            />
          </div>
        </div>
        <div className="div_for_line">
          <div className="div_for_label" style={{ marginTop: "5px" }}>
            <h4>Languages</h4>
            <span>*</span>
          </div>
          <div
            className="input_field "
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {showAddNewBox && (
              <div className="language_add_new_box">
                <Autocomplete
                  disablePortal
                  options={languageList}
                  sx={{ width: 950 }}
                  value={newLanguage}
                  onChange={(e, value) => {
                    setNewLanguage(value);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Language" />
                  )}
                />
                <FormControl fullWidth>
                  <InputLabel id="select-label">Level</InputLabel>
                  <Select
                    labelId="select-label"
                    value={newLanguageLevel}
                    label="Level"
                    onChange={(e) => updateInputFunction(e, "level")}
                  >
                    <MenuItem value={"Basic"}>Basic</MenuItem>
                    <MenuItem value={"Conversational"}>Conversational</MenuItem>
                    <MenuItem value={"Fluent"}>Fluent</MenuItem>
                    <MenuItem value={"Native/Bilingual"}>
                      Native/Bilingual
                    </MenuItem>
                  </Select>
                </FormControl>

                <div
                  onClick={() => setShowAddNewBox(false)}
                  className="addNewLanguagebButton pointer"
                >
                  Cancel
                </div>
                <div
                  onClick={() => {
                    editAndAddLanguageFunction();
                  }}
                  className={` addNewButton  ${
                    newLanguage && newLanguageLevel && "backgroundBlue pointer"
                  }`}
                >
                  Add
                </div>
              </div>
            )}

            <div className="showing_language_box">
              <div className="language_box_title">
                <span>Language</span>
                <span>Level</span>
                <span
                  onClick={() => setShowAddNewBox(true)}
                  className="pointer colorBlue"
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                  }}
                >
                  Add New
                </span>
              </div>
              {language &&
                language.map((l, i) => (
                  <div className="language_box">
                    <span>{l.language}</span>
                    <span>{l.level}</span>
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <MdModeEdit
                        onClick={() => {
                          setNewLanguage(l.language);
                          setNewLanguageLevel(l.level);
                          setNewLanguageIndex(i);
                          setIsEditing(true);
                        }}
                        className="pointer"
                      ></MdModeEdit>
                      <IoClose
                        className="pointer"
                        onClick={() => {
                          setLanguage((prev) =>
                            prev?.filter(
                              (eachLanguage) =>
                                eachLanguage.language != l.language
                            )
                          );
                        }}
                      />
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
          }}
          className="div_for_line"
        >
          <div className="div_for_label">
            <h4>Location</h4>
            <span>*</span>
          </div>
          <div className="input_field">
            <FormControl fullWidth>
              <InputLabel>Country</InputLabel>
              <Select
                value={currentCountry.name || ""}
                label="Country"
                onChange={(e) => {
                  updateInputFunction(e, "country");
                }}
              >
                {country.map((c) => {
                  return (
                    <MenuItem key={c.isoCode} value={c}>
                      {c.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>State</InputLabel>
              <Select
                value={currentState?.name || ""}
                label="State"
                onChange={(e) => {
                  updateInputFunction(e, "state");
                }}
                disabled={!currentCountry}
              >
                {state.map((s) => {
                  return (
                    <MenuItem key={s.isoCode} value={s}>
                      {s.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>City</InputLabel>
              <Select
                disabled={!currentState}
                value={currentCity.name || ""}
                label="City"
                onChange={(e) => {
                  updateInputFunction(e, "city");
                }}
              >
                {city.map((ci) => {
                  return (
                    <MenuItem key={ci.isoCode} value={ci}>
                      {ci.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
        </div>
        <SubmitButton handleSubmitFunction={handleSubmitFunction} />
      </div>
    </Container>
  );
};

export default UpdatePersonalInfo;
const Container = styled.div`
  .div_for_general_label {
    display: flex;
    width: 100%;
    justify-content: center;
    .general_label {
      width: 90%;
      h2 {
        font-size: 33px;
        margin: 30px 0 0 0;
      }
      p {
        width: 50%;
        margin: 10px 0 30px 0;
      }
    }
  }
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
        .language_add_new_box {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          gap: 10px;
          border: solid 1px #c4c4c4;
          padding: 15px;
          border-radius: 3px;
          .addNewLanguagebButton {
            border: solid 1px #c4c4c4;
            padding: 5px;
            width: 210px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 45px;
            border-radius: 3px;
            font-weight: 500;
            color: #c4c4c4;
          }

          .addNewButton {
            background-color: #dddddd;
            color: #a0a0a0;
            border: solid 1px #c4c4c4;
            padding: 5px;
            width: 210px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 45px;
            border-radius: 3px;
            font-weight: 500;
            transition: 0.5 ease;
          }
        }
        .showing_language_box {
          width: 100%;
          display: flex;
          flex-direction: column;

          .language_box {
            width: 100%;
            display: grid;
            grid-template-columns: 1.5fr 0.5fr 1fr;
            justify-content: space-between;
            border: solid 1px #c4c4c4;
            border-top: none;
            padding: 13px;
            color: rgb(67, 67, 67);
            font-weight: 500;
          }
          .language_box_title {
            width: 100%;
            display: grid;
            grid-template-columns: 1.5fr 0.5fr 1fr;
            border: solid 1px #c4c4c4;
            padding: 13px;
            background-color: #f4f4f4;
            color: rgb(67, 67, 67);
            font-weight: 500;
            border-radius: 3px 3px 0 0;
          }
        }
        .div_for_avatar {
          cursor: pointer;
          transition: 0.5s ease !important;
          border-radius: 50%;
          &:hover {
            background-color: rgba(0, 0, 0, 0.7) !important;
            opacity: 0.5;
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
