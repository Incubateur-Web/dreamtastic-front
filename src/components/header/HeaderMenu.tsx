import { DreamIcon } from "../icons/DreamIcon";
import { NightmareIcon } from "../icons/NightmareIcon";
import { PlusIcon } from "../icons/PlusIcon";
import { RatedIcon } from "../icons/RatedIcon";
import { RecentIcon } from "../icons/RecentIcon";
import { HeaderMenuItem } from "./HeaderMenuItem";

export const HeaderMenu = () => (
  <div className="justify-between flex flex-1 md:flex-none">
    <HeaderMenuItem icon={<DreamIcon />} link="/" />
    <HeaderMenuItem icon={<NightmareIcon />} link="/nightmares" />
    <HeaderMenuItem icon={<RecentIcon />} link="/recents" />
    <HeaderMenuItem icon={<RatedIcon />} link="/rated" />
    <HeaderMenuItem icon={<PlusIcon />} link="/add" />
  </div>
);
