import React from 'react';

import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/button';
import { CloseButton } from '@chakra-ui/react';
import { Box, Heading, Text } from '@chakra-ui/layout';
import { Stat, StatGroup, StatLabel, StatNumber } from '@chakra-ui/stat';

const ToDoListCard = ({ id, name, description, tasks, deleting }) => {
    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' boxSize='80'>
            <CloseButton float='right' color='red.500' fontSize='bold' hidden={!deleting} />

            <Heading paddingTop='5' paddingLeft='5' size='sm'>
                {name}
            </Heading>

            <Text paddingTop='5' paddingLeft='5' paddingRight='5'>
                {description}
            </Text>

            <StatGroup padding='5'>
                <Stat>
                    <StatLabel>Completed</StatLabel>
                    <StatNumber>{tasks.filter((t) => t.state === 'DONE').length}</StatNumber>
                </Stat>

                <Stat>
                    <StatLabel>Pending</StatLabel>
                    <StatNumber>{tasks.filter((t) => t.state === 'TODO').length}</StatNumber>
                </Stat>
            </StatGroup>

            <Link to={`/list/${id}?name=${name}`}>
                <Button float='right' marginRight='5' marginBottom='5'>
                    View list
                </Button>
            </Link>
        </Box>
    );
};

export default ToDoListCard;
