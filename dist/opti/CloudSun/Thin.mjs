var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      o.call(t, e) && l(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var A in a)
    m.call(a, A) && t.indexOf(A) < 0 && (e[A] = a[A]);
  if (a != null && r)
    for (var A of r(a))
      t.indexOf(A) < 0 && o.call(a, A) && (e[A] = a[A]);
  return e;
};
import n, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const L = h((A, e) => {
  var c = A, { children: a } = c, t = p(c, ["children"]);
  return /* @__PURE__ */ n.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M164,76a71.85,71.85,0,0,0-22.14,3.48A51.78,51.78,0,0,0,129,63.83l11.56-16.51A4,4,0,0,0,134,42.73L122.45,59.24A52,52,0,0,0,96,52c-1.71,0-3.4.09-5.06.25L87.44,32.4a4,4,0,0,0-7.88,1.39l3.5,19.84A52.19,52.19,0,0,0,55.85,71L39.32,59.42A4,4,0,0,0,34.73,66L51.26,77.54A51.63,51.63,0,0,0,44,104c0,1.69.09,3.37.25,5l-19.85,3.5a4,4,0,0,0,.69,7.94,4.23,4.23,0,0,0,.7-.06l19.85-3.5A52.07,52.07,0,0,0,54,134.6,48,48,0,0,0,84,220h80a72,72,0,0,0,0-144ZM52,104a44,44,0,0,1,82.33-21.61,72.23,72.23,0,0,0-38.82,43A48.28,48.28,0,0,0,84,124a47.76,47.76,0,0,0-23.4,6.11A44,44,0,0,1,52,104ZM164,212H84a40,40,0,1,1,9.43-78.88A71.63,71.63,0,0,0,92,143.77a4,4,0,0,0,8,.46,64.3,64.3,0,0,1,2-12.67c0-.12.07-.24.09-.36A64.06,64.06,0,1,1,164,212Z" }));
});
L.displayName = "Thin";
export {
  L as Thin
};