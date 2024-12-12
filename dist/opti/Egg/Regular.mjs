var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (e, r, a) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, s = (e, r) => {
  for (var a in r || (r = {}))
    c.call(r, a) && p(e, a, r[a]);
  if (m)
    for (var a of m(r))
      l.call(r, a) && p(e, a, r[a]);
  return e;
};
var C = (e, r) => {
  var a = {};
  for (var t in e)
    c.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && m)
    for (var t of m(e))
      r.indexOf(t) < 0 && l.call(e, t) && (a[t] = e[t]);
  return a;
};
import f, { forwardRef as R } from "react";
import d from "../../lib/OptiBase.mjs";
const n = R((t, a) => {
  var o = t, { children: e } = o, r = C(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, s({ ref: a }, r), e, /* @__PURE__ */ f.createElement("path", { d: "M186.66,59.56C168.47,32.29,146.54,16,128,16S87.53,32.29,69.34,59.56C50.7,87.54,40,121.23,40,152a88,88,0,0,0,176,0C216,121.23,205.3,87.54,186.66,59.56ZM128,224a72.08,72.08,0,0,1-72-72c0-27.69,9.72-58.15,26.66-83.56C97.19,46.64,115.41,32,128,32s30.81,14.64,45.34,36.44C190.28,93.85,200,124.31,200,152A72.08,72.08,0,0,1,128,224Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
