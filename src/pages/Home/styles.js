import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const Header = styled.View`
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: white;
  border: 1px solid #ddd;
  elevation: 3;
`;

export const BoxImgBanner = styled.View``;

export const ImageBanner = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 12px;
`;

export const ActionButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 60px;
  width: 100px;
`;

export const ContainerBanner = styled.View`
  margin-top: 7px;
  margin-bottom: 20px;
  height: 250px;
  width: 100%;
`;

export const NovasLojasContainer = styled.View``;

export const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 15px;
  margin-left: 10px;
`;

export const ContainerScroll = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  flex-direction: row;
  padding-left: 10px;
`;

export const ContainerItem = styled.View`
  align-items: center;
  padding-right: 6px;
`;

export const Avatar = styled.Image`
  height: 110px;
  width: 110px;
  border-radius: 55px;
  background-color: gray;
`;

export const NomeLoja = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const TempoLoja = styled.Text`
  font-size: 13px;
`;

export const Status = styled.Text`
  font-size: 13px;
  color: #99ccff;
`;

export const NovidadesContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 25px;
`;

export const ContainerScrollNovidades = styled.View`
  flex-direction: row;
`;

export const ContainerCardItem = styled.View`
  align-items: center;
  flex: 1;
`;

export const ImgNovidades = styled.View`
  height: 280px;
  width: 98%;
  background-color: #ddd;
  border-radius: 12px;
`;

export const TituloProduto = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const InfoNovidades = styled.View`
  align-items: center;
`;

export const AreaPreco = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AreaPrecoCheio = styled.View`
  align-items: flex-end;
  justify-content: center;
  padding-right: 5px;
`;

export const PrecoCheio = styled.Text`
  font-size: 11px;
`;

export const ValorKbs = styled.Text`
  font-size: 10px;
  color: #99ccff;
`;

export const PrecoNovidade = styled.Text`
  font-size: 26px;
  font-weight: bold;
`;
