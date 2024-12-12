var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var r in a)
    c.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import Z, { forwardRef as i } from "react";
import A from "../../lib/OptiBase.mjs";
const L = i((r, e) => {
  var l = r, { children: a } = l, t = s(l, ["children"]);
  return /* @__PURE__ */ Z.createElement(A, f({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M229.66,98.34a8,8,0,0,1-11.32,11.32L200,91.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L188.69,80,170.34,61.66a8,8,0,0,1,11.32-11.32L200,68.69l18.34-18.35a8,8,0,0,1,11.32,11.32L211.31,80ZM128,192a12,12,0,1,0,12,12A12,12,0,0,0,128,192Zm44.71-33.47a76.05,76.05,0,0,0-89.42,0,8,8,0,0,0,9.42,12.94,60,60,0,0,1,70.58,0,8,8,0,1,0,9.42-12.94ZM135.62,64.18a8,8,0,1,0,.76-16c-2.78-.13-5.6-.2-8.38-.2A172.35,172.35,0,0,0,18.92,87,8,8,0,1,0,29.08,99.37,156.25,156.25,0,0,1,128,64C130.53,64,133.09,64.06,135.62,64.18Zm-.16,48.07a8,8,0,1,0,1.08-16c-2.83-.19-5.7-.29-8.54-.29a122.74,122.74,0,0,0-77,26.77A8,8,0,0,0,56,137a7.93,7.93,0,0,0,5-1.73A106.87,106.87,0,0,1,128,112C130.48,112,133,112.08,135.46,112.25Z" }));
});
L.displayName = "Regular";
export {
  L as Regular,
  L as default
};
