import Head from 'next/head'
import React from 'react';
import styles from '../Lesson/Lesson.module.css'

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }

  handleClickLesson() {
    this.setState({isModalOpen: true});
  }

  handleClickClose() {
    this.setState({isModalOpen: false});
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className={styles.modal}>
          <div className={styles.modal_inner}>
            <div className={styles.modal_header}></div>
            <div className={styles.modal_introduction}>
              <h2>{this.props.name}</h2>
              <p>{this.props.introduction}</p>
            </div>
            <button
              className={styles.modal_close_btn}
              onClick={() => this.handleClickClose()}
            >
              とじる
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className={styles.lesson_card}>
        <div
          className={styles.lesson_item}
          onClick={() => {this.handleClickLesson()}}
        >
          <p>{this.props.name}</p>
          <img src={this.props.image} />
        </div>
        {modal}
      </div>
    );
  }
}

export default Lesson;
