var d = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, C = (e, a) => {
  for (var t in a || (a = {}))
    n.call(a, t) && p(e, t, a[t]);
  if (o)
    for (var t of o(a))
      s.call(a, t) && p(e, t, a[t]);
  return e;
};
var i = (e, a) => {
  var t = {};
  for (var c in e)
    n.call(e, c) && a.indexOf(c) < 0 && (t[c] = e[c]);
  if (e != null && o)
    for (var c of o(e))
      a.indexOf(c) < 0 && s.call(e, c) && (t[c] = e[c]);
  return t;
};
import r, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const M = f((c, t) => {
  var m = c, { children: e } = m, a = i(m, ["children"]);
  return /* @__PURE__ */ r.createElement(l, C({ ref: t }, a), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M183.79,183.79c-43.14,43.14-103.09,53.14-133.9,22.32S29.07,115.35,72.21,72.21,175.3,19.07,206.11,49.89,226.93,140.65,183.79,183.79Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M211.75,44.25C195,27.47,170.37,20.79,142.46,25.44c-26.91,4.49-53.87,19.09-75.9,41.12s-36.63,49-41.12,75.9c-4.65,27.91,2,52.51,18.81,69.29C57.54,225.05,75.75,232,96.62,232a103.66,103.66,0,0,0,16.92-1.44c26.91-4.49,53.87-19.09,75.9-41.12s36.63-49,41.12-75.9C235.21,85.63,228.53,61,211.75,44.25ZM77.87,77.87C102.56,53.19,133,39.93,159.15,39.93a62.26,62.26,0,0,1,29,6.67A108.48,108.48,0,0,0,157.1,63.54c-19.2,15.16-31.63,36.32-36.94,62.89-9.72,48.58-44.7,65.18-67.48,70.84C28.71,168.76,39.4,116.35,77.87,77.87ZM178.13,178.13c-34.69,34.68-80.71,46.78-110.32,31.27A108.72,108.72,0,0,0,98.9,192.46c19.2-15.16,31.63-36.32,36.94-62.89,9.72-48.58,44.7-65.18,67.48-70.84C227.29,87.24,216.6,139.65,178.13,178.13Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};
