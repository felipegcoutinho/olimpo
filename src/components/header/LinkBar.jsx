import React from "react";
import AccessPoints from "../access-point/AccessPoint.jsx";
import Conversores from "../conversor/Conversor.jsx";
import Onu from "../onu/Onu.jsx";
import RadiosOutdoor from "../radio/Radio.jsx";
import RoteadoresHO from "../roteador/Roteador.jsx";
import Sfp from "../sfp/Sfp.jsx";
import Switch from "../switch/Switch.jsx";
import Qi5 from "../qi5/Qi5.jsx";
import ImgAp from "../../assets/ap.png";
import ImgConv from "../../assets/conversor.png";
import ImgHo from "../../assets/twibi.png";
import ImgOnt from "../../assets/ont.png";
import ImgQi5 from "../../assets/qi5.png";
import ImgRadio from "../../assets/radio.png";
import ImgSfp from "../../assets/sfp.png";
import ImgSw from "../../assets/sw.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Tiles from "../../ui/Tiles.jsx";

function LinkBar() {
  const setorTiles = {
    "Wi-Fi Empresarial": { link: "#wifi-empresarial", img: ImgAp },
    "Radio Outdoor": { link: "#radio-outdoor", img: ImgRadio },
    Switch: { link: "#switch", img: ImgSw },
    "5G": { link: "#qi5", img: ImgQi5 },
    Roteador: { link: "#roteador", img: ImgHo },
    "Conversor de Midia": { link: "#conversor", img: ImgConv },
    "Módulo SFP": { link: "#modulo-sfp", img: ImgSfp },
    "Onu/Ont": { link: "#onu-ont", img: ImgOnt },
    "Projetos Especiais": { link: "#projetos-especiais", img: ImgOnt },
  };

  return (
    <Tabs>
      <TabList className="flex justify-center bg-[url('../assets/ttten.svg')]">
        {Object.entries(setorTiles).map(([setor, tiles]) => (
          <Tab>
            <Tiles key={setor} img={tiles.img} setor={setor} link={tiles.link} />
          </Tab>
        ))}
      </TabList>

      <TabPanel>
        <AccessPoints />
      </TabPanel>
      <TabPanel>
        <RadiosOutdoor />
      </TabPanel>
      <TabPanel>
        <Switch />
      </TabPanel>
      <TabPanel>
        <Qi5 />
      </TabPanel>
      <TabPanel>
        <RoteadoresHO />
      </TabPanel>
      <TabPanel>
        <Conversores />
      </TabPanel>
      <TabPanel>
        <Sfp />
      </TabPanel>
      <TabPanel>
        <Onu />
      </TabPanel>
      <TabPanel>
        <Onu />
      </TabPanel>
    </Tabs>
  );
}

export default LinkBar;
