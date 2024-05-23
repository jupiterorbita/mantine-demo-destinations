import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandGithub, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react';
import classes from './FooterLinks.module.css';
import JMlogo from '../assets/logo-nobg.png';

const data = [
    // {
    //     title: 'About',
    //     links: [
    //         { label: 'Features', link: '#' },
    //         { label: 'Pricing', link: '#' },
    //         { label: 'Support', link: '#' },
    //         { label: 'Forums', link: '#' },
    //     ],
    // },
    {
        title: 'Project',
        links: [
            { label: 'Contribute', link: '#' },
            { label: 'Media assets', link: '#' },
            { label: 'Changelog', link: '#' },
            { label: 'Releases', link: '#' },
        ],
    },
    // {
    //     title: 'Community',
    //     links: [
    //         { label: 'Join Discord', link: '#' },
    //         { label: 'Follow on Twitter', link: '#' },
    //         { label: 'Email newsletter', link: '#' },
    //         { label: 'GitHub discussions', link: '#' },
    //     ],
    // },
];

export function FooterLinks() {
    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Text
                key={index}
                className={classes.link}
                component="a"
                href={link.link}
                onClick={
                    (event) => event.preventDefault()
                }
            >
                {link.label}
            </Text >
        ));

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        );
    });

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    {/* <JMlogo size={30} /> */}
                    <img src={JMlogo} alt="JMlogo" />
                    <Text size="xs" c="dimmed" className={classes.description}>
                        Blah blah blah blah blah blah blah blah blah blah
                    </Text>
                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter}>
                <Text c="dimmed" size="md">
                    © 2024 JMdev. All rights reserved.
                </Text>

                <Group gap={10} className={classes.social} justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandX style={{ width: rem(28), height: rem(28) }} stroke={2.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandLinkedin style={{ width: rem(28), height: rem(28) }} stroke={2.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandGithub style={{ width: rem(28), height: rem(28) }} stroke={2.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    );
}

export default FooterLinks;