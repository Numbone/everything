import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/className';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps{
    className?:string;
}
const NotFoundPage:FC<NotFoundPageProps> = () => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NotFoundPage, {}, [])}>
            {t('NotFoundPage')}
        </div>
    );
};

export default NotFoundPage;
