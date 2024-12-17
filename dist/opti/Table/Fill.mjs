var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, p = (e, t) => {
  for (var a in t || (t = {}))
    o.call(t, a) && l(e, a, t[a]);
  if (m)
    for (var a of m(t))
      i.call(t, a) && l(e, a, t[a]);
  return e;
};
var Z = (e, t) => {
  var a = {};
  for (var H in e)
    o.call(e, H) && t.indexOf(H) < 0 && (a[H] = e[H]);
  if (e != null && m)
    for (var H of m(e))
      t.indexOf(H) < 0 && i.call(e, H) && (a[H] = e[H]);
  return a;
};
import c, { forwardRef as s } from "react";
import v from "../../lib/OptiBase.mjs";
const d = s((H, a) => {
  var r = H, { children: e } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(v, p({ ref: a }, t), e, /* @__PURE__ */ c.createElement("path", { d: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM40,112H80v32H40Zm56,0H216v32H96ZM40,160H80v32H40Zm176,32H96V160H216v32Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
