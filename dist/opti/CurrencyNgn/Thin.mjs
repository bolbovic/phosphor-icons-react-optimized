var v = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && h(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && h(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var H in a)
    o.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && m)
    for (var H of m(a))
      t.indexOf(H) < 0 && i.call(a, H) && (e[H] = a[H]);
  return e;
};
import n, { forwardRef as V } from "react";
import Z from "../../lib/OptiBase.mjs";
const c = V((H, e) => {
  var r = H, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ n.createElement(Z, l({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M216,140H196V116h20a4,4,0,0,0,0-8H196V46a4,4,0,0,0-8,0v62H117.46L67.15,43.54A4,4,0,0,0,60,46v62H40a4,4,0,0,0,0,8H60v24H40a4,4,0,0,0,0,8H60v62a4,4,0,0,0,8,0V148h70.54l50.31,64.46A4,4,0,0,0,192,214a3.9,3.9,0,0,0,1.3-.22A4,4,0,0,0,196,210V148h20a4,4,0,0,0,0-8Zm-28-24v24H142.44l-18.73-24ZM68,57.63,107.32,108H68ZM68,140V116h45.56l18.73,24Zm120,58.37L148.68,148H188Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
