import { Outlet } from "react-router-dom";
import DDNav from "../DDNav";

export default function Bozja() {
  return (
    <div>
      <DDNav />
      <Outlet />
    </div>
  )
}