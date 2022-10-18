import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import {
  ActionsBox,
  Logo,
  NavContainer,
  Location,
  ShoppingCart,
  ItemsInCart,
  Nav,
} from "./styles";

export function NavBar() {
  const { shoppingCart } = useContext(CartContext);
  const itemsInCart = shoppingCart.length != 0;

  return (
    <NavContainer>
      <Nav>
        <Logo>
          <NavLink to={"/"}>
            <img src="src/assets/Logo.svg" alt="Logo da Coffee Delivery" />
          </NavLink>
        </Logo>

        <ActionsBox>
          <Location>
            <img src="src/assets/Location.svg" alt="Icone de localização" />
            <span>Vila Velha, ES</span>
          </Location>

          <ShoppingCart>
            <NavLink to={itemsInCart ? "/checkout" : "/"}>
              <img
                src="src/assets/ShoppingCart.svg"
                alt="Icone do carrinho de compras"
              />

              {itemsInCart && <ItemsInCart>{shoppingCart.length}</ItemsInCart>}

            </NavLink>
          </ShoppingCart>
        </ActionsBox>
      </Nav>
    </NavContainer>
  );
}
