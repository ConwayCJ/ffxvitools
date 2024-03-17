import { Menu } from "react-daisyui"


export default function LeftNavigation() {

  const MenuItem = ({ label, link }) => {
    return (
      <Menu.Item>
        <a href={link}>{label}</a>
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
    <Menu className=" w-max h-full">
      <MenuItem label='Craft Planner' />
      <NestedMenu label="Deep Dungeons">
        <MenuItem label="Bozja" />
        <NestedMenu label="Eureka">
          <MenuItem label="Maps" />
        </NestedMenu>
        <NestedMenu label="Zadnor">
          <MenuItem label="Maps" />
        </NestedMenu>
      </NestedMenu>
    </Menu>
  )
}