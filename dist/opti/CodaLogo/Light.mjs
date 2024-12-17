var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      V.call(t, e) && i(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && V.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const h = A((r, e) => {
  var o = r, { children: a } = o, t = H(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M176,86a41.82,41.82,0,0,1,22.61,6.41A10,10,0,0,0,214,84V48a14,14,0,0,0-14-14H56A14,14,0,0,0,42,48V208a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V172a10,10,0,0,0-15.36-8.43c-7.63,4.89-14.11,6.76-22.4,6.42H176a42,42,0,0,1,0-84Zm-54,42a54.06,54.06,0,0,0,53.88,54A46.36,46.36,0,0,0,202,175.57V208a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H200a2,2,0,0,1,2,2V80.48A54.28,54.28,0,0,0,122,128Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
