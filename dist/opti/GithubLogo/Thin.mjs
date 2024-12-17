var c = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && o(a, e, t[e]);
  if (A)
    for (var e of A(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var v = (a, t) => {
  var e = {};
  for (var r in a)
    h.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && A)
    for (var r of A(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const H = f((r, e) => {
  var m = r, { children: a } = m, t = v(m, ["children"]);
  return /* @__PURE__ */ n.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M203.94,76.16A55.73,55.73,0,0,0,199.46,30,4,4,0,0,0,196,28a55.78,55.78,0,0,0-46,24H122A55.78,55.78,0,0,0,76,28a4,4,0,0,0-3.46,2,55.73,55.73,0,0,0-4.48,46.16A53.78,53.78,0,0,0,60,104v8a52.06,52.06,0,0,0,52,52h1.41A36,36,0,0,0,100,192v12H72a28,28,0,0,1-28-28A36,36,0,0,0,8,140a4,4,0,0,0,0,8,28,28,0,0,1,28,28,36,36,0,0,0,36,36h28v20a4,4,0,0,0,8,0V192a28,28,0,0,1,56,0v40a4,4,0,0,0,8,0V192a36,36,0,0,0-13.41-28H160a52.06,52.06,0,0,0,52-52v-8A53.78,53.78,0,0,0,203.94,76.16ZM204,112a44.05,44.05,0,0,1-44,44H112a44.05,44.05,0,0,1-44-44v-8a45.76,45.76,0,0,1,7.71-24.89,4,4,0,0,0,.53-3.84,47.82,47.82,0,0,1,2.1-39.21,47.8,47.8,0,0,1,38.12,22.1A4,4,0,0,0,119.83,60h32.34a4,4,0,0,0,3.37-1.84,47.8,47.8,0,0,1,38.12-22.1,47.82,47.82,0,0,1,2.1,39.21,4,4,0,0,0,.53,3.83A45.85,45.85,0,0,1,204,104Z" }));
});
H.displayName = "Thin";
export {
  H as Thin
};
