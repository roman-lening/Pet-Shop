import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { cardStyle, imageStyle, titleStyle } from "./style.js";

function Categorie({ categorie }) {
  return (
    <Box component={NavLink} sx={cardStyle}>
      <img
        src={`http://localhost:3333${categorie.image}`}
        alt={categorie.title}
        style={imageStyle}
      />
      <Typography sx={titleStyle}>{categorie.title}</Typography>
    </Box>
  );
}

export default Categorie;
