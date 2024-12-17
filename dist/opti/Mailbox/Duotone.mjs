var v = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && p(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && p(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var o in a)
    V.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as A } from "react";
import i from "../../lib/OptiBase.mjs";
const Z = A((o, e) => {
  var H = o, { children: a } = H, t = n(H, ["children"]);
  return /* @__PURE__ */ r.createElement(i, h({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M232,116v60a8,8,0,0,1-8,8H128V116A52,52,0,0,0,76,64H180A52,52,0,0,1,232,116Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M104,152a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H96A8,8,0,0,1,104,152Zm136-36v60a16,16,0,0,1-16,16H136v32a8,8,0,0,1-16,0V192H32a16,16,0,0,1-16-16V116A60.07,60.07,0,0,1,76,56h76V24a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H168V56h12A60.07,60.07,0,0,1,240,116ZM120,176V116a44,44,0,0,0-88,0v60Zm104-60a44.05,44.05,0,0,0-44-44H168v72a8,8,0,0,1-16,0V72H116.75A59.86,59.86,0,0,1,136,116v60h88Z" }));
});
Z.displayName = "Duotone";
export {
  Z as Duotone
};
