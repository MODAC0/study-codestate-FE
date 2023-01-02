const Nav = ({idx, setIdx }) => {
    return (
        <div class="nav">
            <li className={idx===0? 'selected' : ''} onClick={()=>setIdx(0)}><b style={{'font-size' : '2rem'}}>메인</b></li>
            {[1,2,3,4,5,6,7,8].map(el=> <li key={el} className={idx===el? 'selected' : ''} onClick={()=>setIdx(el)}> 문제 {el} </li>)}
        </div>
    )
}

export default Nav