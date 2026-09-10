import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSales } from "../../redux/slices/salesSlice.js";
import Sale from "../Sale/index.jsx";
import styles from "./styles.module.css";
import {
  containerStyle,
  headerStyle,
  titleStyle,
  dividerContainerStyle,
  dividerStyle,
  buttonStyle,
  cardsContainerStyle,
} from "./styles.js";

function Sales() {
  const dispatch = useDispatch();

  const { sales, loading, error } = useSelector((state) => state.sales);

  useEffect(() => {
    dispatch(getSales());
  }, [dispatch]);

  if (loading) {
    return <span className={styles.loader} />;
  }

  if (error) {
    return <span className={styles.error} />;
  }
  return (
    <Box sx={containerStyle}>
      <Box sx={headerStyle}>
        <Typography sx={titleStyle}>Sale</Typography>
        <Box sx={dividerContainerStyle}>
          <Divider sx={dividerStyle} />
          <NavLink to="/sales">
            <Button sx={buttonStyle}>All sales</Button>
          </NavLink>
        </Box>
      </Box>
      <Box sx={cardsContainerStyle}>
        {sales
          .filter(
            (product) =>
              product.discont_price > 0 &&
              product.discont_price < product.price,
          )
          .slice(0, 4)
          .map((product) => (
            <Sale key={product.id} product={product} />
          ))}
      </Box>
    </Box>
  );
}

export default Sales;
