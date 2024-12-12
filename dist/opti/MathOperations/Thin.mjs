var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var h = m, { children: a } = h, t = l(h, ["children"]);
  return /* @__PURE__ */ n.createElement(f, H({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M108,72a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8h64A4,4,0,0,1,108,72Zm-4,108H76V152a4,4,0,0,0-8,0v28H40a4,4,0,0,0,0,8H68v28a4,4,0,0,0,8,0V188h28a4,4,0,0,0,0-8Zm48-8h64a4,4,0,0,0,0-8H152a4,4,0,0,0,0,8Zm64,24H152a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8ZM157.17,98.83a4,4,0,0,0,5.66,0L184,77.66l21.17,21.17a4,4,0,1,0,5.66-5.66L189.66,72l21.17-21.17a4,4,0,1,0-5.66-5.66L184,66.34,162.83,45.17a4,4,0,0,0-5.66,5.66L178.34,72,157.17,93.17A4,4,0,0,0,157.17,98.83Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
