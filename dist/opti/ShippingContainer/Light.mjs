var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && m(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import L, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const H = f((l, e) => {
  var V = l, { children: a } = V, t = A(V, ["children"]);
  return /* @__PURE__ */ L.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M235.85,72.57,129.65,42.23a6,6,0,0,0-2.5-.17L22,57.08A14.07,14.07,0,0,0,10,70.94V185.06a14.07,14.07,0,0,0,12,13.86l105.13,15a6.07,6.07,0,0,0,.85.06,6.14,6.14,0,0,0,1.65-.23l106.2-30.34A14.06,14.06,0,0,0,246,170V86A14.06,14.06,0,0,0,235.85,72.57ZM96,122H78V61.2l44-6.28V201.08L78,194.8V134H96a6,6,0,0,0,0-12ZM22,185.06V70.94a2,2,0,0,1,1.72-2l42.28-6V122H48a6,6,0,0,0,0,12H66v59.08l-42.28-6A2,2,0,0,1,22,185.06ZM234,170a2,2,0,0,1-1.45,1.92L134,200.05V56l98.55,28.16A2,2,0,0,1,234,86Z" }));
});
H.displayName = "Light";
export {
  H as Light
};
