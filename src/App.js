import { useState,useEffect } from "react";
import styled from "styled-components";


const Allmenu = styled.button`
      display: inline-block;
      font-family: bootstrap-icons !important;
      font-style: normal;
      font-weight: 400 !important;
      font-variant: normal;
      text-transform: none;
      &.close:before{
        content : '\\F62A';
      }
      &:before{
        content : '\\F479';
      }
`




function App() {
  const [allmenu, setAllmenu] = useState(false);
  useEffect(()=>{
    //랜더링html이 생성완료된 시점, 시점이 안맞으면 돌아가지 않는다.
    //widow.onload와 같다.
    //웹으로 제작한 자바스크립트 여기로
    document.querySelector('#allMenu').addEventListener("click",function(){
      this.classList.toggle('close')
    })
  }, []) //[]은 랜더링이 끝나고 한번 터지는거야. 안에 css로 관리해도 되잖아,,? 최적화....  유즈이펙트에 도튜멘트 나오면 유즈이펙트 안에 넣어조

  return (
    <div className="App">
      
      <div >
        <Allmenu className="close" id="allMenu"></Allmenu>
        
      </div>
    
    </div>
  );
}

export default App;
