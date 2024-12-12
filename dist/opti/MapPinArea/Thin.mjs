var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var c in a)
    i.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && r)
    for (var c of r(a))
      t.indexOf(c) < 0 && p.call(a, c) && (e[c] = a[c]);
  return e;
};
import f, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const h = Z((c, e) => {
  var m = c, { children: a } = m, t = s(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M116,80a12,12,0,1,1,12,12A12,12,0,0,1,116,80ZM97.08,147.73C78.05,127.35,68,103.93,68,80a60,60,0,0,1,120,0c0,23.93-10.05,47.35-29.08,67.73A136.54,136.54,0,0,1,130,171.47a4,4,0,0,1-4,0A136.54,136.54,0,0,1,97.08,147.73ZM76,80c0,47.09,42.25,77,52,83.3,9.75-6.28,52-36.21,52-83.3A52,52,0,0,0,76,80Zm125.38,71.38a4,4,0,0,0-2.76,7.51c18.67,6.89,29.38,16,29.38,25.11,0,17.39-40.18,36-100,36S28,201.39,28,184c0-9.07,10.71-18.22,29.38-25.11a4,4,0,0,0-2.76-7.51C32.29,159.62,20,171.21,20,184c0,12.46,11.73,23.83,33,32,20.09,7.73,46.72,12,75,12s54.89-4.25,75-12c21.29-8.19,33-19.56,33-32C236,171.21,223.71,159.62,201.38,151.38Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
