import React from 'react'
import { Button, Card } from 'react-bootstrap'

import styles from './Picture.module.css'

function PictureDetails() {
  return (
    <Card className={styles.container}> 
      <Card.Img src='https://images.pexels.com/photos/1142948/pexels-photo-1142948.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
      <Button className={styles.btn}>Button</Button>
    </Card>
  )
}

export default PictureDetails