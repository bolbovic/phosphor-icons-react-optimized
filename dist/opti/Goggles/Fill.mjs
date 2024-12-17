var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && A(a, e, t[e]);
  if (m)
    for (var e of m(t))
      o.call(t, e) && A(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var l in a)
    c.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && o.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const n = Z((l, e) => {
  var r = l, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ f.createElement(d, i({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M184,64H72A72.08,72.08,0,0,0,0,136a24.06,24.06,0,0,0,17,23c6.06,20.37,37.63,33,55,33a40.07,40.07,0,0,0,39.2-32h33.6A40.07,40.07,0,0,0,184,192c17.33,0,48.9-12.66,55-33a24.06,24.06,0,0,0,17-23A72.08,72.08,0,0,0,184,64ZM89,169a8,8,0,0,1-11.31,0L53.14,144.45a8,8,0,0,1,11.31-11.31L89,157.65A8,8,0,0,1,89,169Zm119.52-.49a8,8,0,0,1-11.31,0l-25.41-25.4a8,8,0,0,1,11.32-11.32l25.4,25.41A8,8,0,0,1,208.48,168.48Zm29.2-26.86C229.34,123.25,200.34,112,184,112a40.07,40.07,0,0,0-39.2,32H111.2A40.07,40.07,0,0,0,72,112c-16.34,0-45.34,11.25-53.68,29.62A8,8,0,0,1,16,136,56.06,56.06,0,0,1,72,80H184a56.06,56.06,0,0,1,56,56A8,8,0,0,1,237.68,141.62Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
