var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import H, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((r, e) => {
  var l = r, { children: a } = l, t = n(l, ["children"]);
  return /* @__PURE__ */ H.createElement(h, A({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M133.78,128l74.68-71.51A12,12,0,0,0,200,36H56a12,12,0,0,0-8.49,20.49l.07.06L122.22,128,47.61,199.45l-.07.06A12,12,0,0,0,56,220H200a12,12,0,0,0,8.42-20.55Zm34.38,44H87.84L128,133.54ZM52.33,46.47A3.93,3.93,0,0,1,56,44H200a4,4,0,0,1,2.89,6.77L128,122.46,53.17,50.8A3.92,3.92,0,0,1,52.33,46.47ZM203.67,209.53A3.93,3.93,0,0,1,200,212H56a4,4,0,0,1-2.86-6.8L79.49,180h97l26.28,25.17A3.93,3.93,0,0,1,203.67,209.53Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};