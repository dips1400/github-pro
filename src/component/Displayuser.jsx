import React from "react";
import { Image,Stack,Divider,Heading,Text } from "@chakra-ui/react";
import { Card,  CardBody, CardFooter, } from '@chakra-ui/react'
import styles from './style.module.css'

const Displayuser = ({ data }) => {

    const date_of_cre = data.created_at;
  return (

    <Card maxW='sm' className={styles.card}>
  <CardBody className={styles.cardBody}>
    {!data.avatar_url ? (
              "No profile image available"
            ) : (
              <Image className={styles.avatar}
                src={data.avatar_url}
                alt={data.avatar_url}
              />)}
    <Stack mt='6' spacing='3' className={styles.stack}>
      <Heading size='md' className={styles.stack}>{data.name}</Heading>

      <Text color='blue.600' fontSize='2xl' className={styles.stack}>
        Username : {data.login}
      </Text>
      <Text color='blue.600' fontSize='2xl'className={styles.stack}>
        Public Repos : {data.public_repos}
      </Text>
      <Text color='blue.600' fontSize='2xl' className={styles.stack}>
        Gist Repos : {data.public_gists}
      </Text>
      <Text color='blue.600' fontSize='2xl' className={styles.stack}>
        Date of creation : { date_of_cre.slice(0, -10)}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
  </CardFooter>
</Card>
  );
};

export default Displayuser;