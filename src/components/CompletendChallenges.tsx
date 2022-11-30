import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import styles from '../styles/components/CompletendChallenges.module.css'

export function CompletendChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext)
  return (
    <div className={styles.CompletendChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}
