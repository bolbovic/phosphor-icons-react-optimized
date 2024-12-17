var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && r(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && H.call(a, l) && (e[l] = a[l]);
  return e;
};
import V, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((l, e) => {
  var o = l, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ V.createElement(i, d({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,24v92H179.31a19.86,19.86,0,0,0-14.14,5.86L147,168H109L90.83,149.86A19.86,19.86,0,0,0,76.69,144H52V52ZM52,204V168H75l18.14,18.14A19.86,19.86,0,0,0,107.31,192h41.38a19.86,19.86,0,0,0,14.14-5.86L181,168h23v36Zm35.51-87.51a12,12,0,0,1,0-17l32-32a12,12,0,0,1,17,0l32,32a12,12,0,0,1-17,17L140,105v35a12,12,0,0,1-24,0V105l-11.51,11.52A12,12,0,0,1,87.51,116.49Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
