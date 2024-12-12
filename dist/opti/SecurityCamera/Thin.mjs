var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
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
  return /* @__PURE__ */ f.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M248,140a4,4,0,0,0-4,4v20H195.31a4,4,0,0,1-2.82-1.17l-21.18-21.17,53.18-53.17a12,12,0,0,0,0-17l-56-56a12,12,0,0,0-17,0L5.76,161.76A6,6,0,0,0,10,172H51l36.48,36.49a12,12,0,0,0,17,0l61.18-61.18,21.17,21.17a11.9,11.9,0,0,0,8.48,3.52H244v20a4,4,0,0,0,8,0V144A4,4,0,0,0,248,140ZM157.17,21.17a4.1,4.1,0,0,1,5.66,0l15.51,15.52L51,164H14.82ZM98.83,202.83a4.1,4.1,0,0,1-5.66,0L58.34,168,184,42.34l34.83,34.83a4,4,0,0,1,0,5.66Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
