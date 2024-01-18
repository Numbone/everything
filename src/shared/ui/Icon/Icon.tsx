import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/className';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?:string;
}

export const Icon = memo((props: IconProps) => {
    const {
        className, Svg, inverted, ...otherProps
    } = props;

    return (
        <Svg
            className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])}
            {...otherProps}
        />
    );
});
