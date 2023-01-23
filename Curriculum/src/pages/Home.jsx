import ColumnLeft from "../components/atoms/organims/ColumnLeft";
import ColumnRight from "../components/atoms/organims/ColumnRight";
import '../assets/styles/Home.css'

function Home(){
    return (
        <>
            <div id="page">
                <ColumnLeft />
                <ColumnRight />
            </div>
        </>
    )
}

export default Home;