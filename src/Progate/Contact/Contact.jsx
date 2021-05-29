
import styles from '../Contact/Contact.module.css'

import { useState } from "react"


export function Contact() {
  const [isChecked, setIsChecked] = useState(false)
  const toggleCheckedbox = () => {
    setIsChecked(!isChecked)
  }

    return(
      <div  className={styles.contact}>
        <h2>お問い合わせ</h2>
        <form method="post" action="#">
          <label htmlFor="email" className={styles.email}>メールアドレス</label>
          <input type="text" name="email" id="contact_email" className={styles.text}/>
          <label htmlFor="content" className={styles.content}>お問合せ内容</label>
          <textarea name="content" id="contact_content" cols="60" rows="11"></textarea>
          <p>利用規約に同意します</p>
          <input type="checkbox" name="agree" id="agreeCheck" className={styles.checkbox} onChange={() => toggleCheckedbox()}/>
          <label htmlFor="agreeCheck" className={styles.agree}>同意する</label>
          <div>
            <button type="submit" disabled={!isChecked} className={styles.submit}>送信</button>
          </div>
        </form>
      </div>
    )
  }

// class ContactForm extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={isSubmitted:false};
//   }
//     handleSubmit() {
//       this.setState({isSubmitted:ture})
//     }
//   render() {
//     let contactForm;
//     if(this.state.isSubmitted) {
//       contactForm= (
//         <div className={styles.contact_submit_message}>
//           送信完了
//         </div>
//       )
//     }else {
//       contactForm =(
//         <div className={styles.contact} onSubmit={()=>{this.handleSubmit()}}>
//           <h2>お問い合わせ</h2>
//           <p>メールアドレス(必須)</p>
//           <input type="text" className={styles.text}/>
//           <p>お問い合わせ内容(必須)</p>
//           <textarea name="" id="" cols="60" rows="11"></textarea>
//           <input type="submit" value="送信" className={styles.submit}/>
//         </div>
//       )
//     }
    // const [text, setText] = useState("");
    
    
    // const handleChange = useCallback(() => {
      //   if (isSubmitted === true ){
        //     alert("送信完了しました")
        
        //   }
        // }, [])
        // return(
        //   <div className={styles.contact_form}>
        //     {contactForm}
        //   </div>
          // <div className={styles.contact}>
          //   <h2>お問い合わせ</h2>
          //   <p>メールアドレス(必須)</p>
          //   <input type="text" className={styles.text}/>
          //   <p>お問い合わせ内容(必須)</p>
          //   <textarea name="" id="" cols="60" rows="11"></textarea>
          //   <input type="submit" value="送信" className={styles.submit}/>
          // </div>
//           );
//         }
// }
// export default ContactForm;