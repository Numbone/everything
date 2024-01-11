import React, { ButtonHTMLAttributes, FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/className';
import cls from './Button.module.scss';

export enum ButtonTheme{
    CLEAR='clear',
    CLEAR_INVERTED='clearInverted',
    OUTLINE='outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND='background',
    BACKGROUND_INVERTED='backgroundInverted'
}

export enum ButtonSize{
    M='size_m',
    L='size_l',
    Xl='size_xl'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?:ButtonTheme;
  square?:boolean;
  size?:ButtonSize
  disabled?:boolean;
}
const Button: FC<ButtonProps> = (props) => {
    const {
        className, children, theme = ButtonTheme.OUTLINE, square, size = ButtonSize.L, disabled, ...otherProps
    } = props;
    const mods:Record<string, boolean|undefined> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };
    return (
        <button disabled={disabled} type="button" className={classNames(cls.Button, mods, [className])} {...otherProps}>
            {children}
        </button>
    );
};

export default memo(Button);
