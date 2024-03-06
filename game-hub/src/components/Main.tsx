import { Button, Container, Flex, Heading, Menu, MenuButton, MenuItem, MenuList, Select } from "@chakra-ui/react"
import GameList from "./GameList"
import { ChevronDownIcon } from "@chakra-ui/icons";
import apiClient from "../services/api-client";
import { useEffect, useState } from "react";
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
    handlePlatformFilter: (name: string) => void;
    handleOrderSelected: (name: string) => void;
}
interface FetchPlatformList{
    results: Platform[];
}
interface Platform{
    id: number;
    name: string;
    slug: string;
}

export default function Main({games_data, genre_selected, handlePlatformFilter, handleOrderSelected}: GameProps) {
    const [platform_list, setPlatformList] = useState<Platform[]>([]); 
    const [selected_plaform, setSelectedPlatform] = useState("");
    const [selected_order, setSelectedOrder] = useState("");
    const [error, setError] = useState([]); 

    const order_by_menu = [
        {id: 1, name: "Name", slug: "name"},
        {id: 2, name: "Released", slug: "released"},
        {id: 3, name: "Added", slug: "added"},
        {id: 4, name: "Created", slug: "created"},
        {id: 5, name: "Updated", slug: "updated"},
        {id: 6, name: "Rating", slug: "rating"},
        {id: 6, name: "Metacritic", slug: "metacritic"},
    ]


    useEffect(() => {
        apiClient
            .get<FetchPlatformList>("/platforms/lists/parents")
            .then((res) => {
                setPlatformList(res.data.results);
            })
            .catch((err) =>{
                console.log(err.message)
                setError(err.message);
            });
    }, []);


    return (
            <Container centerContent={false} alignSelf="left" w="100%" maxW="none">
                <Heading p="2" h="56px">
                    {selected_plaform} {genre_selected} Games               
                </Heading>
                <Flex gap="8px" ml="8px">
                    <Menu >
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            {(selected_plaform.length) ? selected_plaform : "Platforms"}
                        </MenuButton>
                        <MenuList>
                            {
                                platform_list.map((platform, index)=>(
                                    <MenuItem 
                                        key={`platform_${platform.id}_${index}`} 
                                        onClick={()=>{
                                            handlePlatformFilter(platform.id.toString());
                                            setSelectedPlatform(platform.name);
                                        }}>{platform.name}</MenuItem>
                                ))
                            }
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Order by: {selected_order}
                        </MenuButton>
                        <MenuList>
                            {
                                order_by_menu.map((order_detail, index)=>(
                                    <MenuItem 
                                        key={`platform_${order_detail.id}_${index}`} 
                                        onClick={()=>{
                                            setSelectedOrder(order_detail.name);
                                            handleOrderSelected(order_detail.slug);
                                        }}>{order_detail.name}</MenuItem>
                                ))
                            }
                        </MenuList>
                    </Menu>
                </Flex>
                <GameList games_data={games_data}></GameList>               
            </Container>
    )
}
