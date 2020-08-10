import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  Header,
  Logo,
  Contain,
  Card,
  Img,
  ActionButton,
  ButtonContainer,
  Button,
} from './styles';

const Principal = ({navigation}) => {
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
          <Icon name="asd" size={25} color="white" />
        </ActionButton>
      </Header>
      <Contain>
        <Card>
          <Img
            source={require('../../assets/images/homem.jpeg')}
            resizeMode="stretch"
          />
          <ButtonContainer
            onPress={() => {
              navigation.navigate('Tabs', 'F');
            }}>
            <Button>FEMININO</Button>
          </ButtonContainer>
        </Card>
        <Card>
          <Img
            source={require('../../assets/images/homem.jpeg')}
            resizeMode="stretch"
          />
          <ButtonContainer
            onPress={() => {
              navigation.navigate('Tabs', 'M');
            }}>
            <Button>MASCULINO</Button>
          </ButtonContainer>
        </Card>
      </Contain>
    </Container>
  );
};

export default Principal;
