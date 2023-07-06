import React from 'react';
import Button from 'shared/ui/Button/Button';

const Counter = () => {
    const increment = () => {
        console.log('increment');
    };
    const decrement = () => {
        console.log('decrement');
    };
    return (
        <div>
            <h1>123</h1>
            <Button onClick={increment}>
                +
            </Button>
            <Button onClick={decrement}>
                -
            </Button>
        </div>
    );
};

export default Counter;
