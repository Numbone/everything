import React, { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/className';
import { Loader } from '@/shared/ui/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps{
    className?:string;
}
export const PageLoader:FC<PageLoaderProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};
