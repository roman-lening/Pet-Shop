import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { NavLink } from "react-router-dom";
import {
  headerStyle,
  titleStyle,
  dividerContainerStyle,
  dividerStyle,
  formStyle,
  btnStyle,
  fieldGroupStyle,
  buttonStyle,
  inputStyle,
} from "./styles.js";
import { useSelector, useDispatch } from "react-redux";
import {
  addOneProduct,
  deleteOneProduct,
  deleteProduct,
} from "../../redux/slices/bagSlice.js";
import { useState } from "react";
import axios from "axios";

function BasketPage() {
  const products = useSelector((state) => state.items.products);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  const countItems = products.reduce(
    (total, product) => total + product.quantity,
    0,
  );

  const total = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const orderData = {
      name: name,
      phone: phone,
      email: email,
      products: products.map((product) => ({
        id: product.id,
        quantity: product.quantity,
      })),
    };

    try {
      const response = await axios.post(
        "http://localhost:3333/sale/send",
        orderData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      console.log(response.data);
      console.log(orderData);

      setName("");
      setPhone("");
      setEmail("");

      localStorage.removeItem("bagProducts");

      setOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  if (countItems === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "2.778vw auto 5.556vw",
          width: "94.444vw",
          gap: "2.778vw",
        }}
      >
        <Box sx={headerStyle}>
          <Typography sx={titleStyle}>Shopping cart</Typography>
          <Box sx={dividerContainerStyle}>
            <Divider sx={dividerStyle} />
            <NavLink to="/products">
              <Button sx={buttonStyle}>Back to the store</Button>
            </NavLink>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "1.389vw",
              lineHeight: "130%",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: "#282828",
            }}
          >
            Looks like you have no items in your basket currently.
          </Typography>
          <NavLink to="/sales">
            <Button
              sx={{
                borderRadius: "0.417vw",
                padding: "1.111vw 2.222vw",
                width: "313px",
                height: "4.028vw",
                background: "#0d50ff",
                fontWeight: 600,
                color: "white",
                fontSize: "1.389vw",
                lineHeight: "130%",
                textAlign: "center",
                textTransform: "none",
              }}
            >
              Continue Shopping
            </Button>
          </NavLink>
        </Box>
      </Box>
    );
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "2.778vw auto 5.556vw",
          width: "94.444vw",
          gap: "2.778vw",
        }}
      >
        <Box sx={headerStyle}>
          <Typography sx={titleStyle}>Shopping cart</Typography>
          <Box sx={dividerContainerStyle}>
            <Divider sx={dividerStyle} />

            <NavLink to="/products">
              <Button sx={buttonStyle}>Back to the store</Button>
            </NavLink>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "32px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {products.map((product) => {
              return (
                <Box
                  key={product.id}
                  sx={{
                    display: "flex",
                    gap: "32px",
                    border: "1px solid #ddd",
                    borderRadius: "12px",
                    width: "780px",
                    height: "auto",
                  }}
                >
                  <NavLink to={`/item/${product.id}`}>
                    <img
                      src={`http://localhost:3333${product.image}`}
                      alt={product.title}
                      style={{
                        width: "200px",
                        height: "180px",
                        borderRadius: "12px",
                      }}
                    />
                  </NavLink>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "32px",
                      justifyContent: "flex-start",
                      paddingTop: "32px",
                      paddingBottom: "32px",
                      paddingRight: "32px",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: "1.389vw",
                          lineHeight: "130%",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          color: "#282828",
                          minWidth: 0,
                          maxWidth: "450px",
                        }}
                      >
                        {product.title}
                      </Typography>
                      <Button
                        onClick={() => dispatch(deleteProduct(product.id))}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1L13 13"
                            stroke="#282828"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13 1L1 13"
                            stroke="#282828"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "32px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          border: "0.069vw solid #ddd",
                          borderRadius: "0.417vw",
                        }}
                      >
                        <Button
                          onClick={() => dispatch(deleteOneProduct(product.id))}
                          sx={{
                            borderRight: "0.069vw solid #ddd",
                            borderRadius: "0.417vw",
                            width: "4.028vw",
                            height: "4.028vw",
                            minWidth: 0,
                            padding: 0,
                          }}
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 12H19"
                              stroke="#8B8B8B"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Button>
                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontSize: "1.389vw",
                            lineHeight: "130%",
                            textAlign: "center",
                            color: "#282828",
                            width: "6.667vw",
                            height: "4.028vw",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {product.quantity}
                        </Typography>
                        <Button
                          onClick={() => dispatch(addOneProduct(product.id))}
                          sx={{
                            borderLeft: "0.069vw solid #ddd",
                            borderRadius: "0.417vw",
                            width: "4.028vw",
                            height: "4.028vw",
                            minWidth: 0,
                            padding: 0,
                          }}
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 12H19"
                              stroke="#8B8B8B"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 5V19"
                              stroke="#8B8B8B"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Button>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          gap: "16px",
                          alignItems: "flex-end",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontSize: "40px",
                            lineHeight: "110%",
                            color: "#282828",
                          }}
                        >
                          ${product.price * product.quantity}
                        </Typography>

                        {product.discont_price != null ? (
                          <Typography
                            sx={{
                              fontWeight: 500,
                              fontSize: "20px",
                              lineHeight: "130%",
                              textDecoration: "line-through",
                              color: "#8b8b8b",
                            }}
                          >
                            ${product.discont_price * product.quantity}
                          </Typography>
                        ) : undefined}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              padding: "32px",
              borderRadius: "12px",
              background: "#f1f3f4",
              height: "fit-content",
              position: "sticky",
              top: "32px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "2.778vw",
                  lineHeight: "110%",
                  color: "#282828",
                }}
              >
                Order details
              </Typography>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "2.778vw",
                    lineHeight: "130%",
                    color: "#8b8b8b",
                  }}
                >
                  {countItems} {countItems > 1 ? "items" : "item"}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "2.778vw",
                      lineHeight: "130%",
                      color: "#8b8b8b",
                    }}
                  >
                    Total
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "4.444vw",
                      lineHeight: "110%",
                      color: "#282828",
                    }}
                  >
                    ${total.toFixed(2).replace(".", ",")}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box component="form" onSubmit={handleSubmit} sx={formStyle}>
              <Box sx={fieldGroupStyle}>
                <TextField
                  variant="outlined"
                  sx={inputStyle}
                  placeholder="Name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  placeholder="Phone number"
                  variant="outlined"
                  sx={inputStyle}
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <TextField
                  placeholder="Email"
                  variant="outlined"
                  sx={inputStyle}
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              <Button type="submit" sx={btnStyle}>
                Order
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="order-success-title"
        aria-describedby="order-success-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "548px",
            height: "auto",
            boxSizing: "border-box",
            padding: "32px",
            borderRadius: "12px",
            background: "#0d50ff",
            outline: "none",
          }}
        >
          <Button
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: "24px",
              right: "24px",
              minWidth: 0,
              width: "26px",
              height: "26px",
              padding: 0,
            }}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.8333 1.83337L1.83325 23.8334"
                stroke="white"
                strokeWidth="3.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.83325 1.83337L23.8333 23.8334"
                stroke="white"
                strokeWidth="3.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <Typography
            id="order-success-title"
            sx={{
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "110%",
              color: "#fff",
              marginBottom: "24px",
            }}
          >
            Congratulations!
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              // mpaddingBottom: "32px"
            }}
          >
            <Typography
              id="order-success-description"
              sx={{
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "130%",
                color: "#fff",
                maxWidth: "460px",
              }}
            >
              Your order has been successfully placed on the website.
            </Typography>
            <Typography
              id="order-success-description"
              sx={{
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "130%",
                color: "#fff",
                maxWidth: "460px",
              }}
            >
              A manager will contact you shortly to confirm your order.
            </Typography>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default BasketPage;