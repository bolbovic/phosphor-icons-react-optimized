var f = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, l = (e, a) => {
  for (var t in a || (a = {}))
    n.call(a, t) && p(e, t, a[t]);
  if (c)
    for (var t of c(a))
      i.call(a, t) && p(e, t, a[t]);
  return e;
};
var d = (e, a) => {
  var t = {};
  for (var o in e)
    n.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && c)
    for (var o of c(e))
      a.indexOf(o) < 0 && i.call(e, o) && (t[o] = e[o]);
  return t;
};
import r, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const E = s((o, t) => {
  var m = o, { children: e } = m, a = d(m, ["children"]);
  return /* @__PURE__ */ r.createElement(A, l({ ref: t }, a), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M216,56v56c0,96-88,120-88,120S40,208,40,112V56a8,8,0,0,1,8-8H208A8,8,0,0,1,216,56Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.27,47,25.53a8,8,0,0,0,4.2,0c1-.26,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0Z" }));
});
E.displayName = "Duotone";
export {
  E as Duotone
};
