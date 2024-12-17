var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as H } from "react";
import d from "../../lib/OptiBase.mjs";
const h = H((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M28,128A68.07,68.07,0,0,1,96,60H214.34L197.17,42.83a4,4,0,0,1,5.66-5.66l24,24a4,4,0,0,1,0,5.66l-24,24a4,4,0,0,1-5.66-5.66L214.34,68H96a60.07,60.07,0,0,0-60,60,4,4,0,0,1-8,0Zm196-4a4,4,0,0,0-4,4,60.07,60.07,0,0,1-60,60H41.66l17.17-17.17a4,4,0,0,0-5.66-5.66l-24,24a4,4,0,0,0,0,5.66l24,24a4,4,0,1,0,5.66-5.66L41.66,196H160a68.07,68.07,0,0,0,68-68A4,4,0,0,0,224,124Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
