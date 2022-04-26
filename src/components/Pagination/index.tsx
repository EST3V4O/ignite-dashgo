<<<<<<< HEAD
import { Stack, Button, Box } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'
=======
import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b

export function Pagination() {
  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack
<<<<<<< HEAD
        direction="row"
        spacing="2"
      >
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
        <PaginationItem number={6} />
      </Stack>
    </Stack>
=======
        direction="row" spacing="2"
      >
        <PaginationItem isCurrent number={1} />
        <PaginationItem isCurrent number={2} />
        <PaginationItem isCurrent number={3} />
        <PaginationItem isCurrent number={4} />
        <PaginationItem isCurrent number={5} />
        <PaginationItem isCurrent number={6} />
      </Stack>
    </Stack>    
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
  )
}