var d = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, H = (e, a) => {
  for (var t in a || (a = {}))
    c.call(a, t) && p(e, t, a[t]);
  if (l)
    for (var t of l(a))
      n.call(a, t) && p(e, t, a[t]);
  return e;
};
var i = (e, a) => {
  var t = {};
  for (var o in e)
    c.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && l)
    for (var o of l(e))
      a.indexOf(o) < 0 && n.call(e, o) && (t[o] = e[o]);
  return t;
};
import r, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const A = f((o, t) => {
  var m = o, { children: e } = m, a = i(m, ["children"]);
  return /* @__PURE__ */ r.createElement(s, H({ ref: t }, a), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M240,128l-45.62,68.44a8,8,0,0,1-6.66,3.56H32l48-72L32,56H187.72a8,8,0,0,1,6.66,3.56Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M246.66,123.56,201,55.12A16,16,0,0,0,187.72,48H32a8,8,0,0,0-6.66,12.44L70.39,128l-45,67.56A8,8,0,0,0,32,208H187.72A16,16,0,0,0,201,200.88l45.63-68.44A8,8,0,0,0,246.66,123.56ZM187.72,192H47l39.71-59.56a8,8,0,0,0,0-8.88L47,64H187.72l42.67,64Z" }));
});
A.displayName = "Duotone";
export {
  A as Duotone
};
