import { Center, Heading } from "@chakra-ui/react"

const CalendarHidden = () =>{
    return <Center borderRadius="md" boxShadow="sm" backgroundColor="gray.100">
    <Heading size="md" textAlign="center" color="gray.600">
      Please login or create an account to view the calendar!
    </Heading>
  </Center>
}

export default CalendarHidden;