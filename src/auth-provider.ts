// 在正式环境中，如果使用firebase 这种第三方auth服务的话，本文件不需要开发者开发

import { User } from 'screens/project-list/search-panel'

interface AuthForm {
  username: string
  password: string
}

const localStorageKey = '__auth_provider_token__'
const apiUrl = process.env.REACT_APP_API_URL

export const getToken = () => window.localStorage.getItem(localStorageKey)

export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || '')
  return user
}

export const login = (data: AuthForm) => {
  return fetch(`${apiUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponse(await response.json())
    } else {
      return Promise.reject(await response.json())
    }
  })
}

export const register = (data: AuthForm) => {
  return fetch(`${apiUrl}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponse(await response.json())
    } else {
      return Promise.reject(await response.json())
    }
  })
}

export const logout = async () => {
  window.localStorage.removeItem(localStorageKey)
}