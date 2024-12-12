var c = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      f.call(t, e) && o(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && f.call(a, r) && (e[r] = a[r]);
  return e;
};
import Z, { forwardRef as d } from "react";
import i from "../../lib/OptiBase.mjs";
const A = d((r, e) => {
  var m = r, { children: a } = m, t = H(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, s({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M24,48a8,8,0,0,1,8-8H224a8,8,0,0,1,0,16H32A8,8,0,0,1,24,48ZM224,200H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM144,72a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V147l13.09-15,28,48A8,8,0,1,0,206.91,172l-30.7-52.63L206,85.27a8,8,0,1,0-12-10.54l-42,48V80A8,8,0,0,0,144,72ZM88,176V160H40a8,8,0,0,1-6.31-12.91l56-72A8,8,0,0,1,104,80v64h8a8,8,0,0,1,0,16h-8v16a8,8,0,0,1-16,0Zm0-32V103.32L56.36,144Z" }));
});
A.displayName = "Regular";
export {
  A as Regular,
  A as default
};
