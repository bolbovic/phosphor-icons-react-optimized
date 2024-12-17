var V = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import H, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((l, e) => {
  var r = l, { children: a } = r, t = h(r, ["children"]);
  return /* @__PURE__ */ H.createElement(c, A({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M80,120v16a16,16,0,0,1-16,16V104A16,16,0,0,1,80,120ZM248,72V184a16,16,0,0,1-16,16H24A16,16,0,0,1,8,184V72A16,16,0,0,1,24,56H232A16,16,0,0,1,248,72ZM96,120A32,32,0,0,0,64,88H56a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8h8a32,32,0,0,0,32-32Zm32,0V104h16a8,8,0,0,0,0-16H120a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8h24a8,8,0,0,0,0-16H128V136h8a8,8,0,0,0,0-16Zm82.17-31.7a8,8,0,0,0-9.87,5.53L190,130.45,179.7,93.83a8,8,0,0,0-15.4,4.34l18,64a8,8,0,0,0,15.4,0l18-64A8,8,0,0,0,210.17,88.3Z" }));
});
f.displayName = "Fill";
export {
  f as Fill
};
