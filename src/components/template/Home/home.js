/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { getPosts } from '../../../services/getPosts';
import { getTodos } from '../../../services/getTodos';
import styles from './../../../styles/Home.module.css'

export async function getStaticProps({locale}) {
  try {
    const todosData = await getTodos();
    const postsData = await getPosts();
    return {
      props: {
        todosData,
        postsData,
        locale
      },
      revalidate: 20
    }
  } catch (err) {
    console.error("home page error ++++++++++++++++++++> ", err?.message)
    return {
      props: {
        notFound: true
      }
    }
  }
}

function Home({todosData, locale}) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await getPosts();
      setPosts(res)
    }
    fetchData();

    
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>My Todos - {locale}</h1>
        <section>
          {
            todosData?.map(item => {
              return (
                <div key={item.id} className='todos-items'>
                  {/* <Link href={`/todos/${item.id}`}> */}
                  <Link href={{
                    pathname: `/todos/${item.id}`,
                    // query: { address: `todos-address-${item.id}` },
                  }}>
                    <a>{item.title}</a>
                  </Link>
                </div>
              )
            })
          }
        </section>
        <hr />
        <h1>My Posts - {locale}</h1>
        {
          posts?.length ? <section>
          {
            posts?.map(item => {
              return (
                <div key={item.id} className='blog-items'>
                  {/* <Link href={`/posts/${item.id}?address=my-address-${item.id}`}> */}
                  <Link href={{
                    pathname: `/posts/${item.id}`,
                    // query: { address: `posts-address-${item.id}` },
                  }}>
                    <a>{item.title}</a>
                  </Link>
                </div>
              )
            })
          }
        </section>
        : <p>...loading posts</p>
        }
      </main>
    </div>
  )
}

export default Home;