var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, d = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && l(e, a, t[a]);
  if (o)
    for (var a of o(t))
      Z.call(t, a) && l(e, a, t[a]);
  return e;
};
var A = (e, t) => {
  var a = {};
  for (var m in e)
    p.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && o)
    for (var m of o(e))
      t.indexOf(m) < 0 && Z.call(e, m) && (a[m] = e[m]);
  return a;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const M = i((m, a) => {
  var r = m, { children: e } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: a }, t), e, /* @__PURE__ */ c.createElement("path", { d: "M204.37,51.6A108.08,108.08,0,1,0,236,128,108.09,108.09,0,0,0,204.37,51.6ZM176,197a83.43,83.43,0,0,1-16,8.75V113l16-16ZM68.6,68.58A84.08,84.08,0,0,1,178.3,60.7L60.72,178.33A84.08,84.08,0,0,1,68.6,68.58ZM96,177v28.69A83.63,83.63,0,0,1,77.7,195.3Zm24,34.62V153l16-16v74.64A84.68,84.68,0,0,1,120,211.62Zm80-40.27V84.65a84.24,84.24,0,0,1,0,86.7Z" }));
});
M.displayName = "Bold";
export {
  M as Bold
};
