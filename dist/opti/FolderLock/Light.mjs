var v = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var H in a)
    h.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && m)
    for (var H of m(a))
      t.indexOf(H) < 0 && i.call(a, H) && (e[H] = a[H]);
  return e;
};
import V, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((H, e) => {
  var r = H, { children: a } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ V.createElement(c, p({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M224,162H214v-6a26,26,0,0,0-52,0v6H152a6,6,0,0,0-6,6v40a6,6,0,0,0,6,6h72a6,6,0,0,0,6-6V168A6,6,0,0,0,224,162Zm-50-6a14,14,0,0,1,28,0v6H174Zm44,46H158V174h60ZM216,74H130.49l-27.9-27.9a13.94,13.94,0,0,0-9.9-4.1H40A14,14,0,0,0,26,56V200.62A13.39,13.39,0,0,0,39.38,214h73.18a6,6,0,0,0,0-12H39.38A1.4,1.4,0,0,1,38,200.62V86H216a2,2,0,0,1,2,2v16a6,6,0,0,0,12,0V88A14,14,0,0,0,216,74ZM40,54H92.69a2,2,0,0,1,1.41.59L113.51,74H38V56A2,2,0,0,1,40,54Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
