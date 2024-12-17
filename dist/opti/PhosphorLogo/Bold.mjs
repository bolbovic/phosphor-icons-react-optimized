var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, Z = (e, t) => {
  for (var a in t || (t = {}))
    d.call(t, a) && p(e, a, t[a]);
  if (r)
    for (var a of r(t))
      l.call(t, a) && p(e, a, t[a]);
  return e;
};
var c = (e, t) => {
  var a = {};
  for (var o in e)
    d.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && l.call(e, o) && (a[o] = e[o]);
  return a;
};
import f, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const M = s((o, a) => {
  var m = o, { children: e } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(H, Z({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M228,104a76.08,76.08,0,0,0-76-76H72A12,12,0,0,0,60,40V168a84.09,84.09,0,0,0,84,84,12,12,0,0,0,12-12V179.89A76.09,76.09,0,0,0,228,104ZM84,85.81,123.48,156H84Zm48,36.38L92.52,52H132ZM85.22,180H132v46.79A60.18,60.18,0,0,1,85.22,180ZM156,155.83V52.17a52,52,0,0,1,0,103.66Z" }));
});
M.displayName = "Bold";
export {
  M as Bold
};
