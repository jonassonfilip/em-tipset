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
            <h2>Tabell 28/6:</h2>
            <div className={styles.tableRows}>
              <div className={styles.tableRow}>
                <ul>
                  <h4>215 poäng:</h4>
                  <li>Joakim</li>

                  <h4>205 poäng:</h4>
                  <li>Linus</li>

                  <h4>200 poäng:</h4>
                  <li>Anncatrine</li>
                  <li>Jakob</li>

                  <h4>195 poäng:</h4>
                  <li>Peter</li>
                  <li>Therese</li>

                  <h4>185 poäng:</h4>
                  <li>Johan</li>
                  <li>Ludwig P</li>
                </ul>
              </div>
              <div className={styles.tableRow}>
                <ul>
                  <h4>180 poäng:</h4>
                  <li>Elias</li>
                  <li>Henrik</li>
                  <li>Robin</li>

                  <h4>175 poäng:</h4>
                  <li>Basta</li>
                  <li>Carolina</li>

                  <h4>170 poäng:</h4>
                  <li>Filip</li>
                  <li>Ludwig R</li>

                  <h4>165 poäng:</h4>
                  <li>Anders</li>

                  <h4>160 poäng:</h4>
                  <li>Victor</li>
                </ul>
              </div>
              <div className={styles.tableRow}>
                <ul>
                  <h4>155 poäng:</h4>
                  <li>Marcus</li>

                  <h4>150 poäng:</h4>
                  <li>Karl</li>

                  <h4>140 poäng:</h4>
                  <li>Alessandro</li>

                  <h4>135 poäng:</h4>
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
