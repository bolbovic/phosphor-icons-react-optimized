var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && l(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const n = s((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(A, Z({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M144,204a16,16,0,1,1-16-16A16,16,0,0,1,144,204ZM217,80l15.52-15.51a12,12,0,0,0-17-17L200,63,184.49,47.51a12,12,0,0,0-17,17L183,80,167.51,95.51a12,12,0,0,0,17,17L200,97l15.51,15.52a12,12,0,0,0,17-17Zm-41.9,75.3a80,80,0,0,0-94.13,0,12,12,0,1,0,14.13,19.4,56,56,0,0,1,65.87,0,12,12,0,0,0,14.13-19.4ZM140,56a12,12,0,0,0-12-12A176.27,176.27,0,0,0,16.39,83.91a12,12,0,1,0,15.23,18.55A152.24,152.24,0,0,1,128,68,12,12,0,0,0,140,56Zm0,48a12,12,0,0,0-12-12,126.66,126.66,0,0,0-79.45,27.64,12,12,0,0,0,14.9,18.81A102.89,102.89,0,0,1,128,116,12,12,0,0,0,140,104Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
