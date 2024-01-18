import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    getUserAuthData,
} from '@/entities/User';
import { LoginModal } from '@/features';
import { AvatarDropdown } from '@/features/avatatDropdown';
import { NotificationButton } from '@/features/notificationButton';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { classNames } from '@/shared/lib/classNames/className';
import AppLink, { AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import Button, { ButtonTheme } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}
const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const authData = useSelector(getUserAuthData);
    const [isOpen, setIsOpen] = useState(false);
    const onCloseModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsOpen(true);
    }, []);

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
                    <NotificationButton />
                    <AvatarDropdown authData={authData} />
                </HStack>
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
