var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as A } from "react";
import H from "../../lib/OptiBase.mjs";
const d = A((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(H, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M242.07,49.48A12,12,0,0,0,232,44H88.81a12,12,0,0,0-11,7.08l-64.8,144A12,12,0,0,0,24,212H167.19a12,12,0,0,0,10.95-7.08l64.8-144A12,12,0,0,0,242.07,49.48Zm-6.43,8.16-64.8,144a4,4,0,0,1-3.65,2.36H24a4,4,0,0,1-3.65-5.64l64.8-144A4,4,0,0,1,88.81,52H232a4,4,0,0,1,3.65,5.64Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
