import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import Animals from "../assets/errorAnimals.svg";
import Four from "../assets/four.svg";
import {
  buttonStyle,
  subtitleStyle,
  titleStyle,
  contentStyle,
  blockStyle,
  containerStyle,
  smallContainerStyle,
} from "./styles";

function ErrorPage() {
  return (
    <Box sx={containerStyle}>
      <Box sx={smallContainerStyle}>
        <img
          src={Four}
          alt="four"
          style={{
            width: "12.5vw",
          }}
        />
        <img
          src={Animals}
          alt="Animals"
          style={{
            width: "20.833vw",
          }}
        />
        <img
          src={Four}
          alt="four"
          style={{
            width: "12.5vw",
          }}
        />
      </Box>
      <Box sx={blockStyle}>
        <Box sx={contentStyle}>
          <Typography sx={titleStyle}>Page Not Found</Typography>
          <Typography sx={subtitleStyle}>
            We’re sorry, the page you requested could not be found. <br />
            Please go back to the homepage.
          </Typography>
        </Box>
        <NavLink to="/" end>
          <Button sx={buttonStyle}>Go Home</Button>
        </NavLink>
      </Box>
    </Box>
  );
}

export default ErrorPage;
