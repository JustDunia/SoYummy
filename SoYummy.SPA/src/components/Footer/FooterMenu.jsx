import c from "./FooterMenu.module.css";
import { Link } from "react-router-dom";

export const FooterMenu = () => {
  return (
    <>
      <MenuItems className={c.menu_items}>
        <Link
          to="/search?query=&type=ingredients"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          <Item className={c.item}> Ingredients </Item>
        </Link>

        <Link
          to="/add"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          <Item className={c.item}>Add recipes </Item>
        </Link>

        <Link
          to="/my"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          <Item className={c.item}>My recipes</Item>
        </Link>

        <Link
          to="/favorite"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          <Item className={c.item}> Favorite</Item>
        </Link>

        <Link
          to="/shopping-list"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          <Item className={c.item}>Shopping list </Item>
        </Link>
      </MenuItems>
    </>
  );
};
