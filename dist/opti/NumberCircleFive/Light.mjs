var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      A.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && A.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM117.08,86l-5,30A36,36,0,0,1,124,114a34,34,0,0,1,0,68,33.6,33.6,0,0,1-24.29-9.8,6,6,0,1,1,8.58-8.4A21.65,21.65,0,0,0,124,170a22,22,0,0,0,0-44,21.65,21.65,0,0,0-15.71,6.2A6,6,0,0,1,98.08,127l8-48A6,6,0,0,1,112,74h40a6,6,0,0,1,0,12Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
