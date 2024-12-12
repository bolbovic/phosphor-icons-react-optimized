var C = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? C(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && A(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var m in a)
    Z.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var o = m, { children: a } = o, t = s(o, ["children"]);
  return /* @__PURE__ */ c.createElement(h, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M128,18a94.11,94.11,0,0,0-94,94c0,23.6,12.41,54.2,33.21,81.83C83.27,215.18,107.68,238,128,238s44.73-22.82,60.79-44.17C209.59,166.2,222,135.6,222,112A94.11,94.11,0,0,0,128,18Zm51.21,168.62C161.48,210.17,140.91,226,128,226s-33.48-15.83-51.21-39.38C57.8,161.37,46,132.78,46,112a82,82,0,0,1,164,0C210,132.78,198.2,161.37,179.21,186.62ZM118,136A38,38,0,0,0,80,98a14,14,0,0,0-14,14,38,38,0,0,0,38,38A14,14,0,0,0,118,136Zm-14,2a26,26,0,0,1-26-26,2,2,0,0,1,2-2,26,26,0,0,1,26,26A2,2,0,0,1,104,138Zm72-40a38,38,0,0,0-38,38,14,14,0,0,0,14,14,38,38,0,0,0,38-38A14,14,0,0,0,176,98Zm-24,40a2,2,0,0,1-2-2,26,26,0,0,1,26-26,2,2,0,0,1,2,2A26,26,0,0,1,152,138Zm-2,46a6,6,0,0,1-6,6H112a6,6,0,0,1,0-12h32A6,6,0,0,1,150,184Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
