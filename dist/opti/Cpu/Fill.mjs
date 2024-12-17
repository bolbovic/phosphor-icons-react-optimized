var v = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (a, H, e) => H in a ? v(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, o = (a, H) => {
  for (var e in H || (H = {}))
    h.call(H, e) && m(a, e, H[e]);
  if (V)
    for (var e of V(H))
      l.call(H, e) && m(a, e, H[e]);
  return a;
};
var i = (a, H) => {
  var e = {};
  for (var t in a)
    h.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && V)
    for (var t of V(a))
      H.indexOf(t) < 0 && l.call(a, t) && (e[t] = a[t]);
  return e;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, e) => {
  var r = t, { children: a } = r, H = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(f, o({ ref: e }, H), a, /* @__PURE__ */ p.createElement("path", { d: "M104,104h48v48H104Zm136,48a8,8,0,0,1-8,8H216v40a16,16,0,0,1-16,16H160v16a8,8,0,0,1-16,0V216H112v16a8,8,0,0,1-16,0V216H56a16,16,0,0,1-16-16V160H24a8,8,0,0,1,0-16H40V112H24a8,8,0,0,1,0-16H40V56A16,16,0,0,1,56,40H96V24a8,8,0,0,1,16,0V40h32V24a8,8,0,0,1,16,0V40h40a16,16,0,0,1,16,16V96h16a8,8,0,0,1,0,16H216v32h16A8,8,0,0,1,240,152ZM168,96a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8Z" }));
});
s.displayName = "Fill";
export {
  s as Fill
};
