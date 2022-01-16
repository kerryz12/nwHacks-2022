import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import styles from '/styles/schools.module.css'
import ubcStyles from '/styles/ubc.module.css'
import { getSortedPostsData } from '../../lib/posts'



export async function getServerSideProps(context) {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function UBC() {
    return (
      <>       
        <Head>
          <title>DB Forum | UBC</title>
        </Head>
        <div>
          <h1 className={styles.title}>University of British Columbia</h1>
          <a className={styles.btn}>Create Post</a>

        <div>
          <h1>Posts</h1>
          
            <a className={ubcStyles.single}><h3>Example Post</h3></a><br></br>
            <a className={ubcStyles.single}><h3>Example Post</h3></a><br></br>
            <a className={ubcStyles.single}><h3>Example Post</h3></a><br></br>
            <a className={ubcStyles.single}><h3>Example Post</h3></a><br></br>
            <a className={ubcStyles.single}><h3>Example Post</h3></a><br></br>
            <a className={ubcStyles.single}><h3>Example Post</h3></a><br></br>
            <a className={ubcStyles.single}><h3>Example Post</h3></a><br></br>
          
        </div>
        </div>

        {/* <div className="relative">
        <Image
          layout="fill"
          className="object-center object-cover pointer-events-none"
          src={"https://cdn.discordapp.com/attachments/927709577204617248/932147456181940284/main_mall.jpg"}
        />
        </div> */}
      </>
    )
  }