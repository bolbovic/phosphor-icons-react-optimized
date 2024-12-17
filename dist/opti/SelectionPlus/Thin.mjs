var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, o = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      Z.call(t, e) && V(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as v } from "react";
import A from "../../lib/OptiBase.mjs";
const M = v((m, e) => {
  var H = m, { children: a } = H, t = i(H, ["children"]);
  return /* @__PURE__ */ p.createElement(A, o({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M148,40a4,4,0,0,1-4,4H112a4,4,0,0,1,0-8h32A4,4,0,0,1,148,40Zm-4,172H112a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8ZM212,48V72a4,4,0,0,0,8,0V48a12,12,0,0,0-12-12H184a4,4,0,0,0,0,8h24A4,4,0,0,1,212,48Zm4,60a4,4,0,0,0-4,4v32a4,4,0,0,0,8,0V112A4,4,0,0,0,216,108ZM40,148a4,4,0,0,0,4-4V112a4,4,0,0,0-8,0v32A4,4,0,0,0,40,148Zm32,64H48a4,4,0,0,1-4-4V184a4,4,0,0,0-8,0v24a12,12,0,0,0,12,12H72a4,4,0,0,0,0-8ZM72,36H48A12,12,0,0,0,36,48V72a4,4,0,0,0,8,0V48a4,4,0,0,1,4-4H72a4,4,0,0,0,0-8ZM240,212H220V192a4,4,0,0,0-8,0v20H192a4,4,0,0,0,0,8h20v20a4,4,0,0,0,8,0V220h20a4,4,0,0,0,0-8Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
