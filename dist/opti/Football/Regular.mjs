var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var L = (a, l, e) => l in a ? A(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    c.call(l, e) && L(a, e, l[e]);
  if (r)
    for (var e of r(l))
      o.call(l, e) && L(a, e, l[e]);
  return a;
};
var s = (a, l) => {
  var e = {};
  for (var t in a)
    c.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const i = Z((t, e) => {
  var m = t, { children: a } = m, l = s(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, p({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M229.06,53.89a32.92,32.92,0,0,0-26.95-26.95c-32.37-5.49-93.39-8-138.27,36.9s-42.39,105.9-36.9,138.27a32.92,32.92,0,0,0,27,26.95A206.58,206.58,0,0,0,88.27,232c32.09,0,72.05-8,103.89-39.84C237.05,147.28,234.55,86.26,229.06,53.89Zm-61.61-14a192,192,0,0,1,32,2.8A16.94,16.94,0,0,1,213.3,56.56,188.59,188.59,0,0,1,216,92.78L163.21,40C164.61,39.92,166,39.9,167.45,39.9ZM56.56,213.3A16.94,16.94,0,0,1,42.7,199.44,188.59,188.59,0,0,1,40,163.22L92.78,216A187.79,187.79,0,0,1,56.56,213.3Zm124.3-32.44c-11.61,11.6-33.27,27.73-67.37,33.27L41.87,142.51c5.54-34.1,21.67-55.76,33.27-67.37S108.4,47.4,142.5,41.86l71.63,71.63C208.59,147.59,192.46,169.25,180.86,180.86Zm-15.22-90.5a8,8,0,0,1,0,11.31L151.3,116l6.34,6.34a8,8,0,1,1-11.31,11.3L140,127.31,127.31,140l6.34,6.34a8,8,0,1,1-11.3,11.31L116,151.3l-14.34,14.34a8,8,0,1,1-11.31-11.31L104.7,140l-6.34-6.34a8,8,0,0,1,11.31-11.3l6.34,6.34L128.69,116l-6.34-6.34a8,8,0,0,1,11.3-11.31L140,104.7l14.34-14.34A8,8,0,0,1,165.64,90.36Z" }));
});
i.displayName = "Regular";
export {
  i as Regular,
  i as default
};
