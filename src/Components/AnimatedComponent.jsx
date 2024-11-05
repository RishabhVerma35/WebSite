import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const MyAnimatedComponent = () => {
  const styles = useSpring({
    from: { opacity: 0, transform: 'translateX(-20px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 1000 } 
  });

  return <animated.div style={styles}>Hello, World!</animated.div>;
};

export default MyAnimatedComponent;
