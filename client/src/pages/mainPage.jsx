import Box from "@mui/material/Box";
import CheckOut from "../components/CheckOut";
import Form from "../components/Form";
import Categories from "../components/Categories";
import Sales from "../components/Sales";

function MainPage() {
  return (
    <Box>
      <CheckOut />
      <Categories />
      <Form />
      <Sales />
    </Box>
  );
}

export default MainPage;
