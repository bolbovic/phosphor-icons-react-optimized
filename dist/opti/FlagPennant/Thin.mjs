var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (e, t, a) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && i(e, a, t[a]);
  if (m)
    for (var a of m(t))
      l.call(t, a) && i(e, a, t[a]);
  return e;
};
var c = (e, t) => {
  var a = {};
  for (var r in e)
    p.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      t.indexOf(r) < 0 && l.call(e, r) && (a[r] = e[r]);
  return a;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const V = d((r, a) => {
  var o = r, { children: e } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(h, n({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M241.31,100.22l-184-64A4,4,0,0,0,52,40V216a4,4,0,0,0,8,0V170.84l181.31-63.06a4,4,0,0,0,0-7.56ZM60,162.37V45.63L227.82,104Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};
