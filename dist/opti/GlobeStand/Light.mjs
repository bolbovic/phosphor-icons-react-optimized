var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      h.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && h.call(a, m) && (e[m] = a[m]);
  return e;
};
import s, { forwardRef as d } from "react";
import l from "../../lib/OptiBase.mjs";
const n = d((m, e) => {
  var o = m, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(l, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M136,182a78,78,0,1,0-78-78A78.09,78.09,0,0,0,136,182Zm0-144a66,66,0,1,1-66,66A66.08,66.08,0,0,1,136,38Zm76.33,136.89a6,6,0,0,1-.17,8.48A109.21,109.21,0,0,1,142,213.83V234h26a6,6,0,0,1,0,12H104a6,6,0,0,1,0-12h26V213.83a110,110,0,0,1-73.38-186,6,6,0,0,1,8.66,8.32A98,98,0,0,0,203.84,174.72,6,6,0,0,1,212.33,174.89Z" }));
});
n.displayName = "Light";
export {
  n as Light
};