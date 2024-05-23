import { Card, Group, Badge, Button, Image, Text } from '@mantine/core';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');


const CardElement = () => {

    const options = {
        mode: 'payment',
        amount: 1099,
        currency: 'usd',
        // Fully customizable with appearance API.
        appearance: {
            theme: 'flat',
            size: 'responsive',
            variables: {
                // colorPrimary: '#0570de',
                // colorBackground: '#ffffff',
                // colorText: '#30313d',
                // colorDanger: '#df1b41',
                // fontFamily: 'Ideal Sans, system-ui, sans-serif',
                // spacingUnit: '2px',
                // borderRadius: '4px',
                // https://docs.stripe.com/elements/appearance-api#theme
            }
        },

    };

    return (
        <div className="card">
            {/* <h3>Enjoy ✈️</h3> */}

            <Card shadow="md" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Image
                        src={"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png"}
                        height={260}
                        alt="Norway"
                    />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>Destination 2</Text>
                    <Badge autoContrast color="pink" size="xl" variant="gradient" gradient={{ from: 'red', to: 'grape', deg: 90 }}>$ 19.99</Badge>
                </Group>

                <Text size="sm" c="dimmed">
                    With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                    activities on and around the fjords of Norway
                </Text>

                <Button color="red" mt="md" radius="md" onClick={close}>
                    cancel
                </Button>
            </Card >



            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default CardElement;