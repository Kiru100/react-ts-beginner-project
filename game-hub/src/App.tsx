import { Button, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import apiClient from "./services/api-client";

interface FetchGamesResponse{
    count: number;
    results: Game[];
}
interface Game {
    id: number;
    name: string;
    added: number;
    background_image: string;
    metacritic: number;
    parent_platforms: {
        platform: {
            id: number;
            name: string;
            slug: string;
        };
    }[];
}

interface Genre {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}

function App() {
    const [copy, setCopy] = useState<string>("");
    const [games, setGames] = useState<Game[]>([]);

    const [error, setError] = useState("");
    const [search_value, setSearchValue] = useState("");
    const [genre_selected, setGenreSelected] = useState("");
    const [platform_selected, setSelectedPlatform] = useState("");
    const [order_selected, setOrderSelected] = useState("");

    const handleSearch = (search_value: string) =>{
        setSearchValue(search_value)
    }   

    const handleGenreClick = (name: string) =>{
        setGenreSelected(name);
    }

    const handlePlatformFilter = (name: string) =>{
        setSelectedPlatform(name);
    }

    const handleOrderSelected = (name: string) => {
        setOrderSelected(name);
    }   

    useEffect(() => {
        apiClient
            .get<FetchGamesResponse>("/games")
            .then((res) => {
                setGames(res.data.results);
            })
            .catch((err) =>{
                console.log(err.message)
                setError(err.message);
            });
    }, []);

    useEffect(() => {
        
            let search = (search_value?.length) ? `?search=${search_value}` : "";
            let genre = (genre_selected?.length) ? `?genres=${genre_selected.toLocaleLowerCase()}` : "";
            let platform = (platform_selected?.length) ? `?parent_platforms=${platform_selected}` : "";
            let order = (order_selected?.length) ? `&ordering=${order_selected}` : "";

            console.log("`/games${search}${genre}`", `/games${search}${genre}${platform}${order}`)

            apiClient
                .get<FetchGamesResponse>(`/games${search}${genre}${platform}${order}`)
                .then((res) => {
                    setGames(res.data.results);
                    console.log("res.data.results",res.data.results)
                })
                .catch((err) =>{
                    console.log(err.message)
                    setError(err.message);
                });
        
        
    }, [search_value, genre_selected, platform_selected, order_selected]);

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
                    <NavBar handleSearch={handleSearch}/>
                </GridItem>
                <GridItem pl="2" area={"nav"}>
                    <SideBar handleGenreClick={handleGenreClick}/>
                </GridItem>
                <GridItem pl="2" area={"main"}>
                    <Main 
                        games_data={games} 
                        genre_selected={genre_selected}
                        handlePlatformFilter={handlePlatformFilter}
                        handleOrderSelected={handleOrderSelected}
                    />  
                </GridItem>
            </Grid>
    )
}

export default App;
