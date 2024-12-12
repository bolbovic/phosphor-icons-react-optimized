var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import s, { forwardRef as f } from "react";
import C from "../../lib/OptiBase.mjs";
const H = f((m, e) => {
  var c = m, { children: a } = c, t = Z(c, ["children"]);
  return /* @__PURE__ */ s.createElement(C, p({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M142.26,10H97.65A6,6,0,0,0,92,14.14c-1.47,4.51-35.53,110.73-5.85,151.57,6.75,9.28,16.1,14.62,27.86,15.95V234H96a6,6,0,1,0,0,12h48a6,6,0,1,0,0-12H126V181.66c11.76-1.33,21.11-6.67,27.85-15.95,29.68-40.84-4.37-147.06-5.84-151.57A6,6,0,0,0,142.26,10ZM102.08,22h35.75c2.24,7.48,7,24.29,10.75,44H91.34C95.09,46.29,99.85,29.48,102.08,22Zm42,136.66C138.55,166.29,130.66,170,120,170s-18.6-3.71-24.14-11.34C85.46,144.42,83.21,116.55,89.25,78h61.42C156.71,116.55,154.45,144.42,144.1,158.66ZM230,52a10,10,0,1,1-10-10A10,10,0,0,1,230,52ZM206,20a10,10,0,1,1-10-10A10,10,0,0,1,206,20Zm0,80a10,10,0,1,1-10-10A10,10,0,0,1,206,100Z" }));
});
H.displayName = "Light";
export {
  H as Light
};
