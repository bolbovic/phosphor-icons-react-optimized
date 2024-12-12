var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as L } from "react";
import d from "../../lib/OptiBase.mjs";
const n = L((r, e) => {
  var l = r, { children: a } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ h.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M59.76,100.24l-32-32a6,6,0,0,1,0-8.48l32-32a6,6,0,1,1,8.48,8.48L40.49,64,68.24,91.76a6,6,0,1,1-8.48,8.48Zm40,0a6,6,0,0,0,8.48,0l32-32a6,6,0,0,0,0-8.48l-32-32a6,6,0,1,0-8.48,8.48L127.51,64,99.76,91.76A6,6,0,0,0,99.76,100.24ZM200,42H176a6,6,0,0,0,0,12h24a2,2,0,0,1,2,2V200a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V136a6,6,0,0,0-12,0v64a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
