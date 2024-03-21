import { Typography } from "@mui/material";
import BookListContainer from "./BookListContainer";

const App = () => {
  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">
        Book
      </Typography>
      <BookListContainer />
    </>
  );
};

export default App;
