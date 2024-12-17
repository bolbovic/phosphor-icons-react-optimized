var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      h.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var H in a)
    Z.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && m)
    for (var H of m(a))
      t.indexOf(H) < 0 && h.call(a, H) && (e[H] = a[H]);
  return e;
};
import V, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const f = M((H, e) => {
  var r = H, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ V.createElement(c, i({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M142,192a6,6,0,0,1-6,6H120a6,6,0,0,1,0-12h16A6,6,0,0,1,142,192ZM120,70h16a6,6,0,0,0,0-12H120a6,6,0,0,0,0,12Zm16,52H120a6,6,0,0,0,0,12h16a6,6,0,0,0,0-12Zm78-82V216a14,14,0,0,1-14,14H56a14,14,0,0,1-14-14V40A14,14,0,0,1,56,26H200A14,14,0,0,1,214,40ZM54,154H202V102H54ZM54,40V90H202V40a2,2,0,0,0-2-2H56A2,2,0,0,0,54,40ZM202,216V166H54v50a2,2,0,0,0,2,2H200A2,2,0,0,0,202,216Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
