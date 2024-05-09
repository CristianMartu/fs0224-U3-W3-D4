import { useParams } from 'react-router-dom'

const ArticleDetails = () => {
  const params = useParams()
  const id = params.articleID
  console.log(id)

  return <h1>Prova</h1>
}
export default ArticleDetails
