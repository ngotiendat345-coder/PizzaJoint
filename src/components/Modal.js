import React from "react";
import {Link} from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion";
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const modal = {
  hidden:{y:"-100vh",opacity:0},
  visible:{y:200,opacity:1,transition:{delay:0.5}},
  
}
function Modal({ showModal }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backDrop"
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal" variants={modal}>
            <p>Want to make another pizza?</p>
            <Link to="/">
                <button >
                  Start again
                </button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
