var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      H.call(t, e) && l(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && H.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var r = m, { children: a } = r, t = h(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, d({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M116,72a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24h64A12,12,0,0,1,116,72ZM104,172H84V152a12,12,0,0,0-24,0v20H40a12,12,0,0,0,0,24H60v20a12,12,0,0,0,24,0V196h20a12,12,0,0,0,0-24Zm48,4h64a12,12,0,0,0,0-24H152a12,12,0,0,0,0,24Zm64,16H152a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24Zm-64.49-87.51a12,12,0,0,0,17,0L184,89l15.51,15.52a12,12,0,0,0,17-17L201,72l15.52-15.51a12,12,0,0,0-17-17L184,55,168.49,39.51a12,12,0,0,0-17,17L167,72,151.51,87.51A12,12,0,0,0,151.51,104.49Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};