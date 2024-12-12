import { IconProps } from "./types";
type IconBaseProps = Omit<IconProps, "weight">;
declare const OptiBase: import("react").ForwardRefExoticComponent<Omit<IconBaseProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
export default OptiBase;
