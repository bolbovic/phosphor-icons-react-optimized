var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, l = (e, a) => {
  for (var t in a || (a = {}))
    n.call(a, t) && c(e, t, a[t]);
  if (r)
    for (var t of r(a))
      i.call(a, t) && c(e, t, a[t]);
  return e;
};
var V = (e, a) => {
  var t = {};
  for (var o in e)
    n.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && i.call(e, o) && (t[o] = e[o]);
  return t;
};
import m, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const A = f((o, t) => {
  var p = o, { children: e } = p, a = V(p, ["children"]);
  return /* @__PURE__ */ m.createElement(s, l({ ref: t }, a), e, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M196.3,134.65,68.19,214.77A8,8,0,0,1,56,208.12V47.88a8,8,0,0,1,12.19-6.65L196.3,121.35A7.83,7.83,0,0,1,196.3,134.65Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M200,32a8,8,0,0,0-8,8v69.23L72.43,34.45A15.95,15.95,0,0,0,48,47.88V208.12a16,16,0,0,0,24.43,13.43L192,146.77V216a8,8,0,0,0,16,0V40A8,8,0,0,0,200,32ZM64,207.93V48.05l127.84,80Z" }));
});
A.displayName = "Duotone";
export {
  A as Duotone
};
