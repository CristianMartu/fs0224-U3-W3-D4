import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Result } from '../interfaces/IArticles'
import { Button, Card, CardBody, CardFooter, CardImg, CardText, CardTitle, Col, Container, Row } from 'react-bootstrap'
import { IoReturnDownBackOutline } from 'react-icons/io5'
import LoadingCard from './LoadingCard'

const URL = 'https://api.spaceflightnewsapi.net/v4/articles/'

const ArticleDetails = () => {
  const navigate = useNavigate()
  const params = useParams()
  const id = params.articleID

  const [article, setArcticle] = useState<Result>()
  const [isLoading, setIsLoading] = useState(false)

  const fetchArticle = async () => {
    try {
      const resp = await fetch(URL + id)
      if (resp.ok) {
        const result = await resp.json()
        setArcticle(result)
        setIsLoading(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchArticle()
  }, [])

  const updateDate = article?.published_at ? new Date(article.updated_at).toLocaleDateString() : ''
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          {isLoading ? (
            <Card>
              <CardImg variant="top" src={article?.image_url} className="img-fluid" style={{ maxHeight: '60vh' }} />
              <CardBody className="text-center w-75 mx-auto">
                <CardTitle>{article?.title}</CardTitle>
                <CardText>{article?.summary}</CardText>
                <small>Update at: {updateDate}</small>
              </CardBody>
              <CardFooter>
                <small className="d-flex justify-content-between align-items-center mx-3">
                  <Button onClick={() => navigate('/')}>
                    <IoReturnDownBackOutline />
                  </Button>
                  <p className="m-0">{article?.news_site}</p>
                  <a href={article?.url} target="blank">
                    Website
                  </a>
                </small>
              </CardFooter>
            </Card>
          ) : (
            <LoadingCard />
          )}
        </Col>
      </Row>
    </Container>
  )
}
export default ArticleDetails
