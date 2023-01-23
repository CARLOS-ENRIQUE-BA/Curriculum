import Widge from "../Widge";

function LanguageList({languageList}) {
    return (
        <>
            {languageList.map(item => <Widge item={item}/>)}
        </>
    );
}

export default LanguageList;