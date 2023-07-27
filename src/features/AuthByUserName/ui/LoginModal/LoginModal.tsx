import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/className';
import { Modal } from 'shared/ui/Modal';
import { useTranslation } from 'react-i18next';
import cls from './LoginModal.module.scss';
import { LoginFormAsync } from '../LoginForm/LoginFrom.async';

interface LoginModalProps{
    className?: string|'',
    isOpen:boolean,
    setIsOpen:()=>void
}
const LoginModal:FC<LoginModalProps> = (props:LoginModalProps) => {
    const { className, isOpen, setIsOpen } = props;
    const { t } = useTranslation();
    return (
        <Modal
            onClose={setIsOpen}
            isOpen={isOpen}
            className={classNames('', {}, [className])}
            lazy
        >
            <LoginFormAsync onSuccess={setIsOpen} />
        </Modal>
    );
};

export default LoginModal;
