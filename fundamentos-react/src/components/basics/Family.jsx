import React from 'react'
//import FamilyMember from  './FamilyMember'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return(
        <div>
            {/* <FamilyMember name="Daniel" lastName={ props.lastName } />
            <FamilyMember name="Chloe" {...props}/>
            <FamilyMember name="Ketlyn" lastName="Santos"/> */}
            
            {/* { props.children } */}
            {/* Apenas para um elemento
             {React.cloneElement(props.children, { ...props })} 
            */}

            {props.children.map((child, i) => {
                return React.cloneElement(child, { ...props, key: i })
            })}
        </div>
    )
}

//{...props} - Passa todas as informações de um componente pai para um componente filho 
//map - mapeia um array em outro