var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var l in a)
    A.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && H.call(a, l) && (e[l] = a[l]);
  return e;
};
import h, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((l, e) => {
  var r = l, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ h.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M53.92,34.62a8,8,0,0,0-11.48-.37,8.23,8.23,0,0,0-.14,11.38L44.46,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H189.92l12.16,13.38a8,8,0,0,0,11.33.51,8.31,8.31,0,0,0,.3-11.51ZM104,128h13.19l14.54,16H104.27A8.18,8.18,0,0,1,96,136.53,8,8,0,0,1,104,128Zm-48,0H72a8,8,0,0,1,8,8.53A8.18,8.18,0,0,1,71.73,144H56.27A8.18,8.18,0,0,1,48,136.53,8,8,0,0,1,56,128Zm96,48H56.27A8.18,8.18,0,0,1,48,168.53,8,8,0,0,1,56,160h90.28l11.9,13.09A8,8,0,0,1,152,176ZM240,64V192a16,16,0,0,1-5.19,11.78,4,4,0,0,1-5.7-.24L175,144h25a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47h-39.3L93.79,54.69a4,4,0,0,1,3-6.69H224A16,16,0,0,1,240,64Z" }));
});
s.displayName = "Fill";
export {
  s as Fill
};