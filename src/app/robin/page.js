import Image from 'next/image';
import coupon from './robin-1.png';
import styles from '../page.module.css';

export default function Page() {
  return (
    <div className={styles.coupon}>
      <h1>Robin De Maria</h1>
      <Image
        src={coupon}
        width={600}
        height={600}
        alt="The participants magnificent bet"
      />
    </div>
  );
}
