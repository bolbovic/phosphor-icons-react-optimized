var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((m, e) => {
  var o = m, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(h, Z({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm29.31-49.2a6,6,0,0,1-8.11,2.51,44.75,44.75,0,0,0-42.4,0,6,6,0,1,1-5.6-10.62,57.37,57.37,0,0,1,53.6,0A6,6,0,0,1,157.31,168.8Zm32-56a6,6,0,0,1-8.12,2.46,112.67,112.67,0,0,0-106.34,0,6,6,0,1,1-5.66-10.58,124.65,124.65,0,0,1,117.66,0A6,6,0,0,1,189.29,112.82Zm-16,28A6,6,0,0,1,168,144a6.07,6.07,0,0,1-2.82-.7,79,79,0,0,0-74.36,0,6,6,0,1,1-5.64-10.6,91,91,0,0,1,85.64,0A6,6,0,0,1,173.3,140.82Z" }));
});
l.displayName = "Light";
export {
  l as Light
};