var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import H, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const n = h((r, e) => {
  var o = r, { children: a } = o, t = s(o, ["children"]);
  return /* @__PURE__ */ H.createElement(l, f({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M98,72a6,6,0,0,1,6-6A102.12,102.12,0,0,1,206,168a6,6,0,0,1-12,0,90.1,90.1,0,0,0-90-90A6,6,0,0,1,98,72ZM240,194H78V32a6,6,0,0,0-12,0V66H32a6,6,0,0,0,0,12H66V200a6,6,0,0,0,6,6H240a6,6,0,0,0,0-12Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
