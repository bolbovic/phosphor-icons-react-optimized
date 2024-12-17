var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (e, t, a) => t in e ? h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && i(e, a, t[a]);
  if (r)
    for (var a of r(t))
      l.call(t, a) && i(e, a, t[a]);
  return e;
};
var c = (e, t) => {
  var a = {};
  for (var m in e)
    p.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      t.indexOf(m) < 0 && l.call(e, m) && (a[m] = e[m]);
  return a;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((m, a) => {
  var o = m, { children: e } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(A, n({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm60-92a4,4,0,0,1-4,4H137.66l33.17,33.17a4,4,0,0,1-5.66,5.66l-40-40A4,4,0,0,1,128,124h56A4,4,0,0,1,188,128Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
