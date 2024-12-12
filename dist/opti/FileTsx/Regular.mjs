var V = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import H, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const i = Z((l, e) => {
  var c = l, { children: a } = c, t = s(c, ["children"]);
  return /* @__PURE__ */ H.createElement(d, f({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M214.51,156.65,197.83,180l16.68,23.35a8,8,0,0,1-13,9.3L188,193.76l-13.49,18.89a8,8,0,1,1-13-9.3L178.17,180l-16.68-23.35a8,8,0,0,1,13-9.3L188,166.24l13.49-18.89a8,8,0,0,1,13,9.3ZM123.6,171.31c-4-1.16-8.14-2.35-10.45-3.84-1.25-.82-1.23-1-1.11-1.9a4.54,4.54,0,0,1,2-3.67c4.6-3.12,15.34-1.73,19.83-.56A8,8,0,0,0,138,145.86c-2.12-.55-21-5.22-32.84,2.76a20.58,20.58,0,0,0-9,14.95c-2,15.88,13.65,20.41,23,23.11,12.06,3.49,13.12,4.92,12.78,7.59-.31,2.41-1.26,3.33-2.14,3.93-4.6,3.06-15.17,1.56-19.55.35A8,8,0,0,0,105.94,214a60.63,60.63,0,0,0,15.19,2c5.82,0,12.3-1,17.49-4.46a20.82,20.82,0,0,0,9.19-15.23C150,179,133.49,174.17,123.6,171.31ZM80,144H40a8,8,0,0,0,0,16H52v48a8,8,0,0,0,16,0V160H80a8,8,0,0,0,0-16ZM216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-27.31-8L160,51.31V80Z" }));
});
i.displayName = "Regular";
export {
  i as Regular,
  i as default
};
