import React, { useEffect, useState } from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import SubHeader from './sub-header';

const industriesData = [
    { r1 :  'Food',
      r2 :  'Ecommerce',
      r3 :  'Tour and Travels'
    },
    {
      r1 :  'Pharmaceuticals',
      r2 :  'Automobile',
      r3 :  'Cryptocurrency and blockchain'
    },
    {
      r1 :  'Salon and Parlour',
      r2 :  'Real Estate',
      r3 :  'Hospitals'
    }
]

const servicesData = [
    { r1 :  'Mobile App Development',
      r2 :  'Website Design',
      r3 :  'Web App Development'
    },
    {
      r1 :  'Industrial Automation SOftware',
      r2 :  'Panel software',
      r3 :  'Scada Software'
    },
    {
      r1 :  'Digital Marketing',
      r2 :  'Graphic Design',
      r3 :  'SEO/SMO'
    }
]

const TechData = [
    { r1 :  'Mobile App Development',
      r2 :  'Website Design',
      r3 :  'Web App Development'
    },
    {
      r1 :  'Industrial Automation SOftware',
      r2 :  'Panel software',
      r3 :  'Scada Software'
    },
    {
      r1 :  'Digital Marketing',
      r2 :  'Graphic Design',
      r3 :  'SEO/SMO'
    }
]

const headerData = [
    {
        id: 1,
        title: 'What we do',
        link: '#',
        SubHeaderData: {
            columnData: [
                { 
                    id: 1, 
                    title: 'Overview', 
                    link: '#', 
                    subType: 'block',
                    data: 'Dashandots Technology Private Limited is a leading' 
                },
                { 
                    id: 2, 
                    title: 'Industries', 
                    link: '#', 
                    subType: 'table',
                    data: industriesData
                },
                { id: 3, title: 'Services', link: '#', data: 'text 3' }
            ]
        }
    },
    {
        id: 2,
        title: 'Who we are',
        link: '#',
    },
    {
        id: 3,
        title: 'Insights',
        link: '#',
    },
    {
        id: 4,
        title: 'Skills',
        link: '#',
    }
]

var x = 0;

function Header() {
    const [hoveredItem, setHoveredItem] = useState(0);
    const [currentSubHeaderData, setCurrentSubHeaderData] = useState({});
    const [dataToShow, setDataToShow] = useState("");
    const [isSubHeaderHovered, setIsSubHeaderHovered] = useState(false);
    const [isSubHeaderVisible, setIsSubHeaderVisible] = useState(false);

    useEffect(() => {
        if (currentSubHeaderData && hoveredItem !== 0) {
            setIsSubHeaderVisible(true);
        }
        setTimeout(() => {
            if (!isSubHeaderHovered && hoveredItem === 0) {
                setIsSubHeaderVisible(false);
            } else {
                setIsSubHeaderVisible(true);
            }
        }, 500);
    }, [isSubHeaderHovered, hoveredItem]);

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" style={{}}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="logo.jpeg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {headerData.map((header) => (
                                <Nav.Link
                                    key={header.id}
                                    onMouseEnter={() => {
                                        setCurrentSubHeaderData(header.SubHeaderData);
                                        setHoveredItem(header.id);
                                    }}
                                    onMouseLeave={() => {
                                        setTimeout(() => {
                                            setHoveredItem(0);
                                        }, 1000);
                                    }}
                                >
                                    {header.title}
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {isSubHeaderVisible && (
                <div className='w-100 absolute z-100 top-0 left-0'
                    style={{
                        height: '200px',
                        backgroundColor: "#1E2222",
                    }}
                    onMouseEnter={() => {
                        setIsSubHeaderHovered(true);
                    }}
                    onMouseLeave={() => {
                        setIsSubHeaderHovered(false);
                    }}
                >
                    <Container>
                        <Row>
                            <Col>
                                {currentSubHeaderData && currentSubHeaderData.columnData.map((data) => (
                                    <div
                                        key={data.id}
                                        className='float-left'
                                        onMouseEnter={() => {
                                            setDataToShow(data.data);
                                            x = data.id
                                        }}
                                        style={{ width: '35%' }}
                                    >
                                        <h6
                                            className='text-white border-bottom border-secondary pt-4 pb-1 lead'
                                            style={{ textAlign: "start" }}
                                        >
                                            {data.title}
                                        </h6>
                                    </div>
                                ))}
                            </Col>

                            

                            {(x === 1) ? (

                                <Col>
                                    <p className='text-white pt-4 bg-success' >
                                        {dataToShow ? dataToShow : currentSubHeaderData.columnData[0].data}
                                    </p>
                                </Col>) :

                                (
                                    <>
                                        <Col className='text-white pt-4 bg-success'>
                                            <Row>hi</Row>
                                            <Row>hi</Row>
                                            <Row>hi</Row>
                                        </Col>

                                        <Col className='text-white bg-primary'>
                                            <Row>hi</Row>
                                            <Row>hi</Row>
                                            <Row>hi</Row>
                                        </Col>
                                            
                                        <Col className='text-dark bg-light'>
                                            <Row>hi</Row>
                                            <Row>hi</Row>
                                            <Row>hi</Row>
                                        </Col>
                                    </>
                                )

                            }










                        </Row>
                    </Container>
                </div>
            )}
        </>
    );
}

export default Header;
