var V = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import s, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const h = Z((m, e) => {
  var H = m, { children: a } = H, t = f(H, ["children"]);
  return /* @__PURE__ */ s.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M208,138H48a14,14,0,0,0-14,14v40a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V152A14,14,0,0,0,208,138Zm2,54a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM208,50H48A14,14,0,0,0,34,64v40a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V64A14,14,0,0,0,208,50Zm2,54a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
