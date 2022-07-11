import * as SwitchPrimitive from "@radix-ui/react-switch";
import { styled } from "../../util/stitches.config";

const StyledSwitch = styled(SwitchPrimitive.Root, {
  variants: {
    toggle: {
        open: {
          all: "unset",
          width: 40,
          height: 20,
          backgroundColor: "$toggleBackgroundColor",
          borderRadius: "9999px",
          position: "relative",
        },
        close: {
          all: "unset",
          width: 50,
          height: 20,
          backgroundColor: "$toggleBackgroundColor",
          borderRadius: "9999px",
          position: "absolute",
        }
    }
  }
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: "block",
  width: 15,
  height: 15,
  backgroundColor: "$sidebarColor",
  borderRadius: 9999,
  transition: "transform 100ms",
  transform: "translateX(2px)",
  willChange: "transform",
  '&[data-state="checked"]': { transform: "translateX(19px)" }
});

export const Switch = StyledSwitch;
export const SwitchThumb = StyledThumb;
