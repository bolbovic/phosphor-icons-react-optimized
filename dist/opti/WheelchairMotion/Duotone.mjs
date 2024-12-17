var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      n.call(t, e) && c(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var o in a)
    l.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && n.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((o, e) => {
  var p = o, { children: a } = p, t = i(p, ["children"]);
  return /* @__PURE__ */ r.createElement(f, A({ ref: e }, t), a, /* @__PURE__ */ r.createElement("path", { d: "M200,48a24,24,0,1,1-24-24A24,24,0,0,1,200,48Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M176,80a32,32,0,1,0-32-32A32,32,0,0,0,176,80Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,176,32Zm-8,136a64,64,0,1,1-64-64,8,8,0,0,1,0,16,48,48,0,1,0,48,48,8,8,0,0,1,16,0Zm38.19-37.07a8,8,0,0,1,1.65,6.64l-16,80A8,8,0,0,1,184,224a7.77,7.77,0,0,1-1.58-.16,8,8,0,0,1-6.27-9.41L190.24,144H128a8,8,0,0,1-6.94-12l20.06-34.9a80.09,80.09,0,0,0-88,9.17A8,8,0,1,1,42.91,94a96,96,0,0,1,113.46-6.42,8,8,0,0,1,2.57,10.69L141.82,128H200A8,8,0,0,1,206.19,130.93Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
