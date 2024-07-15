import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const participants = [
  'Alessandro',
  'Anders',
  'Anncatrine',
  'Basta',
  'Carolina',
  'Elias',
  'Filip',
  'Glenn',
  'Henrik',
  'Jakob',
  'Joakim',
  'Johan',
  'Karl',
  'Linus',
  'Ludwig P',
  'Ludwig R',
  'Marcus',
  'Peter',
  'Robin',
  'Therese',
  'Victor',
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.background}>
        <h1 className={styles.header}>Willkommen zum die große Wette! 🇩🇪</h1>
        <div className={styles.container}>
          <div className={styles.participants}>
            {participants.map((participant, index) => (
              <div key={index} className={styles.participant}>
                <p className={styles.description}>
                  <Link
                    href={`/${participant.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {participant}
                  </Link>
                </p>
              </div>
            ))}
          </div>
          <div className={styles.table}>
            <h1>Slutresultat:</h1>
            <div className={styles.tableRows}>
              <div className={styles.tableRow}>
                <ul className={styles.prices}>
                  <div className={styles.gold}>
                    <h4>330 poäng och 3000 kr:</h4>
                    <li>Anncatrine</li>
                  </div>

                  <div className={styles.silver}>
                    <h4>325 poäng och 600 kr:</h4>
                    <li>Linus</li>
                  </div>

                  <div className={styles.bronze}>
                    <h4>295 poäng och 400 kr:</h4>
                    <li>Joakim</li>
                  </div>

                  <div className={styles.fourth}>
                    <h4>290 poäng och 200 kr:</h4>
                    <li>Jakob</li>
                    <li>Johan</li>
                  </div>
                </ul>
              </div>
              <div className={styles.tableRow}>
                <ul>
                  <h4>285 poäng:</h4>
                  <li>Peter</li>
                  <li>Therese</li>

                  <h4>275 poäng:</h4>
                  <li>Basta</li>
                  <li>Filip</li>
                  <li>Ludwig R</li>

                  <h4>270 poäng:</h4>
                  <li>Henrik</li>
                  <li>Robin</li>
                </ul>
              </div>
              <div className={styles.tableRow}>
                <ul>
                  <h4>255 poäng:</h4>
                  <li>Carolina</li>

                  <h4>250 poäng:</h4>
                  <li>Marcus</li>

                  <h4>245 poäng:</h4>
                  <li>Ludwig P</li>

                  <h4>240 poäng:</h4>
                  <li>Karl</li>

                  <h4>235 poäng:</h4>
                  <li>Victor</li>
                </ul>
              </div>

              <div className={styles.tableRow}>
                <ul>
                  <h4>230 poäng:</h4>
                  <li>Elias</li>
                  <li>Glenn</li>

                  <h4>215 poäng:</h4>
                  <li>Anders</li>

                  <h4>205 poäng:</h4>
                  <li>Alessandro</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
