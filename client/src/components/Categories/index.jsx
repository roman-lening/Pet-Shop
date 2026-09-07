import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { NavLink } from "react-router-dom";
import {
  containerStyle,
  headerStyle,
  titleStyle,
  dividerContainerStyle,
  dividerStyle,
  buttonStyle,
  cardsContainerStyle,
} from "./styles.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "../../redux/slices/categoriesSlice.js";
import Categorie from "../Categorie/index.jsx";
import styles from "./styles.module.css";

function Categories() {
  const dispatch = useDispatch();

  const { categories, loading, error } = useSelector(
    (state) => state.categories,
  );

  useEffect(() => {
    dispatch(getCategories());
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
        <Typography sx={titleStyle}>Categories</Typography>
        <Box sx={dividerContainerStyle}>
          <Divider sx={dividerStyle} />
          <NavLink to="/categories">
            <Button sx={buttonStyle}>All categories</Button>
          </NavLink>
        </Box>
      </Box>
      <Box sx={cardsContainerStyle}>
        {categories.slice(0, 4).map((categorie) => (
          <Categorie key={categorie.id} categorie={categorie} />
        ))}
      </Box>
    </Box>
  );
}

export default Categories;
