import React, { useState, useEffect, useRef } from 'react'
import * as p5 from "p5";
import * as THREE from "three";

import TOPOLOGY from 'vanta/dist/vanta.topology.min'

const Vanta = (props) => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(TOPOLOGY({
                el: myRef.current,
                p5: p5,
                TREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0xdc325b,
                backgroundColor: 0x0
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])



    return <div style={{ height: "100vh", width: "100%" }} ref={myRef}>
        {props.children}
    </div>
}

export default Vanta