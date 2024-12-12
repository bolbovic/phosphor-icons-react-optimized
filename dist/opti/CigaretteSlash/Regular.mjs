var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, Z = (a, r) => {
  for (var e in r || (r = {}))
    H.call(r, e) && o(a, e, r[e]);
  if (m)
    for (var e of m(r))
      p.call(r, e) && o(a, e, r[e]);
  return a;
};
var l = (a, r) => {
  var e = {};
  for (var t in a)
    H.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import R from "../../lib/OptiBase.mjs";
const d = s((t, e) => {
  var c = t, { children: a } = c, r = l(c, ["children"]);
  return /* @__PURE__ */ f.createElement(R, Z({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M201,60.08c8-14.23,7.42-21.71,6.36-24.91a7.79,7.79,0,0,0-2.64-3.86,8,8,0,1,1,6.5-14.62,22.57,22.57,0,0,1,11.32,13.44c3.36,10.14.81,22.85-7.6,37.79-8,14.23-7.42,21.72-6.36,24.92a7.79,7.79,0,0,0,2.64,3.85,8,8,0,1,1-6.5,14.62,22.53,22.53,0,0,1-11.32-13.44C190.07,87.73,192.62,75,201,60.08Zm-47.6,37.79a22.53,22.53,0,0,0,11.32,13.44,8,8,0,1,0,6.5-14.62,7.79,7.79,0,0,1-2.64-3.85c-1.06-3.2-1.64-10.69,6.36-24.92,8.41-14.94,11-27.65,7.6-37.79a22.57,22.57,0,0,0-11.32-13.44,8,8,0,1,0-6.5,14.62,7.79,7.79,0,0,1,2.64,3.86c1.06,3.2,1.64,10.68-6.36,24.91C152.62,75,150.07,87.73,153.43,97.87Zm60.49,112.75a8,8,0,1,1-11.84,10.76L175.37,192H32a16,16,0,0,1-16-16V144a16,16,0,0,1,16-16h85.19L42.08,45.38A8,8,0,1,1,53.92,34.62ZM32,176H80V144H32Zm128.82,0-29.09-32H96v32ZM224,128H178.52a8,8,0,1,0,0,16H224v32h-1.84a8,8,0,1,0,0,16H224a16,16,0,0,0,16-16V144A16,16,0,0,0,224,128Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
