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
            <h2>Tabellen inför finalen:</h2>
            <div className={styles.tableRows}>
              <div className={styles.tableRow}>
                <ul>
                  <h4>300 poäng:</h4>
                  <li>Anncatrine</li>

                  <h4>280 poäng:</h4>
                  <li>Joakim</li>
                  <li>Linus</li>

                  <h4>270 poäng:</h4>
                  <li>Peter</li>

                  <h4>260 poäng:</h4>
                  <li>Jakob</li>
                </ul>
              </div>
              <div className={styles.tableRow}>
                <ul>
                  <h4>255 poäng:</h4>
                  <li>Carolina</li>
                  <li>Henrik</li>
                  <li>Robin</li>
                  <li>Therese</li>

                  <h4>245 poäng:</h4>
                  <li>Basta</li>
                  <li>Johan</li>
                  <li>Ludwig P</li>
                  <li>Ludwig R</li>
                </ul>
              </div>
              <div className={styles.tableRow}>
                <ul>
                  <h4>235 poäng:</h4>
                  <li>Victor</li>

                  <h4>230 poäng:</h4>
                  <li>Elias</li>
                  <li>Filip</li>

                  <h4>225 poäng:</h4>
                  <li>Karl</li>

                  <h4>220 poäng:</h4>
                  <li>Marcus</li>
                </ul>
              </div>

              <div className={styles.tableRow}>
                <ul>
                  <h4>215 poäng:</h4>
                  <li>Anders</li>

                  <h4>205 poäng:</h4>
                  <li>Alessandro</li>

                  <h4>200 poäng:</h4>
                  <li>Glenn</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
