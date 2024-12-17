var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, A = (e, t) => {
  for (var a in t || (t = {}))
    i.call(t, a) && o(e, a, t[a]);
  if (l)
    for (var a of l(t))
      p.call(t, a) && o(e, a, t[a]);
  return e;
};
var c = (e, t) => {
  var a = {};
  for (var r in e)
    i.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && l)
    for (var r of l(e))
      t.indexOf(r) < 0 && p.call(e, r) && (a[r] = e[r]);
  return a;
};
import f, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const h = d((r, a) => {
  var m = r, { children: e } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(n, A({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M232,72v92a44,44,0,0,1-87.81,4H111.81A44,44,0,0,1,24,164V72A32,32,0,0,1,56,40a8,8,0,0,1,0,16A16,16,0,0,0,40,72v58.08A44,44,0,0,1,110.32,152h35.36A44,44,0,0,1,216,130.08V72a16,16,0,0,0-16-16,8,8,0,0,1,0-16A32,32,0,0,1,232,72Z" }));
});
h.displayName = "Fill";
export {
  h as Fill
};
