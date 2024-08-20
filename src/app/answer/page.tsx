'use client';

import React, { useState } from 'react';
import styles from './../page.module.css';
import { useSearchParams } from 'next/navigation';

const Shake = () => {
  const [isShowText, setIsShowText] = useState(false);

  const searchParams = useSearchParams();
  const answer = searchParams.get('answer');

  const handleShowAnswer = () => {
    setIsShowText(true);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>終了！ お疲れ様でした！</h1>
        {isShowText && <h2 className={styles.borderTitle}>{answer}</h2>}
        {!isShowText && (
          <button
            onClick={handleShowAnswer}
            className={styles.showAnswerButton}
          >
            回答を見る
          </button>
        )}
      </main>
    </div>
  );
};

export default Shake;
