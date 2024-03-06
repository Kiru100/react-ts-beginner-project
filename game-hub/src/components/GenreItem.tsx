import { 
    Image, 
    Link, 
    ListItem, 
    Text
} from "@chakra-ui/react";

interface GenreItemProps{
    id: number;
    name: string;
    slug: string;
    image_background: string;
    index: number;
    handleGenreClick: (name: string)=> void;
}

export default function GenreItem({id, index, image_background, name, slug, handleGenreClick}: GenreItemProps) {
    
    return (
        <ListItem onClick={()=>handleGenreClick(name)}>
            <Link display="flex">
                <Image
                    className="genre_image"
                    src={image_background}
                    boxSize="32px"
                    objectFit="cover"
                    borderRadius="8px"
                    alt={name}>
                </Image>
                <Text ml="2" className="genre_number">{name}</Text>
            </Link>
        </ListItem>
    )
}
