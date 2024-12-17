var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as L } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = L((m, e) => {
  var l = m, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M108,116a8,8,0,1,1-8-8A8,8,0,0,1,108,116Zm48-8a8,8,0,1,0,8,8A8,8,0,0,0,156,108Zm64,12v96a4,4,0,0,1-6.53,3.1l-26.8-21.93-26.8,21.93a4,4,0,0,1-5.07,0L128,197.17,101.2,219.1a4,4,0,0,1-5.07,0l-26.8-21.93L42.53,219.1A4,4,0,0,1,36,216V120a92,92,0,0,1,184,0Zm-8,0a84,84,0,0,0-168,0v87.56L66.8,188.9a4,4,0,0,1,5.07,0l26.8,21.93,26.8-21.93a4,4,0,0,1,5.06,0l26.8,21.93,26.8-21.93a4,4,0,0,1,5.07,0L212,207.56Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
