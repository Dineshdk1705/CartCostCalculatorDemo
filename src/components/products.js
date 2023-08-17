import React from "react";

const Products = ({ state, dispatch }) => {
  const { products, cart } = state;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "100%",
      }}
    >
      {products.map((item) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 10,
            border: "1px solid grey",
            width: "30%",
            marginTop: 10,
            gap: 10,
          }}
          key={item.id}
        >
          <img
            src={item.thumbnail}
            style={{ height: 200, objectFit: "cover" }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{item.title}</span>
            <span style={{ color: "red" }}>$ {item.price}</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {cart.some((c) => c.id === item.id) ? (
              <button
                className="remove_from_cart"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: item,
                  })
                }
              >
                Remove from cart
              </button>
            ) : (
              <button
                className="add_to_cart"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: {
                      id: item.id,
                      title: item.title,
                      thumbnail: item.thumbnail,
                      price: item.price,
                      qty: 1,
                    },
                  })
                }
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
