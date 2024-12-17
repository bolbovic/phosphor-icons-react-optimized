var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && c.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const h = Z((m, e) => {
  var o = m, { children: a } = o, t = s(o, ["children"]);
  return /* @__PURE__ */ A.createElement(d, f({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M219.44,146.2A94.66,94.66,0,0,0,173.92,86H240a6,6,0,0,0,0-12H157.4a30,30,0,0,0-58.8,0H16a6,6,0,0,0,0,12H82.08a94.66,94.66,0,0,0-45.52,60.2,30,30,0,1,0,12.09,1.08,82.53,82.53,0,0,1,51.4-56.39,30,30,0,0,0,55.9,0,82.53,82.53,0,0,1,51.4,56.39,30,30,0,1,0,12.09-1.08ZM58,176a18,18,0,1,1-18-18A18,18,0,0,1,58,176Zm70-78a18,18,0,1,1,18-18A18,18,0,0,1,128,98Zm88,96a18,18,0,1,1,18-18A18,18,0,0,1,216,194Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
