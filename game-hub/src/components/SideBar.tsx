import { Flex, Heading, List, ListItem, VStack, Link, Image, Text } from "@chakra-ui/react";

export default function SideBar() {
    return (
        <VStack alignItems="start">
            <Heading size="lg" as="h2" h="56px" textAlign="left" display="flex" alignItems="center">Genres</Heading>
            <List spacing={3}>
                <ListItem>
                    <Link href="" display="flex">
                        <Image 
                            src="https://cdn.discordapp.com/attachments/907169630538326076/1212659189327986738/genre_dummy_image.png?ex=65f2a3e0&is=65e02ee0&hm=1d33446753e27437896da6acd04de6c6a9924dbb417472d1d2c47d10d0bdbeeb&"
                            boxSize="32px"
                            alt="Application Logo">
                        </Image>
                        <Text ml="2">Action</Text>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="" display="flex">
                        <Image 
                            src="https://cdn.discordapp.com/attachments/907169630538326076/1212659189327986738/genre_dummy_image.png?ex=65f2a3e0&is=65e02ee0&hm=1d33446753e27437896da6acd04de6c6a9924dbb417472d1d2c47d10d0bdbeeb&"
                            boxSize="32px"
                            alt="Application Logo">
                        </Image>
                        <Text ml="2">Action</Text>
                    </Link>
                </ListItem>
                <ListItem>
                <Link href="" display="flex">
                        <Image 
                            src="https://cdn.discordapp.com/attachments/907169630538326076/1212659189327986738/genre_dummy_image.png?ex=65f2a3e0&is=65e02ee0&hm=1d33446753e27437896da6acd04de6c6a9924dbb417472d1d2c47d10d0bdbeeb&"
                            boxSize="32px"
                            alt="Application Logo">
                        </Image>
                        <Text ml="2">Action</Text>
                    </Link>
                </ListItem>
                <ListItem>
                <Link href="" display="flex">
                        <Image 
                            src="https://cdn.discordapp.com/attachments/907169630538326076/1212659189327986738/genre_dummy_image.png?ex=65f2a3e0&is=65e02ee0&hm=1d33446753e27437896da6acd04de6c6a9924dbb417472d1d2c47d10d0bdbeeb&"
                            boxSize="32px"
                            alt="Application Logo">
                        </Image>
                        <Text ml="2">Action</Text>
                    </Link>
                </ListItem>
            </List>
        </VStack>
    )
}
