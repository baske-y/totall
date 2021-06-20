import Link from "next/link";
import { useEffect, useState } from "react";
import { Accordion } from "../Accordion/Accordion";


import styles from './Work.module.css'


const WORK_LIST = [
  {
    label:"仕事内容",
    text: "テキストテキストテキストテキスト",
  },
  {
    label: "応募資格",
    text: "テキストテキストテキストテキスト",

  },
  {
    label: "必須スキル",
    text: "テキストテキストテキストテキスト",
  

  },
  {
    label: "給与",
    text: "XXX万～XXX万 (スキル・経験・実績により優遇)",
  
  },
  {
    label: "休日・休暇",
    text: "土日祝祭日、有給休暇、夏季休暇、年末年始休暇、産前産後休暇、育児休暇",
  
  },
  {
    label: "雇用形態",
    text:"正社員（試用期間3ヶ月）業務委託",
  
  },
  {
    label:"勤務時間",
    text: "フレックスタイム",
  
  },
  {
    label: "勤務地",
    text: "東京",
  
  },
]
const WORK_LIST_2 = [
  {
    label:"仕事内容2",
    text: "テキスト2テキスト2テキスト2テキスト2"

  },
  {
    label: "応募資格2",
    text: "テキスト2テキスト2テキスト2テキスト2",
  },
  {
    label: "必須スキル2",
    text: "テキスト2テキスト2テキスト2テキスト2",
  },
  {
    label: "給与2",
    text: "XXX万～XXX万 (スキル・経験・実績により優遇)2",
  },
  {
    label: "休日・休暇 2",
    text: "土日祝祭日、有給休暇、夏季休暇、年末年始休暇、産前産後休暇、育児休暇 2",
  },
  {
    label: "雇用形態2",
    text:"正社員（試用期間3ヶ月）<br>業務委託2",
  },
  {
    label:"勤務時間 2",
    text: "フレックスタイム 2",
  },
  {
    label: "勤務地 2",
    text: "東京 2",
  },
]
const WORK_LIST_3 = [
  {
    label:"仕事内容3",
    text: "テキスト3テキスト3テキスト3テキスト3",

  },
  {
    label: "応募資格3",
    text: "テキスト3テキスト3テキスト3テキスト3",

  },
  {
    label: "必須スキル3",
    text: "テキスト3テキスト3テキスト3テキスト3",

  },
  {
    label: "給与3",
    text: "XXX万～XXX万 (スキル・経験・実績により優遇)3"
  },
  {
    label: "休日・休暇 3",
    text: "土日祝祭日、有給休暇、夏季休暇、年末年始休暇、産前産後休暇、育児休暇 3",
  },
  {
    label: "雇用形態3",
    text:"正社員（試用期間3ヶ月）<br>業務委託3"
  },
  {
    label:"勤務時間 3",
    text: "フレックスタイム 3",
  },
  {
    label: "勤務地 3",
    text: "東京 3",
  },
]
export const Work = () => {
  const [active, setActive] = useState("")


  return (
    <div className={styles.work}>
    <Accordion 
    title="1.Webディレクター"
    active ={active} setActive={setActive} 
    list ={WORK_LIST}
    />
    <Accordion 
    title ="2.Webデザイナー" 
    active ={active} setActive={setActive} 
    list ={WORK_LIST_2}
    />
    <Accordion 
    title ="3.プログラマー" 
    active ={active} setActive={setActive} 
    list ={WORK_LIST_3}
    />

    {/* <div className={styles.label} onClick={changeIsOpen}>1.Webディレクター</div>
    <ul className={styles.menu}>
      {WORK_LIST.map((item) => {
        return(
          <li > 
            <div key={item.label}>
              <div className={styles.detail}>
                <ul >
                  <div className={styles.dt}>{item.label}</div>
                  <div className={styles.dd}>{item.text}</div>
                </ul> 
              </div>
              
            </div>

          </li>

          )
          })}
          
      </ul> */}
    </div>
    
  )
}
