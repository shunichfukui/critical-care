'use client';

import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function Home() {
  const router = useRouter();

  const handleRandomPage = () => {
    if (Math.random() > 0.5) {
      router.push('/openEye');
    } else {
      router.push('/dontOpenEye');
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>救急救命テスト</h1>
        <button className={styles.button} onClick={handleRandomPage}>
          テスト開始
        </button>
      </main>
    </div>
  );
}
