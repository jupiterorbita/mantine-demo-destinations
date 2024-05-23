// import './App.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import Demo from './components/Demo';
import CardElem from './components/CardElem';
import PaginationDemo from './components/PaginationDemo';
import PaginationDemo2 from './components/PaginationDemo2';

import { createTheme, MantineProvider, Flex, Group, Box, SimpleGrid } from '@mantine/core';
import { DatesProvider, } from '@mantine/dates';

const TOTAL_DESTINATIONS_COUNT = 45;
const DESTINATIONS = Array.from({ length: TOTAL_DESTINATIONS_COUNT }).map((_, index) => ({
  id: index,
  name: `Destination ${index + 1}`,
  image: `https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-${index % 10}.png`,
  price: (Math.random() * 100).toFixed(2),
  description: 'With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway',
}));

// console.log(DESTINATIONS);

const theme = createTheme({
  colorScheme: 'dark',
  colors: {
    blue: ['#eff6ff', '#dbeafe', '#bfdbfe', '#93c5fd', '#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af', '#1e3a8a'],
  },
  fontFamily: 'Arial',
});

function App() {

  return (
    <>
      <MantineProvider theme={theme} >

        <DatesProvider settings={{ locale: 'en', firstDayOfWeek: 0 }}>
          <Demo />
        </DatesProvider>

        <hr />

        <Flex mih={50}
          // bg="rgba(0, 0, 0, .3)"
          gap="lg"
          justify="flex-start"
          align="flex-start"
          direction="row"
          wrap="wrap">
          {/* <Group justify='flex-start' gap="lg" p='22'> */}


          {/* <Box mx="auto" maw={400} c="blue.6" bg="#fff">
            <CardElem price={9.99} />
          </Box>

          <Box mx="auto" maw={400} c="blue.6" bg="#fff">
            <CardElem price={19.99} />
          </Box> */}
          {/* </Group> */}

          {/* ========= TEST ========= */}
          {/* {
            DESTINATIONS.map((destination) => (
              <Box mx="auto" maw={400} c="blue.6" bg="#fff" key={destination.id}>
                <CardElem
                  price={destination.price}
                  name={destination.name}
                  image={destination.image}
                  description={destination.description}
                />
              </Box>
            ))
          } */}

          <Box mx="auto" maw={400} c="blue.6" bg="#fff">
            <div style={{ backgroundColor: "red", color: "white" }}>asd</div>
          </Box>
        </Flex>

        {/* <SimpleGrid cols={5}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>5</div>
          <div>5</div>
          <div>5</div>
        </SimpleGrid> */}

        <hr />

        <PaginationDemo />

        <hr />
        <PaginationDemo2 DESTINATIONS={DESTINATIONS} />
      </MantineProvider >

    </>
  );
}

export default App;
