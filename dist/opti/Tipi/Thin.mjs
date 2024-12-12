var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && i(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((r, e) => {
  var o = r, { children: a } = o, t = L(o, ["children"]);
  return /* @__PURE__ */ c.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M235.37,213.84,132.75,53.5l22.62-35.34a4,4,0,1,0-6.74-4.32L128,46.08,107.37,13.84a4,4,0,0,0-6.74,4.32L123.25,53.5,20.63,213.84A4,4,0,0,0,24,220H232a4,4,0,0,0,3.37-6.16ZM79,212l49-76.58L177,212Zm107.52,0-55.14-86.16a4,4,0,0,0-6.74,0L69.49,212H31.31L128,60.92,224.69,212Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
