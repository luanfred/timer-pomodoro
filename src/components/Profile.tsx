import Link from 'next/link'
import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import { UserProfileContext } from '../context/UserProfileContext'

import styles from '../styles/components/Profile.module.css'

export function Profile() {

  const { level } = useContext(ChallengesContext)
  const { userName, userAvatar } = useContext(UserProfileContext)

  return (
    <div className={styles.profileContainer}>
      {userName ?
        (<>
          <img src={userAvatar} alt="profile user" />
          <div>
            <strong>{userName}</strong>
            <p>
              <img src="icons/level.svg" alt="level" />
              Level {level}
            </p>
          </div>
        </>) :
        (<>
          <div className={styles.containerDoLogin}>
            <span>Usuário não logado</span>
            <span>Clique no botão abaixo para fazer login</span>
            <Link href='/'>
              <button className={styles.loginButton}>Inserir usuário</button>
            </Link>
          </div>
        </>)}
    </div>
  )
}
