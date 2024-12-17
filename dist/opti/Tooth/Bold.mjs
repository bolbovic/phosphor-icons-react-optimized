var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var o in a)
    l.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import A, { forwardRef as i } from "react";
import C from "../../lib/OptiBase.mjs";
const n = i((o, e) => {
  var c = o, { children: a } = c, t = s(c, ["children"]);
  return /* @__PURE__ */ A.createElement(C, d({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M172.46,83.15,160.31,88l12.15,4.85a12,12,0,1,1-8.92,22.29L128,100.93,92.46,115.15a12,12,0,0,1-8.92-22.29L95.69,88,83.54,83.15a12,12,0,0,1,8.92-22.29L128,75.08l35.54-14.22a12,12,0,0,1,8.92,22.29ZM228,79.75c.08,76.45-25.2,135.68-49,152.59a20,20,0,0,1-31.44-14.92c-.67-9.06-2.33-22-6.46-32.23C135.76,172,129.92,172,128,172c-7.76,0-11.77,9.92-13.08,13.18-4.13,10.22-5.79,23.17-6.46,32.23A20,20,0,0,1,88.51,236,19.86,19.86,0,0,1,77,232.34C53.2,215.43,27.92,156.2,28,79.75A60,60,0,0,1,88,20h80A60,60,0,0,1,228,79.75Zm-24,0A36,36,0,0,0,168,44H88A36,36,0,0,0,52,79.78c-.06,61.09,17.83,109.52,33.3,127.66C91.24,156,114.32,148,128,148s36.76,8,42.7,59.43C186.17,189.31,204.06,140.88,204,79.78Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
