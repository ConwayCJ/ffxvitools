import { Menu, Drawer } from "react-daisyui"

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
    <Drawer>
      <Menu className="flex-nowrap max-h-[90vh] overflow-y-auto">
        <MenuItem label='Craft Plan' />
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
    </Drawer>
  )
}