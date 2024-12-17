var L = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      h.call(t, e) && A(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    c.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && h.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as Z } from "react";
import f from "../../lib/OptiBase.mjs";
const s = Z((m, e) => {
  var o = m, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ p.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M237.23,34.77a30.06,30.06,0,0,0-42.44,0h0a30.06,30.06,0,0,0,0,42.44c.65.64,1.32,1.24,2,1.81l-28.14,52.26A30.11,30.11,0,0,0,143.46,135L121,112.54A30,30,0,0,0,74.78,74.78h0a30,30,0,0,0,0,42.43,26.28,26.28,0,0,0,2,1.82L48.64,171.29a30,30,0,0,0-29.87,7.5h0a30,30,0,1,0,42.44,0c-.65-.64-1.32-1.24-2-1.81l28.14-52.26A30.07,30.07,0,0,0,112.54,121L135,143.46a30,30,0,1,0,46.25-4.67,26.28,26.28,0,0,0-2-1.82l28.14-52.26a30,30,0,0,0,29.87-49.94Zm-184.51,178a18,18,0,1,1,0-25.46A18,18,0,0,1,52.72,212.74Zm30.55-104a18,18,0,1,1,25.46,0A18,18,0,0,1,83.27,108.73Zm89.46,64a18,18,0,1,1,0-25.46A18,18,0,0,1,172.73,172.73Zm56-104a18,18,0,1,1,0-25.46A18,18,0,0,1,228.74,68.72Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
