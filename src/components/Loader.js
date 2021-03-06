import React from 'react'
import {motion,useCycle} from 'framer-motion';

const loaderVarient={
    animetionOne:{
        x:[-20,20],
        y:[0,-30],
        transition:{
            x:{
                yoyo:Infinity,
                duration:0.5
            },
            y:{
                yoyo:Infinity,
                duration:0.25,
                ease:"easeOut"
            }
        }
    },
    animationTwo:{
        x:0,
        y:[0,-40],
        transition:{
           
            y:{
                yoyo:Infinity,
                duration:0.25,
                ease:"easeOut"
            }
        }
    }
}
function Loader(){
    const [animation,cycleAnimation] = useCycle("animetionOne","animationTwo")
    return(
        <>
        <motion.div className="loader" variants={loaderVarient} animate={animation} >

        </motion.div>
        <div onClick={()=>{
            cycleAnimation()
        }}>
            Change Loader
        </div>
        </>
    )
}

export default Loader;