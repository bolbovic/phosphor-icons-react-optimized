var V = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import A, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((l, e) => {
  var m = l, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ A.createElement(f, H({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M219.58,70.21l-16-32A4,4,0,0,0,200,36H56a4,4,0,0,0-3.58,2.21l-16,32A4,4,0,0,0,36,72V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V72A4,4,0,0,0,219.58,70.21ZM58.47,44H197.53l12,24H46.47ZM208,212H48a4,4,0,0,1-4-4V76H212V208A4,4,0,0,1,208,212Zm-45.17-62.83a4,4,0,0,1,0,5.66l-32,32a4,4,0,0,1-5.66,0l-32-32a4,4,0,0,1,5.66-5.66L124,174.34V104a4,4,0,0,1,8,0v70.34l25.17-25.17A4,4,0,0,1,162.83,149.17Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
