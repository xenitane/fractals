function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/GeoSection-Lj611Tl0.js","assets/GlobalLayout-gifmoruM.js","assets/GlobalLayout-Zp4baTaE.css","assets/arrow-right-Ec9K7vLD.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{j as i,S as u,a as f,b,c as x,R as S,G as w,r as y}from"./GlobalLayout-gifmoruM.js";const j="modulepreload",C=function(s){return"/geo-vis/"+s},p={},q=function(t,m,d){let v=Promise.resolve();if(m&&m.length>0){const l=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),k=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));v=Promise.all(m.map(r=>{if(r=C(r),r in p)return;p[r]=!0;const c=r.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(!!d)for(let o=l.length-1;o>=0;o--){const g=l[o];if(g.href===r&&(!c||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${h}`))return;const n=document.createElement("link");if(n.rel=c?"stylesheet":j,c||(n.as="script",n.crossOrigin=""),n.href=r,k&&n.setAttribute("nonce",k),document.head.appendChild(n),c)return new Promise((o,g)=>{n.addEventListener("load",o),n.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${r}`)))})}))}return v.then(()=>t()).catch(l=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=l,window.dispatchEvent(a),!a.defaultPrevented)throw l})},e=(s,t)=>`/geo-vis/thumbs/${s}/${t}`,E={linear:{"cross-stitch-curve":{name:"Cross Stitch Curve",image:e("linear","cross-stitch-curve.svg")},"dragon-curve":{name:"Dragon Curve",image:e("linear","dragon-curve.svg")},"fibonacci-word-fractal":{name:"Fibonacci Word Fractal",image:e("linear","fibonacci-word-fractal.svg")},"gosper-curve":{name:"Gosper Curve",image:e("linear","gosper-curve.svg")},"gosper-island":{name:"Gosper Island",image:e("linear","gosper-island.svg")},"hilbert-curve-2":{name:"Hilbert Curve 2",image:e("linear","hilbert-curve-2.svg")},"hilbert-curve":{name:"Hilbert Curve",image:e("linear","hilbert-curve.svg")},"koch-anti-snowflake":{name:"Koch Anti Snowflake",image:e("linear","koch-anti-snow-flake.svg")},"koch-snowflake":{name:"Koch Snowflake",image:e("linear","koch-snow-flake.svg")},"levy-c-curve":{name:"Levy C Curve",image:e("linear","levy-c-curve.svg")},"minkowski-island":{name:"Minkowski Island",image:e("linear","minkowski-island.svg")},"peano-curve":{name:"Peano Curve",image:e("linear","peano-curve.svg")},"quardratic-island":{name:"Quardratic Island",image:e("linear","quardratic-island.svg")},"quardratic-koch-island":{name:"Quardratic Koch Island",image:e("linear","quardratic-koch-island.svg")},"sierpinski-arrow-head":{name:"Sierpinski Arrow Head",image:e("linear","sierpinski-arrowhead.svg")},"sierpinski-triangle":{name:"Sierpinski Triangle",image:e("linear","sierpinski-triangle.svg")},"t-square":{name:"T Square",image:e("linear","t-square.svg")},"vicsek-fractal":{name:"Vicsek Fractal",image:e("linear","vicsek-fractal.svg")},"vicsek-fractal-2":{name:"Vicsek Fractal 2",image:e("linear","vicsek-fractal-2.svg")}},fill:{"hex-nut":{name:"Hex Nut",image:e("fill","hexnut.svg")},"hex-pool":{name:"Hex Pool",image:e("fill","hexpool.svg")},"hexa-flake":{name:"Hexaflake",image:e("fill","hexaflake.svg")},"penta-flake":{name:"Pentaflake",image:e("fill","pentaflake.svg")},"sierpinski-carpet":{name:"Sierpinski Triangle",image:e("fill","sierpinski-carpet.svg")},"sierpinski-hexagon":{name:"Sierpinksi Hexagon",image:e("fill","sierpinski-hexagon.svg")},"sierpinski-pentagon":{name:"Sierpinski Pentagon",image:e("fill","sierpinski-pentagon.svg")},"sierpinski-triangle":{name:"Sierpinski Triangle",image:e("fill","sierpinski-triangle.svg")},"vicsek-fractal":{name:"Vicsek Fractal",image:e("fill","vicsek-fractal.svg")},"vicsek-fractal-2":{name:"Vicsek Fractal 2",image:e("fill","vicsek-fractal-2.svg")}},branching:{"peano-sierpinski-carpet":{name:"Peano Sierpinski Carpet",image:e("branching","peano-sierpinski-carpet.svg")},"sierpinski-carpet":{name:"Sierpinski Carpet",image:e("branching","sierpinski-carpet.svg")},"sierpinski-triangle-skeleton":{name:"Sierpinski Triangle Skeleton",image:e("branching","sierpinski-triangle-skeleton.svg")},"t-square":{name:"T Square",image:e("branching","t-square.svg")},"vicsek-fractal":{name:"Vicsek Fractal",image:e("branching","vicsek-fractal.svg")}},attractor:{"gingerbread-man":{name:"Gingerbread Man",image:e("attractor","gingerbread-man.svg")},"tinker-bell":{name:"Tinker Bell Attractor",image:e("attractor","tinkerbell-map.svg")}}},P=()=>i.jsxs("div",{className:" space-y-4",children:[i.jsx(u,{className:"h-9 w-64 rounded-2xl"}),i.jsx(u,{className:"h-0.5 w-full"})]}),R=f.lazy(()=>q(()=>import("./GeoSection-Lj611Tl0.js"),__vite__mapDeps([0,1,2,3]))),T=()=>i.jsx("article",{className:b("flex flex-col gap-8"),children:Object.entries(E).map(([s,t])=>i.jsx(f.Suspense,{fallback:i.jsx(P,{}),children:i.jsx(R,{sectionId:s,objectList:t})},s))});x.createRoot(document.querySelector("#root")).render(i.jsx(S.StrictMode,{children:i.jsx(w,{children:i.jsx(T,{})})}));y(console.log);export{q as _};
