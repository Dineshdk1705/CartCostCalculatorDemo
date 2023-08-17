import React, { useState, useEffect } from "react";

const Cart = ({ state, dispatch }) => {
  const { cart } = state;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const changeTheQty = (id, qty) => {
    dispatch({ type: "CHANGE_CART_QTY", payload: { id, qty } });
  };
  return (
    <div style={{ textAlign: "center", marginTop: 0, paddingTop: 0 }}>
      <h3>Cart</h3>
      <span>Subtotal: $ {total}</span>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {cart.length > 0 ? (
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  padding: 10,
                  border: "1px solid grey",
                  margin: 5,
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", gap: 10 }}>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    style={{ width: 70, objectFit: "cover" }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <b>{item.title}</b>
                    <span>$ {item.price}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <button
                      style={{ color: "black" }}
                      onClick={() => changeTheQty(item.id, item.qty - 1)}
                    >
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button
                      style={{ color: "black" }}
                      onClick={() => changeTheQty(item.id, item.qty + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Empty cart</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
