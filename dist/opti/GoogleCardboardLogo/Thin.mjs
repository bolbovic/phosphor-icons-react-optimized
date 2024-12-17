var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var A = (a, m, e) => m in a ? H(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    i.call(m, e) && A(a, e, m[e]);
  if (r)
    for (var e of r(m))
      l.call(m, e) && A(a, e, m[e]);
  return a;
};
var Z = (a, m) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && l.call(a, t) && (e[t] = a[t]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((t, e) => {
  var o = t, { children: a } = o, m = Z(o, ["children"]);
  return /* @__PURE__ */ n.createElement(f, p({ ref: e }, m), a, /* @__PURE__ */ n.createElement("path", { d: "M224,52H32A12,12,0,0,0,20,64V192a12,12,0,0,0,12,12H96a4,4,0,0,0,2.83-1.17l26.34-26.34a4.08,4.08,0,0,1,5.66,0l26.34,26.34A4,4,0,0,0,160,204h64a12,12,0,0,0,12-12V64A12,12,0,0,0,224,52Zm4,140a4,4,0,0,1-4,4H161.66l-25.17-25.17a12,12,0,0,0-17,0L94.34,196H32a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H224a4,4,0,0,1,4,4ZM80,100a28,28,0,1,0,28,28A28,28,0,0,0,80,100Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,80,148Zm96-48a28,28,0,1,0,28,28A28,28,0,0,0,176,100Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,176,148Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
