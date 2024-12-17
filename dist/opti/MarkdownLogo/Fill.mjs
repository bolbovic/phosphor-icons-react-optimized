var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as L } from "react";
import d from "../../lib/OptiBase.mjs";
const n = L((l, e) => {
  var m = l, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, V({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M232,48H24A16,16,0,0,0,8,64V192a16,16,0,0,0,16,16H232a16,16,0,0,0,16-16V64A16,16,0,0,0,232,48ZM128,152a8,8,0,0,1-16,0V123.31L93.66,141.66a8,8,0,0,1-11.32,0L64,123.31V152a8,8,0,0,1-16,0V104a8,8,0,0,1,13.66-5.66L88,124.69l26.34-26.35A8,8,0,0,1,128,104Zm77.66-18.34-24,24a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L168,132.69V104a8,8,0,0,1,16,0v28.69l10.34-10.35a8,8,0,0,1,11.32,11.32Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
