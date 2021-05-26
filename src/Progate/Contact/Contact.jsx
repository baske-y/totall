import React from 'react'
import styles from '../Contact/Contact.module.css'


class ContactForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isSubmitted:false,
      email: "sample@gmail.com",
      hasEmailError: false,
      content: "お問い合わせ内容",
      hasContactError: false,
    };
  }
    handleSubmit() {
      this.setState({isSubmitted:true})
    }

    handleEmailChange(e) {
      const inputValue = e.target.value;
      const isEmpty = inputValue === "";
      this.state = {
        emial: inputValue,
        hasEmailError: isEmpty,
      }
    }

    handleContentChange(e) {
      const inputValue = e.target.value;
      const isEmpty = inputValue === "";
      this.state = {
        content: inputValue,
        hasContentError: isEmpty,
      }
    }

  render() {
    let emailErrorText;
    if (this.state.hasEmailError) {
      emailErrorText = (
        <span>
          emailを入力してください
        </span>    
      );
    }

    let contentErrorText;
    if (this.state.hascontentError) {
      contentErrorText = (
        <span>
          お問い合わせ内容を入力してください
        </span>
      );
    } 

    let contactForm;
    if(this.state.isSubmitted) {
      contactForm= (
        <div className={styles.contact_submit_message}>
          送信完了
        </div>
      )
    }else {
      contactForm =(
        <div className={styles.contact} onSubmit={()=>{this.handleSubmit()}}>
          <h2>お問い合わせ</h2>
          <p>メールアドレス(必須)</p>
          <input 
          type="text" 
          className={styles.text}
          value = {this.state.email}
          onChange={(e) => {handleEmailChange(e)}}
          />
          {emailErrorText}
          <p>お問い合わせ内容(必須)</p>
          <textarea 
          value= {this.state.content} 
          onChange={(e)=>handleContenttChange(e)}
          
          cols="60" 
          rows="11"
          />
          {contentErrorText}

          <input type="submit" value="送信" className={styles.submit}/>
        </div>
      );
    }
    // const [text, setText] = useState("");
    
    
    // const handleChange = useCallback(() => {
      //   if (isSubmitted === true ){
        //     alert("送信完了しました")
        
        //   }
        // }, [])
        return(
          <div className={styles.contact_form}>
            {contactForm}
          </div>
          // <div className={styles.contact}>
          //   <h2>お問い合わせ</h2>
          //   <p>メールアドレス(必須)</p>
          //   <input type="text" className={styles.text}/>
          //   <p>お問い合わせ内容(必須)</p>
          //   <textarea name="" id="" cols="60" rows="11"></textarea>
          //   <input type="submit" value="送信" className={styles.submit}/>
          // </div>
          );
        }
}
export default ContactForm;