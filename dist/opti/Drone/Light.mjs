var l = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var L = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && L(a, e, t[e]);
  if (A)
    for (var e of A(t))
      h.call(t, e) && L(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && A)
    for (var r of A(a))
      t.indexOf(r) < 0 && h.call(a, r) && (e[r] = a[r]);
  return e;
};
import Z, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const f = M((r, e) => {
  var m = r, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(c, i({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M188.24,67.76a6,6,0,0,0-8.48,0L149.52,98h-43L76.24,67.76a6,6,0,0,0-8.48,8.48L98,106.48v43L67.76,179.76a6,6,0,1,0,8.48,8.48L106.48,158h43l30.24,30.24a6,6,0,0,0,8.48-8.48L158,149.52v-43l30.24-30.24A6,6,0,0,0,188.24,67.76ZM110,110h36v36H110Zm30.39-48A42,42,0,1,1,194,115.61a6.09,6.09,0,0,1-2,.34,6,6,0,0,1-2-11.66A30,30,0,1,0,151.71,66a6,6,0,1,1-11.32-4ZM222,180a42,42,0,0,1-81.61,14,6,6,0,0,1,11.32-4A30,30,0,1,0,190,151.71a6,6,0,0,1,4-11.32A42.07,42.07,0,0,1,222,180ZM115.61,194A42,42,0,1,1,62,140.39a6,6,0,1,1,4,11.32A30,30,0,1,0,104.29,190a6,6,0,0,1,11.32,4ZM34,76a42,42,0,0,1,81.61-14,6,6,0,1,1-11.32,4A30,30,0,1,0,66,104.29,6,6,0,0,1,64,116a6.09,6.09,0,0,1-2-.34A42.07,42.07,0,0,1,34,76Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
