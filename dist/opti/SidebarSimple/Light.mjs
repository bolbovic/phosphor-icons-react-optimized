var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(h, V({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM38,200V56a2,2,0,0,1,2-2H82V202H40A2,2,0,0,1,38,200Zm180,0a2,2,0,0,1-2,2H94V54H216a2,2,0,0,1,2,2Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
