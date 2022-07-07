import data from '../static/staticData'

const Aside = ({idx}) => {
    const aside = data.aside[idx]
    return (
        <div class="aside">
            <div className="title2">문제 가이드</div>
            {aside? (
            <>
                <div className="title3">{aside.title}</div>
                {aside.content ? aside.content.map((el, idx)=> <li key={idx}>{el}</li>) : null}
            </> ) : null}
        </div>
    )
}

export default Aside