var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && h(a, e, t[e]);
  if (o)
    for (var e of o(t))
      c.call(t, e) && h(a, e, t[e]);
  return a;
};
var v = (a, t) => {
  var e = {};
  for (var H in a)
    p.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && o)
    for (var H of o(a))
      t.indexOf(H) < 0 && c.call(a, H) && (e[H] = a[H]);
  return e;
};
import m, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const f = Z((H, e) => {
  var r = H, { children: a } = r, t = v(r, ["children"]);
  return /* @__PURE__ */ m.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ m.createElement("path", { d: "M8,88h96v80H8Zm176,0v80h64V88Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M248,160H192V96h56a8,8,0,0,0,0-16H189.84A16,16,0,0,0,176,72H112a16,16,0,0,0-13.84,8H64a8,8,0,0,0-16,0H8A8,8,0,0,0,8,96H48v64H8a8,8,0,0,0,0,16H48a8,8,0,0,0,16,0H98.16A16,16,0,0,0,112,184h64a16,16,0,0,0,13.84-8H248a8,8,0,0,0,0-16ZM64,96H96v64H64Zm48,72V88h64v32H144a8,8,0,0,0,0,16h32v31.8c0,.07,0,.13,0,.2Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
