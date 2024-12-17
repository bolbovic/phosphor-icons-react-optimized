var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
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
import f, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const n = A((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, H({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M224,224a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,224Zm-16-96H151.57l15.71-73.29A32,32,0,0,0,136,16H120A32,32,0,0,0,88.72,54.71L104.43,128H48a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V144A16,16,0,0,0,208,128Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
