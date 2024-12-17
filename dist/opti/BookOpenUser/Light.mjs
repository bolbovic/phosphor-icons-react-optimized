var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as V } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = V((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, h({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M232,74H160a38,38,0,0,0-32,17.55A38,38,0,0,0,96,74H24a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H96a26,26,0,0,1,26,26,6,6,0,0,0,12,0,26,26,0,0,1,26-26h72a6,6,0,0,0,6-6V80A6,6,0,0,0,232,74ZM96,194H30V86H96a26,26,0,0,1,26,26v92.31A37.86,37.86,0,0,0,96,194Zm130,0H160a37.83,37.83,0,0,0-26,10.33V112a26,26,0,0,1,26-26h66ZM91.2,44.4a46,46,0,0,1,73.6,0,6,6,0,1,1-9.6,7.2,34,34,0,0,0-54.4,0,6,6,0,1,1-9.6-7.2Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
