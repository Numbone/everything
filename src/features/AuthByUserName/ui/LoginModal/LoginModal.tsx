import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/className';
import { Modal } from 'shared/ui/Modal';
import { useTranslation } from 'react-i18next';
import cls from './LoginModal.module.scss';
import LoginForm from '../LoginForm/LoginForm';

interface LoginModalProps{
    className?: string,
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
            className={classNames(cls.LoginModal, {}, [className])}
            lazy
        >
            <LoginForm />
        </Modal>
    );
};

export default LoginModal;
