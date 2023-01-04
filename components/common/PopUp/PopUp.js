import { motion } from "framer-motion";
import Backdrop from "./PopUp/Backdrop";
import "react-toastify/dist/ReactToastify.css";
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },

  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },

  exit: {
    y: "100vh",
    opacity: 0,
  },
};
const PopUp = ({ children, handleClose, className }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={className}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </Backdrop>
  );
};

export default PopUp;
