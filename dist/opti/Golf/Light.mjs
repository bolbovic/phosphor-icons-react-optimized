var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && c.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((m, e) => {
  var o = m, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(h, s({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M174,100a10,10,0,1,1-10-10A10,10,0,0,1,174,100Zm-42,22a10,10,0,1,0,10,10A10,10,0,0,0,132,122Zm82-26a86,86,0,1,1-86-86A86.1,86.1,0,0,1,214,96Zm-12,0a74,74,0,1,0-74,74A74.09,74.09,0,0,0,202,96Zm-36.14,98.4c-13.38,5.11-25.77,7.6-37.86,7.6s-24.48-2.49-37.86-7.6a6,6,0,1,0-4.28,11.2A122.32,122.32,0,0,0,122,213.81V248a6,6,0,0,0,12,0V213.81a122.32,122.32,0,0,0,36.14-8.21,6,6,0,0,0-4.28-11.2Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
