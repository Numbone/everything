import React, { ButtonHTMLAttributes, FC } from "react";
import cls from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/className";
export enum ButtonTheme{
    CLEAR="clear"
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?:ButtonTheme
}
const Button: FC<ButtonProps> = (props) => {
  const { className, children,theme, ...otherProps } = props;

  return (
    <button className={classNames(cls.Button, {[cls[theme]]:true}, [className])} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
