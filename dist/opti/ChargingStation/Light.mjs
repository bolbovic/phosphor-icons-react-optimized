var L = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && h(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && h(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import V, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((r, e) => {
  var o = r, { children: a } = o, t = H(o, ["children"]);
  return /* @__PURE__ */ V.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M133,124.64a6,6,0,0,1,.6,5.59l-16,40a6,6,0,1,1-11.14-4.46L119.14,134H96a6,6,0,0,1-5.57-8.23l16-40a6,6,0,0,1,11.14,4.46L104.86,122H128A6,6,0,0,1,133,124.64Zm113-38V168a22,22,0,0,1-44,0V128a10,10,0,0,0-10-10H174v92h18a6,6,0,0,1,0,12H32a6,6,0,0,1,0-12H50V56A22,22,0,0,1,72,34h80a22,22,0,0,1,22,22v50h18a22,22,0,0,1,22,22v40a10,10,0,0,0,20,0V86.63a9.93,9.93,0,0,0-2.93-7.07L211.76,60.24a6,6,0,0,1,8.48-8.48l19.32,19.31A21.88,21.88,0,0,1,246,86.63ZM162,210V56a10,10,0,0,0-10-10H72A10,10,0,0,0,62,56V210Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
