var Z = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? Z(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    L.call(l, e) && m(a, e, l[e]);
  if (o)
    for (var e of o(l))
      h.call(l, e) && m(a, e, l[e]);
  return a;
};
var d = (a, l) => {
  var e = {};
  for (var t in a)
    L.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && h.call(a, t) && (e[t] = a[t]);
  return e;
};
import A, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((t, e) => {
  var r = t, { children: a } = r, l = d(r, ["children"]);
  return /* @__PURE__ */ A.createElement(f, p({ ref: e }, l), a, /* @__PURE__ */ A.createElement("path", { d: "M216,36H40A20,20,0,0,0,20,56V216a12,12,0,0,0,17.37,10.73L64,213.42l26.63,13.31a12,12,0,0,0,10.74,0L128,213.42l26.63,13.31a12,12,0,0,0,10.74,0L192,213.42l26.63,13.31A12,12,0,0,0,236,216V56A20,20,0,0,0,216,36Zm-4,160.58-14.63-7.31a12,12,0,0,0-10.74,0L160,202.58l-26.63-13.31a12,12,0,0,0-10.74,0L96,202.58,69.37,189.27a12,12,0,0,0-10.74,0L44,196.58V60H212ZM62.63,170.73a12,12,0,0,0,16.1-5.36L81.42,160h37.16l2.69,5.37a12,12,0,1,0,21.46-10.74l-32-64a12,12,0,0,0-21.46,0l-32,64A12,12,0,0,0,62.63,170.73ZM106.58,136H93.42L100,122.83ZM144,128a12,12,0,0,1,12-12h4v-4a12,12,0,0,1,24,0v4h4a12,12,0,0,1,0,24h-4v4a12,12,0,0,1-24,0v-4h-4A12,12,0,0,1,144,128Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
