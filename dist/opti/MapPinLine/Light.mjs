var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const n = h((m, e) => {
  var c = m, { children: a } = c, t = s(c, ["children"]);
  return /* @__PURE__ */ Z.createElement(l, f({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M200,226H145.22a266.37,266.37,0,0,0,27.31-27.06c27.13-31.2,41.47-64,41.47-94.94a86,86,0,0,0-172,0c0,30.91,14.34,63.74,41.47,94.94A266.37,266.37,0,0,0,110.78,226H56a6,6,0,0,0,0,12H200a6,6,0,0,0,0-12ZM54,104a74,74,0,0,1,148,0c0,59.62-59,108.93-74,120.51C113,212.93,54,163.62,54,104Zm112,0a38,38,0,1,0-38,38A38,38,0,0,0,166,104Zm-64,0a26,26,0,1,1,26,26A26,26,0,0,1,102,104Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
