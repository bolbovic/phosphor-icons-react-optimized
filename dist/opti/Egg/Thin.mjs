var C = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (e, t, a) => t in e ? C(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && i(e, a, t[a]);
  if (m)
    for (var a of m(t))
      c.call(t, a) && i(e, a, t[a]);
  return e;
};
var s = (e, t) => {
  var a = {};
  for (var r in e)
    p.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      t.indexOf(r) < 0 && c.call(e, r) && (a[r] = e[r]);
  return a;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((r, a) => {
  var o = r, { children: e } = o, t = s(o, ["children"]);
  return /* @__PURE__ */ f.createElement(h, n({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M128,20C92.87,20,44,86.52,44,152a84,84,0,0,0,168,0C212,86.52,163.13,20,128,20Zm0,208a76.08,76.08,0,0,1-76-76c0-28.46,10-59.73,27.33-85.78C94.81,43,113.91,28,128,28s33.19,15,48.67,38.22C194,92.27,204,123.54,204,152A76.08,76.08,0,0,1,128,228Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
