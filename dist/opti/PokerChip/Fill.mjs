var c = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && Z(a, e, t[e]);
  if (l)
    for (var e of l(t))
      o.call(t, e) && Z(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    A.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && l)
    for (var m of l(a))
      t.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import M, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const L = f((m, e) => {
  var r = m, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ M.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ M.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM60.4,71.72,77.47,88.79a63.66,63.66,0,0,0-13,31.21H40.37A87.6,87.6,0,0,1,60.4,71.72ZM40.37,136H64.52a63.66,63.66,0,0,0,13,31.21L60.4,184.28A87.6,87.6,0,0,1,40.37,136ZM120,215.63a87.6,87.6,0,0,1-48.28-20l17.07-17.07A63.66,63.66,0,0,0,120,191.48Zm0-151.11a63.66,63.66,0,0,0-31.21,13L71.72,60.4a87.6,87.6,0,0,1,48.28-20ZM215.63,120H191.48a63.66,63.66,0,0,0-12.95-31.21L195.6,71.72A87.6,87.6,0,0,1,215.63,120ZM136,40.37a87.6,87.6,0,0,1,48.28,20L167.21,77.47a63.66,63.66,0,0,0-31.21-13Zm0,175.26V191.48a63.66,63.66,0,0,0,31.21-12.95l17.07,17.07A87.6,87.6,0,0,1,136,215.63Zm59.6-31.35-17.07-17.07A63.66,63.66,0,0,0,191.48,136h24.15A87.6,87.6,0,0,1,195.6,184.28Z" }));
});
L.displayName = "Fill";
export {
  L as Fill
};
