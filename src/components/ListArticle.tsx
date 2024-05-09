import { Card, CardBody, CardFooter, CardImg, CardTitle } from 'react-bootstrap'
import { Result } from '../interfaces/IArticles'
import { useNavigate } from 'react-router-dom'

interface SingleArticle {
  result: Result
}

const ListArticle = ({ result }: SingleArticle) => {
  const navigate = useNavigate()
  const publishedAtDate = new Date(result.published_at).toLocaleDateString()
  return (
    <Card onClick={() => navigate(`/article${result.id}`)}>
      <CardImg variant="top" src={result.image_url} className="img-fluid rounded-4" />
      <CardBody>
        <CardTitle>{result.title}</CardTitle>
      </CardBody>
      <CardFooter>{publishedAtDate}</CardFooter>
    </Card>
  )
}

export default ListArticle
