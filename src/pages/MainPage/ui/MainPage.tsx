import { Listbox } from '@headlessui/react';
import { Counter } from 'entities/Counter';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { MyListbox } from 'shared/ui/ListBox/ListBox';
import { HStack } from 'shared/ui/Stack/HStack/HStack';
import { Page } from 'widjet/Page/Page';

interface MainPageProps{
    className?:string;
}
const MainPage:FC<MainPageProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <Page>
            {t('Home')}
            <div>12313</div>
            <div>12313</div>
            1
            <HStack>
                <div>1</div>
                <MyListbox
                    onChange={(value) => console.log(value)}
                    defaultValue="Select value"
                    value={undefined}
                    items={[
                        { content: '1', value: '1', disabled: false },
                        { content: '2', value: '2', disabled: false },
                        { content: '3', value: '3', disabled: false },
                        { content: '4', value: '1', disabled: false },
                    ]}
                />
            </HStack>
            <div>12313</div>
            <div>12313</div>
            <div>12313</div>
        </Page>
    );
};

export default MainPage;
