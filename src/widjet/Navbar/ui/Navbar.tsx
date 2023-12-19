import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/className';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import { Avatar } from 'shared/ui/Avatar/Avatar';
import { HStack } from 'shared/ui/Stack/HStack/HStack';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { Dropdown, Popover } from 'shared/ui/Popups';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}
const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
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
    const isAdminPanelAvailable = isAdmin || isManager;

    if (authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t('App')}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createBtn}
                >
                    {t('Создать статью')}
                </AppLink>
                <HStack gap="16" className={cls.actions}>
                    <Popover trigger={(
                        <Button theme={ButtonTheme.CLEAR}>
                            <Icon Svg={NotificationIcon} />
                        </Button>

                    )}
                    >
                        123
                    </Popover>

                    <Dropdown
                        direction="bottom left"
                        className={cls.dropdown}
                        items={[
                            ...(isAdminPanelAvailable ? [{
                                content: t('Админ'),
                                href: RoutePath.admin_panel,
                            }] : []),
                            {
                                content: t('Профиль'),
                                href: RoutePath.profile + authData.id,
                            },
                            {
                                content: t('Выйти'),
                                onClick: onLogout,
                            },
                        ]}
                        trigger={<Avatar size={30} src={authData.avatar} />}
                    />
                </HStack>

                {/* <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button> */}
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
            {
                isOpen && <LoginModal isOpen={isOpen} setIsOpen={onCloseModal} />
            }

        </div>
    );
};

export default Navbar;
