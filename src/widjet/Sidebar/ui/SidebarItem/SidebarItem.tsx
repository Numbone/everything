import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/className';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widjet/Sidebar/model/type/item';
import { useTranslation } from 'react-i18next';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps{
    item: SidebarItemType;
    collapsed: boolean;
}
const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
};

export default memo(SidebarItem);
