import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/className';
import { useTranslation } from 'react-i18next';
import Modal from 'shared/ui/Modal/ui/Modal';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}
const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                onClick={() => setIsOpen(true)}
                theme={ButtonTheme.CLEAR}
                className={cls.links}
            >
                {t('Login')}
            </Button>
            <LoginModal isOpen={isOpen} setIsOpen={() => setIsOpen(false)} />
        </div>
    );
};

export default Navbar;
