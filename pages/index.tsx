import React from 'react';
import { ListProject ,AvatarContent, Time, Description } from '../components'
import Head  from 'next/head'
import { Layout, Row, Col, } from 'antd'

import { data,} from '../variables'



const { Content, Header } = Layout



const App = () => {
  return (
    <>
    <Head>
      <title>Nicolas Parra</title>
      <meta charSet="utf-8" />     
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />    
      <meta name="description" content="Ingeniero de sistemas y computación egresado de la Universidad Nacional de Colombia (Bogotá)" />    
      <meta name="keywords" content="React, javascript, typescript, ruby, rails, Universidad Nacional de Colombia, Ingenieria, docker" />    
      </Head>
    <Layout>
      <Header style={{ background: '#fff', boxShadow: '3px 3px 5px 6px #ccc', height: 35 }} />
      <Content style={{padding: '10px'}}>
        <Row>
          <Col xs={24}  sm={24} md={6} >
            <AvatarContent />
            <Time />
          </Col>
          <Col sm={24} xs={24}  md={18}>
            <Description title='Acerca de mi'>
                {data.about}
            </Description>

            <Description title='Proyectos'>
              <ListProject/>
            </Description>
          </Col>
        </Row>
      </Content>
    </Layout>
    </>
  )
}

export default App;


export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}