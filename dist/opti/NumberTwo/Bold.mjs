var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && l(e, a, t[a]);
  if (r)
    for (var a of r(t))
      d.call(t, a) && l(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var o in e)
    p.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && d.call(e, o) && (a[o] = e[o]);
  return a;
};
import i, { forwardRef as n } from "react";
import B from "../../lib/OptiBase.mjs";
const h = n((o, a) => {
  var m = o, { children: e } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(B, c({ ref: a }, t), e, /* @__PURE__ */ i.createElement("path", { d: "M180,208a12,12,0,0,1-12,12H88a12,12,0,0,1-9.6-19.2l71.95-95.92a28,28,0,1,0-48-28.06,12,12,0,0,1-22-9.62,52.32,52.32,0,0,1,6.13-10.49,52,52,0,0,1,83.06,62.59L112,196h56A12,12,0,0,1,180,208Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
