var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && l(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((o, e) => {
  var m = o, { children: a } = m, t = H(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, A({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M235,144.51,179.13,48.65a2.75,2.75,0,0,0-.17-.29A60,60,0,0,0,77,48.36a2.75,2.75,0,0,0-.17.29L21,144.51A60,60,0,0,0,72.1,236H183.9A60,60,0,0,0,235,144.51ZM156,212H100V172h56Zm59.36-18.5A35.55,35.55,0,0,1,183.9,212H180V168a20,20,0,0,0-20-20H96a20,20,0,0,0-20,20v44H72.1a36,36,0,0,1-30.58-55l.17-.28L97.51,60.88a36,36,0,0,1,61,0l55.82,95.85.17.28A35.58,35.58,0,0,1,215.35,193.5Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
