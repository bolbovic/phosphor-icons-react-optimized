var H = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var v = (a, t) => {
  var e = {};
  for (var h in a)
    V.call(a, h) && t.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && m)
    for (var h of m(a))
      t.indexOf(h) < 0 && i.call(a, h) && (e[h] = a[h]);
  return e;
};
import A, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((h, e) => {
  var r = h, { children: a } = r, t = v(r, ["children"]);
  return /* @__PURE__ */ A.createElement(c, p({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M144,18H112A62.07,62.07,0,0,0,50,80v96a62.07,62.07,0,0,0,62,62h32a62.07,62.07,0,0,0,62-62V80A62.07,62.07,0,0,0,144,18Zm50,62v26H150V88a14,14,0,0,0-14-14h-2V30h10A50.06,50.06,0,0,1,194,80Zm-76,8a2,2,0,0,1,2-2h16a2,2,0,0,1,2,2v48a2,2,0,0,1-2,2H120a2,2,0,0,1-2-2Zm-6-58h10V74h-2a14,14,0,0,0-14,14v18H62V80A50.06,50.06,0,0,1,112,30Zm32,196H112a50.06,50.06,0,0,1-50-50V118h44v18a14,14,0,0,0,14,14h16a14,14,0,0,0,14-14V118h44v58A50.06,50.06,0,0,1,144,226Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
