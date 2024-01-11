import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widjet/Page/Page';

interface AboutPageProps{
    className?:string;
}
const AboutPage:FC<AboutPageProps> = ({ className }) => {
    const { t } = useTranslation('about');
    return (
        <Page>{t('about')}</Page>
    );
};

export default AboutPage;
