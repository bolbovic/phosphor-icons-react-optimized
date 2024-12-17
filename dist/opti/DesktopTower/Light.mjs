var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && h(a, e, t[e]);
  if (m)
    for (var e of m(t))
      V.call(t, e) && h(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var H in a)
    o.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && m)
    for (var H of m(a))
      t.indexOf(H) < 0 && V.call(a, H) && (e[H] = a[H]);
  return e;
};
import Z, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((H, e) => {
  var r = H, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M214,72a6,6,0,0,1-6,6H176a6,6,0,0,1,0-12h32A6,6,0,0,1,214,72Zm-6,26H176a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12Zm38-50V208a14,14,0,0,1-14,14H152a14,14,0,0,1-14-14V190H94v20h18a6,6,0,0,1,0,12H64a6,6,0,0,1,0-12H82V190H32a22,22,0,0,1-22-22V96A22,22,0,0,1,32,74H138V48a14,14,0,0,1,14-14h80A14,14,0,0,1,246,48ZM138,178V86H32A10,10,0,0,0,22,96v72a10,10,0,0,0,10,10ZM234,48a2,2,0,0,0-2-2H152a2,2,0,0,0-2,2V208a2,2,0,0,0,2,2h80a2,2,0,0,0,2-2ZM192,170a10,10,0,1,0,10,10A10,10,0,0,0,192,170Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
