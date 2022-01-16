import bgi from '/public/main mall.jpg'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import styles from '/styles/schools.module.css'
import ubcStyles from '/styles/ubc.module.css'
import { getSortedPostsData } from '../../lib/posts'



export async function getServerSideProps(context) {
  const allPostsData = getSortedPostsData()
  return allPostsData
}

export default function UBC({ allPostsData }) {
    return (
    <>
      <div className="relative" id='dick'>
      <Image
        layout="intrinsic"
        className="object-center object-cover pointer-events-none"
        src={bgi}
        width="1680px" height="1050px"
      />
      </div>

      <div className='image'>
        <Head>
          <title>DB Forum | UBC</title>
        </Head>


        <div>
          <h1 className={styles.title}>University of British Columbia</h1>
          <a href="new_post" className={ubcStyles.btn}>Ask a Question</a>

        <div id = 'cock'>
          <h1>Posts</h1>
          {allPostsData.map(({ id, title, author, content}) => (
      
              <Link href={`/posts/${id}`}>
                <a className = {ubcStyles.single}>
                  <h3>{title}</h3>
                  <h4>{author}</h4>
                  <br></br>
                  <br></br>
                  {content}
                </a>
              </Link>
  
          ))}
            <a className={ubcStyles.single}><h3>Example Post</h3></a><br></br>
            <a className={ubcStyles.single}><h3>Example Post</h3></a><br></br>
            <a className={ubcStyles.single}><h3>Example Post</h3></a><br></br>
            <a className={ubcStyles.single}><h3>Example Post</h3></a><br></br>
            <a className={ubcStyles.single}><h3>Example Post</h3></a><br></br>
            <a className={ubcStyles.single}><h3>Example Post</h3></a><br></br>
            <a className={ubcStyles.single}><h3>Example Post</h3></a><br></br>
          
        </div>
        </div>


      </div>
      </>
    )
  }