import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'

import styles from '../styles/components/Profile.module.css'

export function Profile() {

  const {level} = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/111262681?v=4" alt="Luan Frederico" />
      <div>
        <strong>Luan Frederico</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}
