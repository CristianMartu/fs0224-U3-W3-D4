import { Card, CardFooter, Col, Placeholder } from 'react-bootstrap'

const LoadingAllCards = () => {
  const array = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  return array.map((elem) => {
    return (
      <Col md={4} key={elem}>
        <Card>
          <div style={{ width: '100%', height: '250px' }}>
            <Placeholder className="w-100 h-100" />
          </div>
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={8} />
            </Placeholder>
          </Card.Body>
          <CardFooter>
            <small className="d-flex justify-content-between align-items-center mx-3">
              <Placeholder xs={3} />
            </small>
          </CardFooter>
        </Card>
      </Col>
    )
  })
}
export default LoadingAllCards
