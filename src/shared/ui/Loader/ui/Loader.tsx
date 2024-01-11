import React, { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/className';
import './Loader.scss';

interface LoaderProps{
    className?:string;
}
export const Loader:FC<LoaderProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames('lds-ellipsis', {}, [className])}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};
