import '../../assets/styles/ColumnLeft.css'

function Img({style, foto, info}) {
    return (
        <img className={style.profilePicture} src={foto} alt={info}/>
    );
}

export default Img;