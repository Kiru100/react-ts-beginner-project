import { 
    Heading, 
    List,  
    VStack, 
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import GenreItem from "./GenreItem";
import {results} from "../assets/JSON/sample_genre.json";
interface Genre {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}

interface FetchGenreResponse {
    count: number;
    results: Genre[];
}

interface SideBarProps{
    handleGenreClick: (name: string )=> void;
}

export default function SideBar({handleGenreClick}: SideBarProps) {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        // apiClient
        //     .get<FetchGenreResponse>("/genres")
        //     .then((res) => {
        //         setGenres(res.data.results);
        //         console.log(res.data.results);
        //     })
        //     .catch((err) =>{
        //         console.log(err.message)
        //         setError(err.message);
        //     });

        setGenres(results);
    }, []);

    return (
        <VStack alignItems="start">
            <Heading 
                size="lg" 
                as="h2" h="56px" 
                textAlign="left" 
                display="flex" 
                alignItems="center"
            >
                    Genres
            </Heading>
            <List spacing={3}>
                {
                    results.map((genre, index)=>(
                        <GenreItem  
                            id={genre.id} 
                            index={index} 
                            image_background={genre.image_background} 
                            slug={genre.slug}
                            name={genre.name}
                            key={`genre_${genre.id}_${index}`}
                            handleGenreClick={handleGenreClick}
                        />
                    ))
                }
            </List>
        </VStack>
    )
}
