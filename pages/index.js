import Head from 'next/head'
import Navbar from '../components/Navbar'
import Todos from '../components/Todos'
import { useSelector } from 'react-redux'

export default function Home() {
  const { theme } = useSelector((store) => store.theme);

  return (
    <div className={`${theme}`}>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${theme} h-[100vh] bg-lightVlGray dark:bg-darkVddBlue relative`}>
        <Navbar />
        <Todos />
      </div>
      
    </div>
  )
}
