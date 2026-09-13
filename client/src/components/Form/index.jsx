import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dogs from "../../assets/dogsForm.svg";
import axios from "axios";
import {
  boxStyle,
  titleStyle,
  containerStyle,
  formStyle,
  fieldGroupStyle,
  inputStyle,
  buttonStyle,
} from "./styles.js";
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [btn, setBtn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name,
      phone,
      email,
    };

    axios
      .post("http://localhost:3333/sale/send", formData)
      .then((response) => {
        console.log(response.data);
        console.log(formData);
        setName("");
        setPhone("");
        setEmail("");
        setBtn(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Box sx={boxStyle}>
      <Typography sx={titleStyle}>5% off on the first order</Typography>
      <Box sx={containerStyle}>
        <img
          src={Dogs}
          alt="Dogs"
          style={{
            width: "54.375vw",
          }}
        />
        <Box sx={formStyle} component="form" onSubmit={handleSubmit}>
          <Box sx={fieldGroupStyle}>
            <TextField
              variant="outlined"
              sx={inputStyle}
              placeholder="Name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              placeholder="Phone number"
              variant="outlined"
              sx={inputStyle}
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              placeholder="Email"
              variant="outlined"
              sx={inputStyle}
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Button
            sx={{
              ...buttonStyle,
              color: btn ? "#0d50ff" : "#282828",
              "&:hover": {
                background: btn ? "#fff" : "#282828",
                color: btn ? "#282828" : "#fff",
              },
            }}
            type="submit"
          >
            {btn ? "Request Submitted" : "Get a discount"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Form;
