import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />

      <Flex
        w="100%" my="6" maxWidth={1400} mx="auto"
        px="6"
      >
        <Sidebar />

        <Box
<<<<<<< HEAD
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p="8"
        >
          <Flex
            mb="8"
            justify="space-between"
            align="center"
          >
            <Heading
              size="lg"
              fontWeight="normal"
=======
          flex="1" borderRadius={8} bg="gray.800"
          p="8"
        >
          <Flex
            mb="8" justify="space-between"
            align="center"
          >
            <Heading
              size="lg" fontWeight="normal"
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
            >
              Usuários
            </Heading>

            <Link href="/users/create" passHref>
              <Button
<<<<<<< HEAD
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar Novo
=======
                as="a" size="sm" fontSize="sm"
                colorScheme="pink" 
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                  Criar novo
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
              </Button>
            </Link>
          </Flex>

          <Table
            colorScheme="whiteAlpha"
          >
            <Thead>
              <Tr>
<<<<<<< HEAD
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox
                    colorScheme="pink"
                  />
                </Th>
                <Th>Usuário</Th>
                { isWideVersion && (<Th>Data de cadastro</Th>) }
                <Th width="8"></Th>
=======
                <Th px={["4", "4", "6"]} color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                { isWideVersion && <Th>Data de cadastro</Th> }
                { isWideVersion && <Th w="8" /> }
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
<<<<<<< HEAD
                  <Checkbox
                    colorScheme="pink"
                  />
                </Td>
                <Td>
                  <Box>
                    <Text
                      fontWeight="bold"
                    >
                      Estevão Gabriel
                    </Text>
                    <Text
                      fontSize="small"
                      color="gray.300"
                    >
                      estevao.biondi@gmail.com
                    </Text>
                  </Box>
                </Td>
                { isWideVersion && (<Td>04 de Dezembro, 2021</Td>) }
                <Td>
                  { isWideVersion && (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                  Editar
                </Button>
                  ) }
                </Td>
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox
                    colorScheme="pink"
                  />
=======
                  <Checkbox colorScheme="pink" />
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
                </Td>
                <Td>
                  <Box>
                    <Text
                      fontWeight="bold"
                    >
                      Estevão Gabriel
                    </Text>
                    <Text
                      fontSize="small"
                      color="gray.300"
                    >
                      estevao.biondi@gmail.com
                    </Text>
                  </Box>
                </Td>
<<<<<<< HEAD
                { isWideVersion && (<Td>04 de Dezembro, 2021</Td>) }
                <Td>
                  { isWideVersion && (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
=======
                { isWideVersion && <Td>20 de Abril, 2022</Td> }
                { isWideVersion && (
                  <Td>
                    <Button
                      as="a" size="sm" fontSize="sm"
                      colorScheme="purple" 
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      Editar
                    </Button>
<<<<<<< HEAD
                  ) }
                </Td>
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox
                    colorScheme="pink"
                  />
                </Td>
                <Td>
                  <Box>
                    <Text
                      fontWeight="bold"
                    >
                      Estevão Gabriel
                    </Text>
                    <Text
                      fontSize="small"
                      color="gray.300"
                    >
                      estevao.biondi@gmail.com
                    </Text>
                  </Box>
                </Td>
                { isWideVersion && (<Td>04 de Dezembro, 2021</Td>) }
                <Td>
                  { isWideVersion && (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                     Editar
                    </Button>
                  ) }
                </Td>
=======
                  </Td>
                ) }
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
<<<<<<< HEAD
        </Flex>
    </Box>
  )
}
=======
      </Flex>
    </Box>
  )
} 
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
