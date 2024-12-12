var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && c(a, e, t[e]);
  if (o)
    for (var e of o(t))
      H.call(t, e) && c(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && H.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = s((m, e) => {
  var r = m, { children: a } = r, t = l(r, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M156,140a12,12,0,0,1-12,12H112a12,12,0,0,1-10-18.66L121.58,104H112a12,12,0,1,1,0-24h32a12,12,0,0,1,10,18.66L134.42,128H144A12,12,0,0,1,156,140Zm69.33,46A19.77,19.77,0,0,1,208,196H171.82a44,44,0,0,1-87.64,0H48a19.77,19.77,0,0,1-17.31-10,20.08,20.08,0,0,1,.05-20.06C39.39,151,44,129.58,44,104a84,84,0,0,1,168,0c0,25.57,4.59,47,13.27,61.93A20.08,20.08,0,0,1,225.34,186ZM147.6,196H108.4a20,20,0,0,0,39.2,0Zm53.74-24C192.49,154,188,131.13,188,104a60,60,0,0,0-120,0c0,27.14-4.48,50-13.33,68Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
