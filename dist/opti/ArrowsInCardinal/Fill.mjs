var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? c(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    V.call(l, e) && o(a, e, l[e]);
  if (m)
    for (var e of m(l))
      i.call(l, e) && o(a, e, l[e]);
  return a;
};
var A = (a, l) => {
  var e = {};
  for (var t in a)
    V.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import H, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var r = t, { children: a } = r, l = A(r, ["children"]);
  return /* @__PURE__ */ H.createElement(h, p({ ref: e }, l), a, /* @__PURE__ */ H.createElement("path", { d: "M101.66,133.66l-32,32A8,8,0,0,1,56,160V136H24a8,8,0,0,1,0-16H56V96a8,8,0,0,1,13.66-5.66l32,32A8,8,0,0,1,101.66,133.66Zm20.68-32a8,8,0,0,0,11.32,0l32-32A8,8,0,0,0,160,56H136V24a8,8,0,0,0-16,0V56H96a8,8,0,0,0-5.66,13.66Zm11.32,52.68a8,8,0,0,0-11.32,0l-32,32A8,8,0,0,0,96,200h24v32a8,8,0,0,0,16,0V200h24a8,8,0,0,0,5.66-13.66ZM232,120H200V96a8,8,0,0,0-13.66-5.66l-32,32a8,8,0,0,0,0,11.32l32,32A8,8,0,0,0,200,160V136h32a8,8,0,0,0,0-16Z" }));
});
s.displayName = "Fill";
export {
  s as Fill
};
