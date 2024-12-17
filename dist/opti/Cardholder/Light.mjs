var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var H in a)
    i.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && r)
    for (var H of r(a))
      t.indexOf(H) < 0 && p.call(a, H) && (e[H] = a[H]);
  return e;
};
import f, { forwardRef as A } from "react";
import M from "../../lib/OptiBase.mjs";
const Z = A((H, e) => {
  var m = H, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(M, V({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M208,50H48A22,22,0,0,0,26,72V184a22,22,0,0,0,22,22H208a22,22,0,0,0,22-22V72A22,22,0,0,0,208,50ZM38,94H218v20H160a6,6,0,0,0-6,6,26,26,0,0,1-52,0,6,6,0,0,0-6-6H38ZM48,62H208a10,10,0,0,1,10,10V82H38V72A10,10,0,0,1,48,62ZM208,194H48a10,10,0,0,1-10-10V126H90.47a38,38,0,0,0,75.06,0H218v58A10,10,0,0,1,208,194Z" }));
});
Z.displayName = "Light";
export {
  Z as Light
};
