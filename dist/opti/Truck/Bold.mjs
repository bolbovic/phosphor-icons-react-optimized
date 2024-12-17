var d = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && r(a, e, t[e]);
  if (H)
    for (var e of H(t))
      A.call(t, e) && r(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && H)
    for (var m of H(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import V, { forwardRef as h } from "react";
import c from "../../lib/OptiBase.mjs";
const f = h((m, e) => {
  var o = m, { children: a } = o, t = p(o, ["children"]);
  return /* @__PURE__ */ V.createElement(c, Z({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M255.14,115.54l-14-35A19.89,19.89,0,0,0,222.58,68H196V64a12,12,0,0,0-12-12H32A20,20,0,0,0,12,72V184a20,20,0,0,0,20,20H46.06a36,36,0,0,0,67.88,0h44.12a36,36,0,0,0,67.88,0H236a20,20,0,0,0,20-20V120A21.7,21.7,0,0,0,255.14,115.54ZM196,92h23.88l6.4,16H196ZM80,204a12,12,0,1,1,12-12A12,12,0,0,1,80,204Zm92-41.92A36.32,36.32,0,0,0,158.06,180H113.94a36,36,0,0,0-67.88,0H36V140H172ZM172,116H36V76H172Zm20,88a12,12,0,1,1,12-12A12,12,0,0,1,192,204Zm40-24h-6.06A36.09,36.09,0,0,0,196,156.23V132h36Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
