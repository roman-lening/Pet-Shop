import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Categorie from "../components/Categorie";
import { getCategories } from "../redux/slices/categoriesSlice";
import styles from "../components/Categories/styles.module.css";

import {
  categoriesContainerStyle,
  breadcrumbsStyle,
  breadcrumbButtonStyle,
  activeBreadcrumbButtonStyle,
  dividerStyle,
  categoriesContentStyle,
  categoriesTitleStyle,
  gridStyle,
} from "./styles.js";

function CategoriesPage() {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categories,
  );

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategories());
    }
  }, [dispatch, categories.length]);

  if (loading) {
    return <span className={styles.loader} />;
  }
  if (error) {
    return <span className={styles.error} />;
  }

  return (
    <Box sx={categoriesContainerStyle}>
      <Breadcrumbs separator="" aria-label="breadcrumb" sx={breadcrumbsStyle}>
        <NavLink to="/">
          <Button sx={breadcrumbButtonStyle}>Main page</Button>
        </NavLink>
        <Divider sx={dividerStyle} />
        <NavLink to="/categories">
          <Button sx={activeBreadcrumbButtonStyle}>Categories</Button>
        </NavLink>
      </Breadcrumbs>
      <Box sx={categoriesContentStyle}>
        <Typography sx={categoriesTitleStyle}>Categories</Typography>
        <Grid sx={gridStyle}>
          {categories.map((categorie) => (
            <Categorie key={categorie.id} categorie={categorie} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default CategoriesPage;
