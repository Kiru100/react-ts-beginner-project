import { AspectRatio, Box, Card, CardBody, Flex, Image, Text } from "@chakra-ui/react"
import { BsNintendoSwitch } from "react-icons/bs";
import { FaAndroid, FaAppStoreIos, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";
import { GiSpiderWeb } from "react-icons/gi";
import { SiNintendo } from "react-icons/si";
interface GameCardProps{
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

interface Platform{
    id: number;
    name: string;
    slug: string;
}


export default function GameCard({id, background_image, name, parent_platforms, added, metacritic}: GameCardProps) {


    const platform_type : { [key: number]: JSX.Element } = {
        1: <FaWindows />,
        2: <FaPlaystation />,
        3: <FaXbox />,
        4: <FaAppStoreIos />,
        5: <FaApple />,
        6: <FaLinux />, 
        7: <BsNintendoSwitch />,
        8: <FaAndroid />,
        14: <GiSpiderWeb />
    }


    const generateCriticColor = (metacritic_ratings: number) =>{
        let critic_color = {border_color: "", color: ""}
        
        if(metacritic_ratings > 70){
            critic_color.color = "6dc849"
            critic_color.border_color = "rgba(109,200,73,.4)";
        }else if(metacritic_ratings <= 70 && metacritic_ratings > 50){
            critic_color.color = "fdca52"
            critic_color.border_color = "rgba(253,202,82,.4)";
        }else{
            critic_color.color = "ff4d52"
            critic_color.border_color = "rgba(255, 77, 82,.4)";
        }

        return critic_color;
    } 

    return (
        <Card 
            borderRadius="4%" 
            overflow="hidden"
            height="100%"

        >  
            <CardBody p="0">
                <AspectRatio ratio={16/9}>
                    <Image 
                        src={background_image} 
                        boxSize="48px"
                        w="100%"
                        alt={`${name} Logo`}
                    >
                    </Image>
                </AspectRatio>
                <Box p="16px">
                    <Flex alignItems="center" justifyContent="space-between">
                        <Flex gap="4px" height="24px">
                            {parent_platforms.map(({platform}) =>(
                                platform_type[platform.id]
                            ))}             
                        </Flex>
                        <Text 
                            border={`1px solid ${generateCriticColor(metacritic).border_color}`} 
                            borderRadius="4px"
                            padding="2px 0"
                            minWidth={`32px`}
                            textAlign={`center`}
                            color={`#${generateCriticColor(metacritic).color}`}
                            fontWeight={`700`}
                        >{metacritic}</Text>
                    </Flex>
                    <Text 
                        fontSize="24px" 
                        fontWeight="700" 
                        lineHeight="28px"
                        mt="8px"
                    >
                        {name}
                    </Text>
                </Box>       
            </CardBody>
        </Card>
    )
}
