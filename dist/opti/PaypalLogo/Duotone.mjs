var n = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && r(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && r(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var A in a)
    m.call(a, A) && t.indexOf(A) < 0 && (e[A] = a[A]);
  if (a != null && o)
    for (var A of o(a))
      t.indexOf(A) < 0 && p.call(a, A) && (e[A] = a[A]);
  return e;
};
import h, { forwardRef as i } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = i((A, e) => {
  var l = A, { children: a } = l, t = H(l, ["children"]);
  return /* @__PURE__ */ h.createElement(Z, c({ ref: e }, t), a, /* @__PURE__ */ h.createElement(
    "path",
    {
      d: "M191.91,82.7a49,49,0,0,1-1.37,8.94h0A48,48,0,0,1,144,128H108a8,8,0,0,0-7.76,6.06l12-48A8,8,0,0,1,120,80h56A48.25,48.25,0,0,1,191.91,82.7Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ h.createElement("path", { d: "M220.12,93.54a55.8,55.8,0,0,0-20.19-16.18A56,56,0,0,0,144,24H84A16,16,0,0,0,68.48,36.12l-36,144A16,16,0,0,0,48,200h27.5l-3,12.12A16,16,0,0,0,88,232h31.5A16,16,0,0,0,135,219.88L144,184h32a56,56,0,0,0,44.14-90.46ZM79.52,184H48L84,40h60a40,40,0,0,1,39.3,32.49A57,57,0,0,0,176,72H120a16,16,0,0,0-15.53,12.12ZM183,88.62c-.08.36-.15.72-.24,1.08A39.94,39.94,0,0,1,144,120H112l8-32h56A40.07,40.07,0,0,1,183,88.62Zm31.76,49.08A39.94,39.94,0,0,1,176,168H144a16,16,0,0,0-15.52,12.12l-9,35.88H88l20-80h36a55.9,55.9,0,0,0,54-41.39,40.2,40.2,0,0,1,9.48,8.77A39.73,39.73,0,0,1,214.78,137.7Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
