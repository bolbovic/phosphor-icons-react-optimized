var A = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && V(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && V(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import l, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((m, e) => {
  var r = m, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ l.createElement(f, H({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M240,92H211.3A12,12,0,0,0,200,84H136a12,12,0,0,0-11.3,8H68V52a8,8,0,0,1,8-8,8.5,8.5,0,0,1,8.24,6.39,12,12,0,0,0,23.52-4.78A32.22,32.22,0,0,0,44,52V92H16A12,12,0,0,0,4,104v40a60.07,60.07,0,0,0,56,59.85V216a12,12,0,0,0,24,0V204h88v12a12,12,0,0,0,24,0V203.85A60.07,60.07,0,0,0,252,144V104A12,12,0,0,0,240,92Zm-92,16h40v24H148Zm80,36a36,36,0,0,1-36,36H64a36,36,0,0,1-36-36V116h96v28a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V116h16Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
