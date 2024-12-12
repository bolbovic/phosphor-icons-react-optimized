var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      H.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    A.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const i = Z((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M96,164a12,12,0,1,1-12-12A12,12,0,0,1,96,164Zm136,12v32a16,16,0,0,1-16,16H180a16.1,16.1,0,0,1-15.35-11.47L153.84,176H131.91l3.56,12a5.44,5.44,0,0,1,.15.54A16,16,0,0,1,120,208H72.14a8,8,0,0,1-4.52-1.4A100,100,0,0,1,24,124c0-54.36,44.24-99.2,98.58-100A100,100,0,0,1,224,124v4a8,8,0,0,1-8,8H158.71l7.09,24H216A16,16,0,0,1,232,176ZM120,192l-15.45-52a4.77,4.77,0,0,1-.15-.54A16,16,0,0,1,120,120h87.91A84,84,0,0,0,122.8,40C77.16,40.64,40,78.31,40,124a84,84,0,0,0,34.67,68Zm29.13-32L142,136H120l7.14,24ZM216,176H170.52L180,208h36Z" }));
});
i.displayName = "Regular";
export {
  i as Regular,
  i as default
};
