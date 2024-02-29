import { Card, CardBody, Image, SimpleGrid, Text } from "@chakra-ui/react";


export default function GameList() {
  return (
    <>
        <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
            padding="2"
            spacing={10}
        >   
            <Card>
                <CardBody p="0">
                    <Image 
                        src="https://media.rawg.io/media/crop/600/400/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg" 
                        boxSize="48px"
                        w="100%"
                        alt="Application Logo">
                    </Image>

                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
            </Card>


        </SimpleGrid>
    </>
  )
}
