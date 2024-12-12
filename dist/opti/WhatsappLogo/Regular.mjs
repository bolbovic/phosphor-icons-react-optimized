var s = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var A = (a, l, e) => l in a ? s(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, c = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && A(a, e, l[e]);
  if (t)
    for (var e of t(l))
      p.call(l, e) && A(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && l.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      l.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import i, { forwardRef as R } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = R((r, e) => {
  var m = r, { children: a } = m, l = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(Z, c({ ref: e }, l), a, /* @__PURE__ */ i.createElement("path", { d: "M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
