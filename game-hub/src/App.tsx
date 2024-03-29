import { Grid, GridItem, Show } from "@chakra-ui/react";
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
        platform: Platform ;
    }[];
}

interface Platform{
    id: number;
    name: string;
    slug: string;
}

function App() {
    const [games, setGames] = useState<Game[]>([]);
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
            });
    }, []);

    useEffect(() => {
            const query_params: string[] = [];

            if (search_value) {
                query_params.push(`search=${search_value}`);
            }
            if (genre_selected) {
                query_params.push(`genres=${genre_selected.toLocaleLowerCase()}`);
            }
            if (platform_selected) {
                query_params.push(`platforms=${platform_selected}`);
            }
            if (order_selected) {
                query_params.push(`ordering=${(order_selected?.length && order_selected!=="name") ? `-${order_selected.toString()}` : order_selected.toString()}`);
            }

            const query_string = query_params.length > 0 ? `?${query_params.join('&')}` : '';

            apiClient
                .get<FetchGamesResponse>(`/games${query_string}`)
                .then((res) => {
                    setGames(res.data.results);
                    console.log("res.data.results", res.data.results)
                })
                .catch((err) =>{
                    console.log(err.message)
                });

    }, [search_value, genre_selected, platform_selected, order_selected]);

    return (
            <Grid
                templateAreas={{
                    base: `"header header" "main main"`,
                    lg:  `"header header" "nav main"`
                }}
                gridTemplateRows={"50px 1fr"}
                gridTemplateColumns={"200px 1fr"}
                gridRowGap="8"
                m="40px"
            >  
                <GridItem pt="2" area={"header"}>
                    <NavBar handleSearch={handleSearch}/>
                </GridItem>
                <Show above="lg">
                    <GridItem pl="2" area={"nav"}>
                        <SideBar handleGenreClick={handleGenreClick}/>
                    </GridItem>
                </Show>
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
