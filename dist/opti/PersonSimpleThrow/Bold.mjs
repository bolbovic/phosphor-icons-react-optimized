var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && c(a, e, t[e]);
  if (o)
    for (var e of o(t))
      A.call(t, e) && c(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import s, { forwardRef as i } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = i((m, e) => {
  var r = m, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ s.createElement(Z, p({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M128,92A36,36,0,1,0,92,56,36,36,0,0,0,128,92Zm0-48a12,12,0,1,1-12,12A12,12,0,0,1,128,44ZM44,96a20,20,0,1,1,20,20A20,20,0,0,1,44,96Zm184,17.6A12,12,0,0,1,208.49,123s-21-15.48-53.34.28c-.34,4.75-1,10.94-2.13,18l30.66,25.55a12,12,0,0,1,3.7,13l-16,48a12,12,0,1,1-22.76-7.59L162,180l-15.44-12.86a136.39,136.39,0,0,1-5.72,14.23c-14.64,31-39.34,51.93-73.42,62.15A11.82,11.82,0,0,1,64,244a12,12,0,0,1-3.45-23.5c37.84-11.35,60.77-38.71,68.41-81.44-24,13.54-43.11,17-56.46,17A65.87,65.87,0,0,1,51,152.31a12,12,0,0,1,9.72-21.93c.43.17,25.42,9.53,68.5-19.76,54.71-37.18,94.26-6.38,94.26-6.38A12,12,0,0,1,228,113.6Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
