import { AspectRatio, Box, Card, CardBody, Flex, Image, Text } from "@chakra-ui/react"
import { FaXbox } from "react-icons/fa";

interface GameCardProps{
    id: number;
    name: string;
    background_image: string;
}

export default function GameCard({id, background_image, name}: GameCardProps) {




    return (
        <Card 
            borderRadius="4%" 
            overflow="hidden"
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
                    <Flex>
                        <FaXbox /> 
                        <FaXbox /> 
                    </Flex>
                    <Text 
                        fontSize="24px" 
                        fontWeight="700" 
                        lineHeight="28px"
                    >
                        {name}
                    </Text>
                </Box>       
            </CardBody>
        </Card>
    )
}
