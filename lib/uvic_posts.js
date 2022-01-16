import matter from 'gray-matter'

export async function getSortedPostsData() {
  const response = await fetch('http://localhost:8081/dbforum/posts')
  const jsons = []
  const posts = await response.text()
  const splitted = posts.split('},')

  for (let i = 0; i < splitted.length; i++){
    const json = splitted[i]
    let json_string = "butt"
    if (json.length > 10){ 
      if (i == 0){
        json_string = json.concat("}").substring(1)
      }
      else if (i === splitted.length - 1) {
        json_string = "".concat(json).substring(0,json.length-1)
      }
      else {
        json_string = "".concat(json, "}")
      }
      if (json_string.length > 5) {
        jsons.push(json_string)
      }
    }
  }

  const allPostsData = jsons.map(js => {
        // Remove ".md" from file name to get id
        const id = js.substring(6,24)
    
        // Use gray-matter to parse the post metadata section-
        const matterResult = matter(['---json', js,'---','This is content.'].join('\n'));
        // Combine the data with the id
        if (matterResult.data.school !== 'uvic'){ return null }
        return {
          id,
          ...matterResult.data
        }
      })
  return {
    props: {
      allPostsData
    }
  }
}

export async function getAllPostIds() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('http://localhost:8081/dbforum/posts')
  const posts = await res.json()
  return posts.map(post => {
    return {
      params: {
        id: post.id
      }
    }
  })
}
