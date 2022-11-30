import { useContext, useEffect } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import { CountdownContext } from '../context/CountdownContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
  const {resetCountdown} = useContext(CountdownContext)
  
  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} XP</header>

          <main>
            <picture>
              <img src={`icons/${activeChallenge.type}.svg`} alt='body' />
            </picture>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type='button'
              className={styles.challengeFailedButon}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type='button'
              className={styles.challengeSucceedeButon}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <picture>
              <img src="icons/level-up.svg" alt="Level Up" />
            </picture>
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  )
}
