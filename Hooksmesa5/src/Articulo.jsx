
function Articulo ( {producto , setProducto} ) {

    return(

        <div>

            <button onClick={ () => setProducto ( producto ='Compra exitosa ✅')}>Comprar Articulo</button>

            <h1>Noteboock HP {producto}</h1>
        </div>

    )
    


}
export default Articulo;