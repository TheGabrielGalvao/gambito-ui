import { useNavigation } from "../../hooks/useNavigation";
import { Switch, SwitchThumb } from "./styles";

interface Props {
  toggle: 'open' | 'close'
}

export const CustomSwitch = ({toggle}: Props) => {
  const {handleToggleTheme} = useNavigation()
  return (
    <Switch
      toggle={toggle}
      id="theme-switcher"
      onCheckedChange={handleToggleTheme}
    >
      <SwitchThumb />
    </Switch>
  )
}