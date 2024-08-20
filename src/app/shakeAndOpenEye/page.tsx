'use client';

import React, { useState, useEffect } from 'react';
import styles from './../page.module.css';
import { useRouter } from 'next/navigation';
import { E4V2M6, E4V3M6, E4V4M6 } from '../constants';

const ShakeAndOpenEye = () => {
  const router = useRouter();

  const answerData = {
    strange: { label: '変なことを言う', code: E4V2M6 },
    onlyName: { label: '名前しか言わない', code: E4V3M6 },
    solid: { label: 'しっかり答える', code: E4V4M6 },
  };

  // selectedAnswerの型をanswersのキーに制限
  const answerKeys = Object.keys(answerData) as Array<keyof typeof answerData>;
  const [selectedAnswer, setSelectedAnswer] =
    useState<keyof typeof answerData>();

  useEffect(() => {
    const randomKey = answerKeys[Math.floor(Math.random() * answerKeys.length)];
    setSelectedAnswer(randomKey);
  }, []);

  const handleShakePage = () => {
    if (selectedAnswer) {
      const { code } = answerData[selectedAnswer];
      router.push(`/answer?answer=${code}`);
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {selectedAnswer && (
          <h1 className={styles.title}>{answerData[selectedAnswer].label}</h1>
        )}
        <br />
        <button className={styles.button} onClick={handleShakePage}>
          次のページ
        </button>
      </main>
    </div>
  );
};

export default ShakeAndOpenEye;
