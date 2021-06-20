import { useState } from "react"
import styles from './Accordion.module.css'

// const WORK_LIST = [
//   {
//     work: "１．Webディレクター",
//     work_2: "2.Webデザイナー",
//     work_3: "3.プログラマー",

//   },
//   {
//     label:"仕事内容",
//     text: "テキストテキストテキストテキスト",
//     label_2:"仕事内容2",
//     text_2: "テキスト2テキスト2テキスト2テキスト2",
//     label_3:"仕事内容3",
//     text_3: "テキスト3テキスト3テキスト3テキスト3",

//   },
//   {
//     label: "応募資格",
//     text: "テキストテキストテキストテキスト",
//     label_2: "応募資格2",
//     text_2: "テキスト2テキスト2テキスト2テキスト2",
//     label_3: "応募資格3",
//     text_3: "テキスト3テキスト3テキスト3テキスト3",

//   },
//   {
//     label: "必須スキル",
//     text: "テキストテキストテキストテキスト",
//     label_2: "必須スキル2",
//     text_2: "テキスト2テキスト2テキスト2テキスト2",
//     label_3: "必須スキル3",
//     text_3: "テキスト3テキスト3テキスト3テキスト3",

//   },
//   {
//     label: "給与",
//     text: "XXX万～XXX万 (スキル・経験・実績により優遇)",
//     label_2: "給与2",
//     text_2: "XXX万～XXX万 (スキル・経験・実績により優遇)2",
//     label_3: "給与3",
//     text_3: "XXX万～XXX万 (スキル・経験・実績により優遇)3"
//   },
//   {
//     label: "休日・休暇",
//     text: "土日祝祭日、有給休暇、夏季休暇、年末年始休暇、産前産後休暇、育児休暇",
//     label_2: "休日・休暇 2",
//     text_2: "土日祝祭日、有給休暇、夏季休暇、年末年始休暇、産前産後休暇、育児休暇 2",
//     label_3: "休日・休暇 3",
//     text_3: "土日祝祭日、有給休暇、夏季休暇、年末年始休暇、産前産後休暇、育児休暇 3",
//   },
//   {
//     label: "雇用形態",
//     text:"正社員（試用期間3ヶ月）<br>業務委託",
//     label_2: "雇用形態2",
//     text_2:"正社員（試用期間3ヶ月）<br>業務委託2",
//     label_3: "雇用形態3",
//     text_3:"正社員（試用期間3ヶ月）<br>業務委託3"
//   },
//   {
//     label:"勤務時間",
//     text: "フレックスタイム",
//     label_2:"勤務時間 2",
//     text_2: "フレックスタイム 2",
//     label_3:"勤務時間 3",
//     text_3: "フレックスタイム 3",
//   },
//   {
//     label: "勤務地",
//     text: "東京",
//     label_2: "勤務地 2",
//     text_2: "東京 2",
//     label_3: "勤務地 3",
//     text_3: "東京 3",
//   },
// ]

export const Accordion = (props) => {


  // return(
  //   <div className={styles.accordion}>
  //     <div className={styles.accordionHeading}>
  //       <div className={styles.container}>
  //         <p>{props.title}</p>
  //         <span onClick={() => props.setActive(props.title)}>
  //           {props.active === props.title ? "X" : "|||"}
  //         </span>
  //       </div>
  //     </div>
  //     <div className={(props.active === props.title ? styles.show : "") + styles.accordionContent}>
  //       <div className={styles.container}>
  //         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda itaque corporis tempora iure rerum quibusdam veniam nulla tempore nobis sed quod, reprehenderit voluptate fugiat id nisi, consequuntur a possimus incidunt!

  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // )


  return(
    <div className={styles.cont}> 
      <div 
        className={styles.label} 
        onClick= {() => props.setActive(props.title)}>
        <p>{props.title}</p>
        <span 
        onClick={() => props.setActive(props.title)}>
         {props.active === props.title ? "-" : "+"}
        </span>
      </div>
      <ul className={styles.accordion_menu}>
        {props.list.map((item) => {
          return(
            <li key={item.label}
            className={(props.active === props.title ? styles.show : "") + styles.accordionContent}> 
                <div className={styles.detail}>
                  <ul>
                    <div className={styles.dt}>{item.label}</div>
                    <div className={styles.dd}>{item.text}</div>
                  </ul> 
                </div>
                

            </li>
          )
          })}
          
      </ul>

    </div>
  )
}