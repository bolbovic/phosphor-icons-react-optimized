var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      h.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    c.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && h.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var l = m, { children: a } = l, t = p(l, ["children"]);
  return /* @__PURE__ */ Z.createElement(H, i({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M224,72h-.85a16,16,0,0,0-9.68-10L133.47,33a16.06,16.06,0,0,0-10.94,0l-80,29.09a16,16,0,0,0-9.68,10H32A32,32,0,0,0,0,104v24a32,32,0,0,0,32,32h5.19c7.19,15.8,21.79,29.43,43.23,40.16a191.16,191.16,0,0,0,46.15,15.71,7.93,7.93,0,0,0,2.86,0,191.16,191.16,0,0,0,46.15-15.71c21.44-10.73,36-24.36,43.23-40.16H224a32,32,0,0,0,32-32V104A32,32,0,0,0,224,72ZM32,144a16,16,0,0,1-16-16V104A16,16,0,0,1,32,88v48a58.74,58.74,0,0,0,.55,8Zm136,0H88a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Zm0-32H88a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Zm72,16a16,16,0,0,1-16,16h-.55a58.74,58.74,0,0,0,.55-8V88a16,16,0,0,1,16,16Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
