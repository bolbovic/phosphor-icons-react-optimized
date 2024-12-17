var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as H } from "react";
import d from "../../lib/OptiBase.mjs";
const h = H((l, e) => {
  var m = l, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, L({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M248,138a6,6,0,0,0-6,6v18H195.31a2,2,0,0,1-1.41-.59l-19.76-19.75L225.9,89.9a14,14,0,0,0,0-19.8l-56-56a14,14,0,0,0-19.81,0L4.34,160.35A8,8,0,0,0,10,174H50.2l35.9,35.9a14,14,0,0,0,19.8,0l59.76-59.76,19.75,19.76a13.94,13.94,0,0,0,9.9,4.1H242v18a6,6,0,0,0,12,0V144A6,6,0,0,0,248,138ZM158.59,22.59a2,2,0,0,1,2.82,0l14.1,14.1L50.2,162H19.64ZM97.41,201.41a2,2,0,0,1-2.82,0L61.17,168,184,45.17l33.41,33.42a2,2,0,0,1,0,2.82Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
