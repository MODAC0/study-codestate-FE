import tableExample from "../static/images/table_example.png"

const Page06 = () => {
    return (
        <article>
            <h1>문제 6 : 표의 구성</h1>
            <p>비장애인은 표를 보면 그 구조를 인식할 수 있지만, 시각 장애가 있는 경우에는 내용을 들으면서 그 구조를 파악해야만 합니다. 따라서 듣기만해도 표의 구조, 내용을 이해하기 쉽게 구성해야 합니다.</p>
            <section>
                <h2>좋은 예시 1</h2>
                <li>표의 제목을 제공하고, 테이블 요소도 올바르게 사용했습니다. HTML 요소 구성을 직접 확인해보세요.</li>
                <table>
                    <caption>테이블 요소의 종류</caption>
                    <thead>
                        <tr>
                            <th>요소</th>
                            <th>역할</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{`<table>`}</td>
                            <td>표를 생성</td>
                        </tr>
                        <tr>
                            <td>{`<caption>`}</td>
                            <td>표의 제목</td>
                        </tr>
                        <tr>
                            <td>{`<thead>`}</td>
                            <td>(optional) 열의 제목을 묶음</td>
                        </tr>
                        <tr>
                            <td>{`<tbody>`}</td>
                            <td>(optional) 표의 내용을 묶음</td>
                        </tr>
                        <tr>
                            <td>{`<th>`}</td>
                            <td>열의 제목</td>
                        </tr>
                        <tr>
                            <td>{`<tr>`}</td>
                            <td>table row의 약자. 열을 생성</td>
                        </tr>
                        <tr>
                            <td>{`<td>`}</td>
                            <td>table data의 약자. 행을 생성</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h2>좋은 예시 2-1</h2>
                <li>비교적 복잡한 구성의 표에서 scope 속성을 사용하여 행과 열의 제목이 무엇인지 표시해주었습니다.</li>
                <table>
                    <caption>Cmarket 판매총액</caption>
                    <thead>
                        <tr>
                            <th scope="col">(col)<br/>상품명</th>
                            <th scope="col">(col)<br/>판매가</th>
                            <th scope="col">(col)<br/>판매량</th>
                            <th scope="col">(col)<br/>판매총액</th>
                        </tr>
                        </thead>
                    <tbody>
                        <tr>
                            <td scope="row">(row)<br/>2020년 달력</td>
                            <td>12,000원</td>
                            <td>6개</td>
                            <td>72,000원</td>
                        </tr>
                        <tr>
                            <td scope="row">(row)<br/>개구리 안대</td>
                            <td>2,900원</td>
                            <td>4개</td>
                            <td>11,600원</td>
                        </tr>
                        <tr>
                            <td scope="row">(row)<br/>잉어 슈즈</td>
                            <td>3,900원</td>
                            <td>7개</td>
                            <td>27,300원</td>
                        </tr>
                        <tr>
                            <td scope="row">(row)<br/>노른자 분리기</td>
                            <td>9,900원</td>
                            <td>5개</td>
                            <td>49,500원</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h2>좋은 예시 2-2</h2>
                <li>비교적 복잡한 구성의 표에서 id와 headers를 사용해 데이터 구조를 표시해주었습니다.</li>
                <table>
                    <caption>Cmarket 판매총액</caption>
                    <thead>
                        <tr>
                            <th id="A">상품명<br/>(A)</th>
                            <th id="B">판매가<br/>(B)</th>
                            <th id="C">판매량<br/>(C)</th>
                            <th id="D">판매총액<br/>(D)</th>
                        </tr>
                        </thead>
                    <tbody>
                        <tr>
                            <td id="a">2020년 달력<br/>(a)</td>
                            <td headers="B a">12,000원<br/>(B a)</td>
                            <td headers="C a">6개<br/>(C a)</td>
                            <td headers="D a">72,000원<br/>(D a)</td>
                        </tr>
                        <tr>
                            <td id="b">개구리 안대<br/>(b)</td>
                            <td headers="B b">2,900원<br/>(B b)</td>
                            <td headers="C b">4개<br/>(C b)</td>
                            <td headers="D b">11,600원<br/>(D b)</td>
                        </tr>
                        <tr>
                            <td id="c">잉어 슈즈<br/>(c)</td>
                            <td headers="B c">3,900원<br/>(B c)</td>
                            <td headers="C c">7개<br/>(C c)</td>
                            <td headers="D c">27,300원<br/>(D c)</td>
                        </tr>
                        <tr>
                            <td id="d">노른자 분리기<br/>(d)</td>
                            <td headers="B d">9,900원<br/>(B d)</td>
                            <td headers="C d">5개<br/>(C d)</td>
                            <td headers="D d">49,500원<br/>(D d)</td>
                        </tr>
                    </tbody>
                </table>
                <li>예시 2-1, 예시 2-2처럼 테이블을 작성하면, 표 구성을 파악하기 더 쉬워집니다.</li>
                <li>이번 과제에서 사용해보는 무료 스크린리더는 속성 작성 전과 차이 없이 표를 읽지만, 일부 유료 스크린 리더는 표를 다음과 같이 읽게 됩니다.
                    <li><strong>속성 작성 전 :</strong> 상품명 → 판매가 → 판매량 → 판매총액 → 2020년 달력 → 12,000원 → 6개 → 72,000원 → 개구리 안대 → ...</li>
                    <li><strong>속성 작성 후 :</strong> 상품명 → 2020년 달력 → 판매가 → 12,000원 → 판매량 → 6개 → 판매총액 → 72,000원 → 상품명 → 개구리 안대 → ...</li>
                </li>
            </section>
            <section>
                <h2>실습</h2>
                <li>아래 이미지를 HTML 표로 바꿔서 작성해보세요.
                    <li>scope 속성을 사용해서 한 번, id, headers 속성을 사용해서 한 번 작성해보세요.</li>
                    <li>보고 이해하는 것을 넘어 직접 작성 해보면 사용법을 제대로 파악할 수 있습니다.</li>
                    <img src={tableExample} />
                </li>
                <li>
                    scope 속성 사용
                    <table></table>
                </li>
                <li>
                    id, headers 속성 사용
                    <table></table>
                </li>
            </section>
        </article>
    )
}

export default Page06