var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && m(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var H in a)
    o.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && r)
    for (var H of r(a))
      t.indexOf(H) < 0 && i.call(a, H) && (e[H] = a[H]);
  return e;
};
import Z, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const s = f((H, e) => {
  var h = H, { children: a } = h, t = A(h, ["children"]);
  return /* @__PURE__ */ Z.createElement(l, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M248,202h-8a10,10,0,0,1-10-10V160a10,10,0,0,1,10-10h8a6,6,0,0,0,0-12h-8a22,22,0,0,0-22,22v10H197.52a38.08,38.08,0,0,0-33.43-31.78l-36.5-87.61A14,14,0,0,0,114.67,42H24A14,14,0,0,0,10,56v96.72A38,38,0,0,0,40,214H160a38.05,38.05,0,0,0,37.52-32H218v10a22,22,0,0,0,22,22h8a6,6,0,0,0,0-12ZM116.51,55.23,151,138H62V54h52.67A2,2,0,0,1,116.51,55.23ZM24,54H50v84H40a37.82,37.82,0,0,0-18,4.54V56A2,2,0,0,1,24,54ZM160,202H40a26,26,0,0,1,0-52H160a26,26,0,0,1,0,52Zm6-26a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H160A6,6,0,0,1,166,176Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
