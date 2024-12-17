var f = Object.defineProperty;
var L = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (L)
    for (var e of L(t))
      i.call(t, e) && m(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && L)
    for (var r of L(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((r, e) => {
  var l = r, { children: a } = l, t = n(l, ["children"]);
  return /* @__PURE__ */ c.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M232.49,76.2,179.8,23.51a12,12,0,0,0-17,0L23.51,162.83a12,12,0,0,0,0,17L76.2,232.49a12,12,0,0,0,17,0L232.49,93.17A12,12,0,0,0,232.49,76.2Zm-5.66,11.31L87.51,226.83a4,4,0,0,1-5.65,0L29.17,174.14a4,4,0,0,1,0-5.65L64,133.66l29.17,29.17a4,4,0,1,0,5.66-5.66L69.65,128,96,101.66l29.17,29.17a4,4,0,0,0,5.66-5.66L101.65,96,128,69.66l29.17,29.17a4,4,0,1,0,5.66-5.66L133.66,64l34.83-34.83a4,4,0,0,1,5.65,0l52.69,52.69A4,4,0,0,1,226.83,87.51Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
