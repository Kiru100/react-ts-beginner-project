import { AspectRatio, Box, Card, CardBody, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function GameList() {
    return (
        <>
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
                padding="2"
                spacing={10}
            >   
                <Card  borderRadius="4%" overflow="hidden">
                    <CardBody p="0">
                        <AspectRatio  ratio={16/9}>
                            <Image 
                                src="https://media.rawg.io/media/crop/600/400/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg" 
                                boxSize="48px"
                                w="100%"
                                alt="Application Logo">
                            </Image>
                        </AspectRatio>
                        <Box p="16px">
                            <Text fontSize="24px" fontWeight="700" lineHeight="28px">Vampire: The Masquerade - Bloodlines 2</Text>
                        </Box>
        
                    </CardBody>
                </Card>
            </SimpleGrid>
        </>
    )
}
