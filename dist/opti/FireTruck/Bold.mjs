var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (a, H, e) => H in a ? d(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, l = (a, H) => {
  for (var e in H || (H = {}))
    V.call(H, e) && r(a, e, H[e]);
  if (m)
    for (var e of m(H))
      Z.call(H, e) && r(a, e, H[e]);
  return a;
};
var p = (a, H) => {
  var e = {};
  for (var t in a)
    V.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      H.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import A, { forwardRef as h } from "react";
import M from "../../lib/OptiBase.mjs";
const c = h((t, e) => {
  var o = t, { children: a } = o, H = p(o, ["children"]);
  return /* @__PURE__ */ A.createElement(M, l({ ref: e }, H), a, /* @__PURE__ */ A.createElement("path", { d: "M255.14,115.54l-14-35A19.9,19.9,0,0,0,222.58,68H204V64a12,12,0,0,0-24,0v94.06A36.23,36.23,0,0,0,158.06,180H113.94a36,36,0,0,0-67.88,0H36V144a12,12,0,0,0-24,0v40a20,20,0,0,0,20,20H46.06a36,36,0,0,0,67.88,0h44.12a36,36,0,0,0,67.88,0H236a20,20,0,0,0,20-20V120A12,12,0,0,0,255.14,115.54ZM219.88,92l6.4,16H204V92ZM80,204a12,12,0,1,1,12-12A12,12,0,0,1,80,204Zm112,0a12,12,0,1,1,12-12A12,12,0,0,1,192,204Zm33.94-24A36.23,36.23,0,0,0,204,158.06V132h28v48ZM24,92a12,12,0,0,0,0,24H152a12,12,0,0,0,0-24H140V76h12a12,12,0,0,0,0-24H24a12,12,0,0,0,0,24H36V92Zm92,0H100V76h16ZM60,76H76V92H60Z" }));
});
c.displayName = "Bold";
export {
  c as Bold
};
