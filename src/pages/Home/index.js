import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Dimensions} from 'react-native';
import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import banner3 from '../../assets/images/banner3.jpeg';

console.disableYellowBox = true; /*Oculta Warnings*/

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
  BoxAvatar,
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
    avatar:
      'https://d26lpennugtm8s.cloudfront.net/stores/001/030/979/themes/common/logo-1460658344-1584120755-ff6826f1c132fc93c088492e72cb978f1584120755.png?0',
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

const renderbanner = ({item, index}) => {
  return (
    <BoxImgBanner key={index}>
      <ImageBanner source={item} />
    </BoxImgBanner>
  );
};

const Home = () => {
  const [activeslide, SetActiveSlide] = useState('');

  const windowWidth = Dimensions.get('window').width;

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
            data={images}
            autoplay={true}
            autoplayInterval={3000}
            onSnapToItem={(index) => SetActiveSlide(index)}
            sliderWidth={windowWidth}
            itemWidth={windowWidth}
            renderItem={renderbanner}
          />
          <Pagination
            dotsLength={images.length}
            activeDotIndex={activeslide}
            containerStyle={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              left: 0,
            }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
            }}
            inactiveDotStyle={
              {
                // Define styles for inactive dots here
              }
            }
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </ContainerBanner>

        <NovasLojasContainer>
          <Title>Novas lojas</Title>

          <ContainerScroll>
            {novaslojas.map((data, index) => (
              <ContainerItem key={index}>
                <BoxAvatar>
                  <Avatar source={{uri: data.avatar}} resizeMode="contain" />
                </BoxAvatar>
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
