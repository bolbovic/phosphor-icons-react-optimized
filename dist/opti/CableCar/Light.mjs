var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    V.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import v, { forwardRef as L } from "react";
import Z from "../../lib/OptiBase.mjs";
const c = L((r, e) => {
  var H = r, { children: a } = H, t = h(H, ["children"]);
  return /* @__PURE__ */ v.createElement(Z, p({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M245.91,31a6,6,0,0,0-7-4.85L15,66.1A6,6,0,0,0,16,78a6.53,6.53,0,0,0,1.07-.09L122,59.17V98H64a30,30,0,0,0-30,30v64a30,30,0,0,0,30,30H192a30,30,0,0,0,30-30V128a30,30,0,0,0-30-30H134V57L241.05,37.91A6,6,0,0,0,245.91,31ZM102,162V110h52v52ZM64,110H90v52H46V128A18,18,0,0,1,64,110ZM192,210H64a18,18,0,0,1-18-18V174H210v18A18,18,0,0,1,192,210Zm18-82v34H166V110h26A18,18,0,0,1,210,128Z" }));
});
c.displayName = "Light";
export {
  c as Light
};
