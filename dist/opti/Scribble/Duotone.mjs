var l = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? l(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, n = (e, a) => {
  for (var t in a || (a = {}))
    L.call(a, t) && p(e, t, a[t]);
  if (A)
    for (var t of A(a))
      c.call(a, t) && p(e, t, a[t]);
  return e;
};
var i = (e, a) => {
  var t = {};
  for (var o in e)
    L.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && A)
    for (var o of A(e))
      a.indexOf(o) < 0 && c.call(e, o) && (t[o] = e[o]);
  return t;
};
import r, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((o, t) => {
  var m = o, { children: e } = m, a = i(m, ["children"]);
  return /* @__PURE__ */ r.createElement(f, n({ ref: t }, a), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M205.67,189.66a14.61,14.61,0,0,0,0,20.68,8,8,0,0,1-11.32,11.32,30.64,30.64,0,0,1,0-43.32l9.38-9.37A14.63,14.63,0,0,0,183,148.28L116.28,215A30.63,30.63,0,0,1,73,171.72L171.72,73A14.63,14.63,0,0,0,151,52.28L84.28,119A30.63,30.63,0,0,1,41,75.72L82.34,34.34A8,8,0,0,1,93.65,45.66L52.27,87A14.63,14.63,0,0,0,73,107.72L139.72,41A30.63,30.63,0,0,1,183,84.28L84.28,183A14.63,14.63,0,0,0,105,203.72L171.72,137A30.63,30.63,0,0,1,215,180.28Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
