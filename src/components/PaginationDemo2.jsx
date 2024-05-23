import { useState } from 'react';
import { Pagination, Text, Flex, Box, Center } from '@mantine/core';
import CardElem from './CardElem';


function chunk(array, size) {
    if (!array.length) {
        return [];
    }
    const head = array.slice(0, size);
    const tail = array.slice(size);
    return [head, ...chunk(tail, size)];
}

const data = chunk(
    Array.from({ length: 40 }).map((_, index) => ({
        id: index,
        name: `Destination ${index + 1}`,
        image: `https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-${index % 10}.png`,
        price: (Math.random() * 100).toFixed(2),
        description: 'With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway',
    })),
    6
);

const PaginationDemo2 = (props) => {
    const [activePage, setPage] = useState(1);
    const destinations = data[activePage - 1].map((item) => (
        <Box mx="auto" maw={500} c="blue.6" bg="#fff" key={item.id}>
            <CardElem
                price={item.price}
                name={item.name}
                image={item.image || "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"}
                description={item.description}
            />
        </Box>
        // <Text key={item.id}>
        //     id: {item.id}, name: {item.name}, price: {item.price}
        // </Text>
    ));

    return (
        <>
            <Flex mih={50}
                // bg="rgba(0, 0, 0, .3)"
                gap="lg"
                mt={50}
                justify="flex-start"
                align="flex-start"
                direction="row"
                wrap="wrap">
                {destinations}
            </Flex>
            <Center h={100} bg="var(--mantine-color-gray-light)">
                {/* <Box bg="var(--mantine-color-blue-light)">All elements inside Center are centered</Box> */}
                <Pagination total={data.length} value={activePage} onChange={setPage} mt="sm" />
            </Center>
        </>
    );
};

export default PaginationDemo2;