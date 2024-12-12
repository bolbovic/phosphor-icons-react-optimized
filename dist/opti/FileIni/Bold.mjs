var Z = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var V = (a, m, e) => m in a ? Z(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, A = (a, m) => {
  for (var e in m || (m = {}))
    l.call(m, e) && V(a, e, m[e]);
  if (o)
    for (var e of o(m))
      p.call(m, e) && V(a, e, m[e]);
  return a;
};
var d = (a, m) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      m.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import v, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((t, e) => {
  var r = t, { children: a } = r, m = d(r, ["children"]);
  return /* @__PURE__ */ v.createElement(f, A({ ref: e }, m), a, /* @__PURE__ */ v.createElement("path", { d: "M48,152v56a12,12,0,0,1-24,0V152a12,12,0,0,1,24,0Zm72-12a12,12,0,0,0-12,12v18.55L89.76,145A12,12,0,0,0,68,152v56a12,12,0,0,0,24,0V189.45L110.24,215a12,12,0,0,0,9.76,5,12.15,12.15,0,0,0,3.66-.57A12,12,0,0,0,132,208V152A12,12,0,0,0,120,140Zm44,0a12,12,0,0,0-12,12v56a12,12,0,0,0,24,0V152A12,12,0,0,0,164,140Zm56-52V224a12,12,0,0,1-24,0V104H148a12,12,0,0,1-12-12V44H60v64a12,12,0,0,1-24,0V40A20,20,0,0,1,56,20h96a12,12,0,0,1,8.49,3.52l56,56A12,12,0,0,1,220,88Zm-60-8h23L160,57Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
