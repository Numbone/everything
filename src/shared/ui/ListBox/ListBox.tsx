import { useState, Fragment } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import cls from './ListBox.module.scss';

const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
];

export function MyListbox() {
    const [selectedPerson, setSelectedPerson] = useState(people[0]);

    return (
        <HListBox
            as="div"
            value={selectedPerson}
            onChange={setSelectedPerson}
            className={cls.ListBox}
        >
            <HListBox.Button className={cls.trigger}>{selectedPerson.name}</HListBox.Button>
            <HListBox.Options className={cls.options}>
                {people.map((person) => (
                    <HListBox.Option
                        key={person.id}
                        value={person}
                        disabled={person.unavailable}
                        as={Fragment}
                    >
                        {({ active, selected }) => (
                            <li
                                className={cls.item}
                            >
                                {selected && '!!!'}
                                {person.name}
                            </li>

                        )}
                    </HListBox.Option>
                ))}
            </HListBox.Options>
        </HListBox>
    );
}
