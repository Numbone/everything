import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/className';
import Button from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginState } from 'features/AuthByUserName/model/selectors/getLoginState/getLoginState';
import { loginActions } from 'features/AuthByUserName/model/slice/loginSlice';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/service/loginByUserName/loginByUsername';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?:string
}
const LoginForm:FC<LoginFormProps> = (props:LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);
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
            <Button disabled={isLoading} className={cls.loginBtn} onClick={onLoginClick}>
                123
            </Button>
        </div>
    );
};

export default memo(LoginForm);
