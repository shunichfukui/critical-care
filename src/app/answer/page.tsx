'use client';

import React, { useState, Suspense } from 'react';
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
        <Suspense fallback={<div>読み込み中...</div>}>
          {isShowText && <h2 className={styles.subTitle}>回答</h2>}
          {isShowText && <h2 className={styles.borderTitle}>{answer}</h2>}
        </Suspense>
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
