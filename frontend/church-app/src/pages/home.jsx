import { Stack, Image, Box, Separator, HStack, Text } from "@chakra-ui/react";
import heroImage from '../assets/IMG_4214.jpg';

export function Home() {
    return (
      <Stack spacing={100}>
        <Box width="98%" maxHeight={700} overflow="hidden" borderRadius={10} mb={5} mx='auto'>
          <Image
            src={heroImage}
            alt="Hero Image"
            width="100%"
            height="100%"
            objectFit="cover"
            objectPosition="bottom"  // Shows bottom part of image
          />
        </Box>

        <HStack>
            <Separator flex="1" />
            <Text flexShrink="0" textStyle="3xl" fontWeight="bold">Transforming Lives Through Christ</Text>
            <Separator flex="1" />
        </HStack>

        <HStack mx='auto'>
            
        </HStack>
    </Stack>
    );
}
