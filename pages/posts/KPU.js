import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getSortedPostsData } from "../../lib/kpu_posts";
import bgi from "/public/kpu.jpg";
import kpuStyles from "/styles/kpu.module.css";
import styles from "/styles/schools.module.css";

export async function getServerSideProps(context) {
  const allPostsData = getSortedPostsData();
  return allPostsData;
}

export default function KPU({ allPostsData }) {
  return (
    <>
      <div className="relative" id="dick">
        <Image
          layout="intrinsic"
          className="object-center object-cover pointer-events-none"
          src={bgi}
        />
      </div>

      <div className="image">
        <Head>
          <title>DB Forum | KPU</title>
        </Head>

        <div>
          <h1 className={styles.title}>Kwantlen Polytechnic University</h1>
          <a href="new_post_kpu" className={kpuStyles.btn}>
            Create Post
          </a>

          <div>
            <h1>Posts</h1>
            {allPostsData.map(({ id, title, author, content }) => (
              <Link href={`/posts/kpuid/${id}`}>
                <a className={kpuStyles.single}>
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
  );
}
