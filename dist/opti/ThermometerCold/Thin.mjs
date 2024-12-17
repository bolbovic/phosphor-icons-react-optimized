var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
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
import V, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var l = m, { children: a } = l, t = A(l, ["children"]);
  return /* @__PURE__ */ V.createElement(f, n({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M247.67,73.92l-25.2,8.18L238,103.54a4,4,0,1,1-6.47,4.7L216,86.81l-15.57,21.43a4,4,0,0,1-3.24,1.65,4,4,0,0,1-3.23-6.35L209.53,82.1l-25.2-8.18a4,4,0,1,1,2.47-7.61L212,74.49V48a4,4,0,0,1,8,0V74.49l25.2-8.18a4,4,0,1,1,2.47,7.61ZM148,184a28,28,0,1,1-32-27.71V120a4,4,0,0,1,8,0v36.29A28,28,0,0,1,148,184Zm-8,0a20,20,0,1,0-20,20A20,20,0,0,0,140,184Zm40,0a60,60,0,1,1-96-48V48a36,36,0,0,1,72,0v88A60.06,60.06,0,0,1,180,184Zm-8,0a52.06,52.06,0,0,0-22.29-42.68A4,4,0,0,1,148,138V48a28,28,0,0,0-56,0v90a4,4,0,0,1-1.71,3.28A52,52,0,1,0,172,184Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
