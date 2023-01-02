import logo from "../static/images/logo_white.png"
const Header = () => {
    return (
  <div class="header"><img src={logo} style={{"width":"120px"}}/><div style={{'font-size': '2.2rem', "color":"white"}}>웹 표준 & 웹 접근성</div></div>
    )

}

export default Header