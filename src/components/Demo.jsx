import { useState } from 'react';
import { DateTimePicker } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {

    const [value, setValue] = useState(new Date());

    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>

            <Modal
                opened={opened}
                onClose={close}
                title="Authentication"
                overlayProps={{
                    backgroundOpacity: 0.55,
                    blur: 3,
                }}
            >
                {/* Modal content */}

                <DateTimePicker
                    dropdownType='modal'
                    value={value}
                    onChange={setValue}
                    label="Pick a Date"
                    placeholder="Pick a Date"
                    defaultValue={new Date()}
                    minDate={new Date()}
                    weekendDays={[0, 6]}
                    onClick={open}

                />
            </Modal>

            <Button onClick={open}>Open modal</Button>

            test {value.toString()}
        </>
    );
}
export default Demo;