import './Middle.css'
import { Container, Row, Col, Card, CardGroup, Form } from 'react-bootstrap';


function Middle() {
    return (
        <div>

            <Container className='middle'>
                <Row>
                    <Col md={3}>
                        <div className='cardImg'>
                            <Card.Img
                                variant="top"
                                src="https://images.unsplash.com/photo-1635439030842-babc7a7d2a4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
                                style={{ width: '193px', height: '167px', objectFit: 'fill', borderRadius: '20%' }}
                            />
                        </div>
                    </Col>
                    <Col md={9}>
                        <Row>
                            <Col xs={7}>
                                <span>
                                    <p>Name: Rohan Prakasan</p>
                                    <p>Year: 2022-2026</p>
                                    <p>Branch: Information Technology</p>
                                </span>
                            </Col>
                            <Col>
                                <span>
                                    <p>PRN: 122A3041</p>
                                    <p>DOB: 22/07/2004</p>
                                    <p>Mentor: Prakasan KP</p>
                                </span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardGroup>
                            <Card>
                                <Card.Img style={{height:'100%'}}
                                    variant="top"
                                    src="https://plus.unsplash.com/premium_photo-1682309543429-6aaa6d792dae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3JhcGhzfGVufDB8fDB8fHww"
                                />
                            </Card>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src="https://media.istockphoto.com/id/1129901548/photo/coin-stack-step-down-graph-with-red-arrow-and-percent-icon-risk-management-business-financial.webp?b=1&s=170667a&w=0&k=20&c=HgKAxaxjr1gCZJv0VUgRLLZ077AjNMfdaaSnkHhO97Y="
                                />
                            </Card>
                        </CardGroup>
                        {/* Text area replaces the last card */}
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control
                                as="textarea"
                                readOnly
                                rows={3}
                                style={{
                                    width: '100%',
                                    resize: 'none',
                                    border: 'none',
                                    backgroundColor: 'lightcoral'
                                }}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Middle;
