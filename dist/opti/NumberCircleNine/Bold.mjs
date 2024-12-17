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
import i, { forwardRef as A } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = A((o, a) => {
  var m = o, { children: e } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(Z, c({ ref: a }, t), e, /* @__PURE__ */ i.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212ZM148,73.36a40,40,0,1,0-25.06,74.32L109.7,169.85a12,12,0,1,0,20.6,12.3L162.64,128A40,40,0,0,0,148,73.36ZM141.86,116l0,0A16,16,0,1,1,136,94.14,16,16,0,0,1,141.84,116Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
