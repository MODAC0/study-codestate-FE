import { useState } from "react"
import data from "../static/staticData"

const Page04 = () => {
    const [currentTab1, setCurrentTab1] = useState(0)
    const [currentTab2, setCurrentTab2] = useState(0)
    const { tab } = data
    
    return (
        <article>
            <h1>문제 4 : 콘텐츠 선형 구조</h1>
            <p>스크린 리더 사용자는 스크린 리더가 읽어주는대로 화면의 정보를 파악할 수 밖에 없습니다. 따라서 듣기만 해도 정보를 이해하기 좋은 구조로 마크업을 구성하는 것이 좋습니다. HTML 코드를 짤 때 어떻게 하면 더 논리적인 구조로 마크업을 구성할 수 있을지 고민해보세요.</p>
            <li>이번 문제에서는 수정할 코드는 없습니다.</li>
            <li>아래 예시들을 스크린 리더로 확인해보고 어떤 구조가 정보를 파악하기 더 좋은지 확인해보세요.</li>
            <li>두 예시에서 콘텐츠를 배치한 HTML 구조가 어떻게 다른지 코드를 직접 확인해보세요.</li>
            <section>
                <h2>예시 1</h2>
                <div class="tabContainer">
                    <div className="tabList">
                        <div className={currentTab1 === 0 ? "tab selected" : "tab"} onClick={()=>setCurrentTab1(0)}>{tab.tab1.title}</div>
                        <div className={currentTab1 === 1 ? "tab selected" : "tab"} onClick={()=>setCurrentTab1(1)}>{tab.tab2.title}</div>
                        <div className={currentTab1 === 2 ? "tab selected" : "tab"} onClick={()=>setCurrentTab1(2)}>{tab.tab3.title}</div>
                    </div>
                    <div className={currentTab1 === 0 ? "block" : "none"}>{tab.tab1.content.map((el,idx)=> <li key={idx}>{el}</li>)}</div>
                    <div className={currentTab1 === 1 ? "block" : "none"}>{tab.tab2.content.map((el,idx)=> <li key={idx}>{el}</li>)}</div>
                    <div className={currentTab1 === 2 ? "block" : "none"}>{tab.tab3.content.map((el,idx)=> <li key={idx}>{el}</li>)}</div>
                </div>
            </section>
            <section>
                <h2>예시 2</h2>
                <div class="tabContainer">
                    <div className="tabList">
                        <div>
                            <div className={currentTab2 === 0 ? "tab selected" : "tab"} onClick={()=>setCurrentTab2(0)}>{tab.tab1.title}</div>
                            <div className={`tabPanel${currentTab2 === 0 ? " block" : " none"}`}>{tab.tab1.content.map((el,idx)=> <li key={idx}>{el}</li>)}</div>
                        </div>
                        <div>
                            <div className={currentTab2 === 1 ? "tab selected" : "tab"}  onClick={()=>setCurrentTab2(1)}>{tab.tab2.title}</div>
                            <div className={`tabPanel${currentTab2 === 1 ? " block one" : " none"}`}>{tab.tab2.content.map((el,idx)=> <li key={idx}>{el}</li>)}</div>
                        </div>
                        <div>
                            <div className={currentTab2 === 2 ? "tab selected" : "tab"}  onClick={()=>setCurrentTab2(2)}>{tab.tab3.title}</div>
                            <div className={`tabPanel${currentTab2 === 2 ? " block two" : " none"}`}>{tab.tab3.content.map((el,idx)=> <li key={idx}>{el}</li>)}</div>
                        </div>
                    </div>
                </div>
            </section>
            <li>여기에 나온 예시가 정답은 아니며, 스타일링 할 때 비효율적이라는 단점도 있습니다. HTML 구조의 차이가 정보 전달에 있어서 어떤 차이를 가져오는지만 확인해주세요.</li>
            <li>웹 접근성을 고려해서 만큼 컴포넌트의 예시는 정말 많습니다. 궁금하시다면 구글링을 통해 컴포넌트 예시를 찾아보고 분석해보세요.</li>
        </article>
    )
}

export default Page04