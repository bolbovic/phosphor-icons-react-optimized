var p = Object.defineProperty;
var L = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? p(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    r.call(t, e) && A(a, e, t[e]);
  if (L)
    for (var e of L(t))
      l.call(t, e) && A(a, e, t[e]);
  return a;
};
var o = (a, t) => {
  var e = {};
  for (var m in a)
    r.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && L)
    for (var m of L(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import i, { forwardRef as M } from "react";
import f from "../../lib/OptiBase.mjs";
const s = M((m, e) => {
  var Z = m, { children: a } = Z, t = o(Z, ["children"]);
  return /* @__PURE__ */ i.createElement(f, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M212,98a25.85,25.85,0,0,0-11.11,2.5L168.48,60A26,26,0,1,0,122,44a26.23,26.23,0,0,0,.34,4.19L73,68.74a26,26,0,1,0-26,40.78L49,159A26,26,0,1,0,78.74,196.6L130,211c0,.34,0,.69,0,1a26,26,0,1,0,44.63-18.11l28.85-45.33A26,26,0,1,0,212,98Zm-56,88c-.78,0-1.55,0-2.31.11L136.2,133.62,187,131.2a26.08,26.08,0,0,0,6.35,10.91l-28.85,45.33A25.87,25.87,0,0,0,156,186ZM72.27,163.74A26,26,0,0,0,61,158.48L59,109a26,26,0,0,0,11.86-7.17l46.42,26.87ZM148,70a25.85,25.85,0,0,0,11.11-2.5L191.52,108a25.92,25.92,0,0,0-5.07,11.2l-50.76,2.42L148,70Zm0-40a14,14,0,1,1-14,14A14,14,0,0,1,148,30ZM127,59.26a26.19,26.19,0,0,0,9.34,7.95L124,118.77,76.9,91.48a26,26,0,0,0,.76-11.67ZM38,84A14,14,0,1,1,52,98,14,14,0,0,1,38,84ZM56,198a14,14,0,1,1,14-14A14,14,0,0,1,56,198Zm26-13c0-.34,0-.69,0-1a25.94,25.94,0,0,0-2.35-10.79L125,137.94l17.32,52a26.23,26.23,0,0,0-9.05,9.49Zm74,41a14,14,0,1,1,14-14A14,14,0,0,1,156,226Zm56-88a14,14,0,1,1,14-14A14,14,0,0,1,212,138Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
