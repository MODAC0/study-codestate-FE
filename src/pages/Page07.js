const Page07 = () => {
    return (
        <article>
            <h1>문제 7 : 레이블 제공</h1>
            <p>사용자가 정보를 입력하는 상황에, 어떤 정보를 입력해야 하는지 정확하게 알 수 없으면 입력이 불가능합니다. 따라서 사용자 입력에 대응하는 레이블을 제공해야 합니다.<br/>
            우측 문제 가이드와 유어클래스 콘텐츠를 참고하여 레이블을 작성하세요.
            </p>
            <section>
                <h2>예시 1</h2>
                <li>{`<input>`}요소만 있으면 무엇을 입력하라는 의미인지 알 수 없습니다. 레이블을 꼭 작성해주세요.</li>
                <div className="inputContainer">
                    <input type="text"/>
                </div>
            </section>
            <section>
                <h2>예시 2</h2>
                <li>{`<input>`}요소에 placeholder를 사용하더라도 레이블을 작성해주세요. placeholder는 레이블을 대체할 수 없습니다.
                    <li>placeholder는 내용을 입력하는 순간 사라지기 때문에 일부 스크린 리더는 읽지 못하게 됩니다.</li>
                </li>
                <div className="inputContainer">
                    <input type="text" placeholder="아이디" />
                    <input type="text" placeholder="비밀번호" />
                </div>
            </section>
            <section>
            <h2>예시 3</h2>
                <li>{`<input>`}요소 밖에 무엇을 입력해야하는지 알려주는 요소가 있더라도, {`<label>`}요소로 레이블을 작성해 {`<input>`}요소와 연결해주세요.
                    <li>{`<input>`}요소에서 id를 작성하고,{`<label>`}요소의 for 속성으로 연결할 {`<input>`}요소의 id를 작성합니다.</li>
                    <li>작성 후 {`<label>`}요소를 클릭하면 어떻게 되는지 확인해보세요.</li>
                </li>
                <div className="inputContainer">
                        <span>아이디</span>
                        <input id="아이디" type="text" />
                        <span>비밀번호</span>
                        <input id="비밀번호" type="text" />
                </div>
            </section>
            <section>
                <h2>예시 4</h2>
                <li>WAI-ARIA의 aria-label 속성을 사용할 수도 있습니다.
                    <li>단, WAI-ARIA의 경우 꼭 필요한 경우가 아니라면 사용하지 않는 것이 좋습니다. 다른 HTML 속성이나 요소로 대체 가능한 경우에는 해당 속성이나 요소를 우선적으로 사용해주세요.</li>
                </li>
                <div className="inputContainer">
                        <input type="text" />
                </div>
            </section>
        </article>
    )
}

export default Page07