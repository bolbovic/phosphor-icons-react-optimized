var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, H, e) => H in a ? s(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, c = (a, H) => {
  for (var e in H || (H = {}))
    l.call(H, e) && o(a, e, H[e]);
  if (r)
    for (var e of r(H))
      p.call(H, e) && o(a, e, H[e]);
  return a;
};
var f = (a, H) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      H.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import h, { forwardRef as d } from "react";
import i from "../../lib/OptiBase.mjs";
const v = d((t, e) => {
  var m = t, { children: a } = m, H = f(m, ["children"]);
  return /* @__PURE__ */ h.createElement(i, c({ ref: e }, H), a, /* @__PURE__ */ h.createElement("path", { d: "M248,160H192V96h56a8,8,0,0,0,0-16H189.83A16,16,0,0,0,176,72H112a16,16,0,0,0-13.83,8H64a8,8,0,0,0-16,0H8A8,8,0,0,0,8,96H48v64H8a8,8,0,0,0,0,16H48a8,8,0,0,0,16,0H98.17A16,16,0,0,0,112,184h64a16,16,0,0,0,13.83-8H248a8,8,0,0,0,0-16ZM64,96H96v64H64Zm48,72V88h64v32H144a8,8,0,0,0,0,16h32v31.8c0,.07,0,.13,0,.2Z" }));
});
v.displayName = "Regular";
export {
  v as Regular,
  v as default
};
