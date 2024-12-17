var d = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && A(a, e, t[e]);
  if (o)
    for (var e of o(t))
      c.call(t, e) && A(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var m in a)
    Z.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && c.call(a, m) && (e[m] = a[m]);
  return e;
};
import r, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var p = m, { children: a } = p, t = i(p, ["children"]);
  return /* @__PURE__ */ r.createElement(l, n({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M224,128a96,96,0,1,1-96-96,48,48,0,0,0,48,48A48,48,0,0,0,224,128Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M164.49,163.51a12,12,0,1,1-17,0A12,12,0,0,1,164.49,163.51Zm-81-8a12,12,0,1,0,17,0A12,12,0,0,0,83.51,155.51Zm9-39a12,12,0,1,0-17,0A12,12,0,0,0,92.49,116.49Zm48-1a12,12,0,1,0,0,17A12,12,0,0,0,140.49,115.51ZM232,128A104,104,0,1,1,128,24a8,8,0,0,1,8,8,40,40,0,0,0,40,40,8,8,0,0,1,8,8,40,40,0,0,0,40,40A8,8,0,0,1,232,128Zm-16.31,7.39A56.13,56.13,0,0,1,168.5,87.5a56.13,56.13,0,0,1-47.89-47.19,88,88,0,1,0,95.08,95.08Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
