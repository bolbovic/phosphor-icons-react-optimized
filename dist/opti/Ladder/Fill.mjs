var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var l in a)
    h.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const A = f((l, e) => {
  var r = l, { children: a } = r, t = H(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M215.52,213.26,164.51,73l9.09-25H184a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16h4.58L32.48,213.26a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,40,224a8,8,0,0,0,7.52-5.27L57.24,192h47l-7.74,21.26a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,104,224a8,8,0,0,0,7.52-5.27L130,168H182l18.45,50.73A8,8,0,0,0,208,224a8.14,8.14,0,0,0,2.73-.48A8,8,0,0,0,215.52,213.26ZM109.39,64h30a8,8,0,0,1,0,16H109.39a8,8,0,1,1,0-16Zm.86,96H80.3a8,8,0,0,1,0-16h30a8,8,0,0,1,0,16Zm14.54-40H94.84a8,8,0,0,1,0-16h30a8,8,0,0,1,0,16Zm11,32L156,96.41,176.21,152Z" }));
});
A.displayName = "Fill";
export {
  A as Fill
};
