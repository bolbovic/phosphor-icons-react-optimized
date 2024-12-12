var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as d } from "react";
import l from "../../lib/OptiBase.mjs";
const n = d((r, e) => {
  var o = r, { children: a } = o, t = h(o, ["children"]);
  return /* @__PURE__ */ s.createElement(l, f({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M168.16,74.42A78,78,0,0,0,18,104v64a14,14,0,0,0,14,14H88a78.15,78.15,0,0,0,72,48h64a14,14,0,0,0,14-14V152A78,78,0,0,0,168.16,74.42ZM30,168V104a66,66,0,1,1,66,66H32A2,2,0,0,1,30,168Zm196,48a2,2,0,0,1-2,2H160a66.13,66.13,0,0,1-58.89-36.19,77.92,77.92,0,0,0,71-94.68A66,66,0,0,1,226,152Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
