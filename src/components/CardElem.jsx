import { Card, Image, Text, Badge, Button, Group, Modal, SimpleGrid } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';
import { Carousel } from '@mantine/carousel';





const carouselImages = [
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
    // 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    // 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    // 'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    // 'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    // 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    // 'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
];

const slides = carouselImages.map((url) => (
    <Carousel.Slide key={url}>
        <Image src={url} width={100} />
    </Carousel.Slide>
));

const CardElem = ({ price, name, image, description }) => {

    const images = [
        'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
        'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
        'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
        // 'https://source.unsplash.com/random/301×301',
        // 'https://source.unsplash.com/random/302×302',
        // 'https://source.unsplash.com/random/303×303'
        // 'https://source.unsplash.com/random/?trip/301×301',
        // 'https://source.unsplash.com/random/?trip/302×302',
        // 'https://source.unsplash.com/random/?trip/303×303'
    ];

    if (!price && !name && !image && !description) return null;
    if (image === 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-0.png') {
        image = 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png';
    }

    const [opened, { open, close }] = useDisclosure(false);
    const [opened2, { open2, close2 }] = useDisclosure(false);


    const [value, setValue] = useState([new Date(), new Date()]);



    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title="Choose your dream destination"
                overlayProps={{
                    backgroundOpacity: 0.55,
                    blur: 3,
                }}
                size="55rem"
            >
                <>
                    <Card shadow="md" padding="lg" radius="md" withBorder>
                        <Card.Section>
                            <Image
                                src={image || "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"}
                                height={260}
                                alt="Norway"
                            />
                            {/* <Carousel withIndicators>{slides}</Carousel> */}
                        </Card.Section>

                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={500}>{name}</Text>
                            <Badge autoContrast color="pink" size="xl" variant="gradient" gradient={{ from: 'red', to: 'grape', deg: 90 }}>$ {price}</Badge>
                        </Group>

                        <Card.Section >
                            <SimpleGrid cols={3} gap="md">
                                {images.map((img, index) => (
                                    <Image
                                        key={index}
                                        src={img}
                                        height={200}
                                        alt="Norway"
                                        radius="md"
                                    />
                                ))}
                            </SimpleGrid>
                        </Card.Section>

                        <Text size="sm" c="dimmed" mt="20">
                            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                            activities on and around the fjords of Norway
                        </Text>

                        {/* ------------- inside date ------------- */}
                        <DatePickerInput
                            // dropdownType='modal'
                            type='range'
                            value={value}
                            onChange={setValue}
                            label="Pick dates range"
                            placeholder="Pick dates range"
                            // defaultValue={new Date()}
                            minDate={new Date()}
                            weekendDays={[0, 6]}
                            size="lg"
                            withAsterisk
                            radius="xl"
                        />
                        {/* ------------- inside date ------------- */}




                        <Button color="blue" fullWidth mt="md" radius="md" onClick={close} >
                            Book classic tour now
                        </Button>


                    </Card >
                </>
            </Modal>
            <Card shadow="md" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Image
                        src={image || "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"}
                        height={260}
                        alt="Norway"
                    />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>{name}</Text>
                    <Badge autoContrast color="pink" size="xl" variant="gradient" gradient={{ from: 'red', to: 'grape', deg: 90 }}>$ {price}</Badge>
                </Group>

                <Text size="sm" c="dimmed">
                    With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                    activities on and around the fjords of Norway
                </Text>

                <Button color="blue" fullWidth mt="md" radius="md" onClick={open}>
                    Book classic tour now
                </Button>
            </Card >
        </>
    );
};

export default CardElem;