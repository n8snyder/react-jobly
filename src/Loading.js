import { Col, Row, Spinner } from "reactstrap"
import "./Loading.css"

function Loading() {
  return (
    <div className="Loading container text-center">
      <Row>
        <Col 
          sm={{
            offset: 5,
            size: 'auto'
          }}
        >
          <h2>Loading...</h2>
        </Col>
        <Col 
          sm={{
            size: 'auto'
          }}
        >
          <Spinner color="dark">
            Loading...
          </Spinner>
        </Col>
      </Row>
    </div>
  )
}

export default Loading;