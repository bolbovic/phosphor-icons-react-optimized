var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, C = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, i = (e, a) => {
  for (var t in a || (a = {}))
    n.call(a, t) && p(e, t, a[t]);
  if (r)
    for (var t of r(a))
      C.call(a, t) && p(e, t, a[t]);
  return e;
};
var d = (e, a) => {
  var t = {};
  for (var o in e)
    n.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && C.call(e, o) && (t[o] = e[o]);
  return t;
};
import c, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const M = l((o, t) => {
  var m = o, { children: e } = m, a = d(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, i({ ref: t }, a), e, /* @__PURE__ */ c.createElement(
    "path",
    {
      d: "M128,80V224S24,168,24,102A54,54,0,0,1,78,48C100.59,48,119.94,60.31,128,80Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ c.createElement("path", { d: "M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.67,108.21,129a8,8,0,0,0,7.58,0C136.21,228.67,240,172,240,102A62.07,62.07,0,0,0,178,40ZM32,102A46.06,46.06,0,0,1,78,56c18.91,0,34.86,9.79,42,25.65V210C93.59,193.44,32,149.78,32,102ZM136,210V81.65C143.14,65.79,159.09,56,178,56a46.06,46.06,0,0,1,46,46C224,149.71,162.42,193.41,136,210Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};
