import { Container, Heading } from "@chakra-ui/react"
import GameList from "./GameList"


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

interface GameProps{
    games_data: Game[]
    genre_selected: string;
}

export default function Main({games_data, genre_selected}: GameProps) {
    return (
            <Container centerContent={false} alignSelf="left" w="100%" maxW="none">
                <Heading p="2" h="56px">
                    {genre_selected} Games               
                </Heading>
                <GameList games_data={games_data}></GameList>

                
            </Container>
    )
}
