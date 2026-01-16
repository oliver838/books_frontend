import { Menu, TextInput, Burger } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./MyMenu.css";
import { IconCategory } from "@tabler/icons-react";
import { IconBooks } from "@tabler/icons-react";
import { MyModal } from "./components/MyModal";
import { IconKey } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

export const MyMenu = ({ setIsAdmin }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [menuOpened, setMenuOpened] = useState(false);

  const [modalOpened, { open, close }] = useDisclosure(false);

  const handleClick = () => {
    setOpened((o) => !o);
    navigate("books/search/" + value);
    setTimeout(() => {
      setValue("");
    }, 150);
  };
  return (
    <>
      <Menu opened={menuOpened} onChange={setMenuOpened} position="bottom-end">
        <Menu.Target>
          <Burger
            opened={menuOpened}
            onClick={() => setMenuOpened((o) => !o)}
            size="md"
            color="#fff"
          />
        </Menu.Target>

        <Menu.Dropdown className="menu-glass">
          {/* ===== LOGO ===== */}
          <div className="menu-logo" onClick={() => navigate("/")}>
            📚 Könyvtár
          </div>

          {/* ===== MENU ITEMS ===== */}
          <Menu.Item
            className="menu-item-glass"
            leftSection={<IconCategory size={18} />}
            onClick={() => navigate("/")}
          >
            Kategóriák
          </Menu.Item>

          <Menu.Item
            className="menu-item-glass"
            leftSection={<IconBooks size={18} />}
            onClick={() => navigate("/books")}
          >
            Összes könyv
          </Menu.Item>

          <Menu.Item leftSection={<IconKey size={18} />} onClick={open}>
            Admin modal megnyitása
          </Menu.Item>

          {/* ===== SEARCH ===== */}
          <TextInput
            className="menu-search"
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            placeholder="Keresés a címben..."
            leftSection={
              <IconSearch
                size={14}
                className="menu-search-icon"
                onClick={handleClick}
              />
            }
          />
        </Menu.Dropdown>
      </Menu>

      <MyModal setIsAdmin={setIsAdmin} opened={modalOpened} close={close} />
    </>
  );
};
