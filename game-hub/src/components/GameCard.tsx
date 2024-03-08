import { AspectRatio, Box, Card, CardBody, Flex, Image, Text } from "@chakra-ui/react"
import { BsNintendoSwitch } from "react-icons/bs";
import { FaAndroid, FaAppStoreIos, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";
import { GiSpiderWeb } from "react-icons/gi";
import getCroppedImageUrl from "../services/image-url";
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

type PlatformType = { [key: number]: JSX.Element };

export default function GameCard({ background_image, name, parent_platforms, added, metacritic }: GameCardProps) {

    const getPlatformIcon = (platformNumber: number, key: string | number): React.ReactElement | null => {
        const platformType: PlatformType = {
            1: <FaWindows key={key} color="gray.500"/>,
            2: <FaPlaystation key={key} />,
            3: <FaXbox key={key} />,
            4: <FaAppStoreIos key={key} />,
            5: <FaApple key={key} />,
            6: <FaLinux key={key} />,
            7: <BsNintendoSwitch key={key} />,
            8: <FaAndroid key={key} />,
            14: <GiSpiderWeb key={key} />
        };
    
        return platformType[platformNumber] || null;
    };

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
                        src={getCroppedImageUrl(background_image)} 
                        boxSize="48px"
                        w="100%"
                        alt={`${name} Logo`}
                    >
                    </Image>
                </AspectRatio>
                <Box p="16px">
                    <Flex alignItems="center" justifyContent="space-between" >
                        <Flex gap="4px" height="24px" alignItems="center" color="gray.200">
                            {parent_platforms?.map(({platform}, index) =>(
                                getPlatformIcon(platform.id, `${platform.id}_${index}`)
                            ))}             
                        </Flex>
                        {
                            (Boolean(metacritic) && (
                                <Text 
                                    border={`1px solid ${generateCriticColor(metacritic).border_color}`} 
                                    borderRadius="4px"
                                    padding="2px 0"
                                    minWidth={`32px`}
                                    textAlign={`center`}
                                    color={`#${generateCriticColor(metacritic).color}`}
                                    fontWeight={`700`}
                                >{metacritic}</Text>
                            ))
                        }
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
