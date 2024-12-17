var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, p = (e, t) => {
  for (var a in t || (t = {}))
    c.call(t, a) && o(e, a, t[a]);
  if (m)
    for (var a of m(t))
      i.call(t, a) && o(e, a, t[a]);
  return e;
};
var s = (e, t) => {
  var a = {};
  for (var r in e)
    c.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      t.indexOf(r) < 0 && i.call(e, r) && (a[r] = e[r]);
  return a;
};
import A, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const n = Z((r, a) => {
  var l = r, { children: e } = l, t = s(l, ["children"]);
  return /* @__PURE__ */ A.createElement(d, p({ ref: a }, t), e, /* @__PURE__ */ A.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm80,86.92A8,8,0,0,1,161.08,180c-7.47-12.91-19.21-20-33.08-20s-25.61,7.1-33.08,20a8,8,0,1,1-13.84-8c10.29-17.79,27.39-28,46.92-28s36.63,10.2,46.92,28A8,8,0,0,1,172,182.92ZM164,120a12,12,0,1,1,12-12A12,12,0,0,1,164,120Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
