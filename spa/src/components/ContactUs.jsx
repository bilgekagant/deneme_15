import Container from 'react-bootstrap/esm/Container';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function ContactUs (){
    return(
        <Container className='position-relative'>
            <form>
                <FormGroup className='mb-3' controlId='formGroupEmail'>
                    <FormLabel className="form-label">Email Address</FormLabel>
                    <Form.Control type='email' placeholder='Enter email' />

                </FormGroup>
                <FormGroup className='mb-3'>
                    <FormLabel className="form-label">İsim Soyisim</FormLabel>
                    <Row>
                        <Col>
                            <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" />
                        </Col>
                    </Row>
                </FormGroup>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className="form-label" >Konu seçiniz</Form.Label>
                        <Form.Select defaultValue="Konu seçiniz">
                            <option>Enstruman Onarım</option>
                            <option>Enstruman Bakım</option>
                            <option>Enstruman Satış</option>
                            <option>Kariyer Desteği</option>
                            <option>İstek/Öneri/Şikayet</option>
                        </Form.Select>
                </Form.Group>
                <br/>
                <FormGroup className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Row>
                        <Form.Label column="lg" lg={12}>
                        </Form.Label>
                        <Col>
                            <Form.Control as= "textarea" rows={3} placeholder="İletmek istediğiniz konuyu yazınız" />
                        </Col>
                    </Row>  
                </FormGroup>
                <button className= "submit-button">Gönder</button>
            </form>

        </Container>

       

    );
}