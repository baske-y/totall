import Head from 'next/head'
import styles from '../Main/Main.module.css'
import Lesson from "../Lesson/Lesson"
import ContactForm, { Contact } from '../Contact/Contact';

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
export  function Main() {
  return (
    <div className={styles.main_wrapper}>
        <div className={styles.main}>
          <div className={styles.copy_container}>
            <h1>Hello, World.</h1>
            <h2>プログラミングの世界へようこそ！</h2>
          </div>
          <div className={styles.lesson_container}>
            <h3>学べるレッスン</h3>
            {lessonList.map((lessonItem) => {
              return (
                <Lesson
                  name={lessonItem.name}
                  image={lessonItem.image}
                  introduction={lessonItem.introduction}
                />
              );
            })}
          </div>
        </div>
          <ContactForm />
      </div>
  )
}
