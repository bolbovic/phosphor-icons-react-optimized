var c = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var r = (a, m, A) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: A }) : a[m] = A, o = (a, m) => {
  for (var A in m || (m = {}))
    Z.call(m, A) && r(a, A, m[A]);
  if (t)
    for (var A of t(m))
      H.call(m, A) && r(a, A, m[A]);
  return a;
};
var i = (a, m) => {
  var A = {};
  for (var e in a)
    Z.call(a, e) && m.indexOf(e) < 0 && (A[e] = a[e]);
  if (a != null && t)
    for (var e of t(a))
      m.indexOf(e) < 0 && H.call(a, e) && (A[e] = a[e]);
  return A;
};
import p, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((e, A) => {
  var h = e, { children: a } = h, m = i(h, ["children"]);
  return /* @__PURE__ */ p.createElement(s, o({ ref: A }, m), a, /* @__PURE__ */ p.createElement("path", { d: "M102,192a6,6,0,0,1-6,6H80a6,6,0,0,1,0-12H96A6,6,0,0,1,102,192Zm74-6H160a6,6,0,0,0,0,12h16a6,6,0,0,0,0-12Zm-76-72a10,10,0,1,0,10,10A10,10,0,0,0,100,114Zm56,0a10,10,0,1,0,10,10A10,10,0,0,0,156,114Zm86.85,6.85A14,14,0,0,1,232,126H198v35.05A38,38,0,0,1,176,230H80a38,38,0,0,1-22-68.95V126H24a14,14,0,0,1-10.87-5.15,13.82,13.82,0,0,1-2.88-11.5A54.12,54.12,0,0,1,63.22,66h6.89A53.93,53.93,0,0,1,50,24a6,6,0,0,1,12,0,42,42,0,0,0,42,42h48a42,42,0,0,0,42-42,6,6,0,0,1,12,0,53.93,53.93,0,0,1-20.11,42h6.89a54.12,54.12,0,0,1,52.95,43.35A13.82,13.82,0,0,1,242.85,120.85ZM58,114V104A37.87,37.87,0,0,1,68.32,78h-5.1A42.08,42.08,0,0,0,22,111.7a1.83,1.83,0,0,0,.4,1.55A2,2,0,0,0,24,114Zm144,78a26,26,0,0,0-26-26H80a26,26,0,0,0,0,52h96A26,26,0,0,0,202,192Zm-16-36.66V104a26,26,0,0,0-26-26H96a26,26,0,0,0-26,26v51.34A37.94,37.94,0,0,1,80,154h96A37.94,37.94,0,0,1,186,155.34Zm48-43.64A42.08,42.08,0,0,0,192.78,78h-5.1A37.87,37.87,0,0,1,198,104v10h34a2,2,0,0,0,1.58-.75A1.83,1.83,0,0,0,234,111.7Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
