import React, {useState, useEffect}from 'react';
import ReactTypingEffect from 'react-typing-effect';
import DemoComponent from './DemoComponent';
import { useSpring, animated } from '@react-spring/web';
import axios from 'axios';

const headlines = [
    "Empowering Sustainable Investments",
    "Facilitating Comprehensive Financial Assessments",
    "Streamlining Cost-Effective Strategies",
    "Innovating Financial Solutions",
    "Transforming Real Estate Valuations through Sustainable Practices"
];

const Animation = () => {
    const myStyle = useSpring({
        from: { opacity: 0.5, transform: 'translateX(-10px)' },
        to: { opacity: 1, transform: 'translateX(0px)' },
        config: { duration: 2000 }
    })
    return (
        // Wrap the h1 element with the animated component
        <animated.h1
            className="display-5 fw-bold text-white text-center px-5 pt-2"
            style={{
                ...myStyle, // Apply the animated styles
                fontFamily: '"Sora", "Sora Placeholder", sans-serif',
            }}
        >
            Unlock the ROI of Building Energy Efficiency Upgrades
        </animated.h1>
    );
};

const ReactTypingEffectDemo = () => {
    return (
        <>

            <ReactTypingEffect
                text={headlines}
                speed={100}
                typingDelay={500}
                eraseDelay={1000}
                cursorRenderer={cursor => <p>{cursor}</p>}
                displayTextRenderer={(text, i) => {
                    return (
                        <p style={{ fontSize: '1em', color: 'gray' }}>
                            {text.split('').map((char, i) => {
                                const key = `${i}`;
                                return (
                                    <span
                                        key={key}
                                        style={i % 2 === 0 ? { color: 'magneta' } : {}}
                                    >
                                        {char}
                                    </span>
                                );
                            })}
                        </p>
                    );
                }}
            />
        </>
    );
};

const CurrentTableSize = () => {
    const [currSize, setCurrSize] = useState(0);
    const apiUrl = "https://wjjmauihn9.execute-api.ap-south-1.amazonaws.com";
 
    useEffect(() => {
        // Fetch the current size of the table when the component mounts
        axios.get(apiUrl)
            .then((response) => {
                setCurrSize(response.data); // Update state with the retrieved data
                console.log("table size => ",response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []); 

    return (
        <div>
        <h4 className = 'text-secondary'>As of now, more than<h1 className = 'text-white'>{currSize}</h1> companies are utilizing our services!</h4 >
        </div>
           
    );
    }

function MainHead() {
    return (
        <div className="px-4 py-5 mt-5  text-center">

            <span className="lead border border-dark-subtle p-2 rounded-pill">ask for free demo</span>

            <Animation />
            <div className="col-lg-6 mx-auto mb-2">
                <ReactTypingEffectDemo />
                <DemoComponent />

            </div>

            <img src="/images/mainPic.svg" className="img-fluid h-30 w-70" alt="..." />
            <CurrentTableSize/>
            <p> ( when Company takes a free demo,The number will be updated Automatically)</p>

        </div>
    );
}

export default MainHead;
