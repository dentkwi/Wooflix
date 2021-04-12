//styled-components를 사용한 방법은 global한 style부여가 힘들다.
//그래서 add styled-reset을 설치한뒤 (npm add styled-reset)
//GlobalStyles.js 파일을 만든다.

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 12px;
        background-color:rgba(20,20,20,1);
        color:white;
        padding-top:50px;
        padding-bottom: 50px;
    }

`;

export default globalStyles;