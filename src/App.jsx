import { Button, Card } from "@mui/material";
import React from "react";
import MainPage from "./Components/Pages/MainPage";
import Camp from "./Components/Context/Camp";
import { RouterProvider } from "react-router-dom";
import { route } from "./Components/Route/Route";
import Aos from 'aos'
import "aos/dist/aos.css";

const App = () => {
  // const GlobalStyle = createGlobalStyle`

  // margin: 0;
  // padding: 0;
  // box-sizing: border-box;
  // `

  // const StyledH1 = styled.h1`
  // color:red;
  // background-color:yellow;
  // `
  // return (
  //   <Card sx={{
  //       height:"100vh",
  //       with:"100%"
  //   }}>
  //     <GlobalStyle></GlobalStyle>
  //     <Button variant='contained' >Click</Button>

  //     <StyledH1>hii</StyledH1>
  //   </Card>
  //)

  React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);
  return (
    <div>
      <Camp>
        <RouterProvider router={route}>
          <MainPage></MainPage>
        </RouterProvider>
      </Camp>
    </div>
  );
};

export default App;
