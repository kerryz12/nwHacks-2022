import bgi from '/public/uvic.jpg'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import styles from '/styles/schools.module.css'
import uvicStyles from '/styles/uvic.module.css'
import { getSortedPostsData } from '../../lib/posts'

export async function getServerSideProps(context) {
  const allPostsData = getSortedPostsData()
  return allPostsData
}

export default function UBC() {
    return (
    <>
      <div className="relative" id='sussy'>
      <Image
        layout="intrinsic"
        className="object-center object-cover pointer-events-none"
        src={bgi}
        width="1680px" height="1050px"
      />
      </div>

      <div className='image'>
        <Head>
          <title>DB Forum | UVic</title>
        </Head>


        <div>
          <h1 className={styles.title}>University of Victoria</h1>
          <a href="new_post" className={uvicStyles.btn}>Ask a Question</a>

        <div id = 'sus'>
          <h1>Posts</h1>
            <a className={uvicStyles.single}><h3>Example Post</h3></a><br></br>
            <a className={uvicStyles.single}><h3>Example Post</h3></a><br></br>
            <a className={uvicStyles.single}><h3>Example Post</h3></a><br></br>
            <a className={uvicStyles.single}><h3>Example Post</h3></a><br></br>
            <a className={uvicStyles.single}><h3>Example Post</h3></a><br></br>
            <a className={uvicStyles.single}><h3>Example Post</h3></a><br></br>
            <a className={uvicStyles.single}><h3>Example Post</h3></a><br></br>
          
        </div>
        </div>


      </div>
      </>
    )
  }