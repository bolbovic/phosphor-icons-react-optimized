var H = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && V(a, e, t[e]);
  if (m)
    for (var e of m(t))
      o.call(t, e) && V(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var l in a)
    Z.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && o.call(a, l) && (e[l] = a[l]);
  return e;
};
import A, { forwardRef as M } from "react";
import h from "../../lib/OptiBase.mjs";
const c = M((l, e) => {
  var r = l, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ A.createElement(h, i({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M208,138H128a6,6,0,0,0-6,6v57.45a6,6,0,0,0,4.93,5.91l80,14.54a5.46,5.46,0,0,0,1.07.1,6,6,0,0,0,6-6V144A6,6,0,0,0,208,138Zm-6,70.81-68-12.36V150h68ZM96,138H32a6,6,0,0,0-6,6v40a6,6,0,0,0,4.93,5.9l64,11.64a6.36,6.36,0,0,0,1.07.1,6,6,0,0,0,6-6V144A6,6,0,0,0,96,138Zm-6,50.45L38,179V150H90ZM211.84,35.39a6,6,0,0,0-4.91-1.29l-80,14.54A6,6,0,0,0,122,54.55V112a6,6,0,0,0,6,6h80a6,6,0,0,0,6-6V40A6,6,0,0,0,211.84,35.39ZM202,106H134V59.55l68-12.36ZM99.84,55.76a6,6,0,0,0-4.91-1.3l-64,11.64A6,6,0,0,0,26,72v40a6,6,0,0,0,6,6H96a6,6,0,0,0,6-6V60.36A6,6,0,0,0,99.84,55.76ZM90,106H38V77l52-9.46Z" }));
});
c.displayName = "Light";
export {
  c as Light
};
