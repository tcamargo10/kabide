import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Carousel from 'react-native-banner-carousel';
import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import banner3 from '../../assets/images/banner3.jpeg';

import {
  SafeArea,
  Container,
  Header,
  Logo,
  BoxImgBanner,
  ImageBanner,
  ActionButton,
  ContainerBanner,
  NovasLojasContainer,
  Title,
  ContainerScroll,
  ContainerItem,
  Avatar,
  NomeLoja,
  TempoLoja,
  Status,
  NovidadesContainer,
  ContainerCardItem,
  ContainerScrollNovidades,
  ImgNovidades,
  TituloProduto,
  InfoNovidades,
  AreaPreco,
  AreaPrecoCheio,
  PrecoCheio,
  ValorKbs,
  PrecoNovidade,
} from './styles';

const novaslojas = [
  {
    avatar: '/img/asdasd.png',
    titulo: 'Art Vitrini',
    tempo: '25-35',
    comentario: 'novo',
  },
  {
    avatar: '/img/asdasd.png',
    titulo: 'On Dress',
    tempo: '25-35',
    comentario: 'novo',
  },
  {
    avatar: '/img/asdasd.png',
    titulo: 'Dolce e Gabbana',
    tempo: '25-35',
    comentario: 'novo',
  },
  {
    avatar: '/img/asdasd.png',
    titulo: 'Gucci',
    tempo: '25-35',
    comentario: 'novo',
  },
  {
    avatar: '/img/asdasd.png',
    titulo: 'Louis Vuitton',
    tempo: '25-35',
    comentario: 'novo',
  },
];

const lojasdestaque = [
  {
    avatar: '/img/asdasd.png',
    titulo: 'Art Vitrini',
    tempo: '25-35',
    comentario: '5(13)',
  },
  {
    avatar: '/img/asdasd.png',
    titulo: 'On Dress',
    tempo: '25-35',
    comentario: '5(22)',
  },
  {
    avatar: '/img/asdasd.png',
    titulo: 'Dolce e Gabbana',
    tempo: '25-35',
    comentario: '5(+500)',
  },
  {
    avatar: '/img/asdasd.png',
    titulo: 'Gucci',
    tempo: '25-35',
    comentario: '5(22)',
  },
  {
    avatar: '/img/asdasd.png',
    titulo: 'Louis Vuitton',
    tempo: '25-35',
    comentario: '5(22)',
  },
];

const images = [banner1, banner2, banner3];

const novidades = [
  {
    avatar: '/img/asdasd.png',
    titulo: 'Calça Jeans Euforia',
    precointeiro: 'R$154,90',
    kbs: '42kbs',
    precofinal: '104,90',
  },
  {
    avatar: '/img/asdasd.png',
    titulo: 'Calça Jeans Euforia',
    precointeiro: 'R$154,90',
    kbs: '42kbs',
    precofinal: '104,90',
  },
];

const Home = () => {
  return (
    <SafeArea>
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
      <Container>
        <ContainerBanner>
          <Carousel
            autoplay
            autoplayTimeout={5000}
            loop
            index={0}
            activePageIndicatorStyle={{backgroundColor: '#99CCFF'}}>
            {images.map((image, index) => (
              <BoxImgBanner key={index}>
                <ImageBanner source={image} />
              </BoxImgBanner>
            ))}
          </Carousel>
        </ContainerBanner>
        <NovasLojasContainer>
          <Title>Novas lojas</Title>

          <ContainerScroll>
            {novaslojas.map((data, index) => (
              <ContainerItem key={index}>
                <Avatar />
                <NomeLoja>{data.titulo}</NomeLoja>
                <TempoLoja>{data.tempo}</TempoLoja>
                <Status>{data.comentario}</Status>
              </ContainerItem>
            ))}
          </ContainerScroll>
        </NovasLojasContainer>

        <NovidadesContainer>
          <Title>Novidades</Title>
          <ContainerScrollNovidades>
            {novidades.map((data, index) => (
              <ContainerCardItem key={index}>
                <ImgNovidades />
                <InfoNovidades>
                  <TituloProduto>{data.titulo}</TituloProduto>
                  <AreaPreco>
                    <AreaPrecoCheio>
                      <PrecoCheio>{data.precointeiro}</PrecoCheio>
                      <ValorKbs>{data.kbs}</ValorKbs>
                    </AreaPrecoCheio>
                    <PrecoNovidade>{`R$ ${data.precofinal}`}</PrecoNovidade>
                  </AreaPreco>
                </InfoNovidades>
              </ContainerCardItem>
            ))}
          </ContainerScrollNovidades>
        </NovidadesContainer>

        <NovasLojasContainer>
          <Title>Lojas Destaques</Title>

          <ContainerScroll>
            {lojasdestaque.map((data, index) => (
              <ContainerItem key={index}>
                <Avatar />
                <NomeLoja>{data.titulo}</NomeLoja>
                <TempoLoja>{data.tempo}</TempoLoja>
                <Status>{data.comentario}</Status>
              </ContainerItem>
            ))}
          </ContainerScroll>
        </NovasLojasContainer>

        <NovidadesContainer>
          <Title>Mais Vendidos</Title>
          <ContainerScrollNovidades>
            {novidades.map((data, index) => (
              <ContainerCardItem key={index}>
                <ImgNovidades />
                <InfoNovidades>
                  <TituloProduto>{data.titulo}</TituloProduto>
                  <AreaPreco>
                    <AreaPrecoCheio>
                      <PrecoCheio>{data.precointeiro}</PrecoCheio>
                      <ValorKbs>{data.kbs}</ValorKbs>
                    </AreaPrecoCheio>
                    <PrecoNovidade>{`R$ ${data.precofinal}`}</PrecoNovidade>
                  </AreaPreco>
                </InfoNovidades>
              </ContainerCardItem>
            ))}
          </ContainerScrollNovidades>
        </NovidadesContainer>
      </Container>
    </SafeArea>
  );
};

export default Home;
