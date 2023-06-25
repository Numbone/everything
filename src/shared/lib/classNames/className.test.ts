import { classNames } from './className';

describe('className', () => {
    test('with only first param', () => {
        expect(classNames('someTest')).toBe('someTest');
    });

    test('with additional class', () => {
        expect(classNames('someTest', {}, ['class1', 'class2'])).toBe('someTest class1 class2');
    });

    test('with mods', () => {
        expect(classNames('someTest', { hovered: true, scrollable: true }, ['class1', 'class2'])).toBe('someTest class1 class2 hovered scrollable');
    });

    test('with mods false', () => {
        expect(classNames('someTest', { hovered: true, scrollable: false }, ['class1', 'class2'])).toBe('someTest class1 class2 hovered');
    });

    test('with mods undefined', () => {
        expect(classNames('someTest', { hovered: true, scrollable: undefined }, ['class1', 'class2'])).toBe('someTest class1 class2 hovered');
    });
});
