import propTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  
`;

const Text = styled.span`
  color: ${(props) => props.color};
  //이부분에 유의... props 부위엔 뭘 넣어도 상관이 없고, 해당 호출 객체의 color값에 접근할 수 있게 해준다!
  //다른 값에도 접근할수 있을것으로 보인다. 화살표 함수와 styled component라 가능한 css문법인거 같다.
`;

const Message = ({ text, color }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

Message.propTypes = {
  text: propTypes.string.isRequired,
  color: propTypes.string.isRequired,
};

export default Message;
