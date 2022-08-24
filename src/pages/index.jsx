import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import LoginPage from '@pages/auth/login'
import Header from '@layouts/header'
import Cookies from 'js-cookie'
import Homes from '@pages/home'
// import { setToken } from '@src/redux/store'

export default function Home() {
  const reduxToken = useSelector(({ token }) => token)
  const [token, setToken] = useState(undefined)
  useEffect(() => {
    const cookiesToken = Cookies.get('token')
    setToken(reduxToken || cookiesToken)
  }, [reduxToken])
  if (!token) {
    return (
      <div className='container'>
        <LoginPage />
      </div>
    )
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <div className='container py-2'>
        <Homes />
      </div>
    </>
  )
}
