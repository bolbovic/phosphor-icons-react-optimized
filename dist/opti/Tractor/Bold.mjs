var h = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && V(a, e, t[e]);
  if (o)
    for (var e of o(t))
      A.call(t, e) && V(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import d, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const f = M((m, e) => {
  var r = m, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ d.createElement(c, Z({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M244,164V134a19.87,19.87,0,0,0-14.25-19.15l-.31-.09L196,105.65V76a12,12,0,0,0-24,0V99.15l-16-4.33V60h4a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24h4V84H40a12,12,0,0,0,0,24H68a64.07,64.07,0,0,1,64,64v12a12,12,0,0,0,12,12h28.8A40,40,0,1,0,244,164ZM132,111.67A87.75,87.75,0,0,0,68,84V60h64ZM175.35,172H156V119.68L220,137V148.8a40.57,40.57,0,0,0-8-.8A40.06,40.06,0,0,0,175.35,172ZM212,204a16,16,0,1,1,16-16A16,16,0,0,1,212,204ZM64,124a52,52,0,1,0,52,52A52.06,52.06,0,0,0,64,124Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,64,204Zm16-28a16,16,0,1,1-16-16A16,16,0,0,1,80,176Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
