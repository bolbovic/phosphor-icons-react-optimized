var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      o.call(t, e) && A(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as Z } from "react";
import f from "../../lib/OptiBase.mjs";
const s = Z((m, e) => {
  var h = m, { children: a } = h, t = i(h, ["children"]);
  return /* @__PURE__ */ p.createElement(f, c({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M174,104a6,6,0,0,1-6,6H88a6,6,0,0,1,0-12h80A6,6,0,0,1,174,104Zm-6,26H88a6,6,0,0,0,0,12h80a6,6,0,0,0,0-12Zm86-26v24a30,30,0,0,1-30,30h-6.5c-6.81,15.88-21.28,29.6-42.82,40.37a189,189,0,0,1-45.61,15.53,5.77,5.77,0,0,1-2.14,0,189,189,0,0,1-45.61-15.53C59.78,187.6,45.31,173.88,38.5,158H32A30,30,0,0,1,2,128V104A30,30,0,0,1,32,74h2.35a14,14,0,0,1,8.87-10.07l80-29.09a14,14,0,0,1,9.56,0l80,29.09A14,14,0,0,1,221.65,74H224A30,30,0,0,1,254,104ZM34.89,146A57,57,0,0,1,34,136V86H32a18,18,0,0,0-18,18v24a18,18,0,0,0,18,18ZM210,136V77.09a2,2,0,0,0-1.32-1.88l-80-29.09a2,2,0,0,0-1.36,0l-80,29.09A2,2,0,0,0,46,77.09V136c0,20.7,13.61,38,40.46,51.52A180.79,180.79,0,0,0,128,201.88a181,181,0,0,0,41.54-14.36C196.39,174,210,156.7,210,136Zm32-32a18,18,0,0,0-18-18h-2v50a57,57,0,0,1-.89,10H224a18,18,0,0,0,18-18Z" }));
});
s.displayName = "Light";
export {
  s as Light
};