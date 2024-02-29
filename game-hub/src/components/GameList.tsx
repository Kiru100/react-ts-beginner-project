import { AspectRatio, Box, Card, CardBody, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {results} from "../assets/JSON/sample_games.json";
import GameCard from "./GameCard";

interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse{
    count: number;
    results: Game[];
}

export default function GameList() {    
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        // apiClient
        //     .get<FetchGamesResponse>("/games")
        //     .then((res) => {
        //         setGames(res.data.results);
        //         console.log(res.data.results);
        //     })
        //     .catch((err) =>{
        //         console.log(err.message)
        //         setError(err.message);
        //     });

        console.log("sample_games_data", results)
    }, []);


    return (
        <>
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
                padding="2"
                spacing={10}
            >   
                {/* <Card borderRadius="4%" overflow="hidden">
                    <CardBody p="0">
                        <AspectRatio  ratio={16/9}>
                            <Image 
                                src="https://media.rawg.io/media/crop/600/400/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg" 
                                boxSize="48px"
                                w="100%"
                                alt="Application Logo">
                            </Image>
                        </AspectRatio>
                        <Box p="16px">
                            <Text fontSize="24px" fontWeight="700" lineHeight="28px">Vampire: The Masquerade - Bloodlines 2</Text>
                        </Box>       
                    </CardBody>
                </Card> */}
                {results.map((game, index) =>(
                        <GameCard 
                            key={`${game.id}_${index}`}
                            id={game.id} 
                            name={game.name} 
                            background_image={game.background_image}
                        />
                    ))
                }
                {/* <GameCard  /> */}
            </SimpleGrid>
        </>
    )
}
