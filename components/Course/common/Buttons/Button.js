import React,{useEffect} from 'react'
import {motion} from 'framer-motion'
import styles from './button.module.css'
import { MdCardMembership } from 'react-icons/md'
import {HiOutlineBookOpen} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'
const Button = ({ButtonText,IconName,BgColor,TextColor}) => {
    const [bg,setbg]=React.useState(BgColor)
    const [text,settext]=React.useState(TextColor)
    useEffect(() => {
        if(BgColor==='buttonblue'){
            setbg("bg-buttonblue")
        }
        if(BgColor==='buttonyellow'){
            setbg("bg-yellow")
        }
        if(BgColor==='buttongreen'){
            setbg("bg-green")

        }
        if(TextColor==='white'){
            settext('text-white')
        }
        if(TextColor==='black'){
            settext('text-black')
        }

    
    }, [ButtonText,BgColor,TextColor,IconName])
    
    
    const ButtonIconSelection=(IconName)=>{
        switch(IconName){
            case 'card':
                return <MdCardMembership className={styles['membership-icon']}/>
                break
            case 'Book':
                return <HiOutlineBookOpen className={styles['membership-icon']}/>
                break
            case 'whatsapp':
                return <BsWhatsapp className={styles['membership-icon']}/>
            default:
                return <MdCardMembership className={styles['button-icon']}/>
        }
    }
  return (
    <motion.button
    initial={{ scale: 0 }}
    animate={{ scale: 1, transition: { type: 'spring', mass: 1.15, delay: 1.5 } }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`${styles['talk-button']} ${bg} ${text}`}
>
    {
        ButtonIconSelection(IconName)
        
    }
    
    <span>{ButtonText}</span>
</motion.button>
  )
}

export default Button