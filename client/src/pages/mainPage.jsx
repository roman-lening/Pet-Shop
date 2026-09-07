import Box from "@mui/material/Box";
import CheckOut from "../components/CheckOut";
import Form from "../components/Form";
import Categories from "../components/Categories";

function MainPage() {
  return (
    <Box>
      <CheckOut />
      <Categories />
      <Form />
    </Box>
  );
}

export default MainPage;
