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
import { SearchIcon } from "@chakra-ui/icons";
import Logo from "../assets/logo.webp";
import React, { useState } from "react";


interface NavBarProps{
    handleSearch: (search_value: string)=>void;
}

export default function NavBar({handleSearch} : NavBarProps) {
    const { colorMode, toggleColorMode } = useColorMode();
    const [input_value, setInputValue] = useState<string>('');

    const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch(input_value);
        }
    };

    return (
            <Flex alignItems="center" w="100%">
                <Image 
                    src={Logo} 
                    boxSize="48px"
                    alt="Application Logo">
                </Image>
                <InputGroup 
                    borderRadius="lg" 
                    flexGrow="1" 
                    ml="4"
                >
                    <InputLeftElement onClick={()=>handleSearch(input_value)} cursor="pointer">
                        <SearchIcon />
                    </InputLeftElement>
                    <Input 
                        type="search" 
                        placeholder="Search Games" 
                        borderRadius="full"  
                        value={input_value}
                        onChange={(event)=>setInputValue(event.target.value)}
                        onKeyDown={handleInputKeyDown}
                    />
                </InputGroup>
                <FormControl 
                    display="flex" 
                    alignItems="center" 
                    w="fit-content" 
                    ml="6"
                >
                    <Switch 
                        id="color_mode" 
                        onChange={toggleColorMode} 
                        isChecked={colorMode === "dark" ? true : false}
                    />
                    <FormLabel 
                        htmlFor="color_mode" 
                        mb="0" 
                        w="max-content" 
                        ml="2"
                    >
                        {colorMode === "light" ? "Light Mode" : "Dark Mode" }
                    </FormLabel>
                </FormControl>
            </Flex>
    )
}
