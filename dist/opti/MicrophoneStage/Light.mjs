var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((l, e) => {
  var r = l, { children: a } = r, t = L(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, A({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M168,18A69.94,69.94,0,0,0,98.74,98l-70,95.46a13.92,13.92,0,0,0,1.39,18.17l14.3,14.3a13.93,13.93,0,0,0,18.17,1.39l95.46-70A70,70,0,1,0,168,18Zm58,70a57.65,57.65,0,0,1-13,36.52L131.49,43A57.95,57.95,0,0,1,226,88ZM55.5,217.59a2,2,0,0,1-2.6-.2L38.61,203.1a2,2,0,0,1-.2-2.6l64.22-87.56a70.32,70.32,0,0,0,40.44,40.43ZM110,88a57.73,57.73,0,0,1,13-36.52L204.53,133A58,58,0,0,1,110,88Zm-1.75,59.75a6,6,0,0,1,0,8.49l-8,8a6,6,0,1,1-8.49-8.49l8-8A6,6,0,0,1,108.26,147.74Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
