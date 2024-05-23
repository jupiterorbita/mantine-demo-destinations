import { Autocomplete, Group, Burger, rem, Container, ActionIcon } from '@mantine/core';
import { Drawer, Button } from '@mantine/core';
import { IconBrandShopee } from '@tabler/icons-react';
import CardElement from './CardElement';

import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import JMlogo from '../assets/logo-nobg.png';
import classes from './HeaderSearch.module.css';

const links = [
    { link: '/pricing', label: 'Tours' },
    { link: '/learn', label: 'Groups' },
    { link: '/community', label: 'Community' },
    { link: '/about', label: 'About' },
];

export function HeaderSearch() {
    // const [opened, { toggle }] = useDisclosure(false);
    const [opened, { open, close }] = useDisclosure(false);


    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}
            onClick={(event) => event.preventDefault()}
        >
            {link.label}
        </a>
    ));

    return (
        <header className={classes.header}>
            <Container size="xxl" className={classes.inner}>

                <Drawer
                    offset={8}
                    radius="md"
                    opened={opened}
                    onClose={close}
                    title="Let's do this! 💪"
                    position="right"
                    size="xl"
                    overlayProps={{
                        backgroundOpacity: 0.55,
                        blur: 3,
                    }}
                // withCloseButton={false}
                >
                    {/* Drawer content */}
                    <CardElement />

                </Drawer>


                <Group>
                    {/* <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" /> */}
                    <Burger size="sm" hiddenFrom="sm" />
                    <img src={JMlogo} alt="JMlogo" />
                    {/* <JMlogo size={28} /> */}
                </Group>

                <Group>
                    <Group ml={50} gap={25} className={classes.links} visibleFrom="sm">
                        {items}
                    </Group>

                    <Button onClick={open}>
                        <ActionIcon size="lg" color="gray" variant="subtle">
                            <IconBrandShopee style={{ width: rem(28), height: rem(28) }} stroke={1.5} color='white' />
                        </ActionIcon>
                    </Button>

                    <Autocomplete
                        className={classes.search}
                        placeholder="Search popular destinations"
                        leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                        data={['Heraklion', 'Angola', 'Verona', 'Prague', 'Naples', 'Seattle']}
                        visibleFrom="xs"
                    />
                </Group>
            </Container>
        </header>
    );
}

export default HeaderSearch;