import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import styles from '../styles/components/ExperienceBar.module.css'

export function Experiencebar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel 

  return (
    <div>
      <header className={styles.experienceBar}>
        <span>0 XP</span>
        <div>
          <div style={{ width: `${percentToNextLevel}%`}}></div>
          <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>{currentExperience} XP</span>
        </div>
        <span>{experienceToNextLevel} XP</span>
      </header>
    </div>
  )
}
