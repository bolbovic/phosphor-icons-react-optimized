var A = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (V)
    for (var e of V(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && V)
    for (var m of V(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var r = m, { children: a } = r, t = l(r, ["children"]);
  return /* @__PURE__ */ n.createElement(f, Z({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M52,96v64a4,4,0,0,1-8,0V96a4,4,0,0,1,8,0ZM51,37.31A4,4,0,0,0,45,42.69L84,85.55V224a4,4,0,0,0,8,0V94.35l32,35.2V192a4,4,0,0,0,8,0V138.35l73,80.34a4,4,0,1,0,5.92-5.38Zm37,3.12a4,4,0,0,0,4-4V32a4,4,0,0,0-8,0v4.43A4,4,0,0,0,88,40.43Zm40,44a4,4,0,0,0,4-4V64a4,4,0,0,0-8,0V80.43A4,4,0,0,0,128,84.43Zm40,44a4,4,0,0,0,4-4V96a4,4,0,0,0-8,0v28.43A4,4,0,0,0,168,128.43ZM208,76a4,4,0,0,0-4,4v88.43a4,4,0,0,0,8,0V80A4,4,0,0,0,208,76Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
