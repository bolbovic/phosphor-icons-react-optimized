var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && l(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var m in a)
    c.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((m, e) => {
  var r = m, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, A({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M177.17,207.11A12,12,0,1,1,161,224.88,203.53,203.53,0,0,0,24,172a12,12,0,0,1,0-24A227.45,227.45,0,0,1,177.17,207.11Zm-74.74-2A186.47,186.47,0,0,0,24,188a12,12,0,0,0,0,24,162.61,162.61,0,0,1,68.41,14.9,12,12,0,1,0,10-21.81ZM244,160a12,12,0,0,1-12,12,205.19,205.19,0,0,0-31.38,2.4,270,270,0,0,1,32.59,34.09,12,12,0,1,1-18.72,15A243,243,0,0,0,24,132a12,12,0,0,1,0-24,271,271,0,0,1,44,3.6V80a12,12,0,0,1,4.8-9.6l64-48a12,12,0,0,1,14.4,0l64,48A12,12,0,0,1,220,80v28.28c4-.17,8-.28,12-.28a12,12,0,0,1,0,24,242.85,242.85,0,0,0-74.42,11.55q9.28,5.35,18.15,11.46A228.59,228.59,0,0,1,232,148,12,12,0,0,1,244,160Zm-88-52H132v19.3q11.83-4.77,24-8.39Zm-64,8.69c5.39,1.4,10.72,3,16,4.72V96a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12v17q8-1.56,16-2.65V86L144,47,92,86Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
