import { Center, Heading } from "@chakra-ui/react"

const CalendarHidden = () =>{
    return <Center height="400px" width="100%" borderRadius="md" boxShadow="sm" backgroundColor="gray.100">
    <Heading padding="5" size="md" textAlign="center" color="gray.600">
      Please login or create an account to view the calendar!
    </Heading>
  </Center>
}

export default CalendarHidden;