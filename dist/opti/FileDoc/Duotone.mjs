var H = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    s.call(t, e) && p(a, e, t[e]);
  if (m)
    for (var e of m(t))
      Z.call(t, e) && p(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var o in a)
    s.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && Z.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const l = h((o, e) => {
  var r = o, { children: a } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ c.createElement(i, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M208,88H152V32Z", opacity: "0.2" }), /* @__PURE__ */ c.createElement("path", { d: "M52,144H36a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8H52a36,36,0,0,0,0-72Zm0,56H44V160h8a20,20,0,0,1,0,40Zm169.53-4.91a8,8,0,0,1,.25,11.31A30.06,30.06,0,0,1,200,216c-17.65,0-32-16.15-32-36s14.35-36,32-36a30.06,30.06,0,0,1,21.78,9.6,8,8,0,0,1-11.56,11.06A14.24,14.24,0,0,0,200,160c-8.82,0-16,9-16,20s7.18,20,16,20a14.18,14.18,0,0,0,10.22-4.66A8,8,0,0,1,221.53,195.09ZM128,144c-17.64,0-32,16.15-32,36s14.36,36,32,36,32-16.15,32-36S145.64,144,128,144Zm0,56c-8.82,0-16-9-16-20s7.18-20,16-20,16,9,16,20S136.82,200,128,200ZM48,120a8,8,0,0,0,8-8V40h88V88a8,8,0,0,0,8,8h48v16a8,8,0,0,0,16,0V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72A8,8,0,0,0,48,120ZM160,51.31,188.69,80H160Z" }));
});
l.displayName = "Duotone";
export {
  l as Duotone
};
