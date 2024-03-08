import { 
    Heading, 
    List,  
    VStack, 
} from "@chakra-ui/react";
import GenreItem from "./GenreItem";
import {results} from "../assets/JSON/sample_genre.json";

interface SideBarProps{
    handleGenreClick: (name: string )=> void;
}

export default function SideBar({handleGenreClick}: SideBarProps) {
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
