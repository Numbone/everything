import React, {
    FC, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/className';
import { useTheme } from 'app/providers/ThemeProvider';
import { Portal } from 'shared/ui/Portal/Portal';
import Overlay from 'shared/ui/Overlay/Overlay';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import cls from './Modal.module.scss';

interface ModalProps{
    className:string|'';
    children?:React.ReactNode;
    isOpen:boolean;
    onClose:()=>void;
    lazy?:boolean;
}

const ANIMATION_DELAY = 300;

const Modal:FC<ModalProps> = ({
    className, children, isOpen, onClose, lazy,
}) => {
    const { close, isClosing, isMounted } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });
    const { theme } = useTheme();

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}>
                <Overlay onClick={close} />
                <div
                    className={cls.content}
                >
                    {children}
                </div>

            </div>
        </Portal>

    );
};

export default Modal;
