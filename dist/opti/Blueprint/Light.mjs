var Z = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && r(a, e, t[e]);
  if (V)
    for (var e of V(t))
      o.call(t, e) && r(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var H in a)
    m.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && V)
    for (var H of V(a))
      t.indexOf(H) < 0 && o.call(a, H) && (e[H] = a[H]);
  return e;
};
import v, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((H, e) => {
  var h = H, { children: a } = h, t = p(h, ["children"]);
  return /* @__PURE__ */ v.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M232,58H70V40a6,6,0,0,0-6-6H48A30,30,0,0,0,18,64V176a30,30,0,0,0,30,30H232a6,6,0,0,0,6-6V64A6,6,0,0,0,232,58ZM30,64A18,18,0,0,1,48,46H58V146H48a29.87,29.87,0,0,0-18,6ZM226,194H48a18,18,0,0,1,0-36H64a6,6,0,0,0,6-6V70H226ZM104,138a6,6,0,0,0,0,12h18v10a6,6,0,0,0,12,0V150h28v10a6,6,0,0,0,12,0V150h18a6,6,0,0,0,0-12H174V118h18a6,6,0,0,0,0-12H174V96a6,6,0,0,0-12,0v10H134V96a6,6,0,0,0-12,0v10H104a6,6,0,0,0,0,12h18v20Zm30-20h28v20H134Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
