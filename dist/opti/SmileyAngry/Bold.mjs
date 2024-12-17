var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      Z.call(t, e) && l(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const n = s((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(A, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M92,156a16,16,0,1,1,16-16A16,16,0,0,1,92,156Zm72-32a16,16,0,1,0,16,16A16,16,0,0,0,164,124Zm72,4A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128ZM85.34,102l36,24a12,12,0,0,0,13.32,0l36-24a12,12,0,0,0-13.32-20L128,101.58,98.66,82a12,12,0,0,0-13.32,20ZM154,167.12a51.1,51.1,0,0,0-52,0,12,12,0,1,0,12,20.76,27.13,27.13,0,0,1,28,0,12,12,0,1,0,12-20.76Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
