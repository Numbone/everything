import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/className';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features';
import { getUserAuthData, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}
const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);
    const [isOpen, setIsOpen] = useState(false);
    const onCloseModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsOpen(true);
    }, []);
    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);
    console.log(isOpen, 'isOpen');
    if (authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
            </div>
        );
    }
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                onClick={onShowModal}
                theme={ButtonTheme.CLEAR}
                className={cls.links}
            >
                {t('Login')}
            </Button>
            <LoginModal isOpen={isOpen} setIsOpen={onCloseModal} />
        </div>
    );
};

export default Navbar;
