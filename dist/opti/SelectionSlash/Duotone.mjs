var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && Z(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && Z(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var o in a)
    V.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as i } from "react";
import l from "../../lib/OptiBase.mjs";
const A = i((o, e) => {
  var p = o, { children: a } = p, t = H(p, ["children"]);
  return /* @__PURE__ */ r.createElement(l, n({ ref: e }, t), a, /* @__PURE__ */ r.createElement("path", { d: "M216,40V216H40V40Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M104,40a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,40Zm40,168H112a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM208,32H184a8,8,0,0,0,0,16h24V72a8,8,0,0,0,16,0V48A16,16,0,0,0,208,32Zm8,72a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V112A8,8,0,0,0,216,104ZM40,152a8,8,0,0,0,8-8V112a8,8,0,0,0-16,0v32A8,8,0,0,0,40,152Zm32,56H48V184a8,8,0,0,0-16,0v24a16,16,0,0,0,16,16H72a8,8,0,0,0,0-16ZM53.92,34.62A8,8,0,1,0,42.08,45.38l160,176a8,8,0,1,0,11.84-10.76Z" }));
});
A.displayName = "Duotone";
export {
  A as Duotone
};
