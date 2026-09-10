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
import { useState } from "react";

function Product({ product }) {
  const hasDiscount =
    product.discont_price > 0 && product.discont_price < product.price;

  const discount = hasDiscount
    ? Math.round(
        ((product.price - product.discont_price) / product.price) * 100,
      )
    : 0;

  const [addedBtn, setAddedBtn] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("click");
    setAddedBtn(true);
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
        {hasDiscount && (
          <Typography sx={discountStyle}>-{discount}%</Typography>
        )}
        <Button
          disabled={addedBtn}
          onClick={handleClick}
          className="addButton"
          sx={{
            ...btnStyle,
            color: addedBtn ? "black" : "white",
            background: addedBtn ? "#fff" : "#0d50ff",
            "&:hover": {
              background: addedBtn ? "#fff" : "#282828",
            },
          }}
        >
          {addedBtn ? "Added" : "Add to cart"}
        </Button>
      </Box>
      <Box sx={infoStyle}>
        <Typography sx={titleStyle}>{product.title}</Typography>
        <Box sx={pricesStyle}>
          {hasDiscount ? (
            <>
              <Typography sx={priceStyle}>${product.discont_price}</Typography>
              <Typography sx={oldPriceStyle}>${product.price}</Typography>
            </>
          ) : (
            <Typography sx={priceStyle}>${product.price}</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Product;
