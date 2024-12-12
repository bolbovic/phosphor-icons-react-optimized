var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var A = (e, t, a) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, p = (e, t) => {
  for (var a in t || (t = {}))
    o.call(t, a) && A(e, a, t[a]);
  if (r)
    for (var a of r(t))
      H.call(t, a) && A(e, a, t[a]);
  return e;
};
var Z = (e, t) => {
  var a = {};
  for (var l in e)
    o.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
  if (e != null && r)
    for (var l of r(e))
      t.indexOf(l) < 0 && H.call(e, l) && (a[l] = e[l]);
  return a;
};
import f, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const d = M((l, a) => {
  var m = l, { children: e } = m, t = Z(m, ["children"]);
  return /* @__PURE__ */ f.createElement(c, p({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M223.88,214l-22-176A16,16,0,0,0,186,24H70A16,16,0,0,0,54.12,38l-22,176A16,16,0,0,0,48,232H88.69a16,16,0,0,0,15.51-12.06l23.8-92,23.79,91.94A16,16,0,0,0,167.31,232H208a16,16,0,0,0,15.88-18ZM192.9,95.2A32.13,32.13,0,0,1,169,72h21ZM186,40l2,16H68l2-16ZM66,72H87A32.13,32.13,0,0,1,63.1,95.2ZM88.69,216H48L61,111.73A48.08,48.08,0,0,0,103.32,72H120V95Zm78.6-.06L136,95V72h16.68A48.08,48.08,0,0,0,195,111.73L208,216Z" }));
});
d.displayName = "Regular";
export {
  d as Regular,
  d as default
};
