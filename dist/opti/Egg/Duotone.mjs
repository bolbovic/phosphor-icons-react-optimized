var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, C = Object.prototype.propertyIsEnumerable;
var c = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, i = (e, a) => {
  for (var t in a || (a = {}))
    n.call(a, t) && c(e, t, a[t]);
  if (r)
    for (var t of r(a))
      C.call(a, t) && c(e, t, a[t]);
  return e;
};
var s = (e, a) => {
  var t = {};
  for (var o in e)
    n.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && C.call(e, o) && (t[o] = e[o]);
  return t;
};
import m, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const E = f((o, t) => {
  var p = o, { children: e } = p, a = s(p, ["children"]);
  return /* @__PURE__ */ m.createElement(l, i({ ref: t }, a), e, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M186.66,59.56C168.47,32.29,146.54,16,128,16S87.53,32.29,69.34,59.56C50.7,87.54,40,121.23,40,152a88,88,0,0,0,176,0C216,121.23,205.3,87.54,186.66,59.56ZM128,224a72.08,72.08,0,0,1-72-72c0-27.69,9.72-58.15,26.66-83.56C97.19,46.64,115.41,32,128,32s30.81,14.64,45.34,36.44C190.28,93.85,200,124.31,200,152A72.08,72.08,0,0,1,128,224Z" }));
});
E.displayName = "Duotone";
export {
  E as Duotone
};
