var d = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    s.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      l.call(t, e) && m(a, e, t[e]);
  return a;
};
var C = (a, t) => {
  var e = {};
  for (var c in a)
    s.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && o)
    for (var c of o(a))
      t.indexOf(c) < 0 && l.call(a, c) && (e[c] = a[c]);
  return e;
};
import Z, { forwardRef as M } from "react";
import f from "../../lib/OptiBase.mjs";
const i = M((c, e) => {
  var r = c, { children: a } = r, t = C(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M152,128c0-22.09,7.16-40,16-40s16,17.91,16,40-7.16,40-16,40S152,150.09,152,128Zm92,96a12,12,0,0,1-12,12H92c-18.5,0-35.3-12.22-47.32-34.4C33.92,181.74,28,155.6,28,128s5.92-53.74,16.68-73.6C56.7,32.22,73.5,20,92,20h72c18.5,0,35.3,12.22,47.32,34.4C222.08,74.26,228,100.4,228,128s-5.92,53.74-16.68,73.6a95.07,95.07,0,0,1-6.51,10.4H232A12,12,0,0,1,244,224ZM164,44c-18.92,0-40,34.5-40,84s21.08,84,40,84,40-34.5,40-84S182.92,44,164,44ZM54.33,155.59,73,142.24a12,12,0,0,1,13.94,0l14.66,10.46A186.77,186.77,0,0,1,100,128c0-3.61.11-7.2.31-10.75L80,102.75,52.09,122.68C52,124.44,52,126.21,52,128A160.1,160.1,0,0,0,54.33,155.59ZM56.54,90,73,78.24a12,12,0,0,1,13.94,0l16.91,12.07a134.79,134.79,0,0,1,12.8-35.91A95.07,95.07,0,0,1,123.19,44H92C78.44,44,63.77,61.73,56.54,90ZM92,212h31.19a95.07,95.07,0,0,1-6.51-10.4,115.79,115.79,0,0,1-6-12.91L80,166.75,61.14,180.22C69,200.08,80.88,212,92,212Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
