var c = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      A.call(t, e) && o(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && A.call(a, r) && (e[r] = a[r]);
  return e;
};
import Z, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const i = d((r, e) => {
  var m = r, { children: a } = m, t = s(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(h, f({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M154.2,138.33a32,32,0,1,0-52.4,0,24.27,24.27,0,0,0-8.76,7,23.68,23.68,0,0,0-4.3,20.49l12.18,48A24.18,24.18,0,0,0,124.44,232h7.12a24.18,24.18,0,0,0,23.52-18.15l12.18-48a23.68,23.68,0,0,0-4.3-20.49A24.27,24.27,0,0,0,154.2,138.33ZM128,104a16,16,0,1,1-16,16A16,16,0,0,1,128,104Zm23.75,57.91-12.18,48a8.18,8.18,0,0,1-8,6.09h-7.12a8.18,8.18,0,0,1-8-6.09l-12.18-48a7.71,7.71,0,0,1,1.42-6.73,8.26,8.26,0,0,1,6.58-3.18h31.5a8.26,8.26,0,0,1,6.58,3.18A7.71,7.71,0,0,1,151.75,161.91ZM72,128a56.31,56.31,0,0,0,2,15,8,8,0,0,1-15.41,4.29,72,72,0,1,1,138.74,0A8,8,0,0,1,182,143,56,56,0,1,0,72,128Zm160,0a103.92,103.92,0,0,1-46.18,86.46,8,8,0,0,1-8.9-13.3,88,88,0,1,0-97.84,0,8,8,0,0,1-8.9,13.3A104,104,0,1,1,232,128Z" }));
});
i.displayName = "Regular";
export {
  i as Regular,
  i as default
};
