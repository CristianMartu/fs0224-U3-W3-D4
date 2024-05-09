import { useEffect, useState } from 'react'
import { IArticles } from '../interfaces/IArticles'
import ListArticle from './ListArticle'
import { Col, Container, Row } from 'react-bootstrap'

import LoadingAllCards from './LoadingAllCards'

const URL = 'https://api.spaceflightnewsapi.net/v4/articles'

const MainPage = () => {
  const [articles, setArcticles] = useState<IArticles>()
  const [isLoading, setIsLoading] = useState(false)

  const fetchArticles = async () => {
    try {
      const resp = await fetch(URL)
      if (resp.ok) {
        const result = await resp.json()
        setArcticles(result)
        setIsLoading(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <Container className="mt-4">
      <p className="text-center display-1">Spaceflight News</p>
      <Row className="row-gap-4 align-items-baseline w-100 mt-4">
        {isLoading ? (
          articles?.results.map((article) => {
            return (
              <Col md={4} key={article.id}>
                <ListArticle result={article} />
              </Col>
            )
          })
        ) : (
          <LoadingAllCards />
        )}
      </Row>
    </Container>
  )
}
export default MainPage
