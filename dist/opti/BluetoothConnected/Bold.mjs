var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      d.call(t, e) && r(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && d.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const n = s((l, e) => {
  var o = l, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(A, Z({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M199.2,166.4,148,128l51.2-38.4a12,12,0,0,0,0-19.2l-64-48A12,12,0,0,0,116,32v72L71.2,70.4A12,12,0,0,0,56.8,89.6L108,128,56.8,166.4a12,12,0,1,0,14.4,19.2L116,152v72a12,12,0,0,0,19.2,9.6l64-48a12,12,0,0,0,0-19.2ZM140,56l32,24-32,24Zm0,144V152l32,24ZM56,144a16,16,0,1,1,16-16A16,16,0,0,1,56,144Zm168-16a16,16,0,1,1-16-16A16,16,0,0,1,224,128Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
