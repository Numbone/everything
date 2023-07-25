import React, {
    FC, memo, useCallback, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/className';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions, loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginError } from 'features/AuthByUserName/model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from 'features/AuthByUserName/model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from 'features/AuthByUserName/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from 'features/AuthByUserName/model/selectors/getLoginUsername/getLoginUsername';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './LoginForm.module.scss';
import { loginByUsername } from '../../model/service/loginByUserName/loginByUsername';

export interface LoginFormProps {
    className?:string
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm:FC<LoginFormProps> = memo((props:LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();

    // const store = useStore() as ReduxStoreWithManager;
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);
    // useEffect(() => {
    //     store.reducerManager.add('loginForm', loginReducer);
    //     return () => {
    //         store.reducerManager.remove('loginForm');
    //     };
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    const onChangeUsername = useCallback((value:string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value:string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }) as any);
    }, [dispatch, password, username]);

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={initialReducers}
        >
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Форма авторизации')} />
                {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
                <Input
                    autofocus
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите username')}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите пароль')}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    disabled={isLoading}
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                >
                    {t('Login')}
                </Button>
            </div>
        </DynamicModuleLoader>

    );
});

export default (LoginForm);
