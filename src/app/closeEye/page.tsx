'use client';

import React from 'react';
import styles from './../page.module.css';
import { useRouter } from 'next/navigation';

const OpenEye = () => {
  const router = useRouter();

  const handleShakePage = () => {
    const page = Math.random() > 0.5 ? 'shakeAndCloseEye' : 'shakeAndOpenEye';
    router.push(`/${page}`);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>目が開いているかの確認をした結果、</h1>
        <h2 className={styles.title}>目が閉じている</h2>
        <button className={styles.button} onClick={handleShakePage}>
          次のステップ
        </button>
      </main>
    </div>
  );
};

export default OpenEye;
