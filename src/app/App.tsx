import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/className';
import { Navbar } from 'widjet/Navbar';
import { Sidebar } from 'widjet/Sidebar';
import { Suspense } from 'react';
import { AppRouter } from './providers/Providers/router';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />

                </div>
            </Suspense>
        </div>
    );
};

export default App;
