import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Code } from './Code'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <div className="page">
            <header className="header">
                <h3>./bloat<span className='cursor'>_</span></h3>
            </header>

            <div className='main'>
                <div className='article'>
                    <p>This page is a discussion on the current state of software and hardware design.</p>
                    <Code codeString={
                        `auto main() -> int {
    // TODO: Add more bloat
    return 0;
}`
                    } />
                </div>
            </div>

            <footer>
                <p><span className="copyleft">&copy;</span> 2023 Mülling</p>
                <div className='media'>
                    <a href='https://www.linkedin.com/in/mulling'>
                        <img alt='LinkedIn' src='assets/l.svg' />
                    </a>

                    <a href='https://www.github.com/mulling'>
                        <img alt='GitHub' src='assets/g.svg' />
                    </a>
                </div>
            </footer>
        </div>
    </React.StrictMode>
);
