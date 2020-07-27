import React from 'react';

import {
  Container,
  Header,
  Icon,
  Logo,
  Contain,
  Card,
  Img,
  ButtonContainer,
  Button,
} from './styles';

const Principal = () => {
  return (
    <Container>
      <Header>
        <Icon />
        <Logo
          source={require('../../assets/images/logo.png')}
          resizeMode="contain"
        />
      </Header>
      <Contain>
        <Card>
          <Img
            source={require('../../assets/images/homem.jpeg')}
            resizeMode="stretch"
          />
          <ButtonContainer onPress={() => {}}>
            <Button>FEMININO</Button>
          </ButtonContainer>
        </Card>
        <Card>
          <Img
            source={require('../../assets/images/homem.jpeg')}
            resizeMode="stretch"
          />
          <ButtonContainer onPress={() => {}}>
            <Button>MASCULINO</Button>
          </ButtonContainer>
        </Card>
      </Contain>
    </Container>
  );
};

export default Principal;
