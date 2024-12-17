var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      A.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && A.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as L } from "react";
import d from "../../lib/OptiBase.mjs";
const h = L((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M228.6,63.46A31.83,31.83,0,0,0,204.1,52H204a32,32,0,1,0-59.17,17,4,4,0,0,1-.51,5L74,144.36a4,4,0,0,1-5,.51A32,32,0,1,0,51.9,204H52a32,32,0,1,0,59.16-17,4,4,0,0,1,.51-5L182,111.64a4,4,0,0,1,5-.51A32,32,0,0,0,228.6,63.46ZM222.1,99.8a24,24,0,0,1-30.8,4.55A12,12,0,0,0,176.37,106L106,176.37a12,12,0,0,0-1.63,14.93,24,24,0,1,1-44.09,9,4,4,0,0,0-1.12-3.45,4,4,0,0,0-2.83-1.17,4.32,4.32,0,0,0-.62.05,24,24,0,1,1,9-44.09A12,12,0,0,0,79.63,150L150,79.63a12,12,0,0,0,1.63-14.93,24,24,0,1,1,44.09-9,4,4,0,0,0,4.57,4.57A24,24,0,0,1,222.1,99.8Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
