var p = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (a, e, l) => e in a ? p(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, A = (a, e) => {
  for (var l in e || (e = {}))
    Z.call(e, l) && r(a, l, e[l]);
  if (m)
    for (var l of m(e))
      o.call(e, l) && r(a, l, e[l]);
  return a;
};
var L = (a, e) => {
  var l = {};
  for (var t in a)
    Z.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && o.call(a, t) && (l[t] = a[t]);
  return l;
};
import i, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((t, l) => {
  var c = t, { children: a } = c, e = L(c, ["children"]);
  return /* @__PURE__ */ i.createElement(h, A({ ref: l }, e), a, /* @__PURE__ */ i.createElement("path", { d: "M214.45,215.87l-19.58,5.25L183.5,178.68a38.06,38.06,0,0,0,21.2-44.52c-12.52-46.73-38.55-87.68-39.65-89.4a6,6,0,0,0-6.51-2.58l-24.36,6.09c.11-9.67-.15-15.84-.19-16.55a6,6,0,0,0-4.53-5.54l-32-8A6,6,0,0,0,91,20.76c-1.1,1.72-27.13,42.67-39.65,89.4a38.06,38.06,0,0,0,21.2,44.52L61.13,197.12l-19.58-5.25a6,6,0,1,0-3.1,11.59l48,12.87a6.4,6.4,0,0,0,1.55.2,6,6,0,0,0,1.55-11.8l-16.83-4.51L84.1,157.77A36.43,36.43,0,0,0,88,158a38.08,38.08,0,0,0,36.71-28.17l0-.13c.28-1.15.55-2.29.81-3.44a262.13,262.13,0,0,0,5.73,27.57A38.06,38.06,0,0,0,168,182a36.58,36.58,0,0,0,3.9-.23l11.38,42.45-16.83,4.51a6,6,0,0,0,1.55,11.8,6.4,6.4,0,0,0,1.55-.2l48-12.87a6,6,0,1,0-3.1-11.59Zm-57.27-161C160.06,59.7,165.39,69,171.32,81L134.07,90.3c-.55-11.07-.51-20.31-.37-26.33.05-1.1.1-2.19.14-3.25Zm-58.36-24,23.31,5.83c.07,4.25.11,11.32-.19,20.2-.07,1.18-.16,3.09-.23,5.62-.09,1.82-.19,3.7-.3,5.63l-37.6-9.4C90.08,45.89,95.8,35.93,98.82,30.89Zm14.29,95.89a26,26,0,0,1-50.22-13.52A295.44,295.44,0,0,1,78.64,69.84L120.5,80.31A317.77,317.77,0,0,1,113.11,126.78Zm29.77,23.94a279.09,279.09,0,0,1-8-48.25l41.68-10.42a297.86,297.86,0,0,1,16.56,45.21,26,26,0,1,1-50.23,13.46Zm43.75-108a6,6,0,0,1,2.69-8l16-8a6,6,0,1,1,5.36,10.74l-16,8a6,6,0,0,1-8.05-2.69ZM230,72a6,6,0,0,1-6,6H208a6,6,0,0,1,0-12h16A6,6,0,0,1,230,72ZM34.63,21.32a6,6,0,0,1,8-2.69l16,8a6,6,0,0,1-5.36,10.74l-16-8A6,6,0,0,1,34.63,21.32ZM40,70H24a6,6,0,0,1,0-12H40a6,6,0,0,1,0,12Z" }));
});
s.displayName = "Light";
export {
  s as Light
};