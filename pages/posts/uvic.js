import bgi from '/public/uvic.jpg'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import styles from '/styles/schools.module.css'
import uvicStyles from '/styles/uvic.module.css'
import { getSortedPostsData } from '../../lib/uvic_posts'

export async function getServerSideProps(context) {
  const allPostsData = getSortedPostsData()
  return allPostsData
}

export default function UVic({ allPostsData }) {
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
          <a href="new_post_uvic" className={uvicStyles.btn}>Create a Post</a>
          <div>
            <h1>Posts</h1>
            {allPostsData.map(({ id, title, author, content }) => (
              <Link href={`/posts/${id}`}>
                <a className={uvicStyles.single}>
                  <h3>{title}</h3>
                  <h4>{author}</h4>
                  <br></br>
                  <br></br>
                  {content}
                </a>
              </Link>
            ))}
          </div>
        </div>


      </div>
      </>
    )
  }