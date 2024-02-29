import { 
    Flex, 
    FormControl,
    FormLabel, 
    Image, 
    Input, 
    InputGroup, 
    InputLeftElement, 
    Switch, 
    useColorMode
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons"
import Logo from "../assets/logo.webp";

export default function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
            <Flex alignItems="center" w="100%">
                <Image 
                    src={Logo} 
                    boxSize="48px"
                    alt="Application Logo">
                </Image>
                <InputGroup borderRadius="lg" flexGrow="1" ml="4">
                    <InputLeftElement pointerEvents="none" >
                        <SearchIcon />
                    </InputLeftElement>
                    <Input type="search" placeholder="Search Games"  borderRadius="full"/>
                </InputGroup>
                <FormControl display="flex" alignItems="center" w="fit-content" ml="6">
                    <Switch id="color_mode" onChange={toggleColorMode} isChecked={colorMode === "dark" ? true : false}/>
                    <FormLabel htmlFor="color_mode" mb="0" w="max-content" ml="2">
                        {colorMode === "light" ? "Light Mode" : "Dark Mode" }
                    </FormLabel>
                </FormControl>
            </Flex>
    )
}
