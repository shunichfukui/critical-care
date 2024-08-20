'use client';

import React, { useState, useEffect } from 'react';
import styles from './../page.module.css';
import { useRouter } from 'next/navigation';
import { E1V1M5 } from '../constants';

const ShakeAndCloseEye = () => {
  const router = useRouter();

  const answers = {
    shakeAndOpenEye: '強く押したら目が開いた',
    answer: '強く押しても目が開かない',
  };

  // selectedAnswerの型をanswersのキーに制限
  const answerKeys = Object.keys(answers) as Array<keyof typeof answers>;
  const [selectedAnswer, setSelectedAnswer] = useState<keyof typeof answers>();

  useEffect(() => {
    const randomKey = answerKeys[Math.floor(Math.random() * answerKeys.length)];
    setSelectedAnswer(randomKey);
  }, []);

  const handleShakePage = () => {
    if (
      selectedAnswer &&
      answers[selectedAnswer] === '強く押しても目が開かない'
    ) {
      router.push(`/${selectedAnswer}?answer=${E1V1M5}`);
    } else if (selectedAnswer) {
      router.push(`/${selectedAnswer}`);
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {selectedAnswer && (
          <h1 className={styles.title}>{answers[selectedAnswer]}</h1>
        )}
        <br />
        <button className={styles.button} onClick={handleShakePage}>
          次のページ
        </button>
      </main>
    </div>
  );
};

export default ShakeAndCloseEye;
