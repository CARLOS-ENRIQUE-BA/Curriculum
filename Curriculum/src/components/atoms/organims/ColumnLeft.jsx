import '../../../assets/styles/ColumnLeft.css'
import ProfilePicture from '../../../assets/img/profilePicture.jpg'
import IconWhatsapp from '../../../assets/img/whatsapp.png'
import IconPhone from '../../../assets/img/telefono.png'
import IconInstagram from '../../../assets/img/instagram.png'
import IconEmail from '../../../assets/img/correo.png'
import Title from '../Title'
import Content from '../Content'

function ColumnOne() {
    return (
        <div id="columnaIzquierda">
            <img src={ProfilePicture} alt="profilePicture" id='profilePicture'/>
            <div id="sobreMi">
                <Title Titulo="SOBRE MI"/>
            </div>
            <div id="info">
            <Content Contenido="Mi nombre es Carlos Enrique Barriga Aguilar, tengo 19 años y actualmenre soy  un estudiante de la Universidad Politecnica de Chiapas, en la rama de ingenieria en desarrollo de softwer. "/>
            </div>
            <div id="contactos">
                <Title Titulo="CONTACTO"/>
            </div>
            <div id="info">
                <div>
                    <div id='info-icon'>
                        <img src={IconWhatsapp} alt="icon" id='icon'/>
                        <Content Contenido="9612112625"/>
                    </div>
                    <div id='info-icon'>
                        <img src={IconPhone} alt="icon" id='icon'/>
                        <Content Contenido="9612112625"/>
                    </div>
                    <div id='info-icon'>
                        <img src={IconInstagram} alt="icon" id='icon'/>
                        <Content Contenido="carlos._.aguilar"/>
                    </div>
                    <div id='info-icon'>
                        <img src={IconEmail} alt="icon" id='icon'/>
                        <Content Contenido="carlos_enbagui@hotmail.com"/>
                        <p id='datos'></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColumnOne;