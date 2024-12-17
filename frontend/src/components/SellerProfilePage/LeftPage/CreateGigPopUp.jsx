import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { Flex, Radio } from "antd";
import { IoCloseCircleOutline } from "react-icons/io5";

const options = [
  { label: "Hourly", value: "hourly" },
  { label: "Flat", value: "flat" },
  { label: "Both", value: "both" },
];
const categoryObject = [
  "Plumbing Repairs",
  "Electrical Repairs",
  "House Cleaning",
  "Appliance Repairs",
  "Pest Control",
  "Carpet Cleaning",
  "Painting Services",
  "Lawn Care and Gardening",
  "HVAC Repairs",
  "Vehicles repairs",
  "Hairdressing and Haircuts",
  "Pet Sitting and Pet Walking",
  "Elderly Care Services",
  "Beauty Treatments",
  "Tutoring",
  "Music Lessons",
  "Computer Repairs",
  "Home Security Installation",
  "IT Support",
  "Phone Repairs",
  "DJ Services",
  "Photography and Videography",
  "Catering",
  "Handyman Services",
  "Moving Assistance",
];
const CreateGigPopUp = ({ setCreateNewGig }) => {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [priceType, setPriceType] = useState("hourly");
  const [priceForBoth, setPriceForBoth] = useState({
    hourly: "",
    flat: "",
  });
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleChangePriceType = (e) => {
    setPriceType(e.target.value);
  };
  const handleChangePriceForBoth = (e, type) => {
    if (type == "hourly") {
      setPriceForBoth((prev) => ({ ...prev, hourly: e.target.value }));
    } else {
      setPriceForBoth((prev) => ({ ...prev, flat: e.target.value }));
    }
  };

  return (
    <Container>
      <div className="popupBox">
        <div className="popupBox_top">
          Create New Gig{" "}
          <IoCloseCircleOutline
            onClick={() => {
              setCreateNewGig(false);
            }}
          />
        </div>
        <div className="gig_form">
          <div className="create_gig_title">
            <div className="gig_title_label">
              <h4>Gig Title</h4>
              <p>
                Your gig title is the first thing clients see. Make it clear and
                concise to showcase your skills and attract the right clients.
              </p>
            </div>
            <div className="gig_title_input">
              <TextField
                id="outlined-basic"
                label="I will do..."
                variant="outlined"
                style={{ width: "100%" }}
                multiline
                rows={3}
              />
            </div>
          </div>
          <div className="create_gig_title">
            <div className="gig_title_label">
              <h4>Category</h4>
              <p>
                Choosing the right category helps potential clients easily find
                your gig.
              </p>
            </div>
            <div className="gig_title_input">
              <Box sx={{ minWidth: 120 }}>
                <FormControl size="small" style={{ width: "200px" }}>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Category"
                    onChange={handleChangeCategory}
                  >
                    {categoryObject.map((c) => (
                      <MenuItem value={c}>{c}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
          {/* PRICING DIV */}
          <div className="create_gig_title">
            <div className="gig_title_label">
              <h4>Pricing</h4>
              <p>
                Set a price that reflects the value of your service. You can
                choose to price your gig per hour or as a flat fee for the
                entire service.
              </p>
            </div>

            <div className="gig_title_input">
              <div className="choosing_type">
                <Radio.Group
                  block
                  options={options}
                  defaultValue={priceType}
                  optionType="button"
                  buttonStyle="solid"
                  onChange={handleChangePriceType}
                />
              </div>
              <Box sx={{ minWidth: 120 }}>
                {priceType == "hourly" && (
                  <FormControl
                    fullWidth
                    sx={{ m: 1 }}
                    style={{ width: "198px" }}
                  >
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Hourly
                    </InputLabel>

                    <OutlinedInput
                      id="outlined-adornment-amount"
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                      label="Amount"
                      value={price}
                      onChange={handleChangePrice}
                      type="number"
                    />
                  </FormControl>
                )}
                {priceType == "flat" && (
                  <FormControl
                    fullWidth
                    sx={{ m: 1 }}
                    style={{ width: "198px" }}
                  >
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Total
                    </InputLabel>

                    <OutlinedInput
                      id="outlined-adornment-amount"
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                      label="Amount"
                      value={price}
                      onChange={handleChangePrice}
                      type="number"
                    />
                  </FormControl>
                )}
                {priceType == "both" && (
                  <div className="div_for_both_price_type">
                    <FormControl
                      fullWidth
                      sx={{ m: 1 }}
                      style={{ width: "198px" }}
                    >
                      <InputLabel htmlFor="outlined-adornment-amount">
                        Hourly
                      </InputLabel>

                      <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Amount"
                        value={priceForBoth.hourly}
                        onChange={(e) => {
                          handleChangePriceForBoth(e, "hourly");
                        }}
                        type="number"
                      />
                    </FormControl>
                    <FormControl
                      fullWidth
                      sx={{ m: 1 }}
                      style={{ width: "198px" }}
                    >
                      <InputLabel htmlFor="outlined-adornment-amount">
                        Total
                      </InputLabel>

                      <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Amount"
                        value={priceForBoth.flat}
                        onChange={(e) => {
                          handleChangePriceForBoth(e, "flat");
                        }}
                        type="number"
                      />
                    </FormControl>
                  </div>
                )}
              </Box>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CreateGigPopUp;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(255, 255, 255, 0.768);
  z-index: 99;
  .popupBox {
    position: fixed;
    top: 50%;
    left: 50%;
    min-height: 90%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 5px;
    width: 700px;
    box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    .popupBox_top {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 15px;
      font-size: 20px;
      font-weight: 600;
      border-bottom: 1px solid #d7d9dc;
      svg {
        position: absolute;
        right: -14px;
        top: -13px;
        font-size: 35px;
        cursor: pointer;
      }
    }
    .gig_form {
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .create_gig_title {
        display: flex;
        width: 100%;
        gap: 15px;
        margin-bottom: 5px;
        .gig_title_label {
          width: 40%;
          h4 {
            margin: 25px 0px 5px 0px;
          }
          p {
            margin: 0 0 0 0;
            font-size: 15px;
          }
        }
        .gig_title_input {
          width: 60%;
          display: flex;
          justify-content: flex-start;
          align-items: start;
          margin-top: 25px;
          flex-direction: column;
          gap: 20px;
          .choosing_type {
            margin-left: 8px;
          }
        }
      }
    }
  }
`;
