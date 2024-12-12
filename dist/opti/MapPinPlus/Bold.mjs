var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && c(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && c(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import i, { forwardRef as h } from "react";
import n from "../../lib/OptiBase.mjs";
const B = h((m, e) => {
  var r = m, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(n, l({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M172,104a12,12,0,0,1-12,12H140v20a12,12,0,0,1-24,0V116H96a12,12,0,0,1,0-24h20V72a12,12,0,0,1,24,0V92h20A12,12,0,0,1,172,104Zm48,0c0,32.38-14.85,66.57-42.94,98.87a259,259,0,0,1-42.18,39,12,12,0,0,1-13.76,0C117.64,239.4,36,181.36,36,104a92,92,0,0,1,184,0Zm-24,0a68,68,0,0,0-136,0c0,33.31,20,63.37,36.7,82.71A249.35,249.35,0,0,0,128,216.89a249.35,249.35,0,0,0,31.3-30.18C176,167.37,196,137.31,196,104Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
