var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && c.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const h = Z((m, e) => {
  var o = m, { children: a } = o, t = s(o, ["children"]);
  return /* @__PURE__ */ A.createElement(d, f({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M224,50H32A14,14,0,0,0,18,64V192a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V64A14,14,0,0,0,224,50Zm2,142a2,2,0,0,1-2,2H32a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H224a2,2,0,0,1,2,2ZM117.19,152.71a6,6,0,0,1-2.19,8.2,38,38,0,1,1,0-65.82,6,6,0,1,1-6,10.38,26,26,0,1,0,0,45.05A6,6,0,0,1,117.19,152.71Zm80,0a6,6,0,0,1-2.19,8.2,38,38,0,1,1,0-65.82,6,6,0,1,1-6,10.38,26,26,0,1,0,0,45.05A6,6,0,0,1,197.19,152.71Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
