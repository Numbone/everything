import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/className';
import cls from './Button.module.scss';

export enum ButtonTheme{
    CLEAR='clear'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?:ButtonTheme
}
const Button: FC<ButtonProps> = (props) => {
    const {
        className, children, theme, ...otherProps
    } = props;

    return (
        <button type="button" className={classNames(cls.Button, { [cls[theme]]: true }, [className])} {...otherProps}>
            {children}
        </button>
    );
};

export default Button;
