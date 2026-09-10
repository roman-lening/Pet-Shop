import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  cardStyle,
  imageStyle,
  titleStyle,
  discountStyle,
  infoStyle,
  pricesStyle,
  priceStyle,
  oldPriceStyle,
  imageContainerStyle,
  btnStyle,
} from "./styles.js";
import { NavLink } from "react-router-dom";

function Sale({ product }) {
  const discount = Math.round(
    ((product.price - product.discont_price) / product.price) * 100,
  );

  function handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("click");
  }

  return (
    <Box
      component={NavLink}
      to="/"
      sx={{
        ...cardStyle,
        "&:hover .addButton": {
          opacity: 1,
          visibility: "visible",
        },
      }}
    >
      <Box sx={imageContainerStyle}>
        <img
          src={`http://localhost:3333${product.image}`}
          alt={product.title}
          style={imageStyle}
        />
        <Typography sx={discountStyle}>-{discount}%</Typography>
        <Button
          onClick={handleClick}
          className="addButton"
          sx={{
            ...btnStyle,
            "&:hover": {
              background: "#282828",
            },
          }}
        >
          Add to cart
        </Button>
      </Box>
      <Box sx={infoStyle}>
        <Typography sx={titleStyle}>{product.title}</Typography>
        <Box sx={pricesStyle}>
          <Typography sx={priceStyle}>${product.discont_price}</Typography>
          <Typography sx={oldPriceStyle}>${product.price}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Sale;
