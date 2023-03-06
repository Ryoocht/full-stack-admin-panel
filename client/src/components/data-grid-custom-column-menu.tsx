import {
  GridColDef,
  GridColumnMenuContainer,
  GridFilterMenuItem,
  HideGridColMenuItem,
} from '@mui/x-data-grid'

type CustomColumnMenuProps = {
  hideMenu: (event: React.SyntheticEvent<Element, Event>) => void
  currentColumn: GridColDef<any, any, any>
  open: boolean
}

const CustomColumnMenu: React.FC<CustomColumnMenuProps> = ({
  hideMenu,
  currentColumn,
  open,
}) => {
  return (
    <GridColumnMenuContainer
      hideMenu={hideMenu}
      currentColumn={currentColumn}
      open={open}
    >
      <GridFilterMenuItem onClick={hideMenu} column={currentColumn} />
      <HideGridColMenuItem onClick={hideMenu} column={currentColumn} />
    </GridColumnMenuContainer>
  )
}

export default CustomColumnMenu
