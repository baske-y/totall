import { useCallback, useState } from 'react';
import styles from '../Main/Main.module.css'
import { Modal } from '../Modal/Modal';

 const lessonList = [
  {
    name: 'HTML & CSS',
    image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg',
    introduction: 'WEBページはHTML、CSSという言語によってその見た目が作られています。 実際にWEBページを作りながら学んでみましょう！',
  },
  {
    name: 'Sass',
    image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/sass.svg',
    introduction: 'SassはCSSをより便利に効率的にするための言語です。',
  },
  {
    name: 'JavaScript',
    image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg',
    introduction: 'JavaScriptはフロントエンドだけでなく、サーバーサイドまで広い可能性を持つプログラミング言語です。',
  },
  {
    name: 'React',
    image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg',
    introduction: 'ReactはHTMLのように、サイトの見た目をつくることができるJavaScriptのライブラリです。',
  },
];

export function Main(props) {
  const [lists, setLists] = useState(lessonList)
  const [show, setShow] = useState(false)
  const openModal = useCallback(() => {
  
    setShow(true)
  }, [])
  return(
    // <div>
    // <button onClick ={openModal}>Click</button>
    // <Modal show = {show} setShow={setShow}  content="Appから内容を変更できます"/>
    // </div>
      
    <div className={styles.main_wrapper}>
        <div className={styles.main}>
          <div className={styles.copy_container}>
            <h1>Hello, World.</h1>
            <h2>プログラミングの世界へようこそ！</h2>
          </div>
          <div className={styles.lesson_container}>
            <h3>学べるレッスン</h3>
            {lessonList.map((item) => {
              return (
               <div key={item.image} className={styles.lesson_card}>
                 <div 
                 className={styles.lesson_item} 
                 onClick ={openModal}>
                   <p>{item.name}</p>
                   <img src={item.image}/>
                 </div>
                 <Modal 
                 show = {show} setShow={setShow}
                
                 lists = {lists}
                 />
               </div>
              );
            })}
          </div>
          
        </div>
      </div>
  )
}