var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const n = d((l, e) => {
  var m = l, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(h, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M213.34,122.73a6,6,0,1,0-10.68-5.46,81.79,81.79,0,0,1-35.81,35.36l-18.14-40.8A38,38,0,0,0,134,42.48V24a6,6,0,0,0-12,0V42.48a38,38,0,0,0-14.71,69.35L58.52,221.56a6,6,0,1,0,11,4.88l25.9-58.26A93.37,93.37,0,0,0,128,174a97,97,0,0,0,32.68-5.69l25.84,58.13a6,6,0,1,0,11-4.88l-25.77-58A93.92,93.92,0,0,0,213.34,122.73ZM128,54a26,26,0,1,1-26,26A26,26,0,0,1,128,54Zm0,108a81.51,81.51,0,0,1-27.73-4.83l18-40.45a37.85,37.85,0,0,0,19.52,0l18,40.6A85.34,85.34,0,0,1,128,162Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
