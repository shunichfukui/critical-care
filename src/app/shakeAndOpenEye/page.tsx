'use client';

import React, { useState, useEffect, Suspense } from 'react';
import styles from './../page.module.css';
import { useRouter, useSearchParams } from 'next/navigation';
import { E2V2M6, E2V3M6, E2V4M6, E4V2M6, E4V3M6, E4V4M6 } from '../constants';

const ShakeAndOpenEyeContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isFromClose = !!searchParams.get('isFromClose');

  const answerData = {
    strange: {
      label: '揺さぶったら目が開き、変なことを言う',
      code: E4V2M6,
      isFromClose: E2V2M6,
    },
    onlyName: {
      label: '揺さぶったら目が開き、名前しか言わない',
      code: E4V3M6,
      isFromClose: E2V3M6,
    },
    solid: {
      label: '揺さぶったら目が開き、しっかり答える',
      code: E4V4M6,
      isFromClose: E2V4M6,
    },
  };

  const answerKeys = Object.keys(answerData) as Array<keyof typeof answerData>;
  const [selectedAnswer, setSelectedAnswer] =
    useState<keyof typeof answerData>();

  useEffect(() => {
    const randomKey = answerKeys[Math.floor(Math.random() * answerKeys.length)];
    setSelectedAnswer(randomKey);
  }, [answerKeys]);

  const handleShakePage = () => {
    if (selectedAnswer) {
      let code = null;

      if (isFromClose) {
        code = answerData[selectedAnswer].isFromClose;
      } else {
        code = answerData[selectedAnswer].code;
      }

      router.push(`/answer?answer=${code}&isFromClose=true`);
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

const ShakeAndOpenEye = () => (
  <Suspense fallback={<div>読み込み中...</div>}>
    <ShakeAndOpenEyeContent />
  </Suspense>
);

export default ShakeAndOpenEye;
