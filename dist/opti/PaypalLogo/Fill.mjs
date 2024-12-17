var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var A = (a, l, e) => l in a ? c(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, i = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && A(a, e, l[e]);
  if (r)
    for (var e of r(l))
      h.call(l, e) && A(a, e, l[e]);
  return a;
};
var p = (a, l) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && h.call(a, t) && (e[t] = a[t]);
  return e;
};
import H, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((t, e) => {
  var m = t, { children: a } = m, l = p(m, ["children"]);
  return /* @__PURE__ */ H.createElement(s, i({ ref: e }, l), a, /* @__PURE__ */ H.createElement("path", { d: "M220.12,93.54a55.8,55.8,0,0,0-20.19-16.18A56,56,0,0,0,144,24H84A16,16,0,0,0,68.48,36.12l-36,144A16,16,0,0,0,48,200h27.5l-3,12.12A16,16,0,0,0,88,232h31.5A16,16,0,0,0,135,219.88L144,184h32a56,56,0,0,0,44.14-90.46ZM48,184,84,40h60a40,40,0,0,1,39.3,32.49A57,57,0,0,0,176,72H120a16,16,0,0,0-15.53,12.12L79.52,184H48Zm166.77-46.3A39.94,39.94,0,0,1,176,168H144a16,16,0,0,0-15.52,12.12l-9,35.88H88l20-80h36a55.9,55.9,0,0,0,54-41.39,40.2,40.2,0,0,1,9.48,8.77A39.73,39.73,0,0,1,214.78,137.7Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
