var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var r in a)
    H.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = h((r, e) => {
  var l = r, { children: a } = l, t = V(l, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M28,112H228a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H28a4,4,0,0,1-4-4V116A4,4,0,0,1,28,112Zm-4,88a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V180a4,4,0,0,0-4-4H28a4,4,0,0,0-4,4ZM232,72V92a4,4,0,0,1-4,4H28a4,4,0,0,1-4-4V72A16,16,0,0,1,40,56H80V48a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v8h40A16,16,0,0,1,232,72ZM160,48a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v8h64Z" }));
});
Z.displayName = "Fill";
export {
  Z as Fill
};
