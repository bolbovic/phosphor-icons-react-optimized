import React, { ReactElement } from "react";
import { IconProps, IconWeight } from "./types";
interface IconBaseProps extends IconProps {
    weights: Map<IconWeight, ReactElement>;
}
declare const SSRBase: React.ForwardRefExoticComponent<Omit<IconBaseProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default SSRBase;