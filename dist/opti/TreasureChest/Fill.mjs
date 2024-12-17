var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, o = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      m.call(t, e) && V(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var h in a)
    l.call(a, h) && t.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && r)
    for (var h of r(a))
      t.indexOf(h) < 0 && m.call(a, h) && (e[h] = a[h]);
  return e;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((h, e) => {
  var v = h, { children: a } = v, t = i(v, ["children"]);
  return /* @__PURE__ */ p.createElement(f, o({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M240,124v68a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V124a4,4,0,0,1,4-4H56v64a8,8,0,0,0,8.53,8A8.17,8.17,0,0,0,72,183.73V120h40v20a4,4,0,0,0,4,4h24a4,4,0,0,0,4-4V120h40v64a8,8,0,0,0,8.53,8,8.17,8.17,0,0,0,7.47-8.25V120h36A4,4,0,0,1,240,124ZM184,40H72A56,56,0,0,0,16,96v4a4,4,0,0,0,4,4H56V64.27A8.17,8.17,0,0,1,63.47,56,8,8,0,0,1,72,64v40h40V92a4,4,0,0,1,4-4h24a4,4,0,0,1,4,4v12h40V64.27A8.17,8.17,0,0,1,191.47,56,8,8,0,0,1,200,64v40h36a4,4,0,0,0,4-4V96A56,56,0,0,0,184,40Z" }));
});
s.displayName = "Fill";
export {
  s as Fill
};
