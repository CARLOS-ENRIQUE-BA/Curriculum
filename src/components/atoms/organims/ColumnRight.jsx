import '../../../assets/styles/ColumnRight.css'
import Title from '../Title'
import Content from '../Content'
import LanguageList from './LanguageList';

function ColumnRight() {
    const languageList = [{name:"JavaScript",},{name:"Java",},{name:"C++",},{name:"C",},{name:"CSS",},{name:"html"}]
    const idiomList = [{name:"ingles: Medio"},{name:"Español: Nativo"}]
    return (
        <div id='columnaDerecha'>
            <div id='info-top'>
                <Title Titulo="Carlos Enrique Barriga Aguilar"/>
                <Content Contenido="Engineering Student in Software Development" />
            </div>
            <div id="title">
                <Title Titulo="HABILIDADES"/>
            </div>
            <div id="info-aboutMe">
            <Content Contenido="Actualmente estoy estudiando un curso de react con el diseño de atomic dising. Anteriormente he hecho proyectos usando diferentes leguajes, como los son java, c, y c++. Tambien he constuido paginas web usando lenguajes de javascipt, html y css. De igual forma me especialiso mas en el area de requerimientos"/>
            </div>
            <div id="title">
                <Title Titulo="LENGUAJES"/>
            </div>
            <div id="list-info">
            <LanguageList languageList={languageList}/>
            </div>
            <div id="title">
                <Title Titulo="FORMACION"/>
            </div>
            <div id="info-aboutMe">
            <Content Contenido="Estudié la primaria y la secundaria en el C.E.B.E.CHDr. Belisario Domíngez Palencia, en Tuxtla Gutierrez, Chiapas; La prepa la estudie en la preparatoria numero 2 del estado de chiapas y actualmente estudia en la universidad Politecnica en Suchiapa.Tome cursos de programacion en internet acer de paginas web y un curso basico de programación de videojuegos."/>
            </div>
            <div id="title">
                <Title Titulo="Idiomas"/>
            </div>
            <div id="list-info">
            <LanguageList languageList={idiomList}/>
            </div>
        </div>
    );
}

export default ColumnRight;