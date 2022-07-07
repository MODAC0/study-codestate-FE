import { useState } from "react"
import data from "../static/staticData"
import home from "../static/images/icon-home.png"
import web from "../static/images/icon-web.png"
import mail from "../static/images/icon-mail.png"

const Page05 = () => {
    const [currentTab, setCurrentTab] = useState(0)
    const { tab } = data

    return (
        <article>
            <h1>문제 5 : WAI-ARIA</h1>
            <p>시맨틱 요소만으로 의미를 충분히 부여할 수 없는 상황에 WAI-ARIA를 사용하면 HTML 요소에 추가적인 의미를 부여하여 더 원활하게 페이지를 탐색 할 수 있게 도와줍니다. <br />
            ‘시맨틱 요소만으로 의미를 충분히 부여할 수 없는 상황’이라는 것은 <strong>시맨틱 요소만으로 충분한 상황에서는 WAI-ARIA를 사용하지 않아야 한다</strong>는 의미입니다. WAI-ARIA는 보조적인 역할로만 사용해야 합니다. WAI-ARIA를 남용해선 안 되며, 시맨틱한 HTML을 작성하는 것이 최우선입니다.<br />
            우측 문제 가이드와 유어클래스 콘텐츠를 참고하여 WAI-ARIA를 사용해보세요.</p>
            <section>
                <h2>WAI-ARIA 사용하기</h2>
                <section>
                    <h3>예시 1 : 역할(Role)</h3>
                    <li>요소의 이름이 요소의 역할을 충분히 설명하지 못할 때 사용할 수 있습니다.
                        <div className="button">요소는 div</div>
                    </li>
                    <li>요소의 이름으로 요소의 역할을 파악할 수 있을 때는 사용하지 마세요.
                        <button role="button">요소는 button</button>
                    </li>
                    <li>요소 본연의 역할을 바꾸지 마세요.
                        <h3 role="button" className="button">요소는 h3</h3>
                    </li>
                    <h3>예시 1 - 문제</h3>
                    <li>아래 예시는 문제 4에서 보았던 탭 컴포넌트입니다. 각 컴포넌트에 맞는 역할을 WAI-ARIA로 작성해보세요.</li>
                    <li>WAI-ARIA 작성 전후로 개별 요소를 지정했을 때 스크린 리더가 읽어주는 내용의 차이를 확인해보세요.</li>
                    <div class="tabContainer">
                        <div className="tabList">
                            <div className={currentTab === 0 ? "tab selected" : "tab"} onClick={()=>setCurrentTab(0)}>{tab.tab1.title}</div>
                            <div className={currentTab === 1 ? "tab selected" : "tab"} onClick={()=>setCurrentTab(1)}>{tab.tab2.title}</div>
                            <div className={currentTab === 2 ? "tab selected" : "tab"} onClick={()=>setCurrentTab(2)}>{tab.tab3.title}</div>
                        </div>
                        <div className={currentTab === 0 ? "block" : "none"}>{tab.tab1.content.map((el,idx)=> <li key={idx}>{el}</li>)}</div>
                        <div className={currentTab === 1 ? "block" : "none"}>{tab.tab2.content.map((el,idx)=> <li key={idx}>{el}</li>)}</div>
                        <div className={currentTab === 2 ? "block" : "none"}>{tab.tab3.content.map((el,idx)=> <li key={idx}>{el}</li>)}</div>
                    </div>
                </section>
                <section>
                    <h3>예시 2 : 속성(property)</h3> 
                    <li>시맨틱 요소를 사용했음에도 요소의 역할에 대한 설명이 충분하지 않은 경우가 있습니다. 이럴 때 보조적 역할로 WAI-ARIA를 사용할 수 있습니다.</li>
                    <li>WAI-ARIA 작성 전후로 개별 요소를 지정했을 때 스크린 리더가 읽어주는 내용의 차이를 확인해보세요.</li>
                    <div className="iconButtonContainer">
                        <button className="iconButton"><img src={home} /></button>
                        <button className="iconButton"><img src={web} /></button>
                        <button className="iconButton"><img src={mail} /></button>
                    </div>
                </section>
                <li>WAI-ARIA에는 정말 많은 속성들이 있지만, role, aria-label 정도만 사용해도 HTML에 추가적인 의미를 부여할 수 있기 때문에 웹 접근성을 어느정도 향상시킬 수 있습니다. 하지만 웹 접근성을 확보할 때 가장 중요한 것은 시맨틱한 HTML을 작성하는 것임을 항상 기억하세요. 앞서 말했듯, WAI-ARIA는 보조적인 역할로만 사용해야 합니다.</li>
            </section>
        </article>
    )
}

export default Page05