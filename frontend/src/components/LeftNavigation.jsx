import { Menu, Drawer } from "react-daisyui"
import { Link } from "react-router-dom"

export default function LeftNavigation() {

  const MenuItem = ({ label, link }) => {
    return (
      <Menu.Item className=" text-nowrap">
        <Link to={link}>{label}</Link>
      </Menu.Item>
    )
  }

  const NestedMenu = ({ ...args }) => {
    return (
      <Menu.Item>
        <Menu.Details open={false} label={args.label}>
          {args.children}
        </Menu.Details>
      </Menu.Item>
    )
  }

  return (
    <Drawer className="w-max">
      <Menu className="overflow-y-auto text-lg p-0">
        <MenuItem label='Craft Plan' link="craft" />
        <NestedMenu label="Deep Dungeons">

          <NestedMenu label="Bozja">
            <MenuItem label="About" link="bozja" />
            <MenuItem label="Maps" link="bozja/maps" />
          </NestedMenu>

          <NestedMenu label="Eureka">
            <MenuItem label="About" link="eureka" />
            <MenuItem label="Maps" link="eureka/maps" />
          </NestedMenu>

          <NestedMenu label="Zadnor">
            <MenuItem label="About" link="zadnor" />
            <MenuItem label="Maps" link="zadnor/maps" />
          </NestedMenu>

        </NestedMenu>

      </Menu>
    </Drawer>
  )
}