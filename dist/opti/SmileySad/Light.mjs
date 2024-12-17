var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((m, e) => {
  var o = m, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(h, s({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM82,108a10,10,0,1,1,10,10A10,10,0,0,1,82,108Zm92,0a10,10,0,1,1-10-10A10,10,0,0,1,174,108Zm-.81,65a6,6,0,0,1-10.38,6c-7.84-13.54-20.2-21-34.81-21s-27,7.46-34.81,21a6,6,0,0,1-5.2,3,5.9,5.9,0,0,1-3-.81A6,6,0,0,1,82.81,173c9.92-17.16,26.39-27,45.19-27S163.27,155.84,173.19,173Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
