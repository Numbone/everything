import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/className';
import { Navbar } from 'widjet/Navbar';
import { Sidebar } from 'widjet/Sidebar';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { AppRouter } from './providers/Providers/router';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    return (
        <div className={classNames('app', {}, [theme])}>

            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>

        </div>
    );
};

export default App;
