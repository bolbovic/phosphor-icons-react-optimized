var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (e, a, t) => a in e ? s(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, L = (e, a) => {
  for (var t in a || (a = {}))
    l.call(a, t) && i(e, t, a[t]);
  if (m)
    for (var t of m(a))
      p.call(a, t) && i(e, t, a[t]);
  return e;
};
var c = (e, a) => {
  var t = {};
  for (var r in e)
    l.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      a.indexOf(r) < 0 && p.call(e, r) && (t[r] = e[r]);
  return t;
};
import f, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const h = A((r, t) => {
  var o = r, { children: e } = o, a = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, L({ ref: t }, a), e, /* @__PURE__ */ f.createElement("path", { d: "M230.46,33.55a25.81,25.81,0,0,0-36.49,0L19.76,207.82a6,6,0,0,0,2.89,10.09A158.88,158.88,0,0,0,58.39,222c32.57,0,65.17-10.1,95.87-29.91,31.49-20.32,49.72-43.39,50.48-44.36a6,6,0,0,0-.49-7.94L182.49,118l48-48A25.86,25.86,0,0,0,230.46,33.55Zm-38.6,110.82A221,221,0,0,1,147.75,182C111.5,205.4,74,214.23,36.23,208.32L146,98.5ZM222,61.56l-48,48L154.49,90l48-48A13.81,13.81,0,0,1,222,61.56Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
