import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  Header,
  Logo,
  ActionButton,
  Banner,
  NovasLojas,
  Title,
  ContainerScroll,
  ContainerItem,
  Avatar,
  NomeLoja,
  TempoLoja,
  Status,
} from './styles';

const Home = () => {
  return (
    <Container>
      <Header>
        <ActionButton>
          <Icon name="map-marker-alt" size={25} />
        </ActionButton>
        <ActionButton>
          <Logo
            source={require('../../assets/images/logo.png')}
            resizeMode="contain"
          />
        </ActionButton>
        <ActionButton>
          <Icon name="user" size={25} />
        </ActionButton>
      </Header>

      <Banner
        source={require('../../assets/images/homem.jpeg')}
        resizeMode="contain"
      />

      <NovasLojas>
        <Title>Novas lojas</Title>

        <ContainerScroll>
          <ContainerItem>
            <Avatar />
            <NomeLoja>Art Vitrini</NomeLoja>
            <TempoLoja>25 - 35</TempoLoja>
            <Status>Novo</Status>
          </ContainerItem>
        </ContainerScroll>
      </NovasLojas>
    </Container>
  );
};

export default Home;
