import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <div className="page">
            <header className="header">
                <h2>./bloat<span className='cursor'>_</span></h2>
            </header>

            <div className='article'> <span> {"//"}&nbsp;</span> <span className='TODO'> TODO</span> <span>: Add more bloat</span> </div>

            <footer>
                <h4><span className="copyleft">&copy;</span>Lucas Eduardo Fischer Mülling</h4>
                <div className='media'>
                    <a href='https://www.linkedin.com/in/mulling'>
                        <img alt='LinkedIn Logo' src='assets/linkedin.svg' />
                    </a>

                    <a href='https://www.github.com/mulling'>
                        <img alt='GitHub Logo' src='assets/github.svg' />
                    </a>
                </div>
            </footer>
        </div>
    </React.StrictMode>
);
