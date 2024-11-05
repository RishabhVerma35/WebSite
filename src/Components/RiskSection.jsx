import { React, useState } from "react"
import { animated, useSpring, useInView } from "react-spring";


const MyInternalCard = (props) => {
    return (

        <div class="card-body p-1 border-bottom">
            <img src="/images/randomLogo.svg" class="rounded-circle card-img-top float-start" style={{ height: '50px', width: '50px' }} />
            <h5 class="card-title p-1">{props.title}</h5>
            <p class="small">{props.text}</p>

        </div>


    )

}
const AnimatedMyInternalCard = animated(MyInternalCard);
const LeftColumn = () => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const [ref, inView] = useInView({
        threshold: 0.1,
    });

    const myStyle = useSpring({
        from: { opacity: 0, transform: 'translateX(-20px)' },
        to: {
            opacity: inView ? 1 : 0,
            transform: inView && !hasAnimated ? 'translateX(0px)' : 'translateX(-20px)'
        },
        onRest: () => {
            if (inView) {
                setHasAnimated(true);
            }
        }
    });

    return (
        <animated.div ref={ref} style={myStyle}> Stay on top of
            ever-changing regulatory exposure
            ClimeCast provides clear insight into the financial implications of  transitional risks and opportunities
        </animated.div>
    );

}
const RightColumn = () => {
    const [hasAnimated, setAnimated] = useState(false);
    const [ref, inView] = useInView({
        threshold: 0.7,
    })
    const myStyle = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' }, // Start lower
        to: {
            opacity: inView ? 1 : 0,
            transform: inView && !hasAnimated ? 'translateY(0px)' : 'translateY(20px)' // Move back down
        },

        config: { duration: 4000, easing: t => t * t * (3 - 2 * t) },
        onRest: () => {
            if (inView) {
                setAnimated(true);
            }
        }
    });
    return (
        <div className="col px-3">
            <div className="rol p-3">
                <div className="text-white text-center p-0">
                    <AnimatedMyInternalCard ref={ref} style={myStyle} title="Comparative Analysis" text="See how a building's energy efficiency compares to city-wide averages" />
                </div>
            </div>
        </div>


    );

}


function Risk() {
    return (
        <div >
            <div class="container text-center ">
                <div class="row ">
                    <div class="col ">
                        <LeftColumn />
                    </div>

                    <RightColumn />
                    <RightColumn />
                </div>
            </div>
        </div>
    )
};
export default Risk;