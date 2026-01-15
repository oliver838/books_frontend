import { Menu, TextInput, Burger } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./MyMenu.css";
import { IconCategory } from "@tabler/icons-react";
import { IconBooks } from "@tabler/icons-react";

export const MyMenu = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [opened, setOpened] = useState(false);
const handleClick = ()=>{
    
    setOpened((o) => !o)
    navigate("books/search/" + value)
    setTimeout(() => {
        
    setValue("")
    }, 150);
}
  return (
    <Menu opened={opened} onChange={setOpened} position="bottom-end">
      <Menu.Target>
        <div className="burger-glass">
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="md"
            color="#fff"
          />
        </div>
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
  );
};
