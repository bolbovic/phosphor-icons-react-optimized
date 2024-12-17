var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    A.call(t, a) && l(e, a, t[a]);
  if (o)
    for (var a of o(t))
      p.call(t, a) && l(e, a, t[a]);
  return e;
};
var d = (e, t) => {
  var a = {};
  for (var m in e)
    A.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && o)
    for (var m of o(e))
      t.indexOf(m) < 0 && p.call(e, m) && (a[m] = e[m]);
  return a;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = s((m, a) => {
  var r = m, { children: e } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, c({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M128,20a12,12,0,0,0-12,12V88a12,12,0,0,0,12,12,28,28,0,1,1-24.26,14A12,12,0,0,0,99.35,97.6l-48.5-28A12,12,0,0,0,34.46,74,108,108,0,1,0,128,20ZM50,96.81l28.2,16.28A52.08,52.08,0,0,0,76,128c0,.5,0,1,0,1.5l-31.43,8.42A83.21,83.21,0,0,1,44,128,84.35,84.35,0,0,1,50,96.81Zm.83,64.3,31.43-8.43A52.2,52.2,0,0,0,116,178.59v32.54A84.26,84.26,0,0,1,50.81,161.11Zm89.19,50V178.59A52,52,0,0,0,140,77.4V44.85a84,84,0,0,1,0,166.28Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
