import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Logo from "../../assets/logo.svg";
import Basket from "../../assets/basket.svg";
import { smallBoxStyle, itemsBusket, bigBoxStyle, linkStyle } from "./styles";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const countItems = useSelector((state) => state.items.countitems);
  return (
    <AppBar position="static">
      <Box sx={bigBoxStyle}>
        <NavLink to="/">
          <img
            src={Logo}
            alt="Logo"
            style={{
              width: "4.861vw",
            }}
          />
        </NavLink>
        <Box sx={smallBoxStyle}>
          <NavLink to="/" end>
            {({ isActive }) => (
              <Button>
                <Typography
                  sx={{
                    ...linkStyle,
                    color: isActive ? "#0d50ff" : "#282828",
                  }}
                >
                  Main Page
                </Typography>
              </Button>
            )}
          </NavLink>
          <NavLink to="/categories">
            {({ isActive }) => (
              <Button>
                <Typography
                  sx={{
                    ...linkStyle,
                    color: isActive ? "#0d50ff" : "#282828",
                  }}
                >
                  Categories
                </Typography>
              </Button>
            )}
          </NavLink>
          <NavLink to="/products">
            {({ isActive }) => (
              <Button>
                <Typography
                  sx={{
                    ...linkStyle,
                    color: isActive ? "#0d50ff" : "#282828",
                  }}
                >
                  All products
                </Typography>
              </Button>
            )}
          </NavLink>
          <NavLink to="/sales">
            {({ isActive }) => (
              <Button>
                <Typography
                  sx={{
                    ...linkStyle,
                    color: isActive ? "#0d50ff" : "#282828",
                  }}
                >
                  All sales
                </Typography>
              </Button>
            )}
          </NavLink>
        </Box>
        <NavLink to="/basketPage">
          <img
            src={Basket}
            alt="Basket"
            style={{
              width: "3.333vw",
              position: "relative",
            }}
          />
          <Typography sx={itemsBusket}>{countItems}</Typography>
        </NavLink>
      </Box>
    </AppBar>
  );
}

export default Header;
