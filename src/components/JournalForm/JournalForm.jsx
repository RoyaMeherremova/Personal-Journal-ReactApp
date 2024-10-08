import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import cn from 'classnames';

const INITIAL_STATE = {
  title: true,
  post: true,
  date: true
};
function JournalForm({ onSubmit }) {
  const [formValidState, setFormValidState] = useState(INITIAL_STATE);

  useEffect(() => {
    let timerId;
    if (!formValidState.date || formValidState.post || formValidState.title) {
      timerId = setTimeout(() => {
        setFormValidState(INITIAL_STATE);
      }, 2000);
    }
    return () => {
      clearTimeout(timerId);
    };


  }, [formValidState]);

  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    let isFormValid = true;
    if (!formProps.title?.trim().length) {   //если нету данной
      setFormValidState(state => ({ ...state, title: false }));
      isFormValid = false;
    }
    else {
      setFormValidState(state => ({ ...state, title: true }));
    }
    if (!formProps.post?.trim().length) {
      setFormValidState(state => ({ ...state, post: false }));
      isFormValid = false;
    }
    else {
      setFormValidState(state => ({ ...state, post: true }));
    }
    if (!formProps.date) {
      setFormValidState(state => ({ ...state, date: false }));
      isFormValid = false;
    }
    else {
      setFormValidState(state => ({ ...state, date: true }));
    }
    if (!isFormValid) {  //если какой либо данной нет верни все
      return;
    }
    onSubmit(formProps);
  };
  return (
    <>
      <form className={styles['journal-form']} onSubmit={addJournalItem}>
        <div>
          <input type='text' name='title' className={cn(styles['input'], { [styles['invalid']]: !formValidState.title })} />
        </div>
        <div className={styles['form-row']}>
          <label htmlFor="date" name='date' className={styles['form-label']}>
            <img src='/calendar.svg' alt='Иконка календаря' />
            <span>Дата</span>
          </label>
          <input type='date' name='date' id='date' className={cn(styles['input'], { [styles['invalid']]: !formValidState.date })} />
        </div>
        <div className={styles['form-row']}>
          <label htmlFor="date" name='date' className={styles['form-label']}>
            <img src='/archive.svg' alt='Иконка архива' />
            <span>Метки</span>
          </label>
          <input type='text' name='tag' id='tag' className={styles['input']} />
        </div>
        <textarea name='post' id='' cols={30} rows={10} className={cn(styles['input'], { [styles['invalid']]: !formValidState.post })} ></textarea>
        <Button text='Сохранить' />
      </form >
    </>
  );

}

export default JournalForm;
