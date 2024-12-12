var l = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    V.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as n } from "react";
import c from "../../lib/OptiBase.mjs";
const f = n((m, e) => {
  var H = m, { children: a } = H, t = A(H, ["children"]);
  return /* @__PURE__ */ Z.createElement(c, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M208,36H80A12,12,0,0,0,68,48V68H48A12,12,0,0,0,36,80V208a12,12,0,0,0,12,12H176a12,12,0,0,0,12-12V188h20a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM76,48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4v79l-23.51-23.52a12,12,0,0,0-17,0L95,180H80a4,4,0,0,1-4-4ZM180,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H68V176a12,12,0,0,0,12,12H180Zm28-28H106.34l70.83-70.83a4,4,0,0,1,5.66,0L212,138.34V176A4,4,0,0,1,208,180Zm-88-72a20,20,0,1,0-20-20A20,20,0,0,0,120,108Zm0-32a12,12,0,1,1-12,12A12,12,0,0,1,120,76Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
