var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (e, t, a) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && m(e, a, t[a]);
  if (o)
    for (var a of o(t))
      d.call(t, a) && m(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var l in e)
    p.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
  if (e != null && o)
    for (var l of o(e))
      t.indexOf(l) < 0 && d.call(e, l) && (a[l] = e[l]);
  return a;
};
import i, { forwardRef as L } from "react";
import M from "../../lib/OptiBase.mjs";
const Z = L((l, a) => {
  var r = l, { children: e } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(M, c({ ref: a }, t), e, /* @__PURE__ */ i.createElement("path", { d: "M214,193.68,145.35,128,214,62.32l.18-.18A20,20,0,0,0,200,28H56A20,20,0,0,0,41.87,62.14l.18.18L110.65,128l-68.6,65.68-.18.18A20,20,0,0,0,56,228H200a20,20,0,0,0,14.14-34.14ZM107.75,92h40.5L128,111.39ZM190,52,173.31,68H82.69L66,52ZM66,204l50-47.9V168a12,12,0,0,0,24,0V156.1L190,204Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
