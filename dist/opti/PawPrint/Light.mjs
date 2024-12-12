var f = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && r(a, e, t[e]);
  if (A)
    for (var e of A(t))
      i.call(t, e) && r(a, e, t[e]);
  return a;
};
var M = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && A)
    for (var m of A(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((m, e) => {
  var Z = m, { children: a } = Z, t = M(Z, ["children"]);
  return /* @__PURE__ */ c.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M212,82a26,26,0,1,0,26,26A26,26,0,0,0,212,82Zm0,40a14,14,0,1,1,14-14A14,14,0,0,1,212,122ZM70,108a26,26,0,1,0-26,26A26,26,0,0,0,70,108ZM44,122a14,14,0,1,1,14-14A14,14,0,0,1,44,122ZM92,86A26,26,0,1,0,66,60,26,26,0,0,0,92,86Zm0-40A14,14,0,1,1,78,60,14,14,0,0,1,92,46Zm72,40a26,26,0,1,0-26-26A26,26,0,0,0,164,86Zm0-40a14,14,0,1,1-14,14A14,14,0,0,1,164,46Zm22.15,104.61a37.32,37.32,0,0,1-17.82-22.33,42,42,0,0,0-80.66,0A37.26,37.26,0,0,1,69.9,150.58,38,38,0,0,0,88,222a37.58,37.58,0,0,0,14.76-3,66.14,66.14,0,0,1,50.41,0A37.66,37.66,0,0,0,168,222a38,38,0,0,0,18.15-71.39ZM168,210a25.93,25.93,0,0,1-10.21-2.08,78.15,78.15,0,0,0-59.65,0A26,26,0,0,1,75.68,161.1a49.28,49.28,0,0,0,23.51-29.48,30,30,0,0,1,57.62,0,49.27,49.27,0,0,0,23.57,29.5A26,26,0,0,1,168,210Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
