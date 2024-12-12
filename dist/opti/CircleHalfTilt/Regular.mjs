var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var r in a)
    Z.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as i } from "react";
import M from "../../lib/OptiBase.mjs";
const R = i((r, e) => {
  var l = r, { children: a } = l, t = s(l, ["children"]);
  return /* @__PURE__ */ c.createElement(M, f({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM184,195.87a87.16,87.16,0,0,1-16,10.5V99.31l16-16Zm-80-32.56,16-16v68.28a88.37,88.37,0,0,1-16-3ZM88,206.37a87,87,0,0,1-16.3-10.76L88,179.31Zm48-75.06,16-16v97.32a88.37,88.37,0,0,1-16,3ZM40,128A88,88,0,0,1,184.3,60.39L60.38,184.31A87.34,87.34,0,0,1,40,128Zm160,50.59V77.41a88,88,0,0,1,0,101.18Z" }));
});
R.displayName = "Regular";
export {
  R as Regular,
  R as default
};
