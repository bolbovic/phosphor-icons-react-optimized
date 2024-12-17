var C = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, a, t) => a in e ? C(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, s = (e, a) => {
  for (var t in a || (a = {}))
    i.call(a, t) && o(e, t, a[t]);
  if (m)
    for (var t of m(a))
      p.call(a, t) && o(e, t, a[t]);
  return e;
};
var A = (e, a) => {
  var t = {};
  for (var c in e)
    i.call(e, c) && a.indexOf(c) < 0 && (t[c] = e[c]);
  if (e != null && m)
    for (var c of m(e))
      a.indexOf(c) < 0 && p.call(e, c) && (t[c] = e[c]);
  return t;
};
import f, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const h = Z((c, t) => {
  var r = c, { children: e } = r, a = A(r, ["children"]);
  return /* @__PURE__ */ f.createElement(d, s({ ref: t }, a), e, /* @__PURE__ */ f.createElement("path", { d: "M245.48,125.57c-.34-.78-8.66-19.23-27.24-37.81C201,70.54,171.38,50,128,50S55,70.54,37.76,87.76c-18.58,18.58-26.9,37-27.24,37.81a6,6,0,0,0,0,4.88c.34.77,8.66,19.22,27.24,37.8C55,185.47,84.62,206,128,206s73-20.53,90.24-37.75c18.58-18.58,26.9-37,27.24-37.8A6,6,0,0,0,245.48,125.57ZM128,194c-31.38,0-58.78-11.42-81.45-33.93A134.77,134.77,0,0,1,22.69,128,134.56,134.56,0,0,1,46.55,95.94C69.22,73.42,96.62,62,128,62s58.78,11.42,81.45,33.94A134.56,134.56,0,0,1,233.31,128C226.94,140.21,195,194,128,194Zm0-112a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
