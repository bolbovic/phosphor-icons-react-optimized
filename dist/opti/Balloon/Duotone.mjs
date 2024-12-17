var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, s = (e, t) => {
  for (var a in t || (t = {}))
    l.call(t, a) && p(e, a, t[a]);
  if (m)
    for (var a of m(t))
      n.call(t, a) && p(e, a, t[a]);
  return e;
};
var C = (e, t) => {
  var a = {};
  for (var o in e)
    l.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      t.indexOf(o) < 0 && n.call(e, o) && (a[o] = e[o]);
  return a;
};
import r, { forwardRef as i } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = i((o, a) => {
  var c = o, { children: e } = c, t = C(c, ["children"]);
  return /* @__PURE__ */ r.createElement(Z, s({ ref: a }, t), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M137.89,199.13h0L152,232H104l14.09-32.87h0C78.59,192.18,48,144.83,48,104a80,80,0,0,1,160,0C208,144.83,177.41,192.18,137.89,199.13Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M128,16a88.1,88.1,0,0,0-88,88c0,23.43,9.4,49.42,25.13,69.5,12.08,15.41,26.5,26,41.91,31.09L96.65,228.85A8,8,0,0,0,104,240h48a8,8,0,0,0,7.35-11.15L149,204.59c15.4-5.07,29.83-15.68,41.91-31.09C206.6,153.42,216,127.43,216,104A88.1,88.1,0,0,0,128,16Zm11.87,208H116.13l6.94-16.19c1.64.12,3.28.19,4.93.19s3.29-.07,4.93-.19Zm38.4-60.37C163.94,181.93,146.09,192,128,192s-35.94-10.07-50.27-28.37C64.12,146.27,56,124,56,104a72,72,0,0,1,144,0C200,124,191.88,146.27,178.27,163.63Zm-1-59.74A8.52,8.52,0,0,1,176,104a8,8,0,0,1-7.88-6.68,41.29,41.29,0,0,0-33.43-33.43,8,8,0,1,1,2.64-15.78,57.5,57.5,0,0,1,46.57,46.57A8,8,0,0,1,177.32,103.89Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
