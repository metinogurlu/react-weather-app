import Head from 'next/head'
import styles from './index.module.css'
import Header from '../components/Header/header.js'
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const Home = () => (
    <Container>
      <Row className={styles.fullwidth}>
        <Col className={`col-8 ${styles.mainContent}`}>
          <Header/>
        </Col>
        <Col className={`col-4 ${styles.sidebar}`}>
          <Header/>
        </Col>
      </Row>
    </Container>
)

export default Home