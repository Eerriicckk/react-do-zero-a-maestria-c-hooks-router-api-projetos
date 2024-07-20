const Eventos = () => {
    const handleMyEvent = (event) =>{
        console.log(event);
        if(event.shiftKey){
            // alert("shift pressionado")
            return(
                <div>
                    olaolololo
                    {event}
                </div>
            )
        }
        console.log("clicou");
    }
    const renderText = (ptexto) =>{
        const texto = ptexto;
        return(
            <div>
                {texto}
            </div>
        )

    }
    return (
        <div>
            teste Eventos
            <div>
                {/* {aula 1 de eventos} */}
                {/* {ao colocar funcoes no onclick, ou react no geral, nao adicionar os () se nao quiser que ela rode ao carregar o componente} */}
                <button type="button" onClick={handleMyEvent}>botao</button>
                <a href="www.youtube.com.br">link</a>
            </div>
            <div>
                {renderText("texto a aparecer")}
            </div>
        </div>
    )
}

export default Eventos;