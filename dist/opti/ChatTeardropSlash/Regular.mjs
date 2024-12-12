var d = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      A.call(t, e) && o(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && A.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as i } from "react";
import R from "../../lib/OptiBase.mjs";
const n = i((r, e) => {
  var m = r, { children: a } = m, t = s(m, ["children"]);
  return /* @__PURE__ */ c.createElement(R, f({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M53.92,34.62A8,8,0,1,0,42.08,45.38l13.18,14.5A99.39,99.39,0,0,0,32,124v84a16,16,0,0,0,16,16h84a100.33,100.33,0,0,0,56.53-17.53l13.55,14.91a8,8,0,1,0,11.84-10.76ZM132,208H48V124A83.46,83.46,0,0,1,66.15,71.85L177.66,194.51A83,83,0,0,1,132,208Zm100-84a99.87,99.87,0,0,1-14.35,51.65,8,8,0,0,1-13.7-8.28A84,84,0,0,0,95.66,48.25a8,8,0,0,1-6.94-14.42A100,100,0,0,1,232,124Z" }));
});
n.displayName = "Regular";
export {
  n as Regular,
  n as default
};
