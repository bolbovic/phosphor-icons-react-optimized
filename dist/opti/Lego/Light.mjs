var M = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? M(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (c)
    for (var e of c(t))
      i.call(t, e) && m(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && c)
    for (var l of c(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import Z, { forwardRef as f } from "react";
import A from "../../lib/OptiBase.mjs";
const L = f((l, e) => {
  var r = l, { children: a } = r, t = s(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(A, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M242.68,74.63,195.85,51.22C190.69,41.09,176.78,34,160,34c-21.31,0-38,11.42-38,26a19.06,19.06,0,0,0,1.56,7.51l-22,11A51.47,51.47,0,0,0,80,74c-21.31,0-38,11.42-38,26a19.06,19.06,0,0,0,1.56,7.51L13.32,122.63A6,6,0,0,0,10,128v64a6,6,0,0,0,3.32,5.37l64,32a6,6,0,0,0,5.36,0l160-80A6,6,0,0,0,246,144V80A6,6,0,0,0,242.68,74.63ZM80,153.29,29.42,128l21.77-10.88C58.1,122.59,68.36,126,80,126c21.31,0,38-11.42,38-26a20.4,20.4,0,0,0-5.43-13.58l18.62-9.3C138.1,82.59,148.36,86,160,86c18.63,0,33.74-8.73,37.23-20.67L226.58,80ZM160,46c15.32,0,26,7.38,26,14s-10.68,14-26,14-26-7.38-26-14S144.68,46,160,46ZM80,86c15.32,0,26,7.38,26,14s-10.68,14-26,14-26-7.38-26-14S64.68,86,80,86ZM22,137.71l52,26v50.58l-52-26Zm64,76.58V163.71l148-74v50.58Z" }));
});
L.displayName = "Light";
export {
  L as Light
};
