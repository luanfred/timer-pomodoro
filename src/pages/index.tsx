import Head from 'next/head';
import Link from 'next/link'
import { useContext, useState } from 'react'
import { UserProfileContext } from '../context/UserProfileContext';
import styles from '../styles/pages/Login.module.css'

type ProfileResponse = {
  name: string,
  avatar_url: string,
}

export default function login() {
  const [nameLogin, setNameLogin] = useState('')
  const { setName, setAvatar } = useContext(UserProfileContext)

  async function handleGetUserName() {
    const res = await fetch(`https://api.github.com/users/${nameLogin}`)
    const data = await res.json() as ProfileResponse

    setName(data.name)
    setAvatar(data.avatar_url)
  }

  return (
    <div className={styles.body}>
      <Head>
        <title>Login | move.it</title>
      </Head>
      <div className={styles.container}>
        <img src="icons/Logo.svg" alt="logo" />
        <h1>Bem-vindo</h1>
        <div className={styles.text}>
          <img src="icons/github-icon-1.svg" alt="" />
          <span>Faça login com seu github para comerçar</span>
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='Digite seu username' onChange={(e) => setNameLogin(e.target.value)} />
          <Link href="/home">
            <button onClick={handleGetUserName}>
              <img src="icons/seta-para-a-direita.svg" alt="seta" />
            </button>
          </Link>
        </form>
      </div>
    </div>
  )
}
