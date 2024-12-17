var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import i, { forwardRef as L } from "react";
import n from "../../lib/OptiBase.mjs";
const B = L((o, e) => {
  var l = o, { children: a } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(n, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M241.42,198.2l-.06-.09L145.3,30.17a20,20,0,0,0-34.82,0L14.58,198.2a20,20,0,0,0,24.06,28.65L128,196.67l89.36,30.18a20,20,0,0,0,6.69,1.15,20,20,0,0,0,17.37-29.8ZM140,175.39V120a12,12,0,0,0-24,0v55.39L40.72,200.82,127.89,48.06l87.37,152.75Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
