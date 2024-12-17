var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, Z = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && l(e, a, t[a]);
  if (r)
    for (var a of r(t))
      d.call(t, a) && l(e, a, t[a]);
  return e;
};
var c = (e, t) => {
  var a = {};
  for (var o in e)
    p.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && d.call(e, o) && (a[o] = e[o]);
  return a;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const M = s((o, a) => {
  var m = o, { children: e } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(A, Z({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm84,108a83.43,83.43,0,0,1-9,37.84l-63-44.09V44.87A84.12,84.12,0,0,1,212,128ZM116,44.87v76.88L53,165.84a83.93,83.93,0,0,1,63-121ZM66.83,185.48,116,151.05v60.08A83.86,83.86,0,0,1,66.83,185.48ZM140,211.13V151.05l49.17,34.43A83.86,83.86,0,0,1,140,211.13Z" }));
});
M.displayName = "Bold";
export {
  M as Bold
};
