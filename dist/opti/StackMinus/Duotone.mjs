var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      n.call(t, e) && p(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var l in a)
    c.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && n.call(a, l) && (e[l] = a[l]);
  return e;
};
import m, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((l, e) => {
  var r = l, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ m.createElement(f, A({ ref: e }, t), a, /* @__PURE__ */ m.createElement("path", { d: "M224,80l-96,56L32,80l96-56Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M240,200a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16h48A8,8,0,0,1,240,200Zm-20-78.91-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26ZM140,215.76l-12,7L36,169.09A8,8,0,0,0,28,182.91l96,56a8,8,0,0,0,8.06,0l16-9.33A8,8,0,1,0,140,215.76Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
