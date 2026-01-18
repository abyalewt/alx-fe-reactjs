import { useState } from 'react';

function Counter() {
    // Initialize state with 0
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: 'center', margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
            <p style={{ fontSize: '24px' }}>Current Count: {count}</p>

            {/* Increment button */}
            <button
                onClick={() => setCount(count + 1)}
                style={{ margin: '5px', padding: '10px 20px', cursor: 'pointer' }}
            >
                Increment
            </button>

            {/* Decrement button */}
            <button
                onClick={() => setCount(count - 1)}
                style={{ margin: '5px', padding: '10px 20px', cursor: 'pointer' }}
            >
                Decrement
            </button>

            {/* Reset button */}
            <button
                onClick={() => setCount(0)}
                style={{ margin: '5px', padding: '10px 20px', backgroundColor: '#f44336', color: 'white', border: 'none', cursor: 'pointer' }}
            >
                Reset
            </button>
        </div>
    );
}

export default Counter;