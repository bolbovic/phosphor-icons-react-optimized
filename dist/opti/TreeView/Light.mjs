var A = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && V(a, e, t[e]);
  if (h)
    for (var e of h(t))
      o.call(t, e) && V(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var H in a)
    m.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && h)
    for (var H of h(a))
      t.indexOf(H) < 0 && o.call(a, H) && (e[H] = a[H]);
  return e;
};
import v, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((H, e) => {
  var r = H, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ v.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M176,150h32a14,14,0,0,0,14-14V104a14,14,0,0,0-14-14H176a14,14,0,0,0-14,14v10H86V78H96a14,14,0,0,0,14-14V32A14,14,0,0,0,96,18H64A14,14,0,0,0,50,32V64A14,14,0,0,0,64,78H74V192a22,22,0,0,0,22,22h66v10a14,14,0,0,0,14,14h32a14,14,0,0,0,14-14V192a14,14,0,0,0-14-14H176a14,14,0,0,0-14,14v10H96a10,10,0,0,1-10-10V126h76v10A14,14,0,0,0,176,150ZM62,64V32a2,2,0,0,1,2-2H96a2,2,0,0,1,2,2V64a2,2,0,0,1-2,2H64A2,2,0,0,1,62,64ZM174,192a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2v32a2,2,0,0,1-2,2H176a2,2,0,0,1-2-2Zm0-88a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2v32a2,2,0,0,1-2,2H176a2,2,0,0,1-2-2Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
