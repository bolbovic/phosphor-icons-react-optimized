var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import M, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((l, e) => {
  var m = l, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ M.createElement(f, A({ ref: e }, t), a, /* @__PURE__ */ M.createElement("path", { d: "M244,80a24,24,0,1,0-42,15.83L169,136.37,141.1,72.09a24,24,0,1,0-26.2,0L87,136.37,54,95.83A24,24,0,1,0,35.94,104l15,90a12,12,0,0,0,11.84,10H193.22a12,12,0,0,0,11.84-10l15-90A24,24,0,0,0,244,80ZM128,36a16,16,0,1,1-16,16A16,16,0,0,1,128,36ZM20,80A16,16,0,1,1,36,96,16,16,0,0,1,20,80ZM197.17,192.66a4,4,0,0,1-3.95,3.34H62.78a4,4,0,0,1-4-3.34l-15-90a23.41,23.41,0,0,0,4-1.8L84.9,146.52A4,4,0,0,0,88,148a3.27,3.27,0,0,0,.54,0,4,4,0,0,0,3.13-2.37l30.56-70.3a23.8,23.8,0,0,0,11.54,0l30.56,70.3a4,4,0,0,0,3.13,2.37,3.27,3.27,0,0,0,.54,0,4,4,0,0,0,3.1-1.48l37.09-45.64a23.41,23.41,0,0,0,4,1.8ZM220,96a16,16,0,1,1,16-16A16,16,0,0,1,220,96Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
