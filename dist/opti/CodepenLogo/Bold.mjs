var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (e, m, a) => m in e ? f(e, m, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[m] = a, p = (e, m) => {
  for (var a in m || (m = {}))
    L.call(m, a) && r(e, a, m[a]);
  if (l)
    for (var a of l(m))
      Z.call(m, a) && r(e, a, m[a]);
  return e;
};
var d = (e, m) => {
  var a = {};
  for (var t in e)
    L.call(e, t) && m.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && l)
    for (var t of l(e))
      m.indexOf(t) < 0 && Z.call(e, t) && (a[t] = e[t]);
  return a;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const M = i((t, a) => {
  var o = t, { children: e } = o, m = d(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: a }, m), e, /* @__PURE__ */ c.createElement("path", { d: "M237.68,85.43l-104-56a12,12,0,0,0-11.38,0l-104,56A12,12,0,0,0,12,96v64a12,12,0,0,0,6.32,10.57l104,56a12,12,0,0,0,11.38,0l104-56A12,12,0,0,0,244,160V96A12,12,0,0,0,237.68,85.43ZM220,139.91,197.88,128,220,116.09Zm-47.43-25.54L140,96.83V60.09L206.69,96Zm-44.57,24L108.74,128,128,117.63,147.26,128ZM116,60.09V96.83L83.43,114.37,49.31,96Zm-80,56L58.12,128,36,139.91Zm47.43,25.54L116,159.17v36.74L49.31,160ZM140,195.91V159.17l32.57-17.54L206.69,160Z" }));
});
M.displayName = "Bold";
export {
  M as Bold
};
