var l = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var A = (e, a, t) => a in e ? l(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, L = (e, a) => {
  for (var t in a || (a = {}))
    i.call(a, t) && A(e, t, a[t]);
  if (m)
    for (var t of m(a))
      p.call(a, t) && A(e, t, a[t]);
  return e;
};
var c = (e, a) => {
  var t = {};
  for (var r in e)
    i.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      a.indexOf(r) < 0 && p.call(e, r) && (t[r] = e[r]);
  return t;
};
import f, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((r, t) => {
  var o = r, { children: e } = o, a = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, L({ ref: t }, a), e, /* @__PURE__ */ f.createElement("path", { d: "M195.51,62.66,212.44,44A6,6,0,1,0,203.56,36L186.63,54.58A94,94,0,0,0,60.49,193.34L43.56,212A6,6,0,0,0,52.44,220l16.93-18.62A94,94,0,0,0,195.51,62.66ZM46,128A81.93,81.93,0,0,1,178.53,63.49L68.59,184.43A81.69,81.69,0,0,1,46,128Zm82,82a81.57,81.57,0,0,1-50.53-17.49L187.41,71.57A81.94,81.94,0,0,1,128,210Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
