import { Button, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Main from "./components/Main";

function App() {
    return (
        <Grid
            templateAreas={`"header header"
                            "nav main"
                            "nav footer"`}
            gridTemplateRows={"50px 1fr"}
            gridTemplateColumns={"200px 1fr"}
            gridRowGap="8"
            m="40px"
        >  
            <GridItem pt="2" area={"header"}>
                <NavBar/>
            </GridItem>
            <GridItem pl="2" area={"nav"}>
                <SideBar />
            </GridItem>
            <GridItem pl="2" area={"main"}>
                <Main></Main>
            </GridItem>
        </Grid>
    )
}

export default App;
