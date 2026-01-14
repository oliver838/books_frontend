import "./App.css";
import { Affix, Flex, Paper, Text, Title } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import TopBar from "./components/TopBar";
import '@mantine/core/styles.css';
import { Categories } from "./components/Categories";
import Navbar from "./components/NavBar";
function App() {
  const { height, width } = useViewportSize();

  return (
    <>
            <Navbar />

      <Flex
        mih={height}
        justify="center"
        align="center"
        bg="transparent"
      >
  
          <Affix position={{top:100}} style={{width:width, textAlign:"center"}}>
            <Title>Válogass a könyvátrban</Title>
          </Affix>
        <Categories/>
      </Flex>
    </>
  );
}

export default App;
