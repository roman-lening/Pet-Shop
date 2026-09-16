import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSales } from "../../redux/slices/salesSlice.js";
import { getCategories } from "../../redux/slices/categoriesSlice.js";
import { addProduct } from "../../redux/slices/bagSlice.js";
import {
  breadcrumbsStyle,
  plusButtonStyle,
  descriptionContainerStyle,
  breadcrumbButtonStyle,
  dividerStyle,
  quantityContainerStyle,
  minusButtonStyle,
  descriptionTextStyle,
  activeBreadcrumbButtonStyle,
  imageStyle,
  oldPriceStyle,
  btnStyle,
  readMoreStyle,
  actionRowStyle,
  discountStyle,
  oldPriceContainerStyle,
  containerStyle,
  productRowStyle,
  descriptionTitleStyle,
  quantityTextStyle,
  productInfoStyle,
  titleStyle,
  currentPriceStyle,
  priceContainerStyle,
} from "./styles.js";
import styles from "./styles.module.css";

function Item() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { sales, loading, error } = useSelector((state) => state.sales);

  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (sales.length === 0) {
      dispatch(getSales());
    }
  }, [dispatch, sales.length]);

  const product = sales.find((item) => item.id === Number(id));

  const category = categories.find(
    (category) => category.id === product?.categoryId,
  );

  const [count, setCount] = useState(1);

  const [addedBtn, setAddedBtn] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    setAddedBtn(true);
    dispatch(
      addProduct({
        id: product.id,
        title: product.title,
        price: currentPrice,
        image: product.image,
        quantity: count,
        discont_price: product.discont_price,
      }),
    );
  }

  function minusOne() {
    setCount((prev) => Math.max(1, prev - 1));
  }

  function plusOne() {
    setCount((prev) => prev + 1);
  }

  if (loading) {
    return <span className={styles.loader} />;
  }

  if (error) {
    return <span className={styles.error} />;
  }

  if (!product) {
    return null;
  }

  const hasDiscount =
    product.discont_price > 0 && product.discont_price < product.price;

  const currentPrice = hasDiscount ? product.discont_price : product.price;

  const discount = hasDiscount
    ? Math.round(
        ((product.price - product.discont_price) / product.price) * 100,
      )
    : 0;

  return (
    <Box sx={containerStyle}>
      <Breadcrumbs separator="" aria-label="breadcrumb" sx={breadcrumbsStyle}>
        <NavLink to="/">
          <Button sx={breadcrumbButtonStyle}>Main page</Button>
        </NavLink>
        <Divider sx={dividerStyle} />
        <NavLink to="/categories">
          <Button sx={breadcrumbButtonStyle}>Categories</Button>
        </NavLink>
        <Divider sx={dividerStyle} />
        <NavLink to={`/productGroup/${category?.id}`}>
          <Button sx={breadcrumbButtonStyle}>{category?.title}</Button>
        </NavLink>
        <Divider sx={dividerStyle} />
        <NavLink to={`/item/${id}`}>
          <Button sx={activeBreadcrumbButtonStyle}>{product?.title}</Button>
        </NavLink>
      </Breadcrumbs>
      <Box sx={productRowStyle}>
        <img
          src={`http://localhost:3333${product.image}`}
          alt={product.title}
          style={imageStyle}
        />
        <Box sx={productInfoStyle}>
          <Typography sx={titleStyle}>{product.title}</Typography>
          <Box sx={priceContainerStyle}>
            <Typography sx={currentPriceStyle}>${currentPrice}</Typography>
            {hasDiscount && (
              <Box sx={oldPriceContainerStyle}>
                <Typography sx={oldPriceStyle}>${product.price}</Typography>
                <Typography sx={discountStyle}>-{discount}%</Typography>
              </Box>
            )}
          </Box>
          <Box sx={actionRowStyle}>
            <Box sx={quantityContainerStyle}>
              <Button
                onClick={minusOne}
                disabled={addedBtn}
                sx={minusButtonStyle}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19"
                    stroke="#8B8B8B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
              <Typography sx={quantityTextStyle}>{count}</Typography>
              <Button
                onClick={plusOne}
                disabled={addedBtn}
                sx={plusButtonStyle}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19"
                    stroke="#8B8B8B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5V19"
                    stroke="#8B8B8B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </Box>
            <Button
              disabled={addedBtn}
              onClick={handleClick}
              sx={{
                ...btnStyle,
                color: addedBtn ? "black" : "white",
                background: addedBtn ? "#fff" : "#0d50ff",
                border: "1px solid gray",
                "&:hover": {
                  background: addedBtn ? "#fff" : "#282828",
                },
              }}
            >
              {addedBtn ? "Added" : "Add to cart"}
            </Button>
          </Box>
          <Box sx={descriptionContainerStyle}>
            <Typography sx={descriptionTitleStyle}>Description</Typography>
            <Typography sx={descriptionTextStyle}>
              {product.description}
            </Typography>
            <Button sx={readMoreStyle}>Read more</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Item;
