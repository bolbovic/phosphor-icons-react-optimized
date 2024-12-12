var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      V.call(t, e) && p(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && V.call(a, m) && (e[m] = a[m]);
  return e;
};
import v, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const i = f((m, e) => {
  var r = m, { children: a } = r, t = l(r, ["children"]);
  return /* @__PURE__ */ v.createElement(h, d({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M100,148a12,12,0,0,1-12,12H64a12,12,0,0,1,0-24H88A12,12,0,0,1,100,148Zm144-32v60a20,20,0,0,1-20,20H140v28a12,12,0,0,1-24,0V196H32a20,20,0,0,1-20-20V116A64.07,64.07,0,0,1,76,52h80V24a12,12,0,0,1,12-12h32a12,12,0,0,1,0,24H180V52A64.07,64.07,0,0,1,244,116ZM116,172V116a40,40,0,0,0-80,0v56Zm104-56a40,40,0,0,0-40-40v68a12,12,0,0,1-24,0V76H125.93A63.7,63.7,0,0,1,140,116v56h80Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
