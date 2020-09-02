
const postsDirectory  = require("path").join("../public/images'")

export default  function getAllImage() {
  //const fileNames = fs.readdirSync(postsDirectory)
  const fileNames =['bjk.png', 'nafi.jpg']
    
      
      return fileNames.map(fileName => {
        return {
          img: fileName,
          title: 'Image',
          author: 'author',
        }
      })
}
