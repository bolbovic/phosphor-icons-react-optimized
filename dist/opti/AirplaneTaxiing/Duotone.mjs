var n = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && r(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && r(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var A in a)
    h.call(a, A) && t.indexOf(A) < 0 && (e[A] = a[A]);
  if (a != null && o)
    for (var A of o(a))
      t.indexOf(A) < 0 && p.call(a, A) && (e[A] = a[A]);
  return e;
};
import m, { forwardRef as L } from "react";
import i from "../../lib/OptiBase.mjs";
const Z = L((A, e) => {
  var l = A, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ m.createElement(i, H({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M240,136v24H61.06a32,32,0,0,1-30.65-22.8L16.34,90.3A8,8,0,0,1,24,80h8l24,24H92.91L80.42,66.53A8,8,0,0,1,88,56h8l48,48h64A32,32,0,0,1,240,136Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M208,96H147.32L101.66,50.34A8,8,0,0,0,96,48H88A16,16,0,0,0,72.83,69.06l9,26.94H59.32L37.66,74.34A8,8,0,0,0,32,72H24A16,16,0,0,0,8.69,92.6l14.07,46.89A39.75,39.75,0,0,0,61.07,168H240a8,8,0,0,0,8-8V136A40,40,0,0,0,208,96Zm24,56H61.07a23.85,23.85,0,0,1-23-17.1L24,88h4.68l21.66,21.66A8,8,0,0,0,56,112h36.9a8,8,0,0,0,7.59-10.53L88,64h4.68l45.66,45.66A8,8,0,0,0,144,112h64a24,24,0,0,1,24,24Zm-8,48a16,16,0,1,1-16-16A16,16,0,0,1,224,200Zm-96,0a16,16,0,1,1-16-16A16,16,0,0,1,128,200Z" }));
});
Z.displayName = "Duotone";
export {
  Z as Duotone
};
