import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Result } from '../interfaces/IArticles'
import { Button, Card, CardBody, CardFooter, CardImg, CardText, CardTitle, Col, Container, Row } from 'react-bootstrap'

const URL = 'https://api.spaceflightnewsapi.net/v4/articles/'

const ArticleDetails = () => {
  const navigate = useNavigate()
  const params = useParams()
  const id = params.articleID

  const [article, setArcticle] = useState<Result>()

  const fetchArticle = async () => {
    try {
      const resp = await fetch(URL + id)
      if (resp.ok) {
        const result = await resp.json()
        setArcticle(result)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchArticle()
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardImg variant="top" src={article?.image_url} className="img-fluid rounded-3" />
            <CardBody>
              <CardTitle>{article?.title}</CardTitle>
              <CardText>{article?.summary}</CardText>
            </CardBody>
            <CardFooter>
              <div className="d-flex justify-content-between">
                <a href={article?.url} target="blank">
                  Website
                </a>
                <Button onClick={() => navigate('/')}>Back</Button>
              </div>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
export default ArticleDetails
