import { useEffect, useState } from "react";
import randomcolor from "randomcolor";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Gradient = () => {
    const [color1, setColor1] = useState(randomcolor());
    const [color2, setColor2] = useState(randomcolor());
    const [direction, setDirection] = useState("to right");
    const [output, setOutput] = useState('');

    useEffect(() => {
        const gradient = `linear-gradient(${direction}, ${color1}, ${color2})`;
        document.body.style.background = gradient;
        setOutput(gradient);
    }, [color1, color2, direction]);

    const generateRandom = () => {
        setColor1(randomcolor());
        setColor2(randomcolor());
    };

    return (
        <div className="gradient" style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Create your own gradient</h1>
            <div className="colorPicker" style={{ marginBottom: '10px' }}>
                <input
                    type="color"
                    value={color1}
                    onChange={(e) => setColor1(e.target.value)}
                />
                <input
                    type="color"
                    value={color2}
                    onChange={(e) => setColor2(e.target.value)}
                />
            </div>
            <select className="select" value={direction} onChange={(e) => setDirection(e.target.value)}>
                <option value="to right">Right</option>
                <option value="to left">Left</option>
                <option value="to top">Top</option>
                <option value="to bottom">Bottom</option>
                <option value="to top left">Top-left</option>
                <option value="to top right">Top-right</option>
                <option value="to bottom left">Bottom-left</option>
                <option value="to bottom right">Bottom-right</option>
            </select>
            <button className="random" onClick={generateRandom}>Random gradient</button>
            <div className="output" style={{ marginTop: '20px' }}>
                <SyntaxHighlighter language="css" style={docco}>
                    {output}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default Gradient;