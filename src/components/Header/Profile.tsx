import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex
      align="center"
    >
      { showProfileData && (
        <Box
          mr="4"
          textAlign="right"
        >
          <Text>Estevão Gabriel</Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
            estevao.biondi@gmail.com
          </Text>
        </Box>
      ) }

      <Avatar size="md" name="Estevão Gabriel" src="https://github.com/EST3V4O.png" />
    </Flex>
  )
}