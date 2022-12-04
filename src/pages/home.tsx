import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { ChallengeBox } from '../components/ChallengeBox'
import { CompletendChallenges } from '../components/CompletendChallenges'
import { Countdown } from '../components/Countdown'
import { Experiencebar } from '../components/Experiencebar'
import { Profile } from '../components/Profile'
import { CountdownProvider } from '../context/CountdownContext'
import { ChallengesProvider } from '../context/ChallengesContext'

import styles from '../styles/pages/Home.module.css'


type HomeProps = {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >

      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>
        <Experiencebar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletendChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }

}