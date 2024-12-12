var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && h(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && h(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((r, e) => {
  var o = r, { children: a } = o, t = H(o, ["children"]);
  return /* @__PURE__ */ c.createElement(d, l({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M245.51,149.64l-48-112A6,6,0,0,0,192,34H64a6,6,0,0,0-5.51,3.64l-48,112A6,6,0,0,0,16,158H122v52H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12H134V158h60v34a6,6,0,0,0,12,0V158h34a6,6,0,0,0,5.51-8.36ZM25.1,146,68,46H188L230.9,146Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
