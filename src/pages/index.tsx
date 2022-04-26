import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema)
  })

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)
  }

<<<<<<< HEAD
=======
  const { errors } = formState

>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            type="email"
<<<<<<< HEAD
            name="email"
            label="E-mail"
            error={errors.email}
            {...register("email")}
=======
            label="E-mail"
            error={errors.email}
            { ...register('email') }
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
          />

          <Input
            type="password"
<<<<<<< HEAD
            name="password"
            label="Senha"
            error={errors.password}
            {...register("password")}
=======
            label="Senha"
            error={errors.password}
            { ...register('password') }
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
