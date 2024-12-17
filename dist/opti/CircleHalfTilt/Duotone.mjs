var l = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (e, a, t) => a in e ? l(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, d = (e, a) => {
  for (var t in a || (a = {}))
    n.call(a, t) && c(e, t, a[t]);
  if (r)
    for (var t of r(a))
      i.call(a, t) && c(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var o in e)
    n.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && i.call(e, o) && (t[o] = e[o]);
  return t;
};
import m, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const M = s((o, t) => {
  var p = o, { children: e } = p, a = f(p, ["children"]);
  return /* @__PURE__ */ m.createElement(A, d({ ref: t }, a), e, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M195.88,195.88a96,96,0,0,1-135.76,0L195.88,60.12A96,96,0,0,1,195.88,195.88Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM65.78,65.77A88.08,88.08,0,0,1,184.3,60.39L60.38,184.31a88,88,0,0,1,5.4-118.54ZM190.22,190.23A88.1,88.1,0,0,1,71.7,195.61L195.62,71.69a88,88,0,0,1-5.4,118.54Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};
