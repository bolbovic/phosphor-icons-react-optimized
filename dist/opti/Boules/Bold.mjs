var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && l(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const L = s((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(A, Z({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm50.28,40.75L60.75,178.28a84.87,84.87,0,0,1-8.36-13.7L164.58,52.39A84.87,84.87,0,0,1,178.28,60.75Zm17,17a84.87,84.87,0,0,1,8.36,13.7L91.42,203.61a84.87,84.87,0,0,1-13.7-8.36ZM128,44a84.53,84.53,0,0,1,10.37.66L44.66,138.37A83.87,83.87,0,0,1,128,44Zm0,168a84.53,84.53,0,0,1-10.37-.66l93.71-93.71A83.87,83.87,0,0,1,128,212Z" }));
});
L.displayName = "Bold";
export {
  L as Bold
};
