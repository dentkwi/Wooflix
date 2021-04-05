import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const SHeader = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  z-index: 2;
`;

//npa add styled-components 이후 아래와 같이 스타일을 입력할 수 있게된다.
const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  height: 50px;
  width: 50px;
  text-align: center;
  border-bottom: 5px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
//react router dom의 Link를 사용하는 경우에는 위와 같이 스타일을 줄 수 있다.

function Header({ location: { pathname } }) {
  return (
    <SHeader>
      <List>
        <Item current={pathname === "/wooflix"}>
          <SLink to="/wooflix">Movie</SLink>
        </Item>
        <Item current={pathname === "/wooflix/TV"}>
          <SLink to="/wooflix/TV">TV</SLink>
        </Item>
        <Item current={pathname === "/wooflix/Search"}>
          <SLink to="/wooflix/Search">Search</SLink>
        </Item>
      </List>
    </SHeader>
  );
}

export default withRouter(Header);

//withRouter는 조금더 공부 필요.. withRouter란 component가 해당 component를
//wrap하여 전달하는데 이때 각종 prop들이 전달되며 이 prop들을 활용할 수 있게된다.

//header.js는 react router에서 정보를 받지 않는다. route.js를 살펴보면 route에 속해있지 않기 때문이다.
//그래서 header가 route 정보를 받으려면 withRouter로 decoration해줄 필요가 생기는것이다
//route들, 예를 들면 TV, movie, detail등은 withRouter의 도움없이 props 정보들을 얻어올수 있다
