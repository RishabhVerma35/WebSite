import {React,useState} from "react";
import { animated, useInView, useSpring } from "react-spring";

const MyAnimationComponent = () => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const [ref, inView] = useInView({
        threshold: 0.1, // Trigger when 10% of the element is visible
    });

    const myStyle = useSpring({
        from: { opacity: 0 },
        to: { opacity: inView ? 1 : 0 },
        config: { duration: 2000 },
        onRest: () => {
            if (inView) {
                setHasAnimated(true); 
            }
        }
    });

    return (
        <div class="row ">
            <div class="col ">
                <animated.h1 ref={ref}  style={myStyle}> ANTLER</animated.h1>             
            </div>
            <div class="col">
            <animated.h1 ref={ref}  style={myStyle}> Google</animated.h1>
            </div>
            <div class="col">
            <animated.h1 ref={ref}  style={myStyle}> NVIDIA</animated.h1>
            </div>
        </div> 
    );
};

function BackedUp() {
    return (
        <div className="mb-5">
            <div className="text-secondary mb-5">
                Backed by Industry Leaders
            </div>

            <div class="container text-center ">
                <MyAnimationComponent/>
            </div>
        </div>
    )
};
export default BackedUp;