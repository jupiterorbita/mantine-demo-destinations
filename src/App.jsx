// import './App.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import Demo from './components/Demo';
import CardElem from './components/CardElem';
import PaginationDemo from './components/PaginationDemo';
import PaginationDemo2 from './components/PaginationDemo2';
import classes from './App.module.css';
import HeaderSearch from './components/HeaderSearch';
import FooterLinks from './components/FooterLinks';
import HeroContentLeft from './components/HeroContentLeft';

import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandGithub, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react';


import { createTheme, MantineProvider, Flex, Group, Box, SimpleGrid, Title, ActionIcon, rem } from '@mantine/core';
import { Overlay, Container, Button, Text } from '@mantine/core';

import { DatesProvider, } from '@mantine/dates';

const TOTAL_DESTINATIONS_COUNT = 55;
const DESTINATIONS = Array.from({ length: TOTAL_DESTINATIONS_COUNT }).map((_, index) => ({
  id: index,
  name: `Destination ${index + 1}`,
  image: `https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-${Math.floor(Math.random() * 8) + 1}.png`,
  // image: `https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-${index % 10}.png`,
  price: (Math.random() * 100).toFixed(2),
  description: 'With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway',
}));

console.log(DESTINATIONS);

const theme = createTheme({
  // colorScheme: 'dark',
  colors: {
    blue: ['#eff6ff', '#dbeafe', '#bfdbfe', '#93c5fd', '#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af', '#1e3a8a'],
  },
  fontFamily: 'Arial',
});

function App() {

  return (
    <>
      <MantineProvider theme={theme} >
        <HeaderSearch />

        <HeroContentLeft />

        {/* <PaginationDemo /> */}

        <PaginationDemo2 DESTINATIONS={DESTINATIONS} />

        <FooterLinks />
        
      </MantineProvider >

    </>
  );
}

export default App;
