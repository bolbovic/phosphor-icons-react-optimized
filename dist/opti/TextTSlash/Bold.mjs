var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      V.call(t, e) && m(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && V.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((o, e) => {
  var l = o, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M216.07,224.88a12,12,0,0,1-16.95-.81L140,159v29h20a12,12,0,0,1,0,24H96a12,12,0,0,1,0-24h20V132.64L68,79.84V88a12,12,0,0,1-24,0V56a11.75,11.75,0,0,1,.23-2.31l-5.11-5.62A12,12,0,1,1,56.88,31.93l160,176A12,12,0,0,1,216.07,224.88ZM116,68v.57a12,12,0,1,0,24,0V68h48V88a12,12,0,0,0,24,0V56a12,12,0,0,0-12-12H116.6a12,12,0,0,0-.6,24Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
