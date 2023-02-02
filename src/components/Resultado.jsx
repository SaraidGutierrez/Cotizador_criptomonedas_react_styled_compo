import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center; 
    gap: 1rem;
    margin-top: 30px

`

const Imagen = styled.img`
    display: block;
    width: 120px;
    
`

const Precio = styled.p`
    font-size: 24px;
    span{
        font-weigth:700;
    }
    
`

const Texto = styled.p`
    font-size: 18px;
    span{
        font-weigth:700;
}
    
`

const Resultado = ({resultado}) => {
    const {PRICE,
         HIGHDAY,
         LOWDAY,
         CHANGEPCT24HOUR, 
         IMAGEURL, 
         LASTUPDATE}
         = resultado
  return (
    <Contenedor>
      <Imagen src={`http://cryptocompare.com/${IMAGEURL}`}
           alt="imagen de criptomoneda"
      />
      <div>
      <Precio>El precio es de: <span>{PRICE}</span></Precio>
      <Texto>El precio mas alto del dia es : <span>{HIGHDAY}</span></Texto>
      <Texto>El precio mas bajo del dia es : <span>{LOWDAY}</span></Texto>
      <Texto>Variacion de las ultimas 24 hrs : <span>{CHANGEPCT24HOUR}</span></Texto>
      <Texto>Ultima atualizacion : <span>{LASTUPDATE}</span></Texto>
      </div>
    </Contenedor>
  )
}

export default Resultado
