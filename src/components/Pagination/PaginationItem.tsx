import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
<<<<<<< HEAD
  number: number;
  isCurrent?: boolean;
}

export function PaginationItem({ isCurrent = false, number }: PaginationItemProps) {
  if(isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor :"pink.500",
          cursor: "default"
        }}
      >
        {number}
      </Button>
    )
=======
  isCurrent?: boolean;
  number: number;
}

export function PaginationItem({ isCurrent = false, number }: PaginationItemProps) {

  if(isCurrent) {
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      colorScheme="pink"
      disabled
      _disabled={{
        bg: "pink.500",
        cursor: 'default'
      }}
    >
      {number}
    </Button>
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg="gray.700"
      _hover={{
        bg: "gray.500" 
      }}
    >
      {number}
    </Button>
  )
}