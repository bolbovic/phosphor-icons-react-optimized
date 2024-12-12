var d = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      f.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && f.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const H = h((r, e) => {
  var m = r, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ c.createElement(i, s({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M213.38,34.08a8,8,0,0,0-11.3.54L197.19,40H128A88,88,0,0,0,63.16,187.43L42.08,210.62a8,8,0,1,0,11.84,10.76L75,198.2A87.5,87.5,0,0,0,128,216h72a8,8,0,0,0,0-16H128a71.63,71.63,0,0,1-42.18-13.7L131.54,136H200a8,8,0,0,0,0-16H146.08l67.84-74.62A8,8,0,0,0,213.38,34.08ZM74,175.53A71.69,71.69,0,0,1,56.46,136h53.46ZM56.46,120A72.08,72.08,0,0,1,128,56h54.64l-58.18,64Z" }));
});
H.displayName = "Regular";
export {
  H as Regular,
  H as default
};
