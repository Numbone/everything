import { useTheme } from 'app/providers/ThemeProvider';
import React from 'react';
import { Mods, classNames } from 'shared/lib/classNames/className';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import Overlay from '../Overlay/Overlay';

interface Props{
    className?:string;
    children:React.ReactNode;
    isOpen?:boolean;
    onClose:() => void;
}

const Drawer = (props:Props) => {
    const {
        className, children, onClose, isOpen,
    } = props;

    const { theme } = useTheme();

    const mods:Mods = {
        [cls.opened]: isOpen,
    };
    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={onClose} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>

    );
};

export default Drawer;
