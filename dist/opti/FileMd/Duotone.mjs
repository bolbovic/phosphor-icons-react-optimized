var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && p(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && p(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var o in a)
    h.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as i } from "react";
import d from "../../lib/OptiBase.mjs";
const f = i((o, e) => {
  var V = o, { children: a } = V, t = n(V, ["children"]);
  return /* @__PURE__ */ r.createElement(d, l({ ref: e }, t), a, /* @__PURE__ */ r.createElement("path", { d: "M208,88H152V32Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V224a8,8,0,0,0,16,0V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM144,144H128a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h16a36,36,0,0,0,0-72Zm0,56h-8V160h8a20,20,0,0,1,0,40Zm-40-48v56a8,8,0,0,1-16,0V177.38L74.55,196.59a8,8,0,0,1-13.1,0L48,177.38V208a8,8,0,0,1-16,0V152a8,8,0,0,1,14.55-4.59L68,178.05l21.45-30.64A8,8,0,0,1,104,152Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
