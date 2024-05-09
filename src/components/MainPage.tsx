import { useEffect, useState } from 'react'
import { IArticles } from '../interfaces/IArticles'
import ListArticle from './ListArticle'
import { Col, Container, Row } from 'react-bootstrap'

const URL = 'https://api.spaceflightnewsapi.net/v4/articles'

const MainPage = () => {
  const [articles, setArcticles] = useState<IArticles>()

  const fetchArticles = async () => {
    try {
      const resp = await fetch(URL)
      if (resp.ok) {
        const result = await resp.json()
        setArcticles(result)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <Container>
      <Row className="row-gap-3 ">
        {articles &&
          articles.results.map((article) => {
            return (
              <Col md={4} key={article.id}>
                <ListArticle result={article} />
              </Col>
            )
          })}
      </Row>
    </Container>
  )
}
export default MainPage
