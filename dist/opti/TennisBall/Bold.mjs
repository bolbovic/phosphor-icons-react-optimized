var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    d.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    d.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import i, { forwardRef as Z } from "react";
import n from "../../lib/OptiBase.mjs";
const A = Z((m, e) => {
  var r = m, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(n, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M204.4,51.6a108,108,0,1,0,0,152.8A108.16,108.16,0,0,0,204.4,51.6Zm-135.82,17a83.47,83.47,0,0,1,46.2-23.52,84.09,84.09,0,0,1-69.72,69.72A83.47,83.47,0,0,1,68.58,68.58ZM44.74,139.07a107.27,107.27,0,0,0,63.45-30.88,107.27,107.27,0,0,0,30.88-63.45,83.84,83.84,0,0,1,72.19,72.19,108.11,108.11,0,0,0-94.33,94.32,83.82,83.82,0,0,1-72.19-72.18Zm142.68,48.35a83.53,83.53,0,0,1-46.2,23.52,84.09,84.09,0,0,1,69.72-69.72A83.47,83.47,0,0,1,187.42,187.42Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
