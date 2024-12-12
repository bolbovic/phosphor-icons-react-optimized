var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, A = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (m)
    for (var e of m(r))
      Z.call(r, e) && o(a, e, r[e]);
  return a;
};
var c = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import R from "../../lib/OptiBase.mjs";
const d = s((t, e) => {
  var l = t, { children: a } = l, r = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(R, A({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm71.05-91.77A8,8,0,0,0,192,120H143l23.71-35.56A8,8,0,0,0,160,72H96a8,8,0,0,0-6.66,12.44L113.05,120H64a8,8,0,0,0-6.66,12.44l32,48a8,8,0,0,0,13.32,0l25.34-38,25.34,38a8,8,0,0,0,13.32,0l32-48A8,8,0,0,0,199.05,124.23ZM145.05,88,128,113.58,111,88ZM96,161.58,79,136h34.1Zm64,0L143,136h34.1Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
