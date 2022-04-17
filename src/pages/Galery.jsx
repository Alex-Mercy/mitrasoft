import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useSelector, useDispatch, } from 'react-redux';

import { onSetPhotos, } from '../store/actions/galeryAC';
import Loader from '../components/Loader';

function Galery() {
    const dispatch = useDispatch();
    const { photos, isLoaded } = useSelector(({ galery }) => galery);


    React.useEffect(() => {
        dispatch(onSetPhotos(photos));
    }, []);




    return (
        <div>
            {isLoaded
                ? <Container className="mt-3" >
                    <div className="my-3 px-2">
                        <Button className="mx-2" variant="outline-success">Sunset</Button>
                        <Button className="mx-2" variant="outline-success">Beach</Button>
                        <Button className="mx-2" variant="outline-success">Animals</Button>
                        <Button className="mx-2" variant="outline-success">Night</Button>
                    </div>
                    <Row xs={1} lg={3} md={2} className="g-4" mx='10' >
                        {photos.map(photo => {
                            return <Col key={photo.id}>
                                <Card>
                                    <Card.Img height='210' variant="top" src={photo.url}  />
                                </Card>
                            </Col>
                        })}
                    </Row>
                </Container>
                : <Loader />
            }

        </div>
    )
}

export default Galery