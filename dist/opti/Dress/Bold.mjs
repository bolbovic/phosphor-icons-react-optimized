var i = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var r = (a, l, e) => l in a ? i(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    m.call(l, e) && r(a, e, l[e]);
  if (c)
    for (var e of c(l))
      L.call(l, e) && r(a, e, l[e]);
  return a;
};
var d = (a, l) => {
  var e = {};
  for (var t in a)
    m.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && c)
    for (var t of c(a))
      l.indexOf(t) < 0 && L.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const n = s((t, e) => {
  var o = t, { children: a } = o, l = d(o, ["children"]);
  return /* @__PURE__ */ f.createElement(V, p({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M218.38,208.12c-.06-.12-.11-.25-.17-.37l-44.54-94.87L193,82.56c.06-.09.12-.18.17-.27a20,20,0,0,0,0-20.58c-.14-.24-.3-.48-.46-.71L172,31.44V12a12,12,0,0,0-24,0V31l-4.38,5.47a20,20,0,0,1-31.24,0L108,31V12a12,12,0,0,0-24,0V31.44L63.31,61c-.16.23-.32.47-.46.71a20,20,0,0,0,0,20.58c0,.09.11.18.17.27l19.31,30.32L37.79,207.75c-.06.12-.11.25-.17.37A20,20,0,0,0,56,236H200a20,20,0,0,0,18.39-27.88ZM128,68a43.75,43.75,0,0,0,31.21-13l12,17.1L153.42,100H102.58L84.82,72.12l12-17.1A43.75,43.75,0,0,0,128,68ZM62.31,212l41.31-88h48.76l41.31,88Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
