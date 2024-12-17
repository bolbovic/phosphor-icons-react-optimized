var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && V(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && V(a, e, t[e]);
  return a;
};
var A = (a, t) => {
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
const h = s((r, e) => {
  var o = r, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ c.createElement(d, H({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M200,26H72A22,22,0,0,0,50,48V216a14,14,0,0,0,14,14H176a14,14,0,0,0,14-14V48a10,10,0,0,1,20,0V152a6,6,0,0,0,12,0V48A22,22,0,0,0,200,26ZM72,38H180.41A21.84,21.84,0,0,0,178,48V186H62V48A10,10,0,0,1,72,38ZM176,218H64a2,2,0,0,1-2-2V198H178v18A2,2,0,0,1,176,218Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
