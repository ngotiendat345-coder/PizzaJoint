import React, { useEffect } from 'react';
import {motion} from 'framer-motion';
import Modal from './Modal';

const containerVariants ={
  hidden:{
    x:"100vw",
    opacity:0
  },
  visible:{
    x:0,
    opacity:1,
    transition:{
      type: 'spring',
      when:"beforeChildren",
      mass:0.4,
      damping:8,
      staggerChildren:0.4
    }
  },
  exit:{
    x:"-100vw",
    transition:{
      ease:"easeInOut"
    }
  }
}
const childVariants ={
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1,

  }
}
const Order = ({ pizza ,setShowModal,showModal}) => {
  useEffect(()=>{
    setTimeout(()=>{
      setShowModal(true);
    },5000)
  },[])
  return (
    <motion.div className="container order" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      {pizza.toppings.map(topping => <motion.div variants={childVariants} key={topping}>{topping}</motion.div>)}
      
    </motion.div>
  )
}

export default Order;