import { Button, Container, Flex, Heading, Menu, MenuButton, MenuItem, MenuList, Select } from "@chakra-ui/react"
import GameList from "./GameList"
import { ChevronDownIcon } from "@chakra-ui/icons";


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
                <Flex gap="8px" ml="8px">
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Actions
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>

                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Actions
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>

                </Flex>

                <GameList games_data={games_data}></GameList>

                
            </Container>
    )
}
