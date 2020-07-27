import styled from 'styled-components/native';

export const Container = styled.View`
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
  height: 55px;
  width: 250px;
  border: 1px solid #ddd;
  border-radius: 28px;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Button = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;
