import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/className';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile/model/types/profile';
import { Loader } from 'shared/ui/Loader';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps{
    className?: string
    data?:Profile
    isLoading?:boolean,
    error?:string
}
export const ProfileCard = (props:ProfileCardProps) => {
    const {
        className, data, isLoading, error,
    } = props;
    const { t } = useTranslation('profile');
    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }
    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('profile.loadingError')}
                    text={t('profile.refresh')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('profile.name')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('profile.surname')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
