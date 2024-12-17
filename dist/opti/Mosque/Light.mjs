var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, o = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      c.call(t, e) && H(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var m in a)
    V.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && c.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as Z } from "react";
import f from "../../lib/OptiBase.mjs";
const s = Z((m, e) => {
  var v = m, { children: a } = v, t = i(v, ["children"]);
  return /* @__PURE__ */ p.createElement(f, o({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M224,130a21.84,21.84,0,0,0-10,2.41V128c0-40.71-29.31-60.22-52.87-75.9C146.57,42.41,134,34,134,24a6,6,0,0,0-12,0c0,10-12.57,18.41-27.13,28.1C71.31,67.78,42,87.29,42,128v4.41A22,22,0,0,0,10,152v56a6,6,0,0,0,6,6H80a6,6,0,0,0,6-6V176a10,10,0,0,1,20,0v32a6,6,0,0,0,6,6h32a6,6,0,0,0,6-6V176a10,10,0,0,1,20,0v32a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V152A22,22,0,0,0,224,130ZM101.52,62.09c10.37-6.9,20.38-13.56,26.48-21.57,6.1,8,16.11,14.67,26.48,21.57C175.41,76,199,91.71,201.73,122H54.27C57,91.71,80.59,76,101.52,62.09ZM22,152a10,10,0,0,1,20,0v50H22Zm138,2a22,22,0,0,0-22,22v26H118V176a22,22,0,0,0-44,0v26H54V134H202v68H182V176A22,22,0,0,0,160,154Zm74,48H214V152a10,10,0,0,1,20,0Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
