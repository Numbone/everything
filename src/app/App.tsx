import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/className';
import { Navbar } from 'widjet/Navbar';
import { Sidebar } from 'widjet/Sidebar';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, getUserInited, userActions } from 'entities/User';
import { PageLoader } from 'shared/ui/PageLoader';
import { AppRouter } from './providers/Providers/router';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <section className="content-page">
                    <Sidebar />
                    {inited && <AppRouter />}
                </section>
            </Suspense>
        </div>
    );
};

export default App;
