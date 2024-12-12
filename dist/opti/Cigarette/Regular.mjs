var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as d } from "react";
import i from "../../lib/OptiBase.mjs";
const R = d((r, e) => {
  var c = r, { children: a } = c, t = f(c, ["children"]);
  return /* @__PURE__ */ s.createElement(i, H({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M224,128H32a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V144A16,16,0,0,0,224,128ZM32,144H80v32H32Zm192,32H96V144H224v32ZM201,60.08c8-14.23,7.42-21.71,6.36-24.91a7.79,7.79,0,0,0-2.64-3.86,8,8,0,1,1,6.5-14.62,22.57,22.57,0,0,1,11.32,13.44c3.36,10.14.81,22.85-7.6,37.79-8,14.23-7.42,21.72-6.36,24.91a7.79,7.79,0,0,0,2.64,3.86,8,8,0,1,1-6.5,14.62,22.57,22.57,0,0,1-11.32-13.44C190.07,87.73,192.62,75,201,60.08Zm-40,0c8-14.23,7.42-21.71,6.36-24.91a7.79,7.79,0,0,0-2.64-3.86,8,8,0,1,1,6.5-14.62,22.57,22.57,0,0,1,11.32,13.44c3.36,10.14.81,22.85-7.6,37.79-8,14.23-7.42,21.72-6.36,24.91a7.79,7.79,0,0,0,2.64,3.86,8,8,0,1,1-6.5,14.62,22.57,22.57,0,0,1-11.32-13.44C150.07,87.73,152.62,75,161,60.08Z" }));
});
R.displayName = "Regular";
export {
  R as Regular,
  R as default
};
