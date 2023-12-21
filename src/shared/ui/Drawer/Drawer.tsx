import { useTheme } from 'app/providers/ThemeProvider';
import React from 'react';
import { Mods, classNames } from 'shared/lib/classNames/className';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import Overlay from '../Overlay/Overlay';

interface Props{
    className?:string;
    children:React.ReactNode;
    isOpen?:boolean;
    onClose:() => void;
    lazy?: boolean;
}

const Drawer = (props:Props) => {
    const {
        className, children, onClose, isOpen, lazy,
    } = props;

    const {
        close,
        isClosing,
        isMounted,
    } = useModal({
        animationDelay: 300,
        onClose,
        isOpen,
    });

    const { theme } = useTheme();

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>

    );
};

export default Drawer;
