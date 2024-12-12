var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    n.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      V.call(t, e) && c(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var o in a)
    n.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && V.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((o, e) => {
  var p = o, { children: a } = p, t = l(p, ["children"]);
  return /* @__PURE__ */ m.createElement(h, i({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M240,72V208H56a16,16,0,0,1-16-16V56H224A16,16,0,0,1,240,72Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M248,208a8,8,0,0,1-8,8H192a8,8,0,0,1-6.4-12.8l43.16-57.56a16,16,0,1,0-25.54-19.27,16.28,16.28,0,0,0-2.32,4.3,8,8,0,1,1-15.08-5.34,32,32,0,1,1,55.73,29.93L208,200h32A8,8,0,0,1,248,208ZM144,48a8,8,0,0,0-8,8v52H48V56a8,8,0,0,0-16,0V176a8,8,0,0,0,16,0V124h88v52a8,8,0,0,0,16,0V56A8,8,0,0,0,144,48Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
