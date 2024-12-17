var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && r(a, e, t[e]);
  return a;
};
var M = (a, t) => {
  var e = {};
  for (var A in a)
    o.call(a, A) && t.indexOf(A) < 0 && (e[A] = a[A]);
  if (a != null && m)
    for (var A of m(a))
      t.indexOf(A) < 0 && i.call(a, A) && (e[A] = a[A]);
  return e;
};
import l, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((A, e) => {
  var Z = A, { children: a } = Z, t = M(Z, ["children"]);
  return /* @__PURE__ */ l.createElement(h, p({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,152a50,50,0,1,1,50-50A50.06,50.06,0,0,1,128,178Zm39.37-97.86A61.68,61.68,0,0,0,134,66.3V38.2a89.64,89.64,0,0,1,53.22,22.09ZM122,66.3A61.68,61.68,0,0,0,88.63,80.14L68.78,60.29A89.64,89.64,0,0,1,122,38.2ZM80.14,88.63A61.68,61.68,0,0,0,66.3,122H38.2A89.61,89.61,0,0,1,60.29,68.78ZM66.3,134a61.68,61.68,0,0,0,13.84,33.37L60.29,187.22A89.61,89.61,0,0,1,38.2,134Zm22.33,41.86A61.68,61.68,0,0,0,122,189.7v28.1a89.64,89.64,0,0,1-53.22-22.09ZM134,189.7a61.68,61.68,0,0,0,33.37-13.84l19.85,19.85A89.64,89.64,0,0,1,134,217.8Zm41.86-22.33A61.68,61.68,0,0,0,189.7,134h28.1a89.61,89.61,0,0,1-22.09,53.22ZM189.7,122a61.68,61.68,0,0,0-13.84-33.37l19.85-19.85A89.61,89.61,0,0,1,217.8,122Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
