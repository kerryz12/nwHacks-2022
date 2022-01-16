import bgi from '/public/sfu campus.jpg'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import styles from '/styles/schools.module.css'
import sfuStyles from '/styles/sfu.module.css'
import { getSortedPostsData } from '../../lib/posts'


export async function getStaticProps(context) {
  const allPostsData = getSortedPostsData();
  return allPostsData;
}

export default function SFU({ allPostsData }) {
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
        <title>DB Forum | SFU</title>
      </Head>


      <div>
        <h1 className={styles.title}>Simon Fraser University</h1>
        <a href="new_post" className={sfuStyles.btn}>Create Post</a>

      <div id = 'cock'>
        <h1>Posts</h1>
        {allPostsData.map(({ id, title, author, content}) => (
    
            <Link href={`/posts/${id}`}>
              <a className = {sfuStyles.single}>
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
