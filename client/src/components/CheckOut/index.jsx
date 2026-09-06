import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckOutImg from "../../assets/CheckOutImg.svg";
import { buttonStyle, checkOutStyle, titleStyle } from "./styles.js";
import { NavLink } from "react-router-dom";

function CheckOut() {
  return (
    <Box
      sx={{
        ...checkOutStyle,
        backgroundImage: `url(${CheckOutImg})`,
      }}
    >
      <Typography sx={titleStyle}>
        Amazing Discounts <br /> on Pets Products!
      </Typography>
      <Button sx={buttonStyle} component={NavLink} to="/sales">
        Check out
      </Button>
    </Box>
  );
}

export default CheckOut;
