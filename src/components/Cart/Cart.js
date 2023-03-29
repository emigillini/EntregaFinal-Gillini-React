import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { ColorRing } from "react-loader-spinner";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, vaciarCarrito, removerItem, totalCarrito } = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="container my-5">
      {loading ? (
        <div>
          <br />
          <h2>TU COMPRA</h2>
          <ColorRing height={250} width={250} />
          <br />
          <br />
          <br />
          <br />
        </div>
      ) : (
        <div>
          <h2>Tu compra</h2>
          <hr />
          {cart.length === 0 ? (
            <div>
            <p>El carrito está vacío</p>
            <Link className="btn btn-primary" to={"/"}>Volver</Link>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id}>
                  <h4>{item.name}</h4>
                  <img src={item.img} alt={"imagen taza"} />
                  <div>
                    <small>
                      Cantidad: {item.cantidad} Precio un: {item.precio}
                    </small>
                  </div>
                  <p>Precio total: {item.precio * item.cantidad}</p>
                  <button
                    onClick={() => removerItem(item.id)}
                    className="btn btn-danger"
                  >
                    borrar
                  </button>
                  <hr />
                </div>
              ))}
              <h3>TOTAL: {totalCarrito()}</h3>
              <button
                onClick={vaciarCarrito}
                className="btn btn-danger m-2"
              >
                Vaciar carrito
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};
