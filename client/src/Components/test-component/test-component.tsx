import './test-component.css';
import React, { useState } from 'react';

export interface TestComponentProps {
    className?: string;
}

export const TestComponent: React.FC<TestComponentProps> = ({ className = '' }) => {
    const [times, setTimes] = useState(0)

    return <div className={`${className} test-div`}>
        <h1>Button Clicked {times} times</h1>
        <button className="test-btnn" onClick={() => {
            setTimes(times+1)
        }}>Test</button>
    </div>
};