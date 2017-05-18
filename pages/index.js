import Head from 'next/head'
// import { stylesheet, classNames } from './styles.css'
import { Container, Row, Col  } from 'reactstrap'

const Index = ()=>(
    <div>
        <Head>
            {/*<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />*/}
            <link rel='stylesheet' href='/static/css/bootstrap.min.css' />
            <link rel='stylesheet' href='/static/css/styles.css' />
            {/*<style dangerouslySetInnerHTML={{__html:stylesheet }} />*/}
        </Head>
        <div className="abc">
            <Container>
                <Row>
                    <Col lg="12" md="12"  sm="3" xs="3">
                        <p>Nguyễn Thành Công</p>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
)

export default Index