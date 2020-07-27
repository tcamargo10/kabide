import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
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

export const ActionButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 60px;
  width: 100px;
`;

export const Banner = styled.Image`
  height: 300px;
  width: 100%;
`;

export const NovasLojas = styled.View`
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  margin-bottom: 15px;
`;

export const ContainerScroll = styled.View`
  flex-direction: row;
`;

export const ContainerItem = styled.View`
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 60px;
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
  color: #cce6ff;
`;
