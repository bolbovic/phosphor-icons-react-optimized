var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && c(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import s, { forwardRef as f } from "react";
import d from "../../lib/OptiBase.mjs";
const l = f((m, e) => {
  var H = m, { children: a } = H, t = h(H, ["children"]);
  return /* @__PURE__ */ s.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M74,120a10,10,0,1,1-10-10A10,10,0,0,1,74,120Zm164,0v88a14,14,0,0,1-14,14H112a14,14,0,0,1-14-14V178.48C89.65,195.49,77.6,206,64,206c-25.79,0-46-37.78-46-86S38.21,34,64,34H192C217.79,34,238,71.78,238,120ZM98,120c0-44.26-17.58-74-34-74S30,75.74,30,120s17.58,74,34,74S98,164.27,98,120Zm128,88V126H208a6,6,0,0,1,0-12h17.88C224.37,73.08,207.67,46,192,46H87.76c12.57,13.92,21.09,38.74,22.12,68H128a6,6,0,0,1,0,12H110v82a2,2,0,0,0,2,2H224A2,2,0,0,0,226,208Zm-50-94H160a6,6,0,0,0,0,12h16a6,6,0,0,0,0-12Z" }));
});
l.displayName = "Light";
export {
  l as Light
};