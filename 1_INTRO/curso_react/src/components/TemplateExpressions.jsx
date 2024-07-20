import MyComponent from "./MyComponent"

const TemplateExpressions = () =>{
    const name = "erick"
    return(
        <div>
            <h1>Nome {name} </h1>
            <MyComponent/>
            <MyComponent/>
            <MyComponent/>
            <MyComponent/>
            <MyComponent/>
        </div>
    )
}

export default TemplateExpressions