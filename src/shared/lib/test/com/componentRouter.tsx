import { render } from '@testing-library/react';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTest from 'shared/config/i18n/i18nForTest';

export interface componentRouterOptions{
    route?:string;
}
export function componentRouter(component:React.ReactNode, options:componentRouterOptions = {}) {
    const { route = '/' } = options;
    return render(
        <MemoryRouter>
            <I18nextProvider i18n={i18nForTest}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
}
