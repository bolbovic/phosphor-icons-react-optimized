var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    i.call(t, a) && o(e, a, t[a]);
  if (r)
    for (var a of r(t))
      p.call(t, a) && o(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var m in e)
    i.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      t.indexOf(m) < 0 && p.call(e, m) && (a[m] = e[m]);
  return a;
};
import s, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const L = n((m, a) => {
  var l = m, { children: e } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ s.createElement(A, c({ ref: a }, t), e, /* @__PURE__ */ s.createElement("path", { d: "M192,16H104A16,16,0,0,0,88,32v76.69L49.25,147.43a58.92,58.92,0,0,0,83.32,83.32L201,162.34a23.85,23.85,0,0,0,7-17V32A16,16,0,0,0,192,16Zm0,16h0V56H104V32Zm-2.34,119L157.8,182.88a48,48,0,0,1,34.2-70.2v32.69A8,8,0,0,1,189.66,151Z" }));
});
L.displayName = "Fill";
export {
  L as Fill
};
