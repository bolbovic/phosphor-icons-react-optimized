var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, c = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (m)
    for (var e of m(r))
      A.call(r, e) && o(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as R } from "react";
import d from "../../lib/OptiBase.mjs";
const n = R((t, e) => {
  var l = t, { children: a } = l, r = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(d, c({ ref: e }, r), a, /* @__PURE__ */ i.createElement("path", { d: "M53.92,34.62A8,8,0,1,0,42.08,45.38l13.18,14.5A99.39,99.39,0,0,0,32,124v84a16,16,0,0,0,16,16h84a100.33,100.33,0,0,0,56.53-17.53l13.55,14.91a8,8,0,1,0,11.84-10.76ZM132,208H48V124A83.46,83.46,0,0,1,66.15,71.85L177.66,194.51A83,83,0,0,1,132,208Zm100-84a99.87,99.87,0,0,1-14.35,51.65,8,8,0,0,1-13.7-8.28A84,84,0,0,0,95.66,48.25a8,8,0,0,1-6.94-14.42A100,100,0,0,1,232,124Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
