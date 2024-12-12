var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const M = f((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, A({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M186.17,51.49l16.66-16.66a4,4,0,1,0-5.66-5.66l-17,17a83.72,83.72,0,0,0-104.26,0l-17-17a4,4,0,0,0-5.66,5.66L69.83,51.49A83.75,83.75,0,0,0,44,112v40a84,84,0,0,0,168,0V112A83.75,83.75,0,0,0,186.17,51.49ZM128,36a76.08,76.08,0,0,1,76,76v12H52V112A76.08,76.08,0,0,1,128,36Zm0,192a76.08,76.08,0,0,1-76-76V132H204v20A76.08,76.08,0,0,1,128,228ZM148,92a8,8,0,1,1,8,8A8,8,0,0,1,148,92ZM92,92a8,8,0,1,1,8,8A8,8,0,0,1,92,92Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
