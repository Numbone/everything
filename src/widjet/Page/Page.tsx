import {
    memo, MutableRefObject, ReactNode, useRef, UIEvent,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/className';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { uiActions } from '@/features/ScrollRestoration';
import { getUIScrollByPath } from '@/features/ScrollRestoration/model/selectors/getUIScroll';
import { StateSchema } from '@/app/providers';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import styles from './Page.module.scss';

interface Props{
    children: ReactNode;
    className?: string;
    onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

const Page = (props:Props) => {
    const { children, className, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state:StateSchema) => getUIScrollByPath(state, pathname));
    const onScroll = useThrottle((e:UIEvent<HTMLDivElement>) => {
        dispatch(uiActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });
    useInitialEffect(() => { wrapperRef.current.scrollTop = scrollPosition; });
    return (
        <section
            className={classNames(styles.page_wrapper, {}, [className])}
            ref={wrapperRef}
            onScroll={onScroll}
            id={PAGE_ID}
        >
            {children}
            {
                onScrollEnd ? <div className={styles.trigger} ref={triggerRef} /> : null

            }

        </section>
    );
};

export { Page };
