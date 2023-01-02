import catImage from '../static/images/cat.png'
import dogImage from '../static/images/dog.png'
import rabbitImage from '../static/images/rabbit.png'
import otterImage from '../static/images/otter.png'
import redPandaImage from '../static/images/red_panda.png'


const Page03 = () => {
    return (
        <article>
            <h1>문제 3 : 대체 텍스트</h1>
            <p>시각적 요소를 인지하지 못하는 사용자를 위해서 텍스트가 아닌 콘텐츠를 제공할 땐 해당 콘텐츠가 어떤 콘텐츠인지 설명하는 대체 텍스트를 작성해주어야 합니다.<br/>
                우측 문제 가이드와 유어클래스 콘텐츠를 참고하여 아래 이미지들의 웹 접근성을 개선해보세요.</p>
            <li>리팩토링 하기 전, 스크린 리더를 사용하여 아래 이미지들을 어떻게 인식하는지 확인해보세요.</li>
            <li>리팩토링 후에 다시 한 번 스크린 리더를 사용하여 개선된 웹 접근성을 확인해보세요.</li>
            <section>
                <h2>귀여운 동물 사진들</h2>
                <section>
                    <h3>예시 1</h3>
                    <li>적절한 대체 텍스트를 alt 속성을 사용해 작성해주세요.</li>
                    <img src={catImage} />
                </section>
                <section>
                    <h3>예시 2</h3> 
                    <li>alt 속성으로 빈 문자열을 입력하면 요소를 인식하지 않습니다.</li>
                    <img src={dogImage} alt="" />
                </section>
                <section>
                    <h3>예시 3</h3>
                    <li>너무 광범위하지 않은 설명을 입력해주세요.</li>
                    <img src={rabbitImage} alt="동물"/>
                </section>
                <section>
                    <h3>예시 4</h3>
                    <li>지나치게 자세한 설명도 좋지 않습니다.</li>
                    <img src={otterImage} alt="바위 위에서 우수에 찬 눈빛으로 입을 앙 다문 채 좌측을 응시하고있는 발가락이 귀엽고 수염이 풍성한 수달" />
                </section>
                <section>
                    <h3>예시 5</h3>
                    <li>이미지를 충분히 설명해주는 인접 요소가 있다면 대체 텍스트로 빈 문자열을 작성하는 것이 좋습니다.
                        <li>내용을 중복해서 전달할 필요가 없기 때문입니다.</li>
                    </li>
                    <img src={redPandaImage} alt="혀를 내밀고 있는 레서 팬더" />
                    <p>래서 펜더가 대나무를 앞발로 잡고 혀를 내밀고 있다.</p>
                </section>
            </section>
        </article>)
}

export default Page03
