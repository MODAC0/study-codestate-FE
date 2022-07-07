import  Page00  from '../pages/Page00'
import  Page01  from '../pages/Page01'
import  Page02  from '../pages/Page02'
import  Page03  from '../pages/Page03'
import  Page04  from '../pages/Page04'
import  Page05  from '../pages/Page05'
import  Page06  from '../pages/Page06'
import  Page07  from '../pages/Page07'
import  Page08  from '../pages/Page08'


const Main = ({idx}) => {
    return (
        <div class="main">
            { idx === 1 ? <Page01 />
            : idx === 2 ? <Page02 />
            : idx === 3 ? <Page03 />
            : idx === 4 ? <Page04 />
            : idx === 5 ? <Page05 />
            : idx === 6 ? <Page06 />
            : idx === 7 ? <Page07 />
            : idx === 8 ? <Page08 />
            : <Page00 />}
        </div>
    )
}

export default Main