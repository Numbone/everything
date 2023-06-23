import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/className';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import LangSwitcher from 'shared/ui/LangSwitcher/ui/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}
const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <button onClick={onToggle} type="button">toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};

export default Sidebar;
