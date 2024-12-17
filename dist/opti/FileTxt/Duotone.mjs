var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && p(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && p(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var o in a)
    H.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const A = h((o, e) => {
  var l = o, { children: a } = l, t = V(l, ["children"]);
  return /* @__PURE__ */ r.createElement(i, n({ ref: e }, t), a, /* @__PURE__ */ r.createElement("path", { d: "M208,88H152V32Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M48,120a8,8,0,0,0,8-8V40h88V88a8,8,0,0,0,8,8h48v16a8,8,0,0,0,16,0V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72A8,8,0,0,0,48,120ZM160,51.31,188.69,80H160Zm-5.49,105.34L137.83,180l16.68,23.35a8,8,0,0,1-13,9.3L128,193.76l-13.49,18.89a8,8,0,1,1-13-9.3L118.17,180l-16.68-23.35a8,8,0,1,1,13-9.3L128,166.24l13.49-18.89a8,8,0,0,1,13,9.3ZM92,152a8,8,0,0,1-8,8H72v48a8,8,0,0,1-16,0V160H44a8,8,0,0,1,0-16H84A8,8,0,0,1,92,152Zm128,0a8,8,0,0,1-8,8H200v48a8,8,0,0,1-16,0V160H172a8,8,0,0,1,0-16h40A8,8,0,0,1,220,152Z" }));
});
A.displayName = "Duotone";
export {
  A as Duotone
};
