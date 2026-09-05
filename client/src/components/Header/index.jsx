import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Logo from "../../assets/logo.svg";
import Basket from "../../assets/basket.svg";
import { bigBoxStyle } from "./styles";
import { smallBoxStyle } from "./styles";
import { linkStyle } from "./styles";

function Header() {
  return (
    <AppBar position="static">
      <Box sx={bigBoxStyle}>
        <img
          src={Logo}
          alt="Logo"
          style={{
            width: "4.861vw",
          }}
        />
        <Box sx={smallBoxStyle}>
          <Button>
            <Typography sx={linkStyle}>Main Page</Typography>
          </Button>
          <Button>
            <Typography sx={linkStyle}>Categories</Typography>
          </Button>
          <Button>
            <Typography sx={linkStyle}>All products</Typography>
          </Button>
          <Button>
            <Typography sx={linkStyle}>All sales</Typography>
          </Button>
        </Box>
        <img src={Basket} alt="Basket" style={{ width: "3.333vw" }} />
      </Box>
    </AppBar>
  );
}

export default Header;
