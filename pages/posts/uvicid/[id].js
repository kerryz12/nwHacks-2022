
import { getAllPostIds, getSortedPostsData } from '../../../lib/uvic_posts'
import matter from 'gray-matter'
import React, { useState, useEffect } from 'react';

export async function getStaticProps({params}){
  const id = params.id
  console.log("--------------------------------")
  console.log(id)
  console.log("--------------------------------")
  const url = 'http://localhost:8081/dbforum/post/'.concat(id)
  const response = await fetch(url)
  const post = await response.text()
  const jsons = []
  jsons.push(post)
  console.log(jsons)
  const postData = jsons.map(js => {
  
    // Use gray-matter to parse the post metadata section-
    const matterResult = matter(['---json', js,'---','This is content.'].join('\n'));
    // Combine the data with the id

    return {
      id,
      ...matterResult.data
    }
  })
  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  if (postData === undefined) {
    console.log("AAAAAAAAa")
    return null
  }
  console.log(postData[0])
  return (
    <>
      <h1>{postData[0].title}</h1>
      <h4>{postData[0].author}</h4>
      {postData[0].date}
      <br />
      {postData[0].content}
    </>
  )
}

export async function getPost(id) {
  const url = 'http://localhost:8081/dbforum/post/'.concat(id)
  const response = await fetch(url)
  const post = await response.text()
  return post
}

// export async function getInitialProps() {
//     const postData = getPostData(params.id)
//     return {
//         props: {
//             postData
//         }
//     }
// }


export async function getStaticPaths() {
  const paths = await getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

