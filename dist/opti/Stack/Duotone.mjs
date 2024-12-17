var Z = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? Z(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, A = (e, t) => {
  for (var a in t || (t = {}))
    c.call(t, a) && p(e, a, t[a]);
  if (o)
    for (var a of o(t))
      n.call(t, a) && p(e, a, t[a]);
  return e;
};
var i = (e, t) => {
  var a = {};
  for (var l in e)
    c.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
  if (e != null && o)
    for (var l of o(e))
      t.indexOf(l) < 0 && n.call(e, l) && (a[l] = e[l]);
  return a;
};
import r, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((l, a) => {
  var m = l, { children: e } = m, t = i(m, ["children"]);
  return /* @__PURE__ */ r.createElement(f, A({ ref: a }, t), e, /* @__PURE__ */ r.createElement("path", { d: "M224,80l-96,56L32,80l96-56Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
