var i = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      c.call(t, e) && o(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import d, { forwardRef as L } from "react";
import R from "../../lib/OptiBase.mjs";
const n = L((r, e) => {
  var m = r, { children: a } = m, t = s(m, ["children"]);
  return /* @__PURE__ */ d.createElement(R, f({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M160,40A88.09,88.09,0,0,0,81.29,88.67,64,64,0,1,0,72,216h88a88,88,0,0,0,0-176Zm0,160H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.11A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,72,72Zm29.66-82.34L171.31,136l18.35,18.34a8,8,0,0,1-11.32,11.32L160,147.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L148.69,136l-18.35-18.34a8,8,0,0,1,11.32-11.32L160,124.69l18.34-18.35a8,8,0,0,1,11.32,11.32Z" }));
});
n.displayName = "Regular";
export {
  n as Regular,
  n as default
};
