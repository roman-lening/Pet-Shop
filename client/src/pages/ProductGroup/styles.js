export const categoriesContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "2.778vw",
  margin: "2.778vw auto",
  width: "94.444vw",
  justifyContent: "flex-start",
};

export const breadcrumbsStyle = {
  display: "flex",
  gap: 0,
  "& li": {
    margin: 0,
  },
};

export const breadcrumbButtonStyle = {
  border: "0.069vw solid #ddd",
  borderRadius: "0.417vw",
  width: "8.194vw",
  height: "2.5vw",
  fontWeight: 500,
  fontSize: "1.111vw",
  lineHeight: "126%",
  textAlign: "center",
  color: "#8b8b8b",
  textTransform: "none",
  padding: "0.556vw 1.111vw",
  whiteSpace: "nowrap",
};

export const activeBreadcrumbButtonStyle = {
  border: "0.069vw solid #ddd",
  borderRadius: "0.417vw",
  width: "fit-content",
  height: "2.5vw",
  fontWeight: 500,
  fontSize: "1.111vw",
  lineHeight: "126%",
  textAlign: "center",
  color: "#282828",
  textTransform: "none",
  whiteSpace: "nowrap",
  padding: "0.556vw 1.111vw",
};

export const dividerStyle = {
  border: "0.069vw solid #ddd",
  width: "1.111vw",
  height: 0,
};

export const categoriesContentStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "2.778vw",
};

export const categoriesTitleStyle = {
  fontWeight: 700,
  fontSize: "4.444vw",
  lineHeight: "110%",
  color: "#282828",
};

export const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "2.222vw",
  overflowY: "auto",
  overflowX: "hidden",
};

export const filtersContainerStyle = {
  display: "flex",
  gap: "2.778vw",
};

export const priceFilterStyle = {
  display: "flex",
  gap: "1.111vw",
  alignItems: "center",
};

export const priceLabelStyle = {
  fontWeight: 600,
  fontSize: "1.389vw",
  lineHeight: "130%",
  color: "#282828",
};

export const priceInputStyle = {
  "& .MuiOutlinedInput-root": {
    height: "2.5vw",
    width: "7.778vw",
    borderRadius: "min(0.417vw, 6px)",
    border: "1px solid #fff",
  },
  "& .MuiInputBase-input": {
    padding: "0.556vw 1.111vw",
    fontWeight: 500,
    fontSize: "1.111vw",
    lineHeight: "126%",
    "&::placeholder": {
      color: "#8b8b8b",
      opacity: 1,
    },
  },
};

export const sortFilterStyle = {
  display: "flex",
  gap: "1.111vw",
  alignItems: "center",
  height: "2.5vw",
};

export const sortLabelStyle = {
  fontSize: "1.389vw",
  fontWeight: 600,
  lineHeight: "130%",
  color: "#282828",
};

export const sortSelectStyle = {
  height: "2.5vw",
  borderRadius: "0.417vw",
  width: "13.889vw",
  "& .MuiSelect-select": {
    padding: "0.556vw 0.556vw 0.556vw 1.111vw",
    fontWeight: 500,
    fontSize: "1.111vw",
    lineHeight: "126%",
    color: "#282828",
  },
};
