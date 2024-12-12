var d = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, p = (e, t) => {
  for (var a in t || (t = {}))
    c.call(t, a) && o(e, a, t[a]);
  if (l)
    for (var a of l(t))
      i.call(t, a) && o(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var r in e)
    c.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && l)
    for (var r of l(e))
      t.indexOf(r) < 0 && i.call(e, r) && (a[r] = e[r]);
  return a;
};
import s, { forwardRef as n } from "react";
import v from "../../lib/OptiBase.mjs";
const H = n((r, a) => {
  var m = r, { children: e } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(v, p({ ref: a }, t), e, /* @__PURE__ */ s.createElement("path", { d: "M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.27,47,25.53a8,8,0,0,0,4.2,0c1-.26,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40ZM128,223.62a128.25,128.25,0,0,1-38.92-21.81C65.83,182.79,52.37,158,48.9,128H128V56h80v56a141.24,141.24,0,0,1-.9,16H128v95.62Z" }));
});
H.displayName = "Fill";
export {
  H as Fill
};
