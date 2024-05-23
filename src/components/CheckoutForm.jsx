import { PaymentElement } from '@stripe/react-stripe-js';

const buttonStyle = {
    padding: '10px 15px',
    fontSize: '16px',
    cursor: 'pointer',
    display: 'block',
    margin: '10px 0',
    width: '100%',
    backgroundColor: 'steelblue',
    color: 'var(--mantine-color-white)',
    border: 'none',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, .1)',
};

const CheckoutForm = () => {
    return (
        <form>
            <PaymentElement />
            <p></p>
            <button style={buttonStyle}>Submit</button>
        </form >
    );
};

export default CheckoutForm;