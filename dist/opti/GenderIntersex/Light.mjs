var l = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && h(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && h(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, V({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M208,26H168a6,6,0,0,0,0,12h25.52l-30,29.94A62,62,0,1,0,114,173.7V194H88a6,6,0,0,0,0,12h26v26a6,6,0,0,0,12,0V206h26a6,6,0,0,0,0-12H126V173.7a62,62,0,0,0,45.28-96.5L202,46.48V72a6,6,0,0,0,12,0V32A6,6,0,0,0,208,26ZM120,162a50,50,0,1,1,50-50A50.06,50.06,0,0,1,120,162Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
