var Z = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, o = (a, t) => {
  for (var e in t || (t = {}))
    r.call(t, e) && m(a, e, t[e]);
  if (h)
    for (var e of h(t))
      H.call(t, e) && m(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var v in a)
    r.call(a, v) && t.indexOf(v) < 0 && (e[v] = a[v]);
  if (a != null && h)
    for (var v of h(a))
      t.indexOf(v) < 0 && H.call(a, v) && (e[v] = a[v]);
  return e;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((v, e) => {
  var V = v, { children: a } = V, t = i(V, ["children"]);
  return /* @__PURE__ */ p.createElement(f, o({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M232,58H24A14,14,0,0,0,10,72V200a6,6,0,0,0,12,0V182H42v18a6,6,0,0,0,12,0V182H74v18a6,6,0,0,0,12,0V182h20v18a6,6,0,0,0,12,0V182h20v18a6,6,0,0,0,12,0V182h20v18a6,6,0,0,0,12,0V182h20v18a6,6,0,0,0,12,0V182h20v18a6,6,0,0,0,12,0V72A14,14,0,0,0,232,58ZM22,72a2,2,0,0,1,2-2H232a2,2,0,0,1,2,2v98H22Zm90,78a6,6,0,0,0,6-6V96a6,6,0,0,0-6-6H48a6,6,0,0,0-6,6v48a6,6,0,0,0,6,6ZM54,102h52v36H54Zm90,48h64a6,6,0,0,0,6-6V96a6,6,0,0,0-6-6H144a6,6,0,0,0-6,6v48A6,6,0,0,0,144,150Zm6-48h52v36H150Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
