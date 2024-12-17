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
import i, { forwardRef as H } from "react";
import n from "../../lib/OptiBase.mjs";
const A = H((o, e) => {
  var l = o, { children: a } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(n, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M227.93,152.31l-45.82-11.17L72.49,31.51a12,12,0,0,0-17.34.39C32.48,56.68,20,88,20,120v72a20,20,0,0,0,20,20H72a20,20,0,0,0,20-20V150.29l1.07.71a108.44,108.44,0,0,1,39.11,48.6A19.9,19.9,0,0,0,150.72,212H236a20,20,0,0,0,20-20v-4.73A35.68,35.68,0,0,0,227.93,152.31ZM68,188H44V132.67a106.69,106.69,0,0,1,24,5.51Zm164,0H153.35a132.44,132.44,0,0,0-46.67-56.77,131.08,131.08,0,0,0-62-22.63A106.69,106.69,0,0,1,64.87,57.84L167.51,160.49a12.06,12.06,0,0,0,5.65,3.17l49.2,12,.25.06a11.84,11.84,0,0,1,9.39,11.6Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
