var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      H.call(t, e) && m(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && H.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = i((o, e) => {
  var V = o, { children: a } = V, t = l(V, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M232,156H204V111.49a76.39,76.39,0,0,0,23.49,15,12,12,0,0,0,9-22.25A51.81,51.81,0,0,1,204,56a12,12,0,0,0-24,0A52,52,0,0,1,76,56a12,12,0,0,0-24,0,51.81,51.81,0,0,1-32.5,48.22,12,12,0,1,0,9,22.25,76.39,76.39,0,0,0,23.49-15V156H24a12,12,0,0,0,0,24H52v20a12,12,0,0,0,24,0V180H180v20a12,12,0,0,0,24,0V180h28a12,12,0,0,0,0-24Zm-92-24.95V156H116V131.05a76.26,76.26,0,0,0,24,0ZM76,111.38a76.44,76.44,0,0,0,16,11.53V156H76ZM164,156V122.91a76.44,76.44,0,0,0,16-11.53V156Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
