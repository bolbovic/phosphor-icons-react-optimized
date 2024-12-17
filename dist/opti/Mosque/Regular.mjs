var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (a, r, e) => r in a ? Z(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, H = (a, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && V(a, e, r[e]);
  if (m)
    for (var e of m(r))
      o.call(r, e) && V(a, e, r[e]);
  return a;
};
var p = (a, r) => {
  var e = {};
  for (var t in a)
    c.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import l, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const i = f((t, e) => {
  var v = t, { children: a } = v, r = p(v, ["children"]);
  return /* @__PURE__ */ l.createElement(h, H({ ref: e }, r), a, /* @__PURE__ */ l.createElement("path", { d: "M224,128a23.84,23.84,0,0,0-8,1.38V128c0-41.78-31.07-62.46-53.76-77.56C148.16,41.06,136,33,136,24a8,8,0,0,0-16,0c0,9-12.16,17.06-26.24,26.44C71.07,65.54,40,86.22,40,128v1.38A24,24,0,0,0,8,152v56a8,8,0,0,0,8,8H80a8,8,0,0,0,8-8V176a8,8,0,0,1,16,0v32a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V176a8,8,0,0,1,16,0v32a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V152A24,24,0,0,0,224,128ZM102.63,63.76c9.67-6.44,19-12.68,25.37-20,6.34,7.35,15.7,13.59,25.37,20,20,13.32,42.48,28.29,46.11,56.24h-143C60.15,92.05,82.6,77.08,102.63,63.76ZM24,152a8,8,0,0,1,16,0v48H24Zm136,0a24,24,0,0,0-24,24v24H120V176a24,24,0,0,0-48,0v24H56V136H200v64H184V176A24,24,0,0,0,160,152Zm72,48H216V152a8,8,0,0,1,16,0Z" }));
});
i.displayName = "Regular";
export {
  i as Regular
};
