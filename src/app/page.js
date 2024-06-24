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
            <h2>Tabell 24/6:</h2>
            <div className={styles.tableRows}>
              <div className={styles.tableRow}>
                <ul>
                  <h4>145 poäng:</h4>
                  <li>Joakim</li>

                  <h4>130 poäng:</h4>
                  <li>Jakob</li>

                  <h4>125 poäng:</h4>
                  <li>Anncatrine</li>
                  <li>Linus</li>

                  <h4>120 poäng:</h4>
                  <li>Johan</li>
                  <li>Peter</li>
                  <li>Therese</li>
                </ul>
              </div>
              <div className={styles.tableRow}>
                <ul>
                  <h4>115 poäng:</h4>
                  <li>Robin</li>

                  <h4>110 poäng:</h4>
                  <li>Victor</li>

                  <h4>105 poäng:</h4>
                  <li>Anders</li>
                  <li>Elias</li>
                  <li>Filip</li>
                  <li>Ludwig P</li>

                  <h4>100 poäng:</h4>
                  <li>Henrik</li>
                  <li>Marcus</li>
                </ul>
              </div>
              <div className={styles.tableRow}>
                <ul>
                  <h4>95 poäng:</h4>
                  <li>Carolina</li>
                  <li>Ludwig R</li>

                  <h4>90 poäng:</h4>
                  <li>Basta</li>

                  <h4>85 poäng:</h4>
                  <li>Karl</li>

                  <h4>80 poäng:</h4>
                  <li>Alessandro</li>

                  <h4>75 poäng:</h4>
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
