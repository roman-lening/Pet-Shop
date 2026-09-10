import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getSales } from "../redux/slices/salesSlice.js";
import Product from "../components/Product/index.jsx";
import styles from "../components/Sales/styles.module.css";
import {
  categoriesContainerStyle,
  breadcrumbsStyle,
  breadcrumbButtonStyle,
  activeBreadcrumbButtonStyle,
  dividerStyle,
  categoriesContentStyle,
  categoriesTitleStyle,
  gridStyle,
  filtersContainerStyle,
  priceFilterStyle,
  priceLabelStyle,
  priceInputStyle,
  sortFilterStyle,
  sortLabelStyle,
  sortSelectStyle,
} from "./styles.js";

function ProductsPage() {
  const dispatch = useDispatch();
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const { sales, loading, error } = useSelector((state) => state.sales);
  const [sort, setSort] = useState("default");

  useEffect(() => {
    if (sales.length === 0) {
      dispatch(getSales());
    }
  }, [dispatch, sales.length]);

  if (loading) {
    return <span className={styles.loader} />;
  }
  if (error) {
    return <span className={styles.error} />;
  }

  const filteredSales = sales.filter((product) => {
    if (priceFrom && product.discont_price < Number(priceFrom)) {
      return false;
    }
    if (priceTo && product.discont_price > Number(priceTo)) {
      return false;
    }
    return true;
  });

  const sortedSales = [...filteredSales].sort((a, b) => {
    if (sort === "price-desc") {
      return b.discont_price - a.discont_price;
    }
    if (sort === "price-asc") {
      return a.discont_price - b.discont_price;
    }
    if (sort === "newest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    return 0;
  });

  return (
    <Box sx={categoriesContainerStyle}>
      <Breadcrumbs separator="" aria-label="breadcrumb" sx={breadcrumbsStyle}>
        <NavLink to="/">
          <Button sx={breadcrumbButtonStyle}>Main page</Button>
        </NavLink>
        <Divider sx={dividerStyle} />
        <NavLink to="/products">
          <Button sx={activeBreadcrumbButtonStyle}>All products</Button>
        </NavLink>
      </Breadcrumbs>
      <Box sx={categoriesContentStyle}>
        <Typography sx={categoriesTitleStyle}>All products</Typography>
        <Box sx={filtersContainerStyle}>
          <Box sx={priceFilterStyle}>
            <Typography sx={priceLabelStyle}>Price</Typography>
            <TextField
              placeholder="from"
              variant="outlined"
              type="number"
              sx={priceInputStyle}
              value={priceFrom}
              onChange={(e) => setPriceFrom(e.target.value)}
            />
            <TextField
              placeholder="to"
              variant="outlined"
              type="number"
              sx={priceInputStyle}
              value={priceTo}
              onChange={(e) => setPriceTo(e.target.value)}
            />
          </Box>
          <Box sx={sortFilterStyle}>
            <Typography sx={sortLabelStyle}>Sorted</Typography>
            <Select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              sx={sortSelectStyle}
            >
              <MenuItem value="default">by default</MenuItem>
              <MenuItem value="newest">newest</MenuItem>
              <MenuItem value="price-desc">price: high-low</MenuItem>
              <MenuItem value="price-asc">price: low-high</MenuItem>
            </Select>
          </Box>
        </Box>
        <Grid
          sx={{
            ...gridStyle,
            minHeight: "29.306vw",
            maxHeight: "92.362vw",
          }}
        >
          {sortedSales.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default ProductsPage;
