var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const h = A((m, e) => {
  var o = m, { children: a } = o, t = s(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM84,108a8,8,0,1,1,8,8A8,8,0,0,1,84,108Zm88,0a8,8,0,1,1-8-8A8,8,0,0,1,172,108Zm-.54,66a4,4,0,0,1-1.46,5.46,3.93,3.93,0,0,1-2,.54,4,4,0,0,1-3.46-2c-8.21-14.19-21.19-22-36.54-22s-28.33,7.81-36.54,22a4,4,0,0,1-6.92-4c9.55-16.52,25.4-26,43.46-26S161.91,157.48,171.46,174Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
