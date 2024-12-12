var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && l(e, a, t[a]);
  if (m)
    for (var a of m(t))
      s.call(t, a) && l(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var r in e)
    p.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      t.indexOf(r) < 0 && s.call(e, r) && (a[r] = e[r]);
  return a;
};
import C, { forwardRef as i } from "react";
import R from "../../lib/OptiBase.mjs";
const n = i((r, a) => {
  var o = r, { children: e } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ C.createElement(R, c({ ref: a }, t), e, /* @__PURE__ */ C.createElement("path", { d: "M186.66,59.56C168.47,32.29,146.54,16,128,16S87.53,32.29,69.34,59.56C50.7,87.54,40,121.23,40,152a88,88,0,0,0,176,0C216,121.23,205.3,87.54,186.66,59.56ZM128,224a72.08,72.08,0,0,1-72-72c0-27.69,9.72-58.15,26.66-83.56C97.19,46.64,115.41,32,128,32s30.81,14.64,45.34,36.44C190.28,93.85,200,124.31,200,152A72.08,72.08,0,0,1,128,224Z" }));
});
n.displayName = "Regular";
export {
  n as Regular,
  n as default
};
