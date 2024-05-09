import { Button, Card, CardFooter, Placeholder } from 'react-bootstrap'
import { IoReturnDownBackOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const LoadingCard = () => {
  const navigate = useNavigate()
  return (
    <Card>
      <div style={{ width: '100%', height: '600px' }}>
        <Placeholder className="w-100 h-100" />
      </div>
      <Card.Body className="text-center w-75 mx-auto">
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={10} />
          <Placeholder xs={8} />
        </Placeholder>
        <Placeholder xs={3} />
      </Card.Body>
      <CardFooter>
        <small className="d-flex justify-content-between align-items-center mx-3">
          <Button onClick={() => navigate('/')}>
            <IoReturnDownBackOutline />
          </Button>
          <Placeholder className="h-100" style={{ width: '100px' }} />
          <Placeholder className="h-100" style={{ width: '60px' }} />
        </small>
      </CardFooter>
    </Card>
  )
}

export default LoadingCard
