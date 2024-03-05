import { AspectRatio, Box, Card, CardBody, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {results} from "../assets/JSON/sample_games.json";
import GameCard from "./GameCard";
import apiClient from "../services/api-client";

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

interface FetchGamesResponse{
    count: number;
    results: Game[];
}

export default function GameList() {    
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        apiClient
            .get<FetchGamesResponse>("/games")
            .then((res) => {
                setGames(res.data.results);
                console.log(res.data.results);
            })
            .catch((err) =>{
                console.log(err.message)
                setError(err.message);
            });

        // setGames(results);
        console.log("sample_games_data", results)
    }, []);


    return (
        <>
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                padding="2"
                spacing={4}
                gridAutoRows="true"
            >   
                {games.map((game, index) =>(
                        <GameCard 
                            key={`${game.id}_${index}`}
                            id={game.id} 
                            name={game.name} 
                            added={game.added}
                            background_image={game.background_image}
                            parent_platforms={game.parent_platforms}
                            metacritic={game.metacritic}
                        />
                    ))
                }
            </SimpleGrid>
        </>
    )
}
