var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    V.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const H = s((m, e) => {
  var l = m, { children: a } = l, t = n(l, ["children"]);
  return /* @__PURE__ */ c.createElement(A, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M232,52H24A12,12,0,0,0,12,64V192a12,12,0,0,0,12,12H232a12,12,0,0,0,12-12V64A12,12,0,0,0,232,52Zm4,140a4,4,0,0,1-4,4H24a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H232a4,4,0,0,1,4,4ZM124,104v48a4,4,0,0,1-8,0V113.66L90.83,138.83a4,4,0,0,1-5.66,0L60,113.66V152a4,4,0,0,1-8,0V104a4,4,0,0,1,6.83-2.83L88,130.34l29.17-29.17A4,4,0,0,1,124,104Zm78.83,21.17a4,4,0,0,1,0,5.66l-24,24a4,4,0,0,1-5.66,0l-24-24a4,4,0,1,1,5.66-5.66L172,142.34V104a4,4,0,0,1,8,0v38.34l17.17-17.17A4,4,0,0,1,202.83,125.17Z" }));
});
H.displayName = "Thin";
export {
  H as Thin
};
