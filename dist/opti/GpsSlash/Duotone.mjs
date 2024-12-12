var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && A(a, e, t[e]);
  if (m)
    for (var e of m(t))
      n.call(t, e) && A(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && n.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const H = l((o, e) => {
  var p = o, { children: a } = p, t = d(p, ["children"]);
  return /* @__PURE__ */ r.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ r.createElement("path", { d: "M208,128a80,80,0,1,1-80-80A80,80,0,0,1,208,128Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M248,128a8,8,0,0,1-8,8H215.64a87,87,0,0,1-7.33,28,8,8,0,0,1-7.3,4.73,7.9,7.9,0,0,1-3.27-.71,8,8,0,0,1-4-10.57,72.06,72.06,0,0,0-88.81-97.69,8,8,0,1,1-5.13-15.15A87.21,87.21,0,0,1,120,40.37V16a8,8,0,0,1,16,0V40.37A88.13,88.13,0,0,1,215.63,120H240A8,8,0,0,1,248,128Zm-34.08,82.62a8,8,0,1,1-11.84,10.76L181,198.23a87.69,87.69,0,0,1-45,17.4V240a8,8,0,0,1-16,0V215.63A88.13,88.13,0,0,1,40.37,136H16a8,8,0,0,1,0-16H40.37A88.31,88.31,0,0,1,63.14,68.54L42.08,45.38A8,8,0,1,1,53.92,34.62Zm-43.72-24.3L74,80.45A72,72,0,0,0,170.2,186.32Z" }));
});
H.displayName = "Duotone";
export {
  H as Duotone
};
