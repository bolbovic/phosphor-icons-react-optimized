var c = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      Z.call(t, e) && o(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && Z.call(a, r) && (e[r] = a[r]);
  return e;
};
import A, { forwardRef as d } from "react";
import i from "../../lib/OptiBase.mjs";
const R = d((r, e) => {
  var m = r, { children: a } = m, t = s(m, ["children"]);
  return /* @__PURE__ */ A.createElement(i, f({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm71.05-91.77A8,8,0,0,0,192,120H143l23.71-35.56A8,8,0,0,0,160,72H96a8,8,0,0,0-6.66,12.44L113.05,120H64a8,8,0,0,0-6.66,12.44l32,48a8,8,0,0,0,13.32,0l25.34-38,25.34,38a8,8,0,0,0,13.32,0l32-48A8,8,0,0,0,199.05,124.23ZM145.05,88,128,113.58,111,88ZM96,161.58,79,136h34.1Zm64,0L143,136h34.1Z" }));
});
R.displayName = "Regular";
export {
  R as Regular,
  R as default
};
