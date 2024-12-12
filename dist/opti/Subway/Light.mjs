var Z = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && V(a, e, t[e]);
  if (h)
    for (var e of h(t))
      o.call(t, e) && V(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    A.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && h)
    for (var m of h(a))
      t.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as v } from "react";
import H from "../../lib/OptiBase.mjs";
const c = v((m, e) => {
  var r = m, { children: a } = r, t = l(r, ["children"]);
  return /* @__PURE__ */ p.createElement(H, i({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M222,96V208a6,6,0,0,1-12,0V96a58.07,58.07,0,0,0-58-58H104A58.07,58.07,0,0,0,46,96V208a6,6,0,0,1-12,0V96a70.08,70.08,0,0,1,70-70h48A70.08,70.08,0,0,1,222,96Zm-40,0v72a22,22,0,0,1-20.33,21.93l3.7,7.39a6,6,0,0,1-10.74,5.36L148.29,190H107.71l-6.34,12.68a6,6,0,1,1-10.74-5.36l3.7-7.39A22,22,0,0,1,74,168V96A22,22,0,0,1,96,74h64A22,22,0,0,1,182,96ZM86,96v50h84V96a10,10,0,0,0-10-10H96A10,10,0,0,0,86,96Zm32,62v20h20V158ZM96,178h10V158H86v10A10,10,0,0,0,96,178Zm74-10V158H150v20h10A10,10,0,0,0,170,168Z" }));
});
c.displayName = "Light";
export {
  c as Light
};
