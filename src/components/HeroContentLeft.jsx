import { Overlay, Container, Title, Button, Text, Box, Center } from '@mantine/core';
import classes from './HeroContentLeft.module.css';

export function HeroContentLeft() {
    return (
        <div className={classes.hero}>
            <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
                opacity={1}
                zIndex={0}
            />
            <Container className={classes.container} size="md">
                <Title pt={35} className={classes.title}>Visit your dream vacation! </Title>
                <Text className={classes.description} size="xl" mt="xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatibus tempore nostrum distinctio magni, enim odit odio omnis modi nemo provident suscipit officiis illo doloremque aspernatur ipsum nihil. Dolor, similique?
                </Text>

                {/* <Button variant="gradient" size="xl" radius="xl" className={classes.control}>
                    Get started
                </Button> */}
            </Container>
        </div>
    );
}

export default HeroContentLeft;