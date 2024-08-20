'use client';

import React, { useState, useEffect } from 'react';
import styles from './../page.module.css';
import { useRouter } from 'next/navigation';
import { E3V2M6, E3V3M6, E3V4M6 } from '../constants';

const OpenEyeFromVoice = () => {
  const router = useRouter();

  const answerData = {
    strange: { label: '変なことを言う', code: E3V2M6 },
    onlyName: { label: '名前しか言わない', code: E3V3M6 },
    solid: { label: 'しっかり答える', code: E3V4M6 },
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
        <h1 className={styles.title}>声をかけたら目が開き、問いかけると、</h1>
        {selectedAnswer && (
          <h2 className={styles.title}>{answerData[selectedAnswer].label}</h2>
        )}
        <br />
        <button className={styles.button} onClick={handleShakePage}>
          次のページ
        </button>
      </main>
    </div>
  );
};

export default OpenEyeFromVoice;
