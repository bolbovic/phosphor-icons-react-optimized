var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, A = (e, t) => {
  for (var a in t || (t = {}))
    i.call(t, a) && o(e, a, t[a]);
  if (m)
    for (var a of m(t))
      p.call(t, a) && o(e, a, t[a]);
  return e;
};
var n = (e, t) => {
  var a = {};
  for (var r in e)
    i.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      t.indexOf(r) < 0 && p.call(e, r) && (a[r] = e[r]);
  return a;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((r, a) => {
  var l = r, { children: e } = l, t = n(l, ["children"]);
  return /* @__PURE__ */ c.createElement(d, A({ ref: a }, t), e, /* @__PURE__ */ c.createElement("path", { d: "M192.76,62.72l18.2-20A4,4,0,0,0,205,37.31l-18.2,20a92,92,0,0,0-123.6,136l-18.2,20A4,4,0,1,0,51,218.69l18.2-20A92,92,0,0,0,192.76,62.72ZM44,128A84,84,0,0,1,181.46,63.25L68.63,187.36A83.72,83.72,0,0,1,44,128Zm84,84a83.64,83.64,0,0,1-53.46-19.25L187.37,68.64A84,84,0,0,1,128,212Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
