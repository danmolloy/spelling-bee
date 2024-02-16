import React, { useCallback, useEffect, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

/* Copied from https://codesandbox.io/s/realistic-fn-react-canvas-confetti-2o3pe?file=/src/App.js */



export default function Realistic({ reaction }) {
  const refAnimationInstance = useRef<any>(null);

  useEffect(() => {
    if (reaction === "Pangram!" ) {
      fire()
    } else if (reaction === "Bravo!") {
      fire()
      setTimeout(() => fire(), 2000)
      setTimeout(() => fire(), 3000)
    }

  }, [reaction])

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio)
      });
  }, []);

  const fire = useCallback(() => {
   makeShot(0.25, {
      spread: 26,
      startVelocity: 55
    });

     makeShot(0.2, {
      spread: 60
    });

   makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    }); 

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45
    });
  }, [makeShot]);

  return (
    <div data-testid="realistic-div" className="z-50">
      <ReactCanvasConfetti 
        refConfetti={getInstance} 
        style={{
          position: "fixed",
          pointerEvents: "none",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0
        }} />
    </div>
  );
}
