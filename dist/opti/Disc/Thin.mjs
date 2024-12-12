var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (e, t, a) => t in e ? h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && i(e, a, t[a]);
  if (r)
    for (var a of r(t))
      A.call(t, a) && i(e, a, t[a]);
  return e;
};
var c = (e, t) => {
  var a = {};
  for (var m in e)
    p.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      t.indexOf(m) < 0 && A.call(e, m) && (a[m] = e[m]);
  return a;
};
import f, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = l((m, a) => {
  var o = m, { children: e } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(s, n({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm35.77,96a35.78,35.78,0,0,0-7.66-18.45l39.68-39.68A91.64,91.64,0,0,1,219.91,124ZM156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Zm-28,92A92,92,0,1,1,190.13,60.21L150.45,99.89A36,36,0,1,0,163.77,132h56.14A92.11,92.11,0,0,1,128,220Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
