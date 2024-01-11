import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/className';
import cls from './Overlay.module.scss';

interface Props{
    className?: string
    onClick?: ()=>void
}
const Overlay = memo((props:Props) => {
    const { className, onClick } = props;
    return (
        <div
            onClick={onClick}
            className={classNames(cls.Overlay, {}, [])}
        />
    );
});

export default Overlay;
