import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface AboutPageProps{
    className?:string;
}
const AboutPage:FC<AboutPageProps> = ({ className }) => {
    const { t } = useTranslation('about');
    return (
        <div>{t('about')}</div>
    );
};

export default AboutPage;
