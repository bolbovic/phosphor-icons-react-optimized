var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, i = (e, a) => {
  for (var t in a || (a = {}))
    l.call(a, t) && p(e, t, a[t]);
  if (r)
    for (var t of r(a))
      n.call(a, t) && p(e, t, a[t]);
  return e;
};
var s = (e, a) => {
  var t = {};
  for (var o in e)
    l.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && n.call(e, o) && (t[o] = e[o]);
  return t;
};
import c, { forwardRef as f } from "react";
import A from "../../lib/OptiBase.mjs";
const M = f((o, t) => {
  var m = o, { children: e } = m, a = s(m, ["children"]);
  return /* @__PURE__ */ c.createElement(A, i({ ref: t }, a), e, /* @__PURE__ */ c.createElement(
    "path",
    {
      d: "M202,171.78C177.13,218.6,128,232,128,232s-49.13-13.4-74-60.22L128,120Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ c.createElement("path", { d: "M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40ZM167.4,201.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81,111.82,111.82,0,0,1-24.51-27.64L128,129.77l63.43,44.4A111.56,111.56,0,0,1,167.4,201.42ZM208,112q0,26.31-9.14,47.84l-66.27-46.39a8,8,0,0,0-9.18,0L57.13,159.84C51.06,145.52,48,129.54,48,112l0-56,160,0Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};
