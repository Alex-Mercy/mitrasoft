import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useSelector, useDispatch, } from 'react-redux';

import { onSetPhotos, setCategory } from '../store/actions/galeryAC';
import Loader from '../components/Loader';

function Galery() {
    const dispatch = useDispatch();
    const { photos, isLoaded, category } = useSelector(({ galery }) => galery);


    React.useEffect(() => {
        dispatch(onSetPhotos(category));
    }, [dispatch, category]);


    const onSelectCategory = (e) => {
        dispatch(setCategory(e.target.value))
    }

    return (
        <div>
            
                 <Container className="mt-3" >
                    <div className="my-3 px-2">
                        <Button className="mx-2" onClick={onSelectCategory} value='sunset' variant="outline-success">Sunset</Button>
                        <Button className="mx-2" onClick={onSelectCategory} value='beach' variant="outline-success">Beach</Button>
                        <Button className="mx-2" onClick={onSelectCategory} value='animals' variant="outline-success">Animals</Button>
                        <Button className="mx-2" onClick={onSelectCategory} value='night' variant="outline-success">Night</Button>
                    </div>
                    {isLoaded
                    ? <Row xs={1} lg={3} md={2} className="g-4" mx='10' >
                        {photos.map(photo => {
                            return <Col key={photo.id}>
                                <Card>
                                    <Card.Img height='210' variant="top" src={photo.url}  />
                                </Card>
                            </Col>
                        })}
                    </Row>
                    : <Loader />
                }
                </Container>
                
            

        </div>
    )
}

export default Galery