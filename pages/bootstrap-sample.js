import Head from 'next/head'


import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'


const Home = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>


    <Navbar bg="light" expand="lg">
      <Container className="container-fluid">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <Container className="container-fluid">

      <Row className="pt-5">
        <Col className="my-auto">
          <h1 className="display-2 font-weight-bolder">
            <strong>
              Next.JS + Bootstrap
            </strong>
          </h1>
          <p className="lead">
            Liked this tutorial?
          </p>

          <a className="btn btn-primary btn-lg" href="https://twitter.com/mike_alche">
            Follow me on twitter
            </a>
        </Col>
        <Col className="">
          <img className="rounded " src="http://placekitten.com/500/500" alt="" />
        </Col>
      </Row>
    </Container>

  </>
)

export default Home
