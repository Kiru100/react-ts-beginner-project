import { Container, Heading } from "@chakra-ui/react"
import GameList from "./GameList"

export default function Main() {
    return (
            <Container centerContent={false} alignSelf="left" w="100%" maxW="none">
                <Heading p="2" h="56px">Games</Heading>
                <GameList></GameList>

                
            </Container>
    )
}
