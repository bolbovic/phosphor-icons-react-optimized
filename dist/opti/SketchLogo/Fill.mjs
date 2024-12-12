var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, a, l) => a in e ? s(e, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[a] = l, Z = (e, a) => {
  for (var l in a || (a = {}))
    i.call(a, l) && o(e, l, a[l]);
  if (r)
    for (var l of r(a))
      p.call(a, l) && o(e, l, a[l]);
  return e;
};
var c = (e, a) => {
  var l = {};
  for (var t in e)
    i.call(e, t) && a.indexOf(t) < 0 && (l[t] = e[t]);
  if (e != null && r)
    for (var t of r(e))
      a.indexOf(t) < 0 && p.call(e, t) && (l[t] = e[t]);
  return l;
};
import f, { forwardRef as H } from "react";
import M from "../../lib/OptiBase.mjs";
const d = H((t, l) => {
  var m = t, { children: e } = m, a = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(M, Z({ ref: l }, a), e, /* @__PURE__ */ f.createElement("path", { d: "M246,98.73l-56-64A8,8,0,0,0,184,32H72a8,8,0,0,0-6,2.73l-56,64a8,8,0,0,0,.17,10.73l112,120a8,8,0,0,0,11.7,0l112-120A8,8,0,0,0,246,98.73ZM222.37,96H180L144,48h36.37ZM74.58,112l30.13,75.33L34.41,112Zm106.84,0h40.17l-70.3,75.33ZM75.63,48H112L76,96H33.63Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
