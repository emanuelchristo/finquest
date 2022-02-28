
import styles from './letstalk.module.css'
import { HiPhone } from 'react-icons/hi'
import { MdMail } from 'react-icons/md'

const icons = [{
    img : '/icons/letstalk-1.png'
},
{
    img : '/icons/letstalk-2.png'
},
{
    img : '/icons/letstalk-3.png'
}]

export default function Letstalk() {


    return (
        <div className="margin">

            <section className={styles['letstalk']}>
                <h2>Let's Talk</h2>
                <div className={styles['content-wrapper']}>
                    <div className={styles['letstalk-text']}>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. ut quaerat deserunt et soluta provident eum molestias vitae!</p>
                    </div>
                    <div className={styles['letstalk-contact']}>
                        <div className={styles['contact-div']}>
                            <HiPhone /> 
                            +91 80751 45434
                        </div>
                        <div className={styles['contact-div']}>
                            <HiPhone />
                            +91 73562 66418
                        </div>
                        <div className={styles['contact-div2']}>
<MdMail />                            hellofinquest@gmail.com
                        </div> 
                      
                    </div>
                    <div className={styles['contact-icons-wrap']}>
                            {icons.map((icon)=>(
                                <div className={styles['letstalk-icon']}>
                                    <img src={icon.img} alt="" />
                                </div>
                            ))}
                        </div>
                       
                </div>
            </section>
        </div>
    )
}