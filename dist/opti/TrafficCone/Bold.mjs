var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, d = (e, t) => {
  for (var a in t || (t = {}))
    H.call(t, a) && m(e, a, t[a]);
  if (r)
    for (var a of r(t))
      p.call(t, a) && m(e, a, t[a]);
  return e;
};
var c = (e, t) => {
  var a = {};
  for (var o in e)
    H.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && p.call(e, o) && (a[o] = e[o]);
  return a;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const h = s((o, a) => {
  var l = o, { children: e } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, d({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M232,204H216.53L157.2,33.43A20,20,0,0,0,138.31,20H117.69A20,20,0,0,0,98.8,33.43L39.47,204H24a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24ZM98.27,108h59.46l13.91,40H84.36Zm22.26-64h14.94l13.91,40H106.62ZM76,172H180l11.13,32H64.88Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
