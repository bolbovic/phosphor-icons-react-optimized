var l = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && Z(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && Z(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var A = m, { children: a } = A, t = c(A, ["children"]);
  return /* @__PURE__ */ f.createElement(M, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M232,218H176a102,102,0,1,0-48,12l104,0a6,6,0,1,0,0-12ZM128,38a89.53,89.53,0,0,1,48.24,14,220.06,220.06,0,0,0-32.19,17.19A220.38,220.38,0,0,0,93.2,45,89.65,89.65,0,0,1,128,38ZM78.2,53.07a208.61,208.61,0,0,1,55.09,23.57A223.79,223.79,0,0,0,110.45,95.8,180,180,0,0,0,54.23,76.5,90.85,90.85,0,0,1,78.2,53.07ZM47.58,87.62a168.13,168.13,0,0,1,54.07,17.11A223.44,223.44,0,0,0,83.42,127,140.43,140.43,0,0,0,39,114.79,89.53,89.53,0,0,1,47.58,87.62Zm7.53,93.11A89.49,89.49,0,0,1,38,128c0-.42,0-.83,0-1.25A128.5,128.5,0,0,1,76.6,137.08,220.45,220.45,0,0,0,55.11,180.73Zm9,10.64A211.27,211.27,0,0,1,187.39,60.44a90.62,90.62,0,0,1,18.76,23A181.86,181.86,0,0,0,88.22,208.71,90.4,90.4,0,0,1,64.15,191.37Zm63,26.62a89.71,89.71,0,0,1-27.75-4.65,169.86,169.86,0,0,1,112-119,89.12,89.12,0,0,1,6.34,27.41A142.57,142.57,0,0,0,127.15,218Zm90.62-83.53a90.15,90.15,0,0,1-77.88,82.75A130.62,130.62,0,0,1,217.77,134.46Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
