import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [spin, setSpin] = useState(false);
    useEffect(() => { console.log(spin) }, [spin])
    return (
        <div className="App">
            <header className="App-header">
                <p> <b>Hello World</b> </p>
                <img
                    src="tux.png"
                    className={spin ? `spin` : undefined}
                    onClick={() => { console.log("test"); setSpin(!spin) }}
                />
            </header>
        </div>
    );
}

export default App;
