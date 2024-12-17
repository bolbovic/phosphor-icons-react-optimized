var c = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && m(a, e, t[e]);
  if (H)
    for (var e of H(t))
      o.call(t, e) && m(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && H)
    for (var r of H(a))
      t.indexOf(r) < 0 && o.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const v = f((r, e) => {
  var V = r, { children: a } = V, t = p(V, ["children"]);
  return /* @__PURE__ */ h.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M112,112h32v32H112ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Zm-64,96V112h32a8,8,0,0,0,0-16H160V64a8,8,0,0,0-16,0V96H112V64a8,8,0,0,0-16,0V96H64a8,8,0,0,0,0,16H96v32H64a8,8,0,0,0,0,16H96v32a8,8,0,0,0,16,0V160h32v32a8,8,0,0,0,16,0V160h32a8,8,0,0,0,0-16Z" }));
});
v.displayName = "Fill";
export {
  v as Fill
};
