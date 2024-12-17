var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var M = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, e, l) => e in a ? i(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, c = (a, e) => {
  for (var l in e || (e = {}))
    M.call(e, l) && r(a, l, e[l]);
  if (o)
    for (var l of o(e))
      p.call(e, l) && r(a, l, e[l]);
  return a;
};
var n = (a, e) => {
  var l = {};
  for (var t in a)
    M.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      e.indexOf(t) < 0 && p.call(a, t) && (l[t] = a[t]);
  return l;
};
import Z, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((t, l) => {
  var m = t, { children: a } = m, e = n(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, c({ ref: l }, e), a, /* @__PURE__ */ Z.createElement(
    "path",
    {
      d: "M128,104,88,64l40-40,40,40ZM88,192l40,40,40-40-40-40ZM192,88l-40,40,40,40,40-40ZM64,88,24,128l40,40,40-40Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ Z.createElement("path", { d: "M122.34,109.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0,0-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32ZM128,35.31,156.69,64,128,92.69,99.31,64Zm5.66,111a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0,0-11.32ZM128,220.69,99.31,192,128,163.31,156.69,192Zm109.66-98.35-40-40a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,237.66,122.34ZM192,156.69,163.31,128,192,99.31,220.69,128Zm-82.34-34.35-40-40a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,109.66,122.34ZM64,156.69,35.31,128,64,99.31,92.69,128Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
