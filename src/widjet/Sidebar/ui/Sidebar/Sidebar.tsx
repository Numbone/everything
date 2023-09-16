import React, {
    FC, memo, useMemo, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/className';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import LangSwitcher from 'shared/ui/LangSwitcher/ui/LangSwitcher';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';

import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}
export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    const SidebarItemsList = useSelector(getSidebarItems);
    const itemsList = useMemo(() => SidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [SidebarItemsList, collapsed]);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={classNames(cls.collapsedBtn, {}, [])}
                data-testid="sidebar-toggle"
                onClick={onToggle}
                type="button"
                square
            >
                {collapsed ? '>' : '<' }
            </Button>
            <div className={cls.items}>
                {itemsList}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
});
