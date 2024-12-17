var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, l = (e, t) => {
  for (var a in t || (t = {}))
    H.call(t, a) && p(e, a, t[a]);
  if (r)
    for (var a of r(t))
      d.call(t, a) && p(e, a, t[a]);
  return e;
};
var c = (e, t) => {
  var a = {};
  for (var o in e)
    H.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && d.call(e, o) && (a[o] = e[o]);
  return a;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const n = s((o, a) => {
  var m = o, { children: e } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(A, l({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M216,60H179.83A52,52,0,0,0,76.17,60H40A20,20,0,0,0,20,80V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V80A20,20,0,0,0,216,60ZM128,36a28,28,0,0,1,27.71,24H100.29A28,28,0,0,1,128,36Zm84,160H44V84H212Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
