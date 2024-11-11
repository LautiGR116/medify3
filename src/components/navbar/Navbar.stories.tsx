import {MdiProgressStar, MynauiCalendar } from "../svg/navbar/Calendar";
import { MdiLightHeart } from "../svg/navbar/Heart";
import { IcRoundHome } from "../svg/navbar/Home";
import { MaterialSymbolsLightPill } from "../svg/navbar/Pill";
import { MaterialSymbolsCheck } from "../svg/progressButton/Completed";
import NavBar from "./Navbar";

export default {
  title: 'Common/NavBar',
  component: NavBar,
}

export const Default = {
  args: {
    pages: [
      {
        icon: <IcRoundHome />,
      },
      {
        icon: <MaterialSymbolsLightPill />,
      },
      {
        icon: <MynauiCalendar />,
      },
      {
        icon: <MdiLightHeart />,
      },
      {
        icon: <MdiProgressStar/>,
      }
    ]
  }
}