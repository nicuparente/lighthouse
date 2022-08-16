import { Center, Flex, Heading } from "@chakra-ui/react";
import UserHeroCard from "../components/User/UserHeroCard";

// TODO: Remove once real data is available
import { UserSample, UserSample2 } from "../sample/UserSample";

const Connect = (props) => {

    const user = UserSample;



    return <>
        <Flex 
         minWidth="100%"
         minHeight="100%"
         flexDirection="column"
         alignContent="stretch"
         >
            <Center marginY="20px">
                <Heading>Lets spark some conversations. </Heading>
            </Center>
            {/* TODO: iterate through mentors */}
            <UserHeroCard user={user}/>
            <UserHeroCard user={UserSample2}/>
        </Flex>
    </>
}

export default Connect;