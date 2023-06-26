import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/className';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps{
    className?:string;
}
const ErrorPage:FC<ErrorPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>{t('NotFoundPage')}</p>
            <Button onClick={reloadPage}>{t('Reload page')}</Button>
        </div>
    );
};

export default ErrorPage;
