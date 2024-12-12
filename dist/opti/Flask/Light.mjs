var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && c(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as H } from "react";
import V from "../../lib/OptiBase.mjs";
const d = H((r, e) => {
  var o = r, { children: a } = o, t = h(o, ["children"]);
  return /* @__PURE__ */ f.createElement(V, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M220,200.8,158,97.48V38h10a6,6,0,0,0,0-12H88a6,6,0,0,0,0,12H98V97.48L36,200.8A14,14,0,0,0,48,222H208a14,14,0,0,0,12-21.2ZM109.15,102.23a6,6,0,0,0,.85-3.09V38h36V99.14a6,6,0,0,0,.85,3.09l39.65,66.08c-12.41,3.16-30.86,3-55.79-9.66-16.94-8.58-33-12.8-47.83-12.64ZM209.72,209a2,2,0,0,1-1.74,1H48a2,2,0,0,1-1.71-3l29-48.41c14.89-2.08,31.68,1.55,49.94,10.79C144,178.8,159.67,182,172.42,182A67.89,67.89,0,0,0,192.89,179l16.8,28A2,2,0,0,1,209.72,209Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
