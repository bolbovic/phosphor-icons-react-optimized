var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      c.call(t, e) && m(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var l in a)
    L.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && c.call(a, l) && (e[l] = a[l]);
  return e;
};
import A, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((l, e) => {
  var r = l, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ A.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M221.29,131.34,176.17,80.19A36,36,0,0,0,150.55,68a36,36,0,1,0-45.1,0A36,36,0,0,0,79.83,80.19L34.71,131.34a24,24,0,0,0,33.7,34.16l6.73-5.39L61.74,211a24,24,0,0,0,43.74,19.69L128,191.9l22.52,38.79a23.82,23.82,0,0,0,13.27,11.85A24,24,0,0,0,194.26,211l-13.4-50.89,6.73,5.39a24,24,0,0,0,33.7-34.16ZM128,28a12,12,0,1,1-12,12A12,12,0,0,1,128,28Zm75,119.12-35.52-28.49a12,12,0,0,0-19.11,12.42L171.27,218a12.18,12.18,0,0,0,.73,2,10.72,10.72,0,0,0-.5-1L138.38,162a12,12,0,0,0-20.76,0L84.5,219a10.72,10.72,0,0,0-.5,1,13.16,13.16,0,0,0,.73-2l22.87-86.92a12,12,0,0,0-19.11-12.42L53,147.12a11.5,11.5,0,0,0-1,.87c.18-.17.35-.36.52-.54L97.83,96.06a12,12,0,0,1,9-4.06h42.34a12,12,0,0,1,9,4.06l45.32,51.39c.17.18.34.37.52.54A11.5,11.5,0,0,0,203,147.12Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
