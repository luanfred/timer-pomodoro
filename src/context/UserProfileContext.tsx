import Cookies from "js-cookie";
import { createContext, ReactNode, useEffect, useState } from "react";

type UserProfileProps = {
  children: ReactNode;
}

// Tipando os dados
type UserProfileType = {
  userName: string;
  userAvatar: string;
  setName: (newState: string) => void;
  setAvatar: (newState: string) => void;
}

// Valor inicial
const initialValue = {
  userName: '',
  userAvatar: '',
  setName: () => '',
  setAvatar: () => '',
}

// Criando contexto 
export const UserProfileContext = createContext<UserProfileType>(initialValue);

// Criando Provider
export function UserProfileProvider({ children }: UserProfileProps) {
  const [userName, setUserName] = useState('')
  const [userAvatar, setUserAvatar] = useState('')

  function setName(name: string) {
    setUserName(name)
  }

  function setAvatar(profile: string) {
    setUserAvatar(profile)
  }

  useEffect(() => {
    Cookies.set('userName', String(userName))
  }, [userName])

  return (
    <UserProfileContext.Provider value={{
      userName,
      userAvatar,
      setName,
      setAvatar,
    }}>
      {children}
    </UserProfileContext.Provider>
  )
}
