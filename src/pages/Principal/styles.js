import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  height: 60px;
  width: 100%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: white;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  elevation: 3;
`;

export const Icon = styled.Image``;

export const Logo = styled.Image`
  height: 40px;
`;

export const Contain = styled.View`
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
`;

export const Card = styled.View`
  height: 45%;
  margin-top: 25px;
  align-items: center;
  justify-content: flex-end;
`;

export const Img = styled.Image`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 20px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  height: 50px;
  width: 250px;
  border: 1px solid #ddd;
  border-radius: 28px;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
`;

export const Button = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
