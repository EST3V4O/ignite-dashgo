import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'As senhas precisam ser iguais')
})

export default function CrateUser() {
  const { register, handleSubmit, formState } = useForm<CreateUserFormData>({
    resolver: yupResolver(createUserFormSchema)
  })

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)
  }

<<<<<<< HEAD
=======
  const { errors } = formState

>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
  return (
    <Box>
      <Header />

      <Flex
<<<<<<< HEAD
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
=======
        w="100%" my="6" maxWidth={1400} mx="auto"
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
        px="6"
      >
        <Sidebar />

        <Box
          as="form"
<<<<<<< HEAD
          flex="1"
          borderRadius={8}
          bg="gray.800"
=======
          flex="1" borderRadius={8} bg="gray.800"
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading
<<<<<<< HEAD
            size="lg"
            fontWeight="normal"
=======
            size="lg" fontWeight="normal"
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
          >
            Criar usuário
          </Heading>

<<<<<<< HEAD
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid
              minWidth="240px"
              spacing={["6", "8"]}
              w="100%"
            >
              <Input
                name="name"
                label="Nome completo"
                error={errors.name}
                {...register("name")}
              />
              <Input
                name="email"
                label="E-mail"
                type="email"
                error={errors.email}
                {...register("email")}
=======
          <Divider
            my="6" borderColor="gray.700"
          />

          <VStack spacing="8">
            <SimpleGrid
              minWidth="240px" spacing={["6", "8"]} w="100%"
            >
              <Input
                type="text"
                label="Nome completo"
                error={errors.name}
                { ...register("name") }
              />
              <Input
                type="email"
                label="E-mail"
                error={errors.email}
                { ...register("email") }
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
              />
            </SimpleGrid>

            <SimpleGrid
<<<<<<< HEAD
              minWidth="240px"
              spacing={["6", "8"]}
              w="100%"
            >
              <Input
                name="password"
                type="password"
                label="Senha"
                error={errors.password}
                {...register("password")}
              />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmação da senha"
                error={errors.password_confirmation}
                {...register("password_confirmation")}
=======
              minWidth="240px" spacing={["6", "8"]} w="100%"
            >
              <Input
                type="password"
                label="Senha"
                error={errors.password}
                { ...register("password") }
              />
              <Input
                type="password"
                label="Confirmação da senha"
                error={errors.password_confirmation}
                { ...register("password_confirmation") }
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
              />
            </SimpleGrid>
          </VStack>

          <Flex
            mt="8"
            justify="flex-end"
          >
<<<<<<< HEAD
            <HStack
              spacing="4"
            >
              <Link href="/users" passHref>
                <Button
                  as="a"
=======
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
                  colorScheme="whiteAlpha"
                >
                  Cancelar
                </Button>
              </Link>
              <Button
<<<<<<< HEAD
                colorScheme="pink"
                type="submit"
=======
                type="submit"
                colorScheme="pink"
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
<<<<<<< HEAD
}
=======
} 
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
