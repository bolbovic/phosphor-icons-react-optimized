var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var L = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && L(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && L(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import h, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var l = m, { children: a } = l, t = H(l, ["children"]);
  return /* @__PURE__ */ h.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M234.83,181.17a4,4,0,0,1,0,5.66l-24,24a4,4,0,0,1-5.66-5.66L222.34,188H168a4,4,0,0,1-3.25-1.67L85.94,76H32a4,4,0,0,1,0-8H88a4,4,0,0,1,3.25,1.67L170.06,180h52.28l-17.17-17.17a4,4,0,0,1,5.66-5.66Zm-89.49-77.44a4,4,0,0,0,5.58-.93L170.06,76h52.28L205.17,93.17a4,4,0,0,0,5.66,5.66l24-24a4,4,0,0,0,0-5.66l-24-24a4,4,0,0,0-5.66,5.66L222.34,68H168a4,4,0,0,0-3.25,1.67L144.41,98.15A4,4,0,0,0,145.34,103.73Zm-34.68,48.54a4,4,0,0,0-5.58.93L85.94,180H32a4,4,0,0,0,0,8H88a4,4,0,0,0,3.25-1.67l20.34-28.48A4,4,0,0,0,110.66,152.27Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
