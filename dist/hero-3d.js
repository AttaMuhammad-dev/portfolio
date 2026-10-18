var jl=0,bo=1,tc=2;var Ts=1,ec=2,Hi=3,$n=0,Fe=1,gn=2,_n=0,Wi=1,To=2,Eo=3,Ao=4,nc=5;var ci=100,ic=101,sc=102,rc=103,ac=104,oc=200,lc=201,cc=202,hc=203,wo=204,Co=205,uc=206,dc=207,fc=208,pc=209,mc=210,gc=211,_c=212,xc=213,vc=214,or=0,lr=1,cr=2,Li=3,hr=4,ur=5,dr=6,fr=7,Ro=0,yc=1,Sc=2,nn=0,Io=1,Po=2,Lo=3,hi=4,Do=5,No=6,Uo=7;var Fo=300,Kn=301,ui=302,qr=303,Yr=304,Es=306,pr=1e3,un=1001,mr=1002,Te=1003,Mc=1004;var As=1005;var Ae=1006,Zr=1007;var Qn=1008;var Be=1009,Oo=1010,Bo=1011,Xi=1012,Jr=1013,sn=1014,rn=1015,an=1016,$r=1017,Kr=1018,qi=1020,zo=35902,Vo=35899,ko=1021,Go=1022,Ze=1023,dn=1026,jn=1027,Ho=1028,Qr=1029,ti=1030,jr=1031;var ta=1033,ws=33776,Cs=33777,Rs=33778,Is=33779,ea=35840,na=35841,ia=35842,sa=35843,ra=36196,aa=37492,oa=37496,la=37488,ca=37489,Ps=37490,ha=37491,ua=37808,da=37809,fa=37810,pa=37811,ma=37812,ga=37813,_a=37814,xa=37815,va=37816,ya=37817,Sa=37818,Ma=37819,ba=37820,Ta=37821,Ea=36492,Aa=36494,wa=36495,Ca=36283,Ra=36284,Ls=36285,Ia=36286;var os=2300,gr=2301,rr=2302,mo=2303,go=2400,_o=2401,xo=2402;var bc=3200;var Pa=0,Tc=1,In="",_e="srgb",ls="srgb-linear",cs="linear",jt="srgb";var ar=7680;var Ec=519,Ac=512,wc=513,Cc=514,La=515,Rc=516,Ic=517,Da=518,Pc=519,Lc=35044;var Wo="300 es",en=2e3,Di=2001;function Mh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function bh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dc(){let i=hs("canvas");return i.style.display="block",i}var Cl={},Ni=null;function Xo(...i){let t="THREE."+i.shift();Ni?Ni("log",t,...i):console.log(t,...i)}function Nc(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Dt(...i){i=Nc(i);let t="THREE."+i.shift();if(Ni)Ni("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ut(...i){i=Nc(i);let t="THREE."+i.shift();if(Ni)Ni("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ai(...i){let t=i.join(" ");t in Cl||(Cl[t]=!0,Dt(...i))}function Uc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Fc={[or]:lr,[cr]:dr,[hr]:fr,[Li]:ur,[lr]:or,[dr]:cr,[fr]:hr,[ur]:Li},fn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rl=1234567,is=Math.PI/180,Ui=180/Math.PI;function Yi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Gt(i,t,e){return Math.max(t,Math.min(e,i))}function qo(i,t){return(i%t+t)%t}function Th(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Eh(i,t,e){return i!==t?(e-i)/(t-i):0}function ss(i,t,e){return(1-e)*i+e*t}function Ah(i,t,e,n){return ss(i,t,1-Math.exp(-e*n))}function wh(i,t=1){return t-Math.abs(qo(i,t*2)-t)}function Ch(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Rh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ih(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ph(i,t){return i+Math.random()*(t-i)}function Lh(i){return i*(.5-Math.random())}function Dh(i){i!==void 0&&(Rl=i);let t=Rl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nh(i){return i*is}function Uh(i){return i*Ui}function Fh(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Oh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zh(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),u=a((t+n)/2),p=r((t-n)/2),h=a((t-n)/2),f=r((n-t)/2),_=a((n-t)/2);switch(s){case"XYX":i.set(o*u,c*p,c*h,o*l);break;case"YZY":i.set(c*h,o*u,c*p,o*l);break;case"ZXZ":i.set(c*p,c*h,o*u,o*l);break;case"XZX":i.set(o*u,c*_,c*f,o*l);break;case"YXY":i.set(c*f,o*u,c*_,o*l);break;case"ZYZ":i.set(c*_,c*f,o*u,o*l);break;default:Dt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ii(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function De(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var xn={DEG2RAD:is,RAD2DEG:Ui,generateUUID:Yi,clamp:Gt,euclideanModulo:qo,mapLinear:Th,inverseLerp:Eh,lerp:ss,damp:Ah,pingpong:wh,smoothstep:Ch,smootherstep:Rh,randInt:Ih,randFloat:Ph,randFloatSpread:Lh,seededRandom:Dh,degToRad:Nh,radToDeg:Uh,isPowerOfTwo:Fh,ceilPowerOfTwo:Oh,floorPowerOfTwo:Bh,setQuaternionFromProperEuler:zh,normalize:De,denormalize:Ii},Qo=class Qo{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qo.prototype.isVector2=!0;var Lt=Qo,pn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],p=n[s+3],h=r[a+0],f=r[a+1],_=r[a+2],S=r[a+3];if(p!==S||c!==h||l!==f||u!==_){let m=c*h+l*f+u*_+p*S;m<0&&(h=-h,f=-f,_=-_,S=-S,m=-m);let d=1-o;if(m<.9995){let T=Math.acos(m),C=Math.sin(T);d=Math.sin(d*T)/C,o=Math.sin(o*T)/C,c=c*d+h*o,l=l*d+f*o,u=u*d+_*o,p=p*d+S*o}else{c=c*d+h*o,l=l*d+f*o,u=u*d+_*o,p=p*d+S*o;let T=1/Math.sqrt(c*c+l*l+u*u+p*p);c*=T,l*=T,u*=T,p*=T}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],p=r[a],h=r[a+1],f=r[a+2],_=r[a+3];return t[e]=o*_+u*p+c*f-l*h,t[e+1]=c*_+u*h+l*p-o*f,t[e+2]=l*_+u*f+o*h-c*p,t[e+3]=u*_-o*p-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),p=o(r/2),h=c(n/2),f=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=h*u*p+l*f*_,this._y=l*f*p-h*u*_,this._z=l*u*_+h*f*p,this._w=l*u*p-h*f*_;break;case"YXZ":this._x=h*u*p+l*f*_,this._y=l*f*p-h*u*_,this._z=l*u*_-h*f*p,this._w=l*u*p+h*f*_;break;case"ZXY":this._x=h*u*p-l*f*_,this._y=l*f*p+h*u*_,this._z=l*u*_+h*f*p,this._w=l*u*p-h*f*_;break;case"ZYX":this._x=h*u*p-l*f*_,this._y=l*f*p+h*u*_,this._z=l*u*_-h*f*p,this._w=l*u*p+h*f*_;break;case"YZX":this._x=h*u*p+l*f*_,this._y=l*f*p+h*u*_,this._z=l*u*_-h*f*p,this._w=l*u*p-h*f*_;break;case"XZY":this._x=h*u*p-l*f*_,this._y=l*f*p-h*u*_,this._z=l*u*_+h*f*p,this._w=l*u*p+h*f*_;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],p=e[10],h=n+o+p;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>p){let f=2*Math.sqrt(1+n-o-p);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>p){let f=2*Math.sqrt(1+o-n-p);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+p-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},jo=class jo{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Il.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+c*l+a*p-o*u,this.y=n+c*u+o*l-r*p,this.z=s+c*p+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wa.copy(this).projectOnVector(t),this.sub(Wa)}reflect(t){return this.sub(Wa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jo.prototype.isVector3=!0;var L=jo,Wa=new L,Il=new pn,tl=class tl{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],p=n[7],h=n[2],f=n[5],_=n[8],S=s[0],m=s[3],d=s[6],T=s[1],C=s[4],y=s[7],M=s[2],b=s[5],w=s[8];return r[0]=a*S+o*T+c*M,r[3]=a*m+o*C+c*b,r[6]=a*d+o*y+c*w,r[1]=l*S+u*T+p*M,r[4]=l*m+u*C+p*b,r[7]=l*d+u*y+p*w,r[2]=h*S+f*T+_*M,r[5]=h*m+f*C+_*b,r[8]=h*d+f*y+_*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],p=u*a-o*l,h=o*c-u*r,f=l*r-a*c,_=e*p+n*h+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/_;return t[0]=p*S,t[1]=(s*l-u*n)*S,t[2]=(o*n-s*a)*S,t[3]=h*S,t[4]=(u*e-s*c)*S,t[5]=(s*r-o*e)*S,t[6]=f*S,t[7]=(n*c-l*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return ai("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xa.makeScale(t,e)),this}rotate(t){return ai("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xa.makeRotation(-t)),this}translate(t,e){return ai("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};tl.prototype.isMatrix3=!0;var Ot=tl,Xa=new Ot,Pl=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ll=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vh(){let i={enabled:!0,workingColorSpace:ls,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===jt&&(s.r=An(s.r),s.g=An(s.g),s.b=An(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===jt&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===In?cs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ai("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ai("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ls]:{primaries:t,whitePoint:n,transfer:cs,toXYZ:Pl,fromXYZ:Ll,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:_e},outputColorSpaceConfig:{drawingBufferColorSpace:_e}},[_e]:{primaries:t,whitePoint:n,transfer:jt,toXYZ:Pl,fromXYZ:Ll,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:_e}}}),i}var Xt=Vh();function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _i,_r=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{_i===void 0&&(_i=hs("canvas")),_i.width=t.width,_i.height=t.height;let s=_i.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=_i}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=hs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=An(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(An(e[n]/255)*255):e[n]=An(e[n]);return{data:e,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},kh=0,Fi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=Yi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(qa(s[a].image)):r.push(qa(s[a]))}else r=qa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function qa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_r.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}var Gh=0,Ya=new L,Ne=class i extends fn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=un,s=un,r=Ae,a=Qn,o=Ze,c=Be,l=i.DEFAULT_ANISOTROPY,u=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Yi(),this.name="",this.source=new Fi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ya).x}get height(){return this.source.getSize(Ya).y}get depth(){return this.source.getSize(Ya).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Dt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Dt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pr:t.x=t.x-Math.floor(t.x);break;case un:t.x=t.x<0?0:1;break;case mr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pr:t.y=t.y-Math.floor(t.y);break;case un:t.y=t.y<0?0:1;break;case mr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=Fo;Ne.DEFAULT_ANISOTROPY=1;var el=class el{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],p=c[8],h=c[1],f=c[5],_=c[9],S=c[2],m=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(p-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+S)<.1&&Math.abs(_+m)<.1&&Math.abs(l+f+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(l+1)/2,y=(f+1)/2,M=(d+1)/2,b=(u+h)/4,w=(p+S)/4,x=(_+m)/4;return C>y&&C>M?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=b/n,r=w/n):y>M?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=x/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=w/r,s=x/r),this.set(n,s,r,e),this}let T=Math.sqrt((m-_)*(m-_)+(p-S)*(p-S)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(p-S)/T,this.z=(h-u)/T,this.w=Math.acos((l+f+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};el.prototype.isVector4=!0;var ue=el,xr=class extends fn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ae,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ne(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ae,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Fi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oe=class extends xr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},us=class extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Te,this.minFilter=Te,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var vr=class extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Te,this.minFilter=Te,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Xr=class Xr{constructor(t,e,n,s,r,a,o,c,l,u,p,h,f,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,p,h,f,_,S,m)}set(t,e,n,s,r,a,o,c,l,u,p,h,f,_,S,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=p,d[14]=h,d[3]=f,d[7]=_,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xr().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/xi.setFromMatrixColumn(t,0).length(),r=1/xi.setFromMatrixColumn(t,1).length(),a=1/xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let h=a*u,f=a*p,_=o*u,S=o*p;e[0]=c*u,e[4]=-c*p,e[8]=l,e[1]=f+_*l,e[5]=h-S*l,e[9]=-o*c,e[2]=S-h*l,e[6]=_+f*l,e[10]=a*c}else if(t.order==="YXZ"){let h=c*u,f=c*p,_=l*u,S=l*p;e[0]=h+S*o,e[4]=_*o-f,e[8]=a*l,e[1]=a*p,e[5]=a*u,e[9]=-o,e[2]=f*o-_,e[6]=S+h*o,e[10]=a*c}else if(t.order==="ZXY"){let h=c*u,f=c*p,_=l*u,S=l*p;e[0]=h-S*o,e[4]=-a*p,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*u,e[9]=S-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let h=a*u,f=a*p,_=o*u,S=o*p;e[0]=c*u,e[4]=_*l-f,e[8]=h*l+S,e[1]=c*p,e[5]=S*l+h,e[9]=f*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let h=a*c,f=a*l,_=o*c,S=o*l;e[0]=c*u,e[4]=S-h*p,e[8]=_*p+f,e[1]=p,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=f*p+_,e[10]=h-S*p}else if(t.order==="XZY"){let h=a*c,f=a*l,_=o*c,S=o*l;e[0]=c*u,e[4]=-p,e[8]=l*u,e[1]=h*p+S,e[5]=a*u,e[9]=f*p-_,e[2]=_*p-f,e[6]=o*u,e[10]=S*p+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hh,t,Wh)}lookAt(t,e,n){let s=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Nn.crossVectors(n,ze),Nn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Nn.crossVectors(n,ze)),Nn.normalize(),Vs.crossVectors(ze,Nn),s[0]=Nn.x,s[4]=Vs.x,s[8]=ze.x,s[1]=Nn.y,s[5]=Vs.y,s[9]=ze.y,s[2]=Nn.z,s[6]=Vs.z,s[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],p=n[5],h=n[9],f=n[13],_=n[2],S=n[6],m=n[10],d=n[14],T=n[3],C=n[7],y=n[11],M=n[15],b=s[0],w=s[4],x=s[8],A=s[12],D=s[1],U=s[5],k=s[9],W=s[13],N=s[2],H=s[6],Z=s[10],K=s[14],rt=s[3],$=s[7],tt=s[11],it=s[15];return r[0]=a*b+o*D+c*N+l*rt,r[4]=a*w+o*U+c*H+l*$,r[8]=a*x+o*k+c*Z+l*tt,r[12]=a*A+o*W+c*K+l*it,r[1]=u*b+p*D+h*N+f*rt,r[5]=u*w+p*U+h*H+f*$,r[9]=u*x+p*k+h*Z+f*tt,r[13]=u*A+p*W+h*K+f*it,r[2]=_*b+S*D+m*N+d*rt,r[6]=_*w+S*U+m*H+d*$,r[10]=_*x+S*k+m*Z+d*tt,r[14]=_*A+S*W+m*K+d*it,r[3]=T*b+C*D+y*N+M*rt,r[7]=T*w+C*U+y*H+M*$,r[11]=T*x+C*k+y*Z+M*tt,r[15]=T*A+C*W+y*K+M*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],p=t[6],h=t[10],f=t[14],_=t[3],S=t[7],m=t[11],d=t[15],T=c*f-l*h,C=o*f-l*p,y=o*h-c*p,M=a*f-l*u,b=a*h-c*u,w=a*p-o*u;return e*(S*T-m*C+d*y)-n*(_*T-m*M+d*b)+s*(_*C-S*M+d*w)-r*(_*y-S*b+m*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-n*(r*u-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],p=t[9],h=t[10],f=t[11],_=t[12],S=t[13],m=t[14],d=t[15],T=e*o-n*a,C=e*c-s*a,y=e*l-r*a,M=n*c-s*o,b=n*l-r*o,w=s*l-r*c,x=u*S-p*_,A=u*m-h*_,D=u*d-f*_,U=p*m-h*S,k=p*d-f*S,W=h*d-f*m,N=T*W-C*k+y*U+M*D-b*A+w*x;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/N;return t[0]=(o*W-c*k+l*U)*H,t[1]=(s*k-n*W-r*U)*H,t[2]=(S*w-m*b+d*M)*H,t[3]=(h*b-p*w-f*M)*H,t[4]=(c*D-a*W-l*A)*H,t[5]=(e*W-s*D+r*A)*H,t[6]=(m*y-_*w-d*C)*H,t[7]=(u*w-h*y+f*C)*H,t[8]=(a*k-o*D+l*x)*H,t[9]=(n*D-e*k-r*x)*H,t[10]=(_*b-S*y+d*T)*H,t[11]=(p*y-u*b-f*T)*H,t[12]=(o*A-a*U-c*x)*H,t[13]=(e*U-n*A+s*x)*H,t[14]=(S*C-_*M-m*T)*H,t[15]=(u*M-p*C+h*T)*H,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,p=o+o,h=r*l,f=r*u,_=r*p,S=a*u,m=a*p,d=o*p,T=c*l,C=c*u,y=c*p,M=n.x,b=n.y,w=n.z;return s[0]=(1-(S+d))*M,s[1]=(f+y)*M,s[2]=(_-C)*M,s[3]=0,s[4]=(f-y)*b,s[5]=(1-(h+d))*b,s[6]=(m+T)*b,s[7]=0,s[8]=(_+C)*w,s[9]=(m-T)*w,s[10]=(1-(h+S))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=xi.set(s[0],s[1],s[2]).length(),o=xi.set(s[4],s[5],s[6]).length(),c=xi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ke.copy(this);let l=1/a,u=1/o,p=1/c;return Ke.elements[0]*=l,Ke.elements[1]*=l,Ke.elements[2]*=l,Ke.elements[4]*=u,Ke.elements[5]*=u,Ke.elements[6]*=u,Ke.elements[8]*=p,Ke.elements[9]*=p,Ke.elements[10]*=p,e.setFromRotationMatrix(Ke),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=en,c=!1){let l=this.elements,u=2*r/(e-t),p=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s),_,S;if(c)_=r/(a-r),S=a*r/(a-r);else if(o===en)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Di)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=p,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=en,c=!1){let l=this.elements,u=2/(e-t),p=2/(n-s),h=-(e+t)/(e-t),f=-(n+s)/(n-s),_,S;if(c)_=1/(a-r),S=a/(a-r);else if(o===en)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===Di)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=p,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Xr.prototype.isMatrix4=!0;var he=Xr,xi=new L,Ke=new he,Hh=new L(0,0,0),Wh=new L(1,1,1),Nn=new L,Vs=new L,ze=new L,Dl=new he,Nl=new pn,wn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],p=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Dl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wn.DEFAULT_ORDER="XYZ";var ds=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Xh=0,Ul=new L,vi=new pn,Sn=new he,ks=new L,ji=new L,qh=new L,Yh=new pn,Fl=new L(1,0,0),Ol=new L(0,1,0),Bl=new L(0,0,1),zl={type:"added"},Zh={type:"removed"},yi={type:"childadded",child:null},Za={type:"childremoved",child:null},Ie=class i extends fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new wn,n=new pn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Ot}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ds,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vi.setFromAxisAngle(t,e),this.quaternion.multiply(vi),this}rotateOnWorldAxis(t,e){return vi.setFromAxisAngle(t,e),this.quaternion.premultiply(vi),this}rotateX(t){return this.rotateOnAxis(Fl,t)}rotateY(t){return this.rotateOnAxis(Ol,t)}rotateZ(t){return this.rotateOnAxis(Bl,t)}translateOnAxis(t,e){return Ul.copy(t).applyQuaternion(this.quaternion),this.position.add(Ul.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fl,t)}translateY(t){return this.translateOnAxis(Ol,t)}translateZ(t){return this.translateOnAxis(Bl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ks.copy(t):ks.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(ji,ks,this.up):Sn.lookAt(ks,ji,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),vi.setFromRotationMatrix(Sn),this.quaternion.premultiply(vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ut("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zl),yi.child=t,this.dispatchEvent(yi),yi.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zh),Za.child=t,this.dispatchEvent(Za),Za.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zl),yi.child=t,this.dispatchEvent(yi),yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,t,qh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,Yh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let p=c[l];r(t.shapes,p)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),p=a(t.shapes),h=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ie.DEFAULT_UP=new L(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xe=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jh={type:"move"},Oi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let S of t.hand.values()){let m=e.getJointPose(S,n),d=this._getHandJoint(l,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],h=u.position.distanceTo(p.position),f=.02,_=.005;l.inputState.pinching&&h>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jh)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new xe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function Ja(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Xt.workingColorSpace){if(t=qo(t,1),e=Gt(e,0,1),n=Gt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ja(a,r,t+1/3),this.g=Ja(a,r,t),this.b=Ja(a,r,t-1/3)}return Xt.colorSpaceToWorking(this,s),this}setStyle(t,e=_e){function n(r){r!==void 0&&parseFloat(r)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Dt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_e){let n=Oc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=An(t.r),this.g=An(t.g),this.b=An(t.b),this}copyLinearToSRGB(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_e){return Xt.workingToColorSpace(Re.copy(this),t),Math.round(Gt(Re.r*255,0,255))*65536+Math.round(Gt(Re.g*255,0,255))*256+Math.round(Gt(Re.b*255,0,255))}getHexString(t=_e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.workingToColorSpace(Re.copy(this),e);let n=Re.r,s=Re.g,r=Re.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let p=a-o;switch(l=u<=.5?p/(a+o):p/(2-a-o),a){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Xt.workingColorSpace){return Xt.workingToColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=_e){Xt.workingToColorSpace(Re.copy(this),t);let e=Re.r,n=Re.g,s=Re.b;return t!==_e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Un),this.setHSL(Un.h+t,Un.s+e,Un.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Un),t.getHSL(Gs);let n=ss(Un.h,Gs.h,e),s=ss(Un.s,Gs.s,e),r=ss(Un.l,Gs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Re=new Wt;Wt.NAMES=Oc;var oi=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Qe=new L,Mn=new L,$a=new L,bn=new L,Si=new L,Mi=new L,Vl=new L,Ka=new L,Qa=new L,ja=new L,to=new ue,eo=new ue,no=new ue,zn=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qe.subVectors(t,e),s.cross(Qe);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qe.subVectors(s,e),Mn.subVectors(n,e),$a.subVectors(t,e);let a=Qe.dot(Qe),o=Qe.dot(Mn),c=Qe.dot($a),l=Mn.dot(Mn),u=Mn.dot($a),p=a*l-o*o;if(p===0)return r.set(0,0,0),null;let h=1/p,f=(l*c-o*u)*h,_=(a*u-o*c)*h;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,bn.x),c.addScaledVector(a,bn.y),c.addScaledVector(o,bn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return to.setScalar(0),eo.setScalar(0),no.setScalar(0),to.fromBufferAttribute(t,e),eo.fromBufferAttribute(t,n),no.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(to,r.x),a.addScaledVector(eo,r.y),a.addScaledVector(no,r.z),a}static isFrontFacing(t,e,n,s){return Qe.subVectors(n,e),Mn.subVectors(t,e),Qe.cross(Mn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),Qe.cross(Mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Si.subVectors(s,n),Mi.subVectors(r,n),Ka.subVectors(t,n);let c=Si.dot(Ka),l=Mi.dot(Ka);if(c<=0&&l<=0)return e.copy(n);Qa.subVectors(t,s);let u=Si.dot(Qa),p=Mi.dot(Qa);if(u>=0&&p<=u)return e.copy(s);let h=c*p-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Si,a);ja.subVectors(t,r);let f=Si.dot(ja),_=Mi.dot(ja);if(_>=0&&f<=_)return e.copy(r);let S=f*l-c*_;if(S<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(n).addScaledVector(Mi,o);let m=u*_-f*p;if(m<=0&&p-u>=0&&f-_>=0)return Vl.subVectors(r,s),o=(p-u)/(p-u+(f-_)),e.copy(s).addScaledVector(Vl,o);let d=1/(m+S+h);return a=S*d,o=h*d,e.copy(n).addScaledVector(Si,a).addScaledVector(Mi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,je):je.fromBufferAttribute(r,a),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hs.copy(n.boundingBox)),Hs.applyMatrix4(t.matrixWorld),this.union(Hs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ts),Ws.subVectors(this.max,ts),bi.subVectors(t.a,ts),Ti.subVectors(t.b,ts),Ei.subVectors(t.c,ts),Fn.subVectors(Ti,bi),On.subVectors(Ei,Ti),ni.subVectors(bi,Ei);let e=[0,-Fn.z,Fn.y,0,-On.z,On.y,0,-ni.z,ni.y,Fn.z,0,-Fn.x,On.z,0,-On.x,ni.z,0,-ni.x,-Fn.y,Fn.x,0,-On.y,On.x,0,-ni.y,ni.x,0];return!io(e,bi,Ti,Ei,Ws)||(e=[1,0,0,0,1,0,0,0,1],!io(e,bi,Ti,Ei,Ws))?!1:(Xs.crossVectors(Fn,On),e=[Xs.x,Xs.y,Xs.z],io(e,bi,Ti,Ei,Ws))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Tn=[new L,new L,new L,new L,new L,new L,new L,new L],je=new L,Hs=new Vn,bi=new L,Ti=new L,Ei=new L,Fn=new L,On=new L,ni=new L,ts=new L,Ws=new L,Xs=new L,ii=new L;function io(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ii.fromArray(i,r);let o=s.x*Math.abs(ii.x)+s.y*Math.abs(ii.y)+s.z*Math.abs(ii.z),c=t.dot(ii),l=e.dot(ii),u=n.dot(ii);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var ge=new L,qs=new Lt,$h=0,qe=class extends fn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$h++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lc,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qs.fromBufferAttribute(this,e),qs.applyMatrix3(t),this.setXY(e,qs.x,qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var fs=class extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ps=class extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var pe=class extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Kh=new Vn,es=new L,so=new L,Bi=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Kh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;es.subVectors(t,this.center);let e=es.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(es,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(so.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(es.copy(t.center).add(so)),this.expandByPoint(es.copy(t.center).sub(so))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Qh=0,Xe=new he,ro=new Ie,Ai=new L,Ve=new Vn,ns=new Vn,be=new L,ke=class i extends fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mh(t)?ps:fs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return ro.lookAt(t),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ve.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ns.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(Ve.min,ns.min),Ve.expandByPoint(be),be.addVectors(Ve.max,ns.max),Ve.expandByPoint(be)):(Ve.expandByPoint(ns.min),Ve.expandByPoint(ns.max))}Ve.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(be));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)be.fromBufferAttribute(o,l),c&&(Ai.fromBufferAttribute(t,l),be.add(Ai)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new qe(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new L,c[x]=new L;let l=new L,u=new L,p=new L,h=new Lt,f=new Lt,_=new Lt,S=new L,m=new L;function d(x,A,D){l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,A),p.fromBufferAttribute(n,D),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,A),_.fromBufferAttribute(r,D),u.sub(l),p.sub(l),f.sub(h),_.sub(h);let U=1/(f.x*_.y-_.x*f.y);isFinite(U)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(p,-f.y).multiplyScalar(U),m.copy(p).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(U),o[x].add(S),o[A].add(S),o[D].add(S),c[x].add(m),c[A].add(m),c[D].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let x=0,A=T.length;x<A;++x){let D=T[x],U=D.start,k=D.count;for(let W=U,N=U+k;W<N;W+=3)d(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let C=new L,y=new L,M=new L,b=new L;function w(x){M.fromBufferAttribute(s,x),b.copy(M);let A=o[x];C.copy(A),C.sub(M.multiplyScalar(M.dot(A))).normalize(),y.crossVectors(b,A);let U=y.dot(c[x])<0?-1:1;a.setXYZW(x,C.x,C.y,C.z,U)}for(let x=0,A=T.length;x<A;++x){let D=T[x],U=D.start,k=D.count;for(let W=U,N=U+k;W<N;W+=3)w(t.getX(W+0)),w(t.getX(W+1)),w(t.getX(W+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,u=new L,p=new L;if(t)for(let h=0,f=t.count;h<f;h+=3){let _=t.getX(h+0),S=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,m),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(o,c){let l=o.array,u=o.itemSize,p=o.normalized,h=new l.constructor(c.length*u),f=0,_=0;for(let S=0,m=c.length;S<m;S++){o.isInterleavedBufferAttribute?f=c[S]*o.data.stride+o.offset:f=c[S]*u;for(let d=0;d<u;d++)h[_++]=l[f++]}return new qe(h,u,p)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,p=l.length;u<p;u++){let h=l[u],f=t(h,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let p=0,h=l.length;p<h;p++){let f=l[p];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],p=r[l];for(let h=0,f=p.length;h<f;h++)u.push(p[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ao=new L,jh=new L,tu=new Ot,tn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ao.subVectors(n,e).cross(jh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(ao),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||tu.getNormalMatrix(t),s=this.coplanarPoint(ao).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},eu=0,kn=class extends fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=Wi,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wo,this.blendDst=Co,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=Li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Dt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Dt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Wt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new tn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var En=new L,oo=new L,Ys=new L,Zs=new L,yr=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){oo.copy(t).add(e).multiplyScalar(.5),Ys.copy(e).sub(t).normalize(),Zs.copy(this.origin).sub(oo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ys),o=Zs.dot(this.direction),c=-Zs.dot(Ys),l=Zs.lengthSq(),u=Math.abs(1-a*a),p,h,f,_;if(u>0)if(p=a*c-o,h=a*o-c,_=r*u,p>=0)if(h>=-_)if(h<=_){let S=1/u;p*=S,h*=S,f=p*(p+a*h+2*o)+h*(a*p+h+2*c)+l}else h=r,p=Math.max(0,-(a*h+o)),f=-p*p+h*(h+2*c)+l;else h=-r,p=Math.max(0,-(a*h+o)),f=-p*p+h*(h+2*c)+l;else h<=-_?(p=Math.max(0,-(-a*r+o)),h=p>0?-r:Math.min(Math.max(-r,-c),r),f=-p*p+h*(h+2*c)+l):h<=_?(p=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(p=Math.max(0,-(a*r+o)),h=p>0?r:Math.min(Math.max(-r,-c),r),f=-p*p+h*(h+2*c)+l);else h=a>0?-r:r,p=Math.max(0,-(a*h+o)),f=-p*p+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(oo).addScaledVector(Ys,h),f}intersectSphere(t,e){if(t.radius<0)return null;En.subVectors(t.center,this.origin);let n=En.dot(this.direction),s=En.dot(En)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-h.z)*p,c=(t.max.z-h.z)*p):(o=(t.max.z-h.z)*p,c=(t.min.z-h.z)*p),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,p=t.x-a.x,h=t.y-a.y,f=t.z-a.z,_=e.x-a.x,S=e.y-a.y,m=e.z-a.z,d=n.x-a.x,T=n.y-a.y,C=n.z-a.z,y=Math.abs(c),M=Math.abs(l),b=Math.abs(u),w,x,A,D,U,k,W,N,H,Z,K,rt;if(y>=M&&y>=b?(A=c,k=p,H=_,rt=d,c>=0?(w=l,x=u,D=h,U=f,W=S,N=m,Z=T,K=C):(w=u,x=l,D=f,U=h,W=m,N=S,Z=C,K=T)):M>=b?(A=l,k=h,H=S,rt=T,l>=0?(w=u,x=c,D=f,U=p,W=m,N=_,Z=C,K=d):(w=c,x=u,D=p,U=f,W=_,N=m,Z=d,K=C)):(A=u,k=f,H=m,rt=C,u>=0?(w=c,x=l,D=p,U=h,W=_,N=S,Z=d,K=T):(w=l,x=c,D=h,U=p,W=S,N=_,Z=T,K=d)),A===0)return null;let $=w/A,tt=x/A,it=1/A,Mt=D-$*k,Tt=U-tt*k,qt=W-$*H,lt=N-tt*H,gt=Z-$*rt,O=K-tt*rt,J=gt*lt-O*qt,dt=Mt*O-Tt*gt,ut=qt*Tt-lt*Mt;if(s){if(J<0||dt<0||ut<0)return null}else if((J<0||dt<0||ut<0)&&(J>0||dt>0||ut>0))return null;let pt=J+dt+ut;if(pt===0)return null;let Ft=it*(J*k+dt*H+ut*rt);return(pt>0?Ft<0:Ft>0)?null:this.at(Ft/pt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mn=class extends kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},kl=new he,si=new yr,Js=new Bi,Gl=new L,$s=new L,Ks=new L,Qs=new L,lo=new L,js=new L,Hl=new L,tr=new L,oe=class extends Ie{constructor(t=new ke,e=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){js.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],p=r[c];u!==0&&(lo.fromBufferAttribute(p,t),a?js.addScaledVector(lo,u):js.addScaledVector(lo.sub(e),u))}e.add(js)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(r),si.copy(t.ray).recast(t.near),!(Js.containsPoint(si.origin)===!1&&(si.intersectSphere(Js,Gl)===null||si.origin.distanceToSquared(Gl)>(t.far-t.near)**2))&&(kl.copy(r).invert(),si.copy(t.ray).applyMatrix4(kl),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,si)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){let m=h[_],d=a[m.materialIndex],T=Math.max(m.start,f.start),C=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=T,M=C;y<M;y+=3){let b=o.getX(y),w=o.getX(y+1),x=o.getX(y+2);s=er(this,d,t,n,l,u,p,b,w,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let m=_,d=S;m<d;m+=3){let T=o.getX(m),C=o.getX(m+1),y=o.getX(m+2);s=er(this,a,t,n,l,u,p,T,C,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){let m=h[_],d=a[m.materialIndex],T=Math.max(m.start,f.start),C=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=T,M=C;y<M;y+=3){let b=y,w=y+1,x=y+2;s=er(this,d,t,n,l,u,p,b,w,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),S=Math.min(c.count,f.start+f.count);for(let m=_,d=S;m<d;m+=3){let T=m,C=m+1,y=m+2;s=er(this,a,t,n,l,u,p,T,C,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function nu(i,t,e,n,s,r,a,o){let c;if(t.side===Fe?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===$n,o),c===null)return null;tr.copy(o),tr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(tr);return l<e.near||l>e.far?null:{distance:l,point:tr.clone(),object:i}}function er(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,$s),i.getVertexPosition(c,Ks),i.getVertexPosition(l,Qs);let u=nu(i,t,e,n,$s,Ks,Qs,Hl);if(u){let p=new L;zn.getBarycoord(Hl,$s,Ks,Qs,p),s&&(u.uv=zn.getInterpolatedAttribute(s,o,c,l,p,new Lt)),r&&(u.uv1=zn.getInterpolatedAttribute(r,o,c,l,p,new Lt)),a&&(u.normal=zn.getInterpolatedAttribute(a,o,c,l,p,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new L,materialIndex:0};zn.getNormal($s,Ks,Qs,h.normal),u.face=h,u.barycoord=p}return u}var Sr=class extends Ne{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Te,u=Te,p,h){super(null,a,o,c,l,u,s,r,p,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ri=new Bi,iu=new Lt(.5,.5),nr=new L,zi=class{constructor(t=new tn,e=new tn,n=new tn,s=new tn,r=new tn,a=new tn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=en,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],p=r[5],h=r[6],f=r[7],_=r[8],S=r[9],m=r[10],d=r[11],T=r[12],C=r[13],y=r[14],M=r[15];if(s[0].setComponents(l-a,f-u,d-_,M-T).normalize(),s[1].setComponents(l+a,f+u,d+_,M+T).normalize(),s[2].setComponents(l+o,f+p,d+S,M+C).normalize(),s[3].setComponents(l-o,f-p,d-S,M-C).normalize(),n)s[4].setComponents(c,h,m,y).normalize(),s[5].setComponents(l-c,f-h,d-m,M-y).normalize();else if(s[4].setComponents(l-c,f-h,d-m,M-y).normalize(),e===en)s[5].setComponents(l+c,f+h,d+m,M+y).normalize();else if(e===Di)s[5].setComponents(c,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(t){ri.center.set(0,0,0);let e=iu.distanceTo(t.center);return ri.radius=.7071067811865476+e,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(nr.x=s.normal.x>0?t.max.x:t.min.x,nr.y=s.normal.y>0?t.max.y:t.min.y,nr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(nr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ms=class extends Ne{constructor(t=[],e=Kn,n,s,r,a,o,c,l,u){super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Gn=class extends Ne{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hn=class extends Ne{constructor(t,e,n=sn,s,r,a,o=Te,c=Te,l,u=dn,p=1){if(u!==dn&&u!==jn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:p};super(h,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Fi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Mr=class extends Hn{constructor(t,e=sn,n=Kn,s,r,a=Te,o=Te,c,l=dn){let u={width:t,height:t,depth:1},p=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},gs=class extends Ne{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Wn=class i extends ke{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],p=[],h=0,f=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(p,2));function _(S,m,d,T,C,y,M,b,w,x,A){let D=y/w,U=M/x,k=y/2,W=M/2,N=b/2,H=w+1,Z=x+1,K=0,rt=0,$=new L;for(let tt=0;tt<Z;tt++){let it=tt*U-W;for(let Mt=0;Mt<H;Mt++){let Tt=Mt*D-k;$[S]=Tt*T,$[m]=it*C,$[d]=N,l.push($.x,$.y,$.z),$[S]=0,$[m]=0,$[d]=b>0?1:-1,u.push($.x,$.y,$.z),p.push(Mt/w),p.push(1-tt/x),K+=1}}for(let tt=0;tt<x;tt++)for(let it=0;it<w;it++){let Mt=h+it+H*tt,Tt=h+it+H*(tt+1),qt=h+(it+1)+H*(tt+1),lt=h+(it+1)+H*tt;c.push(Mt,Tt,lt),c.push(Tt,qt,lt),rt+=6}o.addGroup(f,rt,A),f+=rt,h+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ye=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Dt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new Lt:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,s=[],r=[],a=[],o=new L,c=new he;for(let f=0;f<=t;f++){let _=f/t;s[f]=this.getTangentAt(_,new L)}r[0]=new L,a[0]=new L;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),p=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),p<=l&&(l=p,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(Gt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,_))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Gt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],f*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},_s=class extends Ye{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new Lt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*p+this.aX,l=h*p+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},br=class extends _s{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Yo(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,p){let h=(a-r)/l-(o-r)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+p)+(c-o)/p;h*=u,f*=u,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Wl=new L,Xl=new L,co=new Yo,ho=new Yo,uo=new Yo,Vi=class extends Ye{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(Xl.subVectors(s[0],s[1]).add(s[0]),l=Xl);let p=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Wl.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Wl),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,_=Math.pow(l.distanceToSquared(p),f),S=Math.pow(p.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);S<1e-4&&(S=1),_<1e-4&&(_=S),m<1e-4&&(m=S),co.initNonuniformCatmullRom(l.x,p.x,h.x,u.x,_,S,m),ho.initNonuniformCatmullRom(l.y,p.y,h.y,u.y,_,S,m),uo.initNonuniformCatmullRom(l.z,p.z,h.z,u.z,_,S,m)}else this.curveType==="catmullrom"&&(co.initCatmullRom(l.x,p.x,h.x,u.x,this.tension),ho.initCatmullRom(l.y,p.y,h.y,u.y,this.tension),uo.initCatmullRom(l.z,p.z,h.z,u.z,this.tension));return n.set(co.calc(c),ho.calc(c),uo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ql(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function su(i,t){let e=1-i;return e*e*t}function ru(i,t){return 2*(1-i)*i*t}function au(i,t){return i*i*t}function rs(i,t,e,n){return su(i,t)+ru(i,e)+au(i,n)}function ou(i,t){let e=1-i;return e*e*e*t}function lu(i,t){let e=1-i;return 3*e*e*i*t}function cu(i,t){return 3*(1-i)*i*i*t}function hu(i,t){return i*i*i*t}function as(i,t,e,n,s){return ou(i,t)+lu(i,e)+cu(i,n)+hu(i,s)}var Tr=class extends Ye{constructor(t=new Lt,e=new Lt,n=new Lt,s=new Lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Lt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(as(t,s.x,r.x,a.x,o.x),as(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Er=class extends Ye{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(as(t,s.x,r.x,a.x,o.x),as(t,s.y,r.y,a.y,o.y),as(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ar=class extends Ye{constructor(t=new Lt,e=new Lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wr=class extends Ye{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cr=class extends Ye{constructor(t=new Lt,e=new Lt,n=new Lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Lt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(rs(t,s.x,r.x,a.x),rs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xs=class extends Ye{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(rs(t,s.x,r.x,a.x),rs(t,s.y,r.y,a.y),rs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rr=class extends Ye{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Lt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(ql(o,c.x,l.x,u.x,p.x),ql(o,c.y,l.y,u.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Lt().fromArray(s))}return this}},uu=Object.freeze({__proto__:null,ArcCurve:br,CatmullRomCurve3:Vi,CubicBezierCurve:Tr,CubicBezierCurve3:Er,EllipseCurve:_s,LineCurve:Ar,LineCurve3:wr,QuadraticBezierCurve:Cr,QuadraticBezierCurve3:xs,SplineCurve:Rr});var Cn=class i extends ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,p=t/o,h=e/c,f=[],_=[],S=[],m=[];for(let d=0;d<u;d++){let T=d*h-a;for(let C=0;C<l;C++){let y=C*p-r;_.push(y,-T,0),S.push(0,0,1),m.push(C/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let T=0;T<o;T++){let C=T+l*d,y=T+l*(d+1),M=T+1+l*(d+1),b=T+1+l*d;f.push(C,y,b),f.push(y,M,b)}this.setIndex(f),this.setAttribute("position",new pe(_,3)),this.setAttribute("normal",new pe(S,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Xn=class i extends ke{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],p=new L,h=new L,f=[],_=[],S=[],m=[];for(let d=0;d<=n;d++){let T=[],C=d/n,y=a+C*o,M=t*Math.cos(y),b=Math.sqrt(t*t-M*M),w=0;d===0&&a===0?w=.5/e:d===n&&c===Math.PI&&(w=-.5/e);for(let x=0;x<=e;x++){let A=x/e,D=s+A*r;p.x=-b*Math.cos(D),p.y=M,p.z=b*Math.sin(D),_.push(p.x,p.y,p.z),h.copy(p).normalize(),S.push(h.x,h.y,h.z),m.push(A+w,1-C),T.push(l++)}u.push(T)}for(let d=0;d<n;d++)for(let T=0;T<e;T++){let C=u[d][T+1],y=u[d][T],M=u[d+1][T],b=u[d+1][T+1];(d!==0||a>0)&&f.push(C,y,b),(d!==n-1||c<Math.PI)&&f.push(y,M,b)}this.setIndex(f),this.setAttribute("position",new pe(_,3)),this.setAttribute("normal",new pe(S,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var qn=class i extends ke{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],u=[],p=[],h=new L,f=new L,_=new L;for(let S=0;S<=n;S++){let m=a+S/n*o;for(let d=0;d<=s;d++){let T=d/s*r;f.x=(t+e*Math.cos(m))*Math.cos(T),f.y=(t+e*Math.cos(m))*Math.sin(T),f.z=e*Math.sin(m),l.push(f.x,f.y,f.z),h.x=t*Math.cos(T),h.y=t*Math.sin(T),_.subVectors(f,h).normalize(),u.push(_.x,_.y,_.z),p.push(d/s),p.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=s;m++){let d=(s+1)*S+m-1,T=(s+1)*(S-1)+m-1,C=(s+1)*(S-1)+m,y=(s+1)*S+m;c.push(d,T,y),c.push(T,C,y)}this.setIndex(c),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var vs=class i extends ke{constructor(t=new xs(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,c=new L,l=new Lt,u=new L,p=[],h=[],f=[],_=[];S(),this.setIndex(_),this.setAttribute("position",new pe(p,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(f,2));function S(){for(let C=0;C<e;C++)m(C);m(r===!1?e:0),T(),d()}function m(C){u=t.getPointAt(C/e,u);let y=a.normals[C],M=a.binormals[C];for(let b=0;b<=s;b++){let w=b/s*Math.PI*2,x=Math.sin(w),A=-Math.cos(w);c.x=A*y.x+x*M.x,c.y=A*y.y+x*M.y,c.z=A*y.z+x*M.z,c.normalize(),h.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,p.push(o.x,o.y,o.z)}}function d(){for(let C=1;C<=e;C++)for(let y=1;y<=s;y++){let M=(s+1)*(C-1)+(y-1),b=(s+1)*C+(y-1),w=(s+1)*C+y,x=(s+1)*(C-1)+y;_.push(M,b,x),_.push(b,w,x)}}function T(){for(let C=0;C<=e;C++)for(let y=0;y<=s;y++)l.x=C/e,l.y=y/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new uu[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function di(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Yl(s))s.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Yl(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Pe(i){let t={};for(let e=0;e<i.length;e++){let n=di(i[e]);for(let s in n)t[s]=n[s]}return t}function Yl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function du(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zo(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}var Bc={clone:di,merge:Pe},fu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ge=class extends kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fu,this.fragmentShader=pu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=di(t.uniforms),this.uniformsGroups=du(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Wt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Lt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ue().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ot().fromArray(s.value);break;case"m4":this.uniforms[n].value=new he().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ir=class extends Ge{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ue=class extends kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pa,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Pr=class extends kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Lr=class extends kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function wi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function fo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Yn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Dr=class extends Yn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:go,endingEnd:go}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case _o:r=t,o=2*e-n;break;case xo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case _o:a=t,c=2*n-e;break;case xo:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,p=this._offsetNext,h=this._weightPrev,f=this._weightNext,_=(n-e)/(s-e),S=_*_,m=S*_,d=-h*m+2*h*S-h*_,T=(1+h)*m+(-1.5-2*h)*S+(-.5+h)*_+1,C=(-1-f)*m+(1.5+f)*S+.5*_,y=f*m-f*S;for(let M=0;M!==o;++M)r[M]=d*a[u+M]+T*a[l+M]+C*a[c+M]+y*a[p+M];return r}},Nr=class extends Yn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(s-e),p=1-u;for(let h=0;h!==o;++h)r[h]=a[l+h]*p+a[c+h]*u;return r}},Ur=class extends Yn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Fr=class extends Yn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this.inTangents,p=this.outTangents;if(!u||!p){let _=(n-e)/(s-e),S=1-_;for(let m=0;m!==o;++m)r[m]=a[l+m]*S+a[c+m]*_;return r}let h=o*2,f=t-1;for(let _=0;_!==o;++_){let S=a[l+_],m=a[c+_],d=f*h+_*2,T=p[d],C=p[d+1],y=t*h+_*2,M=u[y],b=u[y+1],w=gu(n,e,T,M,s);r[_]=zc(w,S,C,b,m)}return r}};function zc(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function mu(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function gu(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=zc(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=mu(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var He=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=wi(e,this.TimeBufferType),this.values=wi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:wi(t.times,Array),values:wi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),fo(t.settings)&&(n.settings={inTangents:wi(t.settings.inTangents,Array),outTangents:wi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ur(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Nr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Dr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Fr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case os:e=this.InterpolantFactoryMethodDiscrete;break;case gr:e=this.InterpolantFactoryMethodLinear;break;case rr:e=this.InterpolantFactoryMethodSmooth;break;case mo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Dt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return os;case this.InterpolantFactoryMethodLinear:return gr;case this.InterpolantFactoryMethodSmooth:return rr;case this.InterpolantFactoryMethodBezier:return mo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;fo(this.settings)&&(Zl(this.settings.inTangents,t),Zl(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ut("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ut("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ut("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Ut("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&bh(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ut("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===rr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(s)c=!0;else{let p=o*n,h=p-n,f=p+n;for(let _=0;_!==n;++_){let S=e[p+_];if(S!==e[h+_]||S!==e[f+_]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let p=o*n,h=a*n;for(let f=0;f!==n;++f)e[h+f]=e[p+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,fo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Zl(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}He.prototype.ValueTypeName="";He.prototype.TimeBufferType=Float32Array;He.prototype.ValueBufferType=Float32Array;He.prototype.DefaultInterpolation=gr;var Zn=class extends He{constructor(t,e,n){super(t,e,n)}};Zn.prototype.ValueTypeName="bool";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=os;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var Or=class extends He{constructor(t,e,n,s){super(t,e,n,s)}};Or.prototype.ValueTypeName="color";var Br=class extends He{constructor(t,e,n,s){super(t,e,n,s)}};Br.prototype.ValueTypeName="number";var zr=class extends Yn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let u=l+o;l!==u;l+=4)pn.slerpFlat(r,0,a,l-o,a,l,c);return r}},ys=class extends He{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new zr(this.times,this.values,this.getValueSize(),t)}};ys.prototype.ValueTypeName="quaternion";ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Jn=class extends He{constructor(t,e,n){super(t,e,n)}};Jn.prototype.ValueTypeName="string";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=os;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Vr=class extends He{constructor(t,e,n,s){super(t,e,n,s)}};Vr.prototype.ValueTypeName="vector";var kr=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,p){return l.push(u,p),this},this.removeHandler=function(u){let p=l.indexOf(u);return p!==-1&&l.splice(p,2),this},this.getHandler=function(u){for(let p=0,h=l.length;p<h;p+=2){let f=l[p],_=l[p+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Vc=new kr,Gr=class{constructor(t){this.manager=t!==void 0?t:Vc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Gr.DEFAULT_MATERIAL_NAME="__DEFAULT";var ki=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},li=class extends ki{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},po=new he,Jl=new L,$l=new L,Ss=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=Be,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zi,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Jl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jl),$l.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($l),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){po.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(po,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Di||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(po)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ir=new L,sr=new pn,hn=new L,Ms=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=en,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ir,sr,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ir,sr,hn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ir,sr,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ir,sr,hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Bn=new L,Kl=new Lt,Ql=new Lt,ye=class extends Ms{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ui*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(is*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ui*2*Math.atan(Math.tan(is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z)}getViewSize(t,e){return this.getViewBounds(t,Kl,Ql),e.subVectors(Ql,Kl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(is*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var vo=class extends Ss{constructor(){super(new ye(90,1,.5,500)),this.isPointLightShadow=!0}},bs=class extends ki{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vo}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Gi=class extends Ms{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},yo=class extends Ss{constructor(){super(new Gi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Rn=class extends ki{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new yo}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ci=-90,Ri=1,Hr=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ye(Ci,Ri,t,e);s.layers=this.layers,this.add(s);let r=new ye(Ci,Ri,t,e);r.layers=this.layers,this.add(r);let a=new ye(Ci,Ri,t,e);a.layers=this.layers,this.add(a);let o=new ye(Ci,Ri,t,e);o.layers=this.layers,this.add(o);let c=new ye(Ci,Ri,t,e);c.layers=this.layers,this.add(c);let l=new ye(Ci,Ri,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===en)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Di)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,p=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(p,h,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Wr=class extends ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Jo="\\[\\]\\.:\\/",_u=new RegExp("["+Jo+"]","g"),$o="[^"+Jo+"]",xu="[^"+Jo.replace("\\.","")+"]",vu=/((?:WC+[\/:])*)/.source.replace("WC",$o),yu=/(WCOD+)?/.source.replace("WCOD",xu),Su=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$o),Mu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$o),bu=new RegExp("^"+vu+yu+Su+Mu+"$"),Tu=["material","materials","bones","map"],So=class{constructor(t,e,n){let s=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_u,"")}static parseTrackName(t){let e=bu.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Tu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Dt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ut("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ut("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ut("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ut("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Ut("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Ut("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=So;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xg=new Float32Array(1);var nl=class nl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};nl.prototype.isMatrix2=!0;var Mo=nl;function Ko(i,t,e,n){let s=Eu(n);switch(e){case ko:return i*t;case Ho:return i*t/s.components*s.byteLength;case Qr:return i*t/s.components*s.byteLength;case ti:return i*t*2/s.components*s.byteLength;case jr:return i*t*2/s.components*s.byteLength;case Go:return i*t*3/s.components*s.byteLength;case Ze:return i*t*4/s.components*s.byteLength;case ta:return i*t*4/s.components*s.byteLength;case ws:case Cs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Rs:case Is:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case na:case sa:return Math.max(i,16)*Math.max(t,8)/4;case ea:case ia:return Math.max(i,8)*Math.max(t,8)/2;case ra:case aa:case la:case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oa:case Ps:case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case da:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case fa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ma:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ga:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case _a:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case xa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case va:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ba:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ta:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ea:case Aa:case wa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ca:case Ra:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ls:case Ia:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Eu(i){switch(i){case Be:case Oo:return{byteLength:1,components:1};case Xi:case Bo:case an:return{byteLength:2,components:1};case $r:case Kr:return{byteLength:2,components:4};case sn:case Jr:case rn:return{byteLength:4,components:1};case zo:case Vo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function lh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function wu(i){let t=new WeakMap;function e(o,c){let l=o.array,u=o.usage,p=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){let u=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,u);else{p.sort((f,_)=>f.start-_.start);let h=0;for(let f=1;f<p.length;f++){let _=p[h],S=p[f];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,p[h]=S)}p.length=h+1;for(let f=0,_=p.length;f<_;f++){let S=p[f];i.bufferSubData(l,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Cu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ru=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Du=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ou=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ku=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ju=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$u=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ku=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ju=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sd="gl_FragColor = linearToOutputTexel( gl_FragColor );",rd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,od=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ld=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,md=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_d=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,yd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Md=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Td=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ed=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ad=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Id=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Pd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ld=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ud=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Od=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ef=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,rf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,of=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,df=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ff=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_f=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,If=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ff=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Of=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$f=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,np=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ap=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,op=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:Cu,alphahash_pars_fragment:Ru,alphamap_fragment:Iu,alphamap_pars_fragment:Pu,alphatest_fragment:Lu,alphatest_pars_fragment:Du,aomap_fragment:Nu,aomap_pars_fragment:Uu,batching_pars_vertex:Fu,batching_vertex:Ou,begin_vertex:Bu,beginnormal_vertex:zu,bsdfs:Vu,iridescence_fragment:ku,bumpmap_pars_fragment:Gu,clipping_planes_fragment:Hu,clipping_planes_pars_fragment:Wu,clipping_planes_pars_vertex:Xu,clipping_planes_vertex:qu,color_fragment:Yu,color_pars_fragment:Zu,color_pars_vertex:Ju,color_vertex:$u,common:Ku,cube_uv_reflection_fragment:Qu,defaultnormal_vertex:ju,displacementmap_pars_vertex:td,displacementmap_vertex:ed,emissivemap_fragment:nd,emissivemap_pars_fragment:id,colorspace_fragment:sd,colorspace_pars_fragment:rd,envmap_fragment:ad,envmap_common_pars_fragment:od,envmap_pars_fragment:ld,envmap_pars_vertex:cd,envmap_physical_pars_fragment:yd,envmap_vertex:hd,fog_vertex:ud,fog_pars_vertex:dd,fog_fragment:fd,fog_pars_fragment:pd,gradientmap_pars_fragment:md,lightmap_pars_fragment:gd,lights_lambert_fragment:_d,lights_lambert_pars_fragment:xd,lights_pars_begin:vd,lights_toon_fragment:Sd,lights_toon_pars_fragment:Md,lights_phong_fragment:bd,lights_phong_pars_fragment:Td,lights_physical_fragment:Ed,lights_physical_pars_fragment:Ad,lights_fragment_begin:wd,lights_fragment_maps:Cd,lights_fragment_end:Rd,lightprobes_pars_fragment:Id,logdepthbuf_fragment:Pd,logdepthbuf_pars_fragment:Ld,logdepthbuf_pars_vertex:Dd,logdepthbuf_vertex:Nd,map_fragment:Ud,map_pars_fragment:Fd,map_particle_fragment:Od,map_particle_pars_fragment:Bd,metalnessmap_fragment:zd,metalnessmap_pars_fragment:Vd,morphinstance_vertex:kd,morphcolor_vertex:Gd,morphnormal_vertex:Hd,morphtarget_pars_vertex:Wd,morphtarget_vertex:Xd,normal_fragment_begin:qd,normal_fragment_maps:Yd,normal_pars_fragment:Zd,normal_pars_vertex:Jd,normal_vertex:$d,normalmap_pars_fragment:Kd,clearcoat_normal_fragment_begin:Qd,clearcoat_normal_fragment_maps:jd,clearcoat_pars_fragment:tf,iridescence_pars_fragment:ef,opaque_fragment:nf,packing:sf,premultiplied_alpha_fragment:rf,project_vertex:af,dithering_fragment:of,dithering_pars_fragment:lf,roughnessmap_fragment:cf,roughnessmap_pars_fragment:hf,shadowmap_pars_fragment:uf,shadowmap_pars_vertex:df,shadowmap_vertex:ff,shadowmask_pars_fragment:pf,skinbase_vertex:mf,skinning_pars_vertex:gf,skinning_vertex:_f,skinnormal_vertex:xf,specularmap_fragment:vf,specularmap_pars_fragment:yf,tonemapping_fragment:Sf,tonemapping_pars_fragment:Mf,transmission_fragment:bf,transmission_pars_fragment:Tf,uv_pars_fragment:Ef,uv_pars_vertex:Af,uv_vertex:wf,worldpos_vertex:Cf,background_vert:Rf,background_frag:If,backgroundCube_vert:Pf,backgroundCube_frag:Lf,cube_vert:Df,cube_frag:Nf,depth_vert:Uf,depth_frag:Ff,distance_vert:Of,distance_frag:Bf,equirect_vert:zf,equirect_frag:Vf,linedashed_vert:kf,linedashed_frag:Gf,meshbasic_vert:Hf,meshbasic_frag:Wf,meshlambert_vert:Xf,meshlambert_frag:qf,meshmatcap_vert:Yf,meshmatcap_frag:Zf,meshnormal_vert:Jf,meshnormal_frag:$f,meshphong_vert:Kf,meshphong_frag:Qf,meshphysical_vert:jf,meshphysical_frag:tp,meshtoon_vert:ep,meshtoon_frag:np,points_vert:ip,points_frag:sp,shadow_vert:rp,shadow_frag:ap,sprite_vert:op,sprite_frag:lp},xt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},yn={basic:{uniforms:Pe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Pe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Wt(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Pe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Pe([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Pe([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Pe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Pe([xt.points,xt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Pe([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Pe([xt.common,xt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Pe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Pe([xt.sprite,xt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:Pe([xt.common,xt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:Pe([xt.lights,xt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};yn.physical={uniforms:Pe([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var Na={r:0,b:0,g:0},cp=new he,ch=new Ot;ch.set(-1,0,0,0,1,0,0,0,1);function hp(i,t,e,n,s,r){let a=new Wt(0),o=s===!0?0:1,c,l,u=null,p=0,h=null;function f(T){let C=T.isScene===!0?T.background:null;if(C&&C.isTexture){let y=T.backgroundBlurriness>0;C=t.get(C,y)}return C}function _(T){let C=!1,y=f(T);y===null?m(a,o):y&&y.isColor&&(m(y,1),C=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(T,C){let y=f(C);y&&(y.isCubeTexture||y.mapping===Es)?(l===void 0&&(l=new oe(new Wn(1,1,1),new Ge({name:"BackgroundCubeMaterial",uniforms:di(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(cp.makeRotationFromEuler(C.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ch),l.material.toneMapped=Xt.getTransfer(y.colorSpace)!==jt,(u!==y||p!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,p=y.version,h=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new oe(new Cn(2,2),new Ge({name:"BackgroundMaterial",uniforms:di(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(y.colorSpace)!==jt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||p!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,p=y.version,h=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function m(T,C){T.getRGB(Na,Zo(i)),e.buffers.color.setClear(Na.r,Na.g,Na.b,C,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,C=1){a.set(T),o=C,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:_,addToRenderList:S,dispose:d}}function up(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(U,k,W,N,H){let Z=!1,K=p(U,N,W,k);r!==K&&(r=K,l(r.object)),Z=f(U,N,W,H),Z&&_(U,N,W,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,y(U,k,W,N),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(U){return i.bindVertexArray(U)}function u(U){return i.deleteVertexArray(U)}function p(U,k,W,N){let H=N.wireframe===!0,Z=n[k.id];Z===void 0&&(Z={},n[k.id]=Z);let K=U.isInstancedMesh===!0?U.id:0,rt=Z[K];rt===void 0&&(rt={},Z[K]=rt);let $=rt[W.id];$===void 0&&($={},rt[W.id]=$);let tt=$[H];return tt===void 0&&(tt=h(c()),$[H]=tt),tt}function h(U){let k=[],W=[],N=[];for(let H=0;H<e;H++)k[H]=0,W[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:W,attributeDivisors:N,object:U,attributes:{},index:null}}function f(U,k,W,N){let H=r.attributes,Z=k.attributes,K=0,rt=W.getAttributes();for(let $ in rt)if(rt[$].location>=0){let it=H[$],Mt=Z[$];if(Mt===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(Mt=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(Mt=U.instanceColor)),it===void 0||it.attribute!==Mt||Mt&&it.data!==Mt.data)return!0;K++}return r.attributesNum!==K||r.index!==N}function _(U,k,W,N){let H={},Z=k.attributes,K=0,rt=W.getAttributes();for(let $ in rt)if(rt[$].location>=0){let it=Z[$];it===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(it=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(it=U.instanceColor));let Mt={};Mt.attribute=it,it&&it.data&&(Mt.data=it.data),H[$]=Mt,K++}r.attributes=H,r.attributesNum=K,r.index=N}function S(){let U=r.newAttributes;for(let k=0,W=U.length;k<W;k++)U[k]=0}function m(U){d(U,0)}function d(U,k){let W=r.newAttributes,N=r.enabledAttributes,H=r.attributeDivisors;W[U]=1,N[U]===0&&(i.enableVertexAttribArray(U),N[U]=1),H[U]!==k&&(i.vertexAttribDivisor(U,k),H[U]=k)}function T(){let U=r.newAttributes,k=r.enabledAttributes;for(let W=0,N=k.length;W<N;W++)k[W]!==U[W]&&(i.disableVertexAttribArray(W),k[W]=0)}function C(U,k,W,N,H,Z,K){K===!0?i.vertexAttribIPointer(U,k,W,H,Z):i.vertexAttribPointer(U,k,W,N,H,Z)}function y(U,k,W,N){S();let H=N.attributes,Z=W.getAttributes(),K=k.defaultAttributeValues;for(let rt in Z){let $=Z[rt];if($.location>=0){let tt=H[rt];if(tt===void 0&&(rt==="instanceMatrix"&&U.instanceMatrix&&(tt=U.instanceMatrix),rt==="instanceColor"&&U.instanceColor&&(tt=U.instanceColor)),tt!==void 0){let it=tt.normalized,Mt=tt.itemSize,Tt=t.get(tt);if(Tt===void 0)continue;let qt=Tt.buffer,lt=Tt.type,gt=Tt.bytesPerElement,O=lt===i.INT||lt===i.UNSIGNED_INT||tt.gpuType===Jr;if(tt.isInterleavedBufferAttribute){let J=tt.data,dt=J.stride,ut=tt.offset;if(J.isInstancedInterleavedBuffer){for(let pt=0;pt<$.locationSize;pt++)d($.location+pt,J.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let pt=0;pt<$.locationSize;pt++)m($.location+pt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let pt=0;pt<$.locationSize;pt++)C($.location+pt,Mt/$.locationSize,lt,it,dt*gt,(ut+Mt/$.locationSize*pt)*gt,O)}else{if(tt.isInstancedBufferAttribute){for(let J=0;J<$.locationSize;J++)d($.location+J,tt.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let J=0;J<$.locationSize;J++)m($.location+J);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let J=0;J<$.locationSize;J++)C($.location+J,Mt/$.locationSize,lt,it,Mt*gt,Mt/$.locationSize*J*gt,O)}}else if(K!==void 0){let it=K[rt];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv($.location,it);break;case 3:i.vertexAttrib3fv($.location,it);break;case 4:i.vertexAttrib4fv($.location,it);break;default:i.vertexAttrib1fv($.location,it)}}}}T()}function M(){A();for(let U in n){let k=n[U];for(let W in k){let N=k[W];for(let H in N){let Z=N[H];for(let K in Z)u(Z[K].object),delete Z[K];delete N[H]}}delete n[U]}}function b(U){if(n[U.id]===void 0)return;let k=n[U.id];for(let W in k){let N=k[W];for(let H in N){let Z=N[H];for(let K in Z)u(Z[K].object),delete Z[K];delete N[H]}}delete n[U.id]}function w(U){for(let k in n){let W=n[k];for(let N in W){let H=W[N];if(H[U.id]===void 0)continue;let Z=H[U.id];for(let K in Z)u(Z[K].object),delete Z[K];delete H[U.id]}}}function x(U){for(let k in n){let W=n[k],N=U.isInstancedMesh===!0?U.id:0,H=W[N];if(H!==void 0){for(let Z in H){let K=H[Z];for(let rt in K)u(K[rt].object),delete K[rt];delete H[Z]}delete W[N],Object.keys(W).length===0&&delete n[k]}}}function A(){D(),a=!0,r!==s&&(r=s,l(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:D,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:m,disableUnusedAttributes:T}}function dp(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function fp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Ze&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let x=w===an&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Be&&w!==rn&&!x&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Dt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let p=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:y,maxSamples:M,samples:b}}function pp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new tn,o=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){let f=p.length!==0||h||n!==0||s;return s=h,n=p.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){e=u(p,h,0)},this.setState=function(p,h,f){let _=p.clippingPlanes,S=p.clipIntersection,m=p.clipShadows,d=i.get(p);if(!s||_===null||_.length===0||r&&!m)r?u(null):l();else{let T=r?0:n,C=T*4,y=d.clippingState||null;c.value=y,y=u(_,h,C,f);for(let M=0;M!==C;++M)y[M]=e[M];d.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,h,f,_){let S=p!==null?p.length:0,m=null;if(S!==0){if(m=c.value,_!==!0||m===null){let d=f+S*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let C=0,y=f;C!==S;++C,y+=4)a.copy(p[C]).applyMatrix4(T,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}var Ji=4,mp=6,gp=20,_p=256,Ds=new Gi,kc=new Wt,il=null,sl=0,rl=0,al=!1,xp=new L,fi=new L,Fa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=xp}=r;il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(il,sl,rl),this._renderer.xr.enabled=al,t.scissorTest=!1,Zi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Kn||t.mapping===ui?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ae,minFilter:Ae,generateMipmaps:!1,type:an,format:Ze,colorSpace:ls,depthBuffer:!1},s=Gc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gc(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=vp(r)),this._blurMaterial=Sp(r,t,e),this._ggxMaterial=yp(r,t,e)}return s}_compileMaterial(t){let e=new oe(new ke,t);this._renderer.compile(e,Ds)}_sceneToCubeUV(t,e,n,s,r){let c=new ye(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,f=p.toneMapping;p.getClearColor(kc),p.toneMapping=nn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new oe(new Wn,new mn({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,m=S.material,d=!1,T=t.background;T?T.isColor&&(m.color.copy(T),t.background=null,d=!0):(m.color.copy(kc),d=!0);for(let C=0;C<6;C++){let y=C%3;y===0?(c.up.set(0,l[C],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[C],r.y,r.z)):y===1?(c.up.set(0,0,l[C]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[C],r.z)):(c.up.set(0,l[C],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[C]));let M=this._cubeSize;Zi(s,y*M,C>2?M:0,M,M),p.setRenderTarget(s),d&&p.render(S,c),p.render(t,c)}p.toneMapping=f,p.autoClear=h,t.background=T}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Kn||t.mapping===ui;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Zi(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ds)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),p=Math.sqrt(l*l-u*u),h=l*1.25,f=p*h,{_lodMax:_}=this,S=this._sizeLods[n],m=3*S*(n>_-Ji?n-_+Ji:0),d=4*(this._cubeSize-S);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=_-e,Zi(r,m,d,3*S,2*S),s.setRenderTarget(r),s.render(o,Ds),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-n,Zi(t,m,d,3*S,2*S),s.setRenderTarget(t),s.render(o,Ds)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],p=3*u*(s>this._lodMax-Ji?s-this._lodMax+Ji:0),h=4*(this._cubeSize-u);Zi(e,p,h,3*u,2*u),a.setRenderTarget(e),a.render(c,Ds)}};function vp(i){let t=[],e=[],n=i,s=i-Ji+1+mp;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],p=6,h=6,f=3,_=new Float32Array(f*h*p),S=new Float32Array(f*h*p);for(let d=0;d<p;d++){let T=d%3*2/3-1,C=d>2?0:-1,y=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];_.set(y,f*h*d);for(let M=0;M<h;M++){let b=u[M*2]*2-1,w=u[M*2+1]*2-1;d===0?fi.set(1,w,b):d===1?fi.set(-b,1,-w):d===2?fi.set(-b,w,1):d===3?fi.set(-1,w,-b):d===4?fi.set(-b,-1,w):fi.set(b,w,-1),fi.toArray(S,(d*h+M)*f)}}let m=new ke;m.setAttribute("position",new qe(_,f)),m.setAttribute("outputDirection",new qe(S,f)),e.push(new oe(m,null)),n>Ji&&n--}return{lodMeshes:e,sizeLods:t}}function Gc(i,t,e){let n=new Oe(i,t,e);return n.texture.mapping=Es,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zi(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function yp(i,t,e){return new Ge({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_p,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ba(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Sp(i,t,e){return new Ge({name:"SphericalGaussianBlur",defines:{SAMPLES:gp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ba(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Hc(){return new Ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Wc(){return new Ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Ba(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Oa=class extends Oe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ms(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Wn(5,5,5),r=new Ge({name:"CubemapFromEquirect",uniforms:di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:_n});r.uniforms.tEquirect.value=e;let a=new oe(s,r),o=e.minFilter;return e.minFilter===Qn&&(e.minFilter=Ae),new Hr(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Mp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===qr||f===Yr)if(t.has(h)){let _=t.get(h).texture;return o(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let S=new Oa(_.height);return S.fromEquirectangularTexture(i,h),t.set(h,S),h.addEventListener("dispose",l),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,_=f===qr||f===Yr,S=f===Kn||f===ui;if(_||S){let m=e.get(h),d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new Fa(i)),m=_?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let T=h.image;return _&&T&&T.height>0||S&&T&&c(T)?(n===null&&(n=new Fa(i)),m=_?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===qr?h.mapping=Kn:f===Yr&&(h.mapping=ui),h}function c(h){let f=0,_=6;for(let S=0;S<_;S++)h[S]!==void 0&&f++;return f===_}function l(h){let f=h.target;f.removeEventListener("dispose",l);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function bp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ai("WebGLRenderer: "+n+" extension not supported."),s}}}function Tp(i,t,e,n){let s={},r=new WeakMap;function a(p){let h=p.target;h.index!==null&&t.remove(h.index);for(let _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(p,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(p){let h=p.attributes;for(let f in h)t.update(h[f],i.ARRAY_BUFFER)}function l(p){let h=[],f=p.index,_=p.attributes.position,S=0;if(_===void 0)return;if(f!==null){let T=f.array;S=f.version;for(let C=0,y=T.length;C<y;C+=3){let M=T[C+0],b=T[C+1],w=T[C+2];h.push(M,b,b,w,w,M)}}else{let T=_.array;S=_.version;for(let C=0,y=T.length/3-1;C<y;C+=3){let M=C+0,b=C+1,w=C+2;h.push(M,b,b,w,w,M)}}let m=new(_.count>=65535?ps:fs)(h,1);m.version=S;let d=r.get(p);d&&t.remove(d),r.set(p,m)}function u(p){let h=r.get(p);if(h){let f=p.index;f!==null&&h.version<f.version&&l(p)}else l(p);return r.get(p)}return{get:o,update:c,getWireframeAttribute:u}}function Ep(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,h){i.drawElements(n,h,r,p*a),e.update(h,n,1)}function l(p,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,p*a,f),e.update(h,n,f))}function u(p,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,p,0,f);let S=0;for(let m=0;m<f;m++)S+=h[m];e.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ap(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Ut("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function wp(i,t,e){let n=new WeakMap,s=new ue;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==p){let A=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],C=0;f===!0&&(C=1),_===!0&&(C=2),S===!0&&(C=3);let y=o.attributes.position.count*C,M=1;y>t.maxTextureSize&&(M=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let b=new Float32Array(y*M*4*p),w=new us(b,y,M,p);w.type=rn,w.needsUpdate=!0;let x=C*4;for(let D=0;D<p;D++){let U=m[D],k=d[D],W=T[D],N=y*M*4*D;for(let H=0;H<U.count;H++){let Z=H*x;f===!0&&(s.fromBufferAttribute(U,H),b[N+Z+0]=s.x,b[N+Z+1]=s.y,b[N+Z+2]=s.z,b[N+Z+3]=0),_===!0&&(s.fromBufferAttribute(k,H),b[N+Z+4]=s.x,b[N+Z+5]=s.y,b[N+Z+6]=s.z,b[N+Z+7]=0),S===!0&&(s.fromBufferAttribute(W,H),b[N+Z+8]=s.x,b[N+Z+9]=s.y,b[N+Z+10]=s.z,b[N+Z+11]=W.itemSize===4?s.w:1)}}h={count:p,texture:w,size:new Lt(y,M)},n.set(o,h),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let S=0;S<l.length;S++)f+=l[S];let _=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Cp(i,t,e,n,s){let r=new WeakMap;function a(l){let u=s.render.frame,p=l.geometry,h=t.get(l,p);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Rp={[Io]:"LINEAR_TONE_MAPPING",[Po]:"REINHARD_TONE_MAPPING",[Lo]:"CINEON_TONE_MAPPING",[hi]:"ACES_FILMIC_TONE_MAPPING",[No]:"AGX_TONE_MAPPING",[Uo]:"NEUTRAL_TONE_MAPPING",[Do]:"CUSTOM_TONE_MAPPING"};function Ip(i,t,e,n,s,r){let a=new Oe(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new ke;l.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new pe([0,2,0,0,2,0],2));let u=new Ir({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new oe(l,u),h=new Gi(-1,1,1,-1,0,1),f=null,_=null,S=!1,m,d=null,T=[],C=!1;this.setSize=function(y,M){a.setSize(y,M),o!==null&&o.setSize(y,M),c!==null&&c.setSize(y,M);for(let b=0;b<T.length;b++){let w=T[b];w.setSize&&w.setSize(y,M)}},this.setEffects=function(y){T=y,C=T.length>0&&T[0].isRenderPass===!0;let M=a.width,b=a.height;T.length>0&&o===null&&(o=new Oe(M,b,{type:an,depthBuffer:!1,stencilBuffer:!1}),c=new Oe(M,b,{type:an,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<T.length;w++){let x=T[w];x.setSize&&x.setSize(M,b)}},this.begin=function(y,M){if(S||y.toneMapping===nn&&T.length===0)return!1;if(d=M,M!==null){let b=M.width,w=M.height;(a.width!==b||a.height!==w)&&this.setSize(b,w)}return C===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=nn,!0},this.hasRenderPass=function(){return C},this.end=function(y,M){y.toneMapping=m,S=!0;let b=a,w=o;for(let x=0;x<T.length;x++){let A=T[x];A.enabled!==!1&&(A.render(y,w,b,M),A.needsSwap!==!1&&(b=w,w=w===o?c:o))}if(f!==y.outputColorSpace||_!==y.toneMapping){f=y.outputColorSpace,_=y.toneMapping,u.defines={},Xt.getTransfer(f)===jt&&(u.defines.SRGB_TRANSFER="");let x=Rp[_];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(d),y.render(p,h),d=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var hh=new Ne,cl=new Hn(1,1),uh=new us,dh=new vr,fh=new ms,Xc=[],qc=[],Yc=new Float32Array(16),Zc=new Float32Array(9),Jc=new Float32Array(4);function Qi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Xc[s];if(r===void 0&&(r=new Float32Array(s),Xc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function za(i,t){let e=qc[t];e===void 0&&(e=new Int32Array(t),qc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Pp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Lp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function Dp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function Np(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function Up(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(Se(e,n))return;Jc.set(n),i.uniformMatrix2fv(this.addr,!1,Jc),Me(e,n)}}function Fp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(Se(e,n))return;Zc.set(n),i.uniformMatrix3fv(this.addr,!1,Zc),Me(e,n)}}function Op(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(Se(e,n))return;Yc.set(n),i.uniformMatrix4fv(this.addr,!1,Yc),Me(e,n)}}function Bp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function Vp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function Gp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Hp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function Wp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function Xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function qp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(cl.compareFunction=e.isReversedDepthBuffer()?Da:La,r=cl):r=hh,e.setTexture2D(t||r,s)}function Yp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||dh,s)}function Zp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||fh,s)}function Jp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||uh,s)}function $p(i){switch(i){case 5126:return Pp;case 35664:return Lp;case 35665:return Dp;case 35666:return Np;case 35674:return Up;case 35675:return Fp;case 35676:return Op;case 5124:case 35670:return Bp;case 35667:case 35671:return zp;case 35668:case 35672:return Vp;case 35669:case 35673:return kp;case 5125:return Gp;case 36294:return Hp;case 36295:return Wp;case 36296:return Xp;case 35678:case 36198:case 36298:case 36306:case 35682:return qp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return Zp;case 36289:case 36303:case 36311:case 36292:return Jp}}function Kp(i,t){i.uniform1fv(this.addr,t)}function Qp(i,t){let e=Qi(t,this.size,2);i.uniform2fv(this.addr,e)}function jp(i,t){let e=Qi(t,this.size,3);i.uniform3fv(this.addr,e)}function tm(i,t){let e=Qi(t,this.size,4);i.uniform4fv(this.addr,e)}function em(i,t){let e=Qi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function nm(i,t){let e=Qi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function im(i,t){let e=Qi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function sm(i,t){i.uniform1iv(this.addr,t)}function rm(i,t){i.uniform2iv(this.addr,t)}function am(i,t){i.uniform3iv(this.addr,t)}function om(i,t){i.uniform4iv(this.addr,t)}function lm(i,t){i.uniform1uiv(this.addr,t)}function cm(i,t){i.uniform2uiv(this.addr,t)}function hm(i,t){i.uniform3uiv(this.addr,t)}function um(i,t){i.uniform4uiv(this.addr,t)}function dm(i,t,e){let n=this.cache,s=t.length,r=za(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=cl:a=hh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function fm(i,t,e){let n=this.cache,s=t.length,r=za(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||dh,r[a])}function pm(i,t,e){let n=this.cache,s=t.length,r=za(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||fh,r[a])}function mm(i,t,e){let n=this.cache,s=t.length,r=za(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||uh,r[a])}function gm(i){switch(i){case 5126:return Kp;case 35664:return Qp;case 35665:return jp;case 35666:return tm;case 35674:return em;case 35675:return nm;case 35676:return im;case 5124:case 35670:return sm;case 35667:case 35671:return rm;case 35668:case 35672:return am;case 35669:case 35673:return om;case 5125:return lm;case 36294:return cm;case 36295:return hm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return pm;case 36289:case 36303:case 36311:case 36292:return mm}}var hl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$p(e.type)}},ul=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gm(e.type)}},dl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ol=/(\w+)(\])?(\[|\.)?/g;function $c(i,t){i.seq.push(t),i.map[t.id]=t}function _m(i,t,e){let n=i.name,s=n.length;for(ol.lastIndex=0;;){let r=ol.exec(n),a=ol.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){$c(e,l===void 0?new hl(o,i,t):new ul(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new dl(o),$c(e,p)),e=p}}}var $i=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);_m(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Kc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var xm=37297,vm=0;function ym(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Qc=new Ot;function Sm(i){Xt._getMatrix(Qc,Xt.workingColorSpace,i);let t=`mat3( ${Qc.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(i)){case cs:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function jc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+ym(i.getShaderSource(t),o)}else return r}function Mm(i,t){let e=Sm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var bm={[Io]:"Linear",[Po]:"Reinhard",[Lo]:"Cineon",[hi]:"ACESFilmic",[No]:"AgX",[Uo]:"Neutral",[Do]:"Custom"};function Tm(i,t){let e=bm[t];return e===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ua=new L;function Em(){Xt.getLuminanceCoefficients(Ua);let i=Ua.x.toFixed(4),t=Ua.y.toFixed(4),e=Ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Am(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function wm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Cm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Us(i){return i!==""}function th(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function eh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function fl(i){return i.replace(Rm,Pm)}var Im=new Map;function Pm(i,t){let e=Vt[t];if(e===void 0){let n=Im.get(t);if(n!==void 0)e=Vt[n],Dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return fl(e)}var Lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nh(i){return i.replace(Lm,Dm)}function Dm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ih(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Nm={[Ts]:"SHADOWMAP_TYPE_PCF",[Hi]:"SHADOWMAP_TYPE_VSM"};function Um(i){return Nm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Fm={[Kn]:"ENVMAP_TYPE_CUBE",[ui]:"ENVMAP_TYPE_CUBE",[Es]:"ENVMAP_TYPE_CUBE_UV"};function Om(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Fm[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Bm={[ui]:"ENVMAP_MODE_REFRACTION"};function zm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Bm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Vm={[Ro]:"ENVMAP_BLENDING_MULTIPLY",[yc]:"ENVMAP_BLENDING_MIX",[Sc]:"ENVMAP_BLENDING_ADD"};function km(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Vm[i.combine]||"ENVMAP_BLENDING_NONE"}function Gm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Hm(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Um(e),l=Om(e),u=zm(e),p=km(e),h=Gm(e),f=Am(e),_=wm(r),S=s.createProgram(),m,d,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Us).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Us).join(`
`),d.length>0&&(d+=`
`)):(m=[ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),d=[ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==nn?"#define TONE_MAPPING":"",e.toneMapping!==nn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==nn?Tm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Mm("linearToOutputTexel",e.outputColorSpace),Em(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Us).join(`
`)),a=fl(a),a=th(a,e),a=eh(a,e),o=fl(o),o=th(o,e),o=eh(o,e),a=nh(a),o=nh(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Wo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let C=T+m+a,y=T+d+o,M=Kc(s,s.VERTEX_SHADER,C),b=Kc(s,s.FRAGMENT_SHADER,y);s.attachShader(S,M),s.attachShader(S,b),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function w(U){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(S)||"",W=s.getShaderInfoLog(M)||"",N=s.getShaderInfoLog(b)||"",H=k.trim(),Z=W.trim(),K=N.trim(),rt=!0,$=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(rt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,M,b);else{let tt=jc(s,M,"vertex"),it=jc(s,b,"fragment");Ut("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+H+`
`+tt+`
`+it)}else H!==""?Dt("WebGLProgram: Program Info Log:",H):(Z===""||K==="")&&($=!1);$&&(U.diagnostics={runnable:rt,programLog:H,vertexShader:{log:Z,prefix:m},fragmentShader:{log:K,prefix:d}})}s.deleteShader(M),s.deleteShader(b),x=new $i(s,S),A=Cm(s,S)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(S,xm)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vm++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=M,this.fragmentShader=b,this}var Wm=0,pl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ml(t),e.set(t,n)),n}},ml=class{constructor(t){this.id=Wm++,this.code=t,this.usedTimes=0}};function Xm(i){return i===ti||i===Ps||i===Ls}function qm(i,t,e,n,s,r){let a=new ds,o=new pl,c=new Set,l=[],u=new Map,p=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function S(x,A,D,U,k,W){let N=U.fog,H=k.geometry,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,rt=t.get(x.envMap||Z,K),$=rt&&rt.mapping===Es?rt.image.height:null,tt=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Dt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let it=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Mt=it!==void 0?it.length:0,Tt=0;H.morphAttributes.position!==void 0&&(Tt=1),H.morphAttributes.normal!==void 0&&(Tt=2),H.morphAttributes.color!==void 0&&(Tt=3);let qt,lt,gt,O;if(tt){let re=yn[tt];qt=re.vertexShader,lt=re.fragmentShader}else{qt=x.vertexShader,lt=x.fragmentShader;let re=o.getVertexShaderStage(x),Kt=o.getFragmentShaderStage(x);o.update(x,re,Kt),gt=re.id,O=Kt.id}let J=i.getRenderTarget(),dt=i.state.buffers.depth.getReversed(),ut=k.isInstancedMesh===!0,pt=k.isBatchedMesh===!0,Ft=!!x.map,ie=!!x.matcap,Bt=!!rt,Nt=!!x.aoMap,te=!!x.lightMap,kt=!!x.bumpMap&&x.wireframe===!1,$t=!!x.normalMap,de=!!x.displacementMap,Ee=!!x.emissiveMap,se=!!x.metalnessMap,Yt=!!x.roughnessMap,I=x.anisotropy>0,ve=x.clearcoat>0,Jt=x.dispersion>0,E=x.retroreflectivity>0,g=x.iridescence>0,F=x.sheen>0,G=x.transmission>0,Q=I&&!!x.anisotropyMap,ct=ve&&!!x.clearcoatMap,ft=ve&&!!x.clearcoatNormalMap,et=ve&&!!x.clearcoatRoughnessMap,nt=g&&!!x.iridescenceMap,mt=g&&!!x.iridescenceThicknessMap,V=F&&!!x.sheenColorMap,X=F&&!!x.sheenRoughnessMap,q=!!x.specularMap,at=!!x.specularColorMap,vt=!!x.specularIntensityMap,bt=G&&!!x.transmissionMap,R=G&&!!x.thicknessMap,ot=!!x.gradientMap,j=!!x.alphaMap,ht=x.alphaTest>0,_t=!!x.alphaHash,st=!!x.extensions,It=nn;x.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(It=i.toneMapping);let Rt={shaderID:tt,shaderType:x.type,shaderName:x.name,vertexShader:qt,fragmentShader:lt,defines:x.defines,customVertexShaderID:gt,customFragmentShaderID:O,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:pt,batchingColor:pt&&k._colorsTexture!==null,instancing:ut,instancingColor:ut&&k.instanceColor!==null,instancingMorph:ut&&k.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Xt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ft,matcap:ie,envMap:Bt,envMapMode:Bt&&rt.mapping,envMapCubeUVHeight:$,aoMap:Nt,lightMap:te,bumpMap:kt,normalMap:$t,displacementMap:de,emissiveMap:Ee,normalMapObjectSpace:$t&&x.normalMapType===Tc,normalMapTangentSpace:$t&&x.normalMapType===Pa,packedNormalMap:$t&&x.normalMapType===Pa&&Xm(x.normalMap.format),metalnessMap:se,roughnessMap:Yt,anisotropy:I,anisotropyMap:Q,clearcoat:ve,clearcoatMap:ct,clearcoatNormalMap:ft,clearcoatRoughnessMap:et,dispersion:Jt,retroreflection:E,iridescence:g,iridescenceMap:nt,iridescenceThicknessMap:mt,sheen:F,sheenColorMap:V,sheenRoughnessMap:X,specularMap:q,specularColorMap:at,specularIntensityMap:vt,transmission:G,transmissionMap:bt,thicknessMap:R,gradientMap:ot,opaque:x.transparent===!1&&x.blending===Wi&&x.alphaToCoverage===!1,alphaMap:j,alphaTest:ht,alphaHash:_t,combine:x.combine,mapUv:Ft&&_(x.map.channel),aoMapUv:Nt&&_(x.aoMap.channel),lightMapUv:te&&_(x.lightMap.channel),bumpMapUv:kt&&_(x.bumpMap.channel),normalMapUv:$t&&_(x.normalMap.channel),displacementMapUv:de&&_(x.displacementMap.channel),emissiveMapUv:Ee&&_(x.emissiveMap.channel),metalnessMapUv:se&&_(x.metalnessMap.channel),roughnessMapUv:Yt&&_(x.roughnessMap.channel),anisotropyMapUv:Q&&_(x.anisotropyMap.channel),clearcoatMapUv:ct&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ft&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:V&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:X&&_(x.sheenRoughnessMap.channel),specularMapUv:q&&_(x.specularMap.channel),specularColorMapUv:at&&_(x.specularColorMap.channel),specularIntensityMapUv:vt&&_(x.specularIntensityMap.channel),transmissionMapUv:bt&&_(x.transmissionMap.channel),thicknessMapUv:R&&_(x.thicknessMap.channel),alphaMapUv:j&&_(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&($t||I),vertexNormals:!!H.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!H.attributes.uv&&(Ft||j),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||H.attributes.normal===void 0&&$t===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:dt,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Tt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:It,decodeVideoTexture:Ft&&x.map.isVideoTexture===!0&&Xt.getTransfer(x.map.colorSpace)===jt,decodeVideoTextureEmissive:Ee&&x.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(x.emissiveMap.colorSpace)===jt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===gn,flipSided:x.side===Fe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:st&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&x.extensions.multiDraw===!0||pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function m(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let D in x.defines)A.push(D),A.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(d(A,x),T(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function d(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function T(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function C(x){let A=f[x.type],D;if(A){let U=yn[A];D=Bc.clone(U.uniforms)}else D=x.uniforms;return D}function y(x,A){let D=u.get(A);return D!==void 0?++D.usedTimes:(D=new Hm(i,A,x,s),l.push(D),u.set(A,D)),D}function M(x){if(--x.usedTimes===0){let A=l.indexOf(x);l[A]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function w(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:C,acquireProgram:y,releaseProgram:M,releaseShaderCache:b,programs:l,dispose:w}}function Ym(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Zm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function sh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,_,S,m,d){let T=i[t];return T===void 0?(T={id:h.id,object:h,geometry:f,material:_,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:d},i[t]=T):(T.id=h.id,T.object=h,T.geometry=f,T.material=_,T.materialVariant=a(h),T.groupOrder=S,T.renderOrder=h.renderOrder,T.z=m,T.group=d),t++,T}function c(h,f,_,S,m,d,T){T.reversedDepth===!0&&(m=-m);let C=o(h,f,_,S,m,d);_.transmission>0?n.push(C):_.transparent===!0?s.push(C):e.push(C)}function l(h,f,_,S,m,d){let T=o(h,f,_,S,m,d);_.transmission>0?n.unshift(T):_.transparent===!0?s.unshift(T):e.unshift(T)}function u(h,f){e.length>1&&e.sort(h||Zm),n.length>1&&n.sort(f||sh),s.length>1&&s.sort(f||sh)}function p(){for(let h=t,f=i.length;h<f;h++){let _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:p,sort:u}}function Jm(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new rh,i.set(n,[a])):s>=r.length?(a=new rh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function $m(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new Wt};break;case"SpotLight":e={position:new L,direction:new L,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Km(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Qm=0;function jm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function tg(i){let t=new $m,e=Km(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new he,a=new he;function o(l){let u=0,p=0,h=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let f=0,_=0,S=0,m=0,d=0,T=0,C=0,y=0,M=0,b=0,w=0,x=0,A=0,D=0;l.sort(jm);for(let k=0,W=l.length;k<W;k++){let N=l[k],H=N.color,Z=N.intensity,K=N.distance,rt=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ti?rt=N.shadow.map.texture:rt=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=H.r*Z,p+=H.g*Z,h+=H.b*Z;else if(N.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(N.sh.coefficients[$],Z);D++}else if(N.isSunLight){let $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let tt=N.shadow,it=e.get(N);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),n.sunShadow[_]=it,n.sunShadowMap[_]=rt;let Mt=tt.getViewportCount();for(let Tt=0;Tt<Mt;Tt++)n.sunShadowMatrix[S+Tt]=tt.getMatrix(Tt),n.sunShadowCascade[S+Tt]=tt._cascadeData[Tt];S+=Mt,_++}n.sun[f]=$,f++}else if(N.isDirectionalLight){let $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let tt=N.shadow,it=e.get(N);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,n.directionalShadow[m]=it,n.directionalShadowMap[m]=rt,n.directionalShadowMatrix[m]=N.shadow.matrix,M++}n.directional[m]=$,m++}else if(N.isSpotLight){let $=t.get(N);$.position.setFromMatrixPosition(N.matrixWorld),$.color.copy(H).multiplyScalar(Z),$.distance=K,$.coneCos=Math.cos(N.angle),$.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),$.decay=N.decay,n.spot[T]=$;let tt=N.shadow;if(N.map&&(n.spotLightMap[x]=N.map,x++,tt.updateMatrices(N),N.castShadow&&A++),n.spotLightMatrix[T]=tt.matrix,N.castShadow){let it=e.get(N);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,n.spotShadow[T]=it,n.spotShadowMap[T]=rt,w++}T++}else if(N.isRectAreaLight){let $=t.get(N);$.color.copy(H).multiplyScalar(Z),$.halfWidth.set(N.width*.5,0,0),$.halfHeight.set(0,N.height*.5,0),n.rectArea[C]=$,C++}else if(N.isPointLight){let $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),$.distance=N.distance,$.decay=N.decay,N.castShadow){let tt=N.shadow,it=e.get(N);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,it.shadowCameraNear=tt.camera.near,it.shadowCameraFar=tt.camera.far,n.pointShadow[d]=it,n.pointShadowMap[d]=rt,n.pointShadowMatrix[d]=N.shadow.matrix,b++}n.point[d]=$,d++}else if(N.isHemisphereLight){let $=t.get(N);$.skyColor.copy(N.color).multiplyScalar(Z),$.groundColor.copy(N.groundColor).multiplyScalar(Z),n.hemi[y]=$,y++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=h;let U=n.hash;(U.sunLength!==f||U.directionalLength!==m||U.pointLength!==d||U.spotLength!==T||U.rectAreaLength!==C||U.hemiLength!==y||U.numSunShadows!==_||U.numDirectionalShadows!==M||U.numPointShadows!==b||U.numSpotShadows!==w||U.numSpotMaps!==x||U.numLightProbes!==D)&&(n.sun.length=f,n.directional.length=m,n.spot.length=T,n.rectArea.length=C,n.point.length=d,n.hemi.length=y,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+x-A,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=D,U.sunLength=f,U.directionalLength=m,U.pointLength=d,U.spotLength=T,U.rectAreaLength=C,U.hemiLength=y,U.numSunShadows=_,U.numDirectionalShadows=M,U.numPointShadows=b,U.numSpotShadows=w,U.numSpotMaps=x,U.numLightProbes=D,n.version=Qm++)}function c(l,u){let p=0,h=0,f=0,_=0,S=0,m=0,d=u.matrixWorldInverse;for(let T=0,C=l.length;T<C;T++){let y=l[T];if(y.isSunLight){let M=n.sun[p];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(d),p++}else if(y.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),h++}else if(y.isSpotLight){let M=n.spot[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),_++}else if(y.isRectAreaLight){let M=n.rectArea[S];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(d),a.identity(),r.copy(y.matrixWorld),r.premultiply(d),a.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),S++}else if(y.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(d),f++}else if(y.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(d),m++}}}return{setup:o,setupView:c,state:n}}function ah(i){let t=new tg(i),e=[],n=[],s=[];function r(h){p.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let p={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function eg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new ah(i),t.set(s,[o])):r>=a.length?(o=new ah(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ig=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,sg=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],rg=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],oh=new he,Ns=new L,ll=new L;function ag(i,t,e){let n=new zi,s=new Lt,r=new Lt,a=new ue,o=new Pr,c=new Lr,l={},u=e.maxTextureSize,p={[$n]:Fe,[Fe]:$n,[gn]:gn},h=new Ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:ng,fragmentShader:ig}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let _=new ke;_.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new oe(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ts;let d=this.type;this.render=function(b,w,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===ec&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ts);let A=i.getRenderTarget(),D=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),k=i.state;k.setBlending(_n),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let W=d!==this.type;W&&w.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(H=>H.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,H=b.length;N<H;N++){let Z=b[N],K=Z.shadow;if(K===void 0){Dt("WebGLShadowMap:",Z,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let rt=K.getFrameExtents();s.multiply(rt),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/rt.x),s.x=r.x*rt.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/rt.y),s.y=r.y*rt.y,K.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(K.camera._reversedDepth=$,K.map===null||W===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Hi){if(Z.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Oe(s.x,s.y,{format:ti,type:an,minFilter:Ae,magFilter:Ae,generateMipmaps:!1}),K.map.texture.name=Z.name+".shadowMap",K.map.depthTexture=new Hn(s.x,s.y,rn),K.map.depthTexture.name=Z.name+".shadowMapDepth",K.map.depthTexture.format=dn,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Te,K.map.depthTexture.magFilter=Te}else Z.isPointLight?(K.map=new Oa(s.x),K.map.depthTexture=new Mr(s.x,sn)):(K.map=new Oe(s.x,s.y),K.map.depthTexture=new Hn(s.x,s.y,sn)),K.map.depthTexture.name=Z.name+".shadowMap",K.map.depthTexture.format=dn,this.type===Ts?(K.map.depthTexture.compareFunction=$?Da:La,K.map.depthTexture.minFilter=Ae,K.map.depthTexture.magFilter=Ae):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Te,K.map.depthTexture.magFilter=Te);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);let tt=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();Z.isPointLight!==!0&&K.updateMatrices(Z,x);for(let it=0;it<tt;it++){let Mt=K.getCamera(it);if(Z.isPointLight){let Tt=K.camera,qt=K.matrix,lt=Z.distance||Tt.far;lt!==Tt.far&&(Tt.far=lt,Tt.updateProjectionMatrix()),Ns.setFromMatrixPosition(Z.matrixWorld),Tt.position.copy(Ns),ll.copy(Tt.position),ll.add(sg[it]),Tt.up.copy(rg[it]),Tt.lookAt(ll),Tt.updateMatrixWorld(),qt.makeTranslation(-Ns.x,-Ns.y,-Ns.z),oh.multiplyMatrices(Tt.projectionMatrix,Tt.matrixWorldInverse),K._frustum.setFromProjectionMatrix(oh,Tt.coordinateSystem,Tt.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)i.setRenderTarget(K.map,it),i.clear();else{it===0&&(i.setRenderTarget(K.map),i.clear());let Tt=K.getViewport(it);a.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),k.viewport(a)}n=K.getFrustum(it),y(w,x,Mt,Z,this.type)}K.isPointLightShadow!==!0&&this.type===Hi&&T(K,x),K.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(A,D,U)};function T(b,w){let x=t.update(S);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Oe(s.x,s.y,{format:ti,type:an}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,x,h,S,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,x,f,S,null)}function C(b,w,x,A){let D=null,U=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)D=U;else if(D=x.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let k=D.uuid,W=w.uuid,N=l[k];N===void 0&&(N={},l[k]=N);let H=N[W];H===void 0&&(H=D.clone(),N[W]=H,w.addEventListener("dispose",M)),D=H}if(D.visible=w.visible,D.wireframe=w.wireframe,A===Hi?D.side=w.shadowSide!==null?w.shadowSide:w.side:D.side=w.shadowSide!==null?w.shadowSide:p[w.side],D.alphaMap=w.alphaMap,D.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,D.map=w.map,D.clipShadows=w.clipShadows,D.clippingPlanes=w.clippingPlanes,D.clipIntersection=w.clipIntersection,D.displacementMap=w.displacementMap,D.displacementScale=w.displacementScale,D.displacementBias=w.displacementBias,D.wireframeLinewidth=w.wireframeLinewidth,D.linewidth=w.linewidth,x.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let k=i.properties.get(D);k.light=x}return D}function y(b,w,x,A,D){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===Hi)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let W=t.update(b),N=b.material;if(Array.isArray(N)){let H=W.groups;for(let Z=0,K=H.length;Z<K;Z++){let rt=H[Z],$=N[rt.materialIndex];if($&&$.visible){let tt=C(b,$,A,D);b.onBeforeShadow(i,b,w,x,W,tt,rt),i.renderBufferDirect(x,null,W,tt,b,rt),b.onAfterShadow(i,b,w,x,W,tt,rt)}}}else if(N.visible){let H=C(b,N,A,D);b.onBeforeShadow(i,b,w,x,W,H,null),i.renderBufferDirect(x,null,W,H,b,null),b.onAfterShadow(i,b,w,x,W,H,null)}}let k=b.children;for(let W=0,N=k.length;W<N;W++)y(k[W],w,x,A,D)}function M(b){b.target.removeEventListener("dispose",M);for(let x in l){let A=l[x],D=b.target.uuid;D in A&&(A[D].dispose(),delete A[D])}}}function og(i,t){function e(){let R=!1,ot=new ue,j=null,ht=new ue(0,0,0,0);return{setMask:function(_t){j!==_t&&!R&&(i.colorMask(_t,_t,_t,_t),j=_t)},setLocked:function(_t){R=_t},setClear:function(_t,st,It,Rt,re){re===!0&&(_t*=Rt,st*=Rt,It*=Rt),ot.set(_t,st,It,Rt),ht.equals(ot)===!1&&(i.clearColor(_t,st,It,Rt),ht.copy(ot))},reset:function(){R=!1,j=null,ht.set(-1,0,0,0)}}}function n(){let R=!1,ot=!1,j=null,ht=null,_t=null;return{setReversed:function(st){if(ot!==st){let It=t.get("EXT_clip_control");st?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),ot=st;let Rt=_t;_t=null,this.setClear(Rt)}},getReversed:function(){return ot},setTest:function(st){st?J(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(st){j!==st&&!R&&(i.depthMask(st),j=st)},setFunc:function(st){if(ot&&(st=Fc[st]),ht!==st){switch(st){case or:i.depthFunc(i.NEVER);break;case lr:i.depthFunc(i.ALWAYS);break;case cr:i.depthFunc(i.LESS);break;case Li:i.depthFunc(i.LEQUAL);break;case hr:i.depthFunc(i.EQUAL);break;case ur:i.depthFunc(i.GEQUAL);break;case dr:i.depthFunc(i.GREATER);break;case fr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=st}},setLocked:function(st){R=st},setClear:function(st){_t!==st&&(_t=st,ot&&(st=1-st),i.clearDepth(st))},reset:function(){R=!1,j=null,ht=null,_t=null,ot=!1}}}function s(){let R=!1,ot=null,j=null,ht=null,_t=null,st=null,It=null,Rt=null,re=null;return{setTest:function(Kt){R||(Kt?J(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function(Kt){ot!==Kt&&!R&&(i.stencilMask(Kt),ot=Kt)},setFunc:function(Kt,$e,ln){(j!==Kt||ht!==$e||_t!==ln)&&(i.stencilFunc(Kt,$e,ln),j=Kt,ht=$e,_t=ln)},setOp:function(Kt,$e,ln){(st!==Kt||It!==$e||Rt!==ln)&&(i.stencilOp(Kt,$e,ln),st=Kt,It=$e,Rt=ln)},setLocked:function(Kt){R=Kt},setClear:function(Kt){re!==Kt&&(i.clearStencil(Kt),re=Kt)},reset:function(){R=!1,ot=null,j=null,ht=null,_t=null,st=null,It=null,Rt=null,re=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},p={},h={},f=new WeakMap,_=[],S=null,m=!1,d=null,T=null,C=null,y=null,M=null,b=null,w=null,x=new Wt(0,0,0),A=0,D=!1,U=null,k=null,W=null,N=null,H=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,rt=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec($)[1]),K=rt>=1):$.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),K=rt>=2);let tt=null,it={},Mt=i.getParameter(i.SCISSOR_BOX),Tt=i.getParameter(i.VIEWPORT),qt=new ue().fromArray(Mt),lt=new ue().fromArray(Tt);function gt(R,ot,j,ht){let _t=new Uint8Array(4),st=i.createTexture();i.bindTexture(R,st),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<j;It++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(ot+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return st}let O={};O[i.TEXTURE_2D]=gt(i.TEXTURE_2D,i.TEXTURE_2D,1),O[i.TEXTURE_CUBE_MAP]=gt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[i.TEXTURE_2D_ARRAY]=gt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),O[i.TEXTURE_3D]=gt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(Li),kt(!1),$t(bo),J(i.CULL_FACE),Nt(_n);function J(R){u[R]!==!0&&(i.enable(R),u[R]=!0)}function dt(R){u[R]!==!1&&(i.disable(R),u[R]=!1)}function ut(R,ot){return h[R]!==ot?(i.bindFramebuffer(R,ot),h[R]=ot,R===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ot),R===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function pt(R,ot){let j=_,ht=!1;if(R){j=f.get(ot),j===void 0&&(j=[],f.set(ot,j));let _t=R.textures;if(j.length!==_t.length||j[0]!==i.COLOR_ATTACHMENT0){for(let st=0,It=_t.length;st<It;st++)j[st]=i.COLOR_ATTACHMENT0+st;j.length=_t.length,ht=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,ht=!0);ht&&i.drawBuffers(j)}function Ft(R){return S!==R?(i.useProgram(R),S=R,!0):!1}let ie={[ci]:i.FUNC_ADD,[ic]:i.FUNC_SUBTRACT,[sc]:i.FUNC_REVERSE_SUBTRACT};ie[rc]=i.MIN,ie[ac]=i.MAX;let Bt={[oc]:i.ZERO,[lc]:i.ONE,[cc]:i.SRC_COLOR,[wo]:i.SRC_ALPHA,[mc]:i.SRC_ALPHA_SATURATE,[fc]:i.DST_COLOR,[uc]:i.DST_ALPHA,[hc]:i.ONE_MINUS_SRC_COLOR,[Co]:i.ONE_MINUS_SRC_ALPHA,[pc]:i.ONE_MINUS_DST_COLOR,[dc]:i.ONE_MINUS_DST_ALPHA,[gc]:i.CONSTANT_COLOR,[_c]:i.ONE_MINUS_CONSTANT_COLOR,[xc]:i.CONSTANT_ALPHA,[vc]:i.ONE_MINUS_CONSTANT_ALPHA};function Nt(R,ot,j,ht,_t,st,It,Rt,re,Kt){if(R===_n){m===!0&&(dt(i.BLEND),m=!1);return}if(m===!1&&(J(i.BLEND),m=!0),R!==nc){if(R!==d||Kt!==D){if((T!==ci||M!==ci)&&(i.blendEquation(i.FUNC_ADD),T=ci,M=ci),Kt)switch(R){case Wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case To:i.blendFunc(i.ONE,i.ONE);break;case Eo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ao:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ut("WebGLState: Invalid blending: ",R);break}else switch(R){case Wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case To:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Eo:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ao:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",R);break}C=null,y=null,b=null,w=null,x.set(0,0,0),A=0,d=R,D=Kt}return}_t=_t||ot,st=st||j,It=It||ht,(ot!==T||_t!==M)&&(i.blendEquationSeparate(ie[ot],ie[_t]),T=ot,M=_t),(j!==C||ht!==y||st!==b||It!==w)&&(i.blendFuncSeparate(Bt[j],Bt[ht],Bt[st],Bt[It]),C=j,y=ht,b=st,w=It),(Rt.equals(x)===!1||re!==A)&&(i.blendColor(Rt.r,Rt.g,Rt.b,re),x.copy(Rt),A=re),d=R,D=!1}function te(R,ot){R.side===gn?dt(i.CULL_FACE):J(i.CULL_FACE);let j=R.side===Fe;ot&&(j=!j),kt(j),R.blending===Wi&&R.transparent===!1?Nt(_n):Nt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let ht=R.stencilWrite;o.setTest(ht),ht&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ee(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function kt(R){U!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),U=R)}function $t(R){R!==jl?(J(i.CULL_FACE),R!==k&&(R===bo?i.cullFace(i.BACK):R===tc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),k=R}function de(R){R!==W&&(K&&i.lineWidth(R),W=R)}function Ee(R,ot,j){R?(J(i.POLYGON_OFFSET_FILL),(N!==ot||H!==j)&&(N=ot,H=j,a.getReversed()&&(ot=-ot),i.polygonOffset(ot,j))):dt(i.POLYGON_OFFSET_FILL)}function se(R){R?J(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function Yt(R){R===void 0&&(R=i.TEXTURE0+Z-1),tt!==R&&(i.activeTexture(R),tt=R)}function I(R,ot,j){j===void 0&&(tt===null?j=i.TEXTURE0+Z-1:j=tt);let ht=it[j];ht===void 0&&(ht={type:void 0,texture:void 0},it[j]=ht),(ht.type!==R||ht.texture!==ot)&&(tt!==j&&(i.activeTexture(j),tt=j),i.bindTexture(R,ot||O[R]),ht.type=R,ht.texture=ot)}function ve(){let R=it[tt];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Jt(){try{i.compressedTexImage2D(...arguments)}catch(R){Ut("WebGLState:",R)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(R){Ut("WebGLState:",R)}}function g(){try{i.texSubImage2D(...arguments)}catch(R){Ut("WebGLState:",R)}}function F(){try{i.texSubImage3D(...arguments)}catch(R){Ut("WebGLState:",R)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Ut("WebGLState:",R)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Ut("WebGLState:",R)}}function ct(){try{i.texStorage2D(...arguments)}catch(R){Ut("WebGLState:",R)}}function ft(){try{i.texStorage3D(...arguments)}catch(R){Ut("WebGLState:",R)}}function et(){try{i.texImage2D(...arguments)}catch(R){Ut("WebGLState:",R)}}function nt(){try{i.texImage3D(...arguments)}catch(R){Ut("WebGLState:",R)}}function mt(R){return p[R]!==void 0?p[R]:i.getParameter(R)}function V(R,ot){p[R]!==ot&&(i.pixelStorei(R,ot),p[R]=ot)}function X(R){qt.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),qt.copy(R))}function q(R){lt.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),lt.copy(R))}function at(R,ot){let j=l.get(ot);j===void 0&&(j=new WeakMap,l.set(ot,j));let ht=j.get(R);ht===void 0&&(ht=i.getUniformBlockIndex(ot,R.name),j.set(R,ht))}function vt(R,ot){let ht=l.get(ot).get(R);c.get(ot)!==ht&&(i.uniformBlockBinding(ot,ht,R.__bindingPointIndex),c.set(ot,ht))}function bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},tt=null,it={},h={},f=new WeakMap,_=[],S=null,m=!1,d=null,T=null,C=null,y=null,M=null,b=null,w=null,x=new Wt(0,0,0),A=0,D=!1,U=null,k=null,W=null,N=null,H=null,qt.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:dt,bindFramebuffer:ut,drawBuffers:pt,useProgram:Ft,setBlending:Nt,setMaterial:te,setFlipSided:kt,setCullFace:$t,setLineWidth:de,setPolygonOffset:Ee,setScissorTest:se,activeTexture:Yt,bindTexture:I,unbindTexture:ve,compressedTexImage2D:Jt,compressedTexImage3D:E,texImage2D:et,texImage3D:nt,pixelStorei:V,getParameter:mt,updateUBOMapping:at,uniformBlockBinding:vt,texStorage2D:ct,texStorage3D:ft,texSubImage2D:g,texSubImage3D:F,compressedTexSubImage2D:G,compressedTexSubImage3D:Q,scissor:X,viewport:q,reset:bt}}function lg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Lt,u=new WeakMap,p=new Set,h,f=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(E,g){return _?new OffscreenCanvas(E,g):hs("canvas")}function m(E,g,F){let G=1,Q=Jt(E);if((Q.width>F||Q.height>F)&&(G=F/Math.max(Q.width,Q.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ct=Math.floor(G*Q.width),ft=Math.floor(G*Q.height);h===void 0&&(h=S(ct,ft));let et=g?S(ct,ft):h;return et.width=ct,et.height=ft,et.getContext("2d").drawImage(E,0,0,ct,ft),Dt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ct+"x"+ft+")."),et}else return"data"in E&&Dt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function d(E){return E.generateMipmaps}function T(E){i.generateMipmap(E)}function C(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(E,g,F,G,Q,ct=!1){if(E!==null){if(i[E]!==void 0)return i[E];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ft;G&&(ft=t.get("EXT_texture_norm16"),ft||Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=g;if(g===i.RED&&(F===i.FLOAT&&(et=i.R32F),F===i.HALF_FLOAT&&(et=i.R16F),F===i.UNSIGNED_BYTE&&(et=i.R8),F===i.UNSIGNED_SHORT&&ft&&(et=ft.R16_EXT),F===i.SHORT&&ft&&(et=ft.R16_SNORM_EXT)),g===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(et=i.R8UI),F===i.UNSIGNED_SHORT&&(et=i.R16UI),F===i.UNSIGNED_INT&&(et=i.R32UI),F===i.BYTE&&(et=i.R8I),F===i.SHORT&&(et=i.R16I),F===i.INT&&(et=i.R32I)),g===i.RG&&(F===i.FLOAT&&(et=i.RG32F),F===i.HALF_FLOAT&&(et=i.RG16F),F===i.UNSIGNED_BYTE&&(et=i.RG8),F===i.UNSIGNED_SHORT&&ft&&(et=ft.RG16_EXT),F===i.SHORT&&ft&&(et=ft.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(et=i.RG8UI),F===i.UNSIGNED_SHORT&&(et=i.RG16UI),F===i.UNSIGNED_INT&&(et=i.RG32UI),F===i.BYTE&&(et=i.RG8I),F===i.SHORT&&(et=i.RG16I),F===i.INT&&(et=i.RG32I)),g===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(et=i.RGB8UI),F===i.UNSIGNED_SHORT&&(et=i.RGB16UI),F===i.UNSIGNED_INT&&(et=i.RGB32UI),F===i.BYTE&&(et=i.RGB8I),F===i.SHORT&&(et=i.RGB16I),F===i.INT&&(et=i.RGB32I)),g===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),F===i.UNSIGNED_INT&&(et=i.RGBA32UI),F===i.BYTE&&(et=i.RGBA8I),F===i.SHORT&&(et=i.RGBA16I),F===i.INT&&(et=i.RGBA32I)),g===i.RGB&&(F===i.UNSIGNED_SHORT&&ft&&(et=ft.RGB16_EXT),F===i.SHORT&&ft&&(et=ft.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),g===i.RGBA){let nt=ct?cs:Xt.getTransfer(Q);F===i.FLOAT&&(et=i.RGBA32F),F===i.HALF_FLOAT&&(et=i.RGBA16F),F===i.UNSIGNED_BYTE&&(et=nt===jt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&ft&&(et=ft.RGBA16_EXT),F===i.SHORT&&ft&&(et=ft.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function M(E,g){let F;return E?g===null||g===sn||g===qi?F=i.DEPTH24_STENCIL8:g===rn?F=i.DEPTH32F_STENCIL8:g===Xi&&(F=i.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===sn||g===qi?F=i.DEPTH_COMPONENT24:g===rn?F=i.DEPTH_COMPONENT32F:g===Xi&&(F=i.DEPTH_COMPONENT16),F}function b(E,g){return d(E)===!0||E.isFramebufferTexture&&E.minFilter!==Te&&E.minFilter!==Ae?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function w(E){let g=E.target;g.removeEventListener("dispose",w),A(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&p.delete(g)}function x(E){let g=E.target;g.removeEventListener("dispose",x),U(g)}function A(E){let g=n.get(E);if(g.__webglInit===void 0)return;let F=E.source,G=f.get(F);if(G){let Q=G[g.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&D(E),Object.keys(G).length===0&&f.delete(F)}n.remove(E)}function D(E){let g=n.get(E);i.deleteTexture(g.__webglTexture);let F=E.source,G=f.get(F);delete G[g.__cacheKey],a.memory.textures--}function U(E){let g=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(g.__webglFramebuffer[G]))for(let Q=0;Q<g.__webglFramebuffer[G].length;Q++)i.deleteFramebuffer(g.__webglFramebuffer[G][Q]);else i.deleteFramebuffer(g.__webglFramebuffer[G]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[G])}else{if(Array.isArray(g.__webglFramebuffer))for(let G=0;G<g.__webglFramebuffer.length;G++)i.deleteFramebuffer(g.__webglFramebuffer[G]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let G=0;G<g.__webglColorRenderbuffer.length;G++)g.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[G]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let F=E.textures;for(let G=0,Q=F.length;G<Q;G++){let ct=n.get(F[G]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),a.memory.textures--),n.remove(F[G])}n.remove(E)}let k=0;function W(){k=0}function N(){return k}function H(E){k=E}function Z(){let E=k;return E>=s.maxTextures&&Dt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,E}function K(E){let g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function rt(E,g){let F=n.get(E);if(E.isVideoTexture&&I(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){let G=E.image;if(G===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{dt(F,E,g);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+g)}function $(E,g){let F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){dt(F,E,g);return}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+g)}function tt(E,g){let F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){dt(F,E,g);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+g)}function it(E,g){let F=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&F.__version!==E.version){ut(F,E,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+g)}let Mt={[pr]:i.REPEAT,[un]:i.CLAMP_TO_EDGE,[mr]:i.MIRRORED_REPEAT},Tt={[Te]:i.NEAREST,[Mc]:i.NEAREST_MIPMAP_NEAREST,[As]:i.NEAREST_MIPMAP_LINEAR,[Ae]:i.LINEAR,[Zr]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},qt={[Ac]:i.NEVER,[Pc]:i.ALWAYS,[wc]:i.LESS,[La]:i.LEQUAL,[Cc]:i.EQUAL,[Da]:i.GEQUAL,[Rc]:i.GREATER,[Ic]:i.NOTEQUAL};function lt(E,g){if(g.type===rn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ae||g.magFilter===Zr||g.magFilter===As||g.magFilter===Qn||g.minFilter===Ae||g.minFilter===Zr||g.minFilter===As||g.minFilter===Qn)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Mt[g.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Mt[g.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Mt[g.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Tt[g.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Tt[g.minFilter]),g.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,qt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Te||g.minFilter!==As&&g.minFilter!==Qn||g.type===rn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function gt(E,g){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",w));let G=g.source,Q=f.get(G);Q===void 0&&(Q={},f.set(G,Q));let ct=K(g);if(ct!==E.__cacheKey){Q[ct]===void 0&&(Q[ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Q[ct].usedTimes++;let ft=Q[E.__cacheKey];ft!==void 0&&(Q[E.__cacheKey].usedTimes--,ft.usedTimes===0&&D(g)),E.__cacheKey=ct,E.__webglTexture=Q[ct].texture}return F}function O(E,g,F){return Math.floor(Math.floor(E/F)/g)}function J(E,g,F,G){let ct=E.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,F,G,g.data);else{ct.sort((V,X)=>V.start-X.start);let ft=0;for(let V=1;V<ct.length;V++){let X=ct[ft],q=ct[V],at=X.start+X.count,vt=O(q.start,g.width,4),bt=O(X.start,g.width,4);q.start<=at+1&&vt===bt&&O(q.start+q.count-1,g.width,4)===vt?X.count=Math.max(X.count,q.start+q.count-X.start):(++ft,ct[ft]=q)}ct.length=ft+1;let et=e.getParameter(i.UNPACK_ROW_LENGTH),nt=e.getParameter(i.UNPACK_SKIP_PIXELS),mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let V=0,X=ct.length;V<X;V++){let q=ct[V],at=Math.floor(q.start/4),vt=Math.ceil(q.count/4),bt=at%g.width,R=Math.floor(at/g.width),ot=vt,j=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,bt),e.pixelStorei(i.UNPACK_SKIP_ROWS,R),e.texSubImage2D(i.TEXTURE_2D,0,bt,R,ot,j,F,G,g.data)}E.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,et),e.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(i.UNPACK_SKIP_ROWS,mt)}}function dt(E,g,F){let G=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(G=i.TEXTURE_3D);let Q=gt(E,g),ct=g.source;e.bindTexture(G,E.__webglTexture,i.TEXTURE0+F);let ft=n.get(ct);if(ct.version!==ft.__version||Q===!0){if(e.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let j=Xt.getPrimaries(Xt.workingColorSpace),ht=g.colorSpace===In?null:Xt.getPrimaries(g.colorSpace),_t=g.colorSpace===In||j===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let nt=m(g.image,!1,s.maxTextureSize);nt=ve(g,nt);let mt=r.convert(g.format,g.colorSpace),V=r.convert(g.type),X=y(g.internalFormat,mt,V,g.normalized,g.colorSpace,g.isVideoTexture);lt(G,g);let q,at=g.mipmaps,vt=g.isVideoTexture!==!0,bt=ft.__version===void 0||Q===!0,R=ct.dataReady,ot=b(g,nt);if(g.isDepthTexture)X=M(g.format===jn,g.type),bt&&(vt?e.texStorage2D(i.TEXTURE_2D,1,X,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,X,nt.width,nt.height,0,mt,V,null));else if(g.isDataTexture)if(at.length>0){vt&&bt&&e.texStorage2D(i.TEXTURE_2D,ot,X,at[0].width,at[0].height);for(let j=0,ht=at.length;j<ht;j++)q=at[j],vt?R&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,q.width,q.height,mt,V,q.data):e.texImage2D(i.TEXTURE_2D,j,X,q.width,q.height,0,mt,V,q.data);g.generateMipmaps=!1}else vt?(bt&&e.texStorage2D(i.TEXTURE_2D,ot,X,nt.width,nt.height),R&&J(g,nt,mt,V)):e.texImage2D(i.TEXTURE_2D,0,X,nt.width,nt.height,0,mt,V,nt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){vt&&bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,X,at[0].width,at[0].height,nt.depth);for(let j=0,ht=at.length;j<ht;j++)if(q=at[j],g.format!==Ze)if(mt!==null)if(vt){if(R)if(g.layerUpdates.size>0){let _t=Ko(q.width,q.height,g.format,g.type);for(let st of g.layerUpdates){let It=q.data.subarray(st*_t/q.data.BYTES_PER_ELEMENT,(st+1)*_t/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,st,q.width,q.height,1,mt,It)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,q.width,q.height,nt.depth,mt,q.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,X,q.width,q.height,nt.depth,0,q.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else vt?R&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,q.width,q.height,nt.depth,mt,V,q.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,X,q.width,q.height,nt.depth,0,mt,V,q.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{vt&&bt&&e.texStorage2D(i.TEXTURE_2D,ot,X,at[0].width,at[0].height);for(let j=0,ht=at.length;j<ht;j++)q=at[j],g.format!==Ze?mt!==null?vt?R&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,q.width,q.height,mt,q.data):e.compressedTexImage2D(i.TEXTURE_2D,j,X,q.width,q.height,0,q.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?R&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,q.width,q.height,mt,V,q.data):e.texImage2D(i.TEXTURE_2D,j,X,q.width,q.height,0,mt,V,q.data)}else if(g.isDataArrayTexture)if(vt){if(bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,X,nt.width,nt.height,nt.depth),R)if(g.layerUpdates.size>0){let j=Ko(nt.width,nt.height,g.format,g.type);for(let ht of g.layerUpdates){let _t=nt.data.subarray(ht*j/nt.data.BYTES_PER_ELEMENT,(ht+1)*j/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,nt.width,nt.height,1,mt,V,_t)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,mt,V,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,X,nt.width,nt.height,nt.depth,0,mt,V,nt.data);else if(g.isData3DTexture)vt?(bt&&e.texStorage3D(i.TEXTURE_3D,ot,X,nt.width,nt.height,nt.depth),R&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,mt,V,nt.data)):e.texImage3D(i.TEXTURE_3D,0,X,nt.width,nt.height,nt.depth,0,mt,V,nt.data);else if(g.isFramebufferTexture){if(bt)if(vt)e.texStorage2D(i.TEXTURE_2D,ot,X,nt.width,nt.height);else{let j=nt.width,ht=nt.height;for(let _t=0;_t<ot;_t++)e.texImage2D(i.TEXTURE_2D,_t,X,j,ht,0,mt,V,null),j>>=1,ht>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),nt.parentNode!==j){j.appendChild(nt),p.add(g),j.onpaint=ht=>{let _t=ht.changedElements;for(let st of p)_t.includes(st.image)&&(st.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,nt);else{let _t=i.RGBA,st=i.RGBA,It=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,_t,st,It,nt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(at.length>0){if(vt&&bt){let j=Jt(at[0]);e.texStorage2D(i.TEXTURE_2D,ot,X,j.width,j.height)}for(let j=0,ht=at.length;j<ht;j++)q=at[j],vt?R&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,mt,V,q):e.texImage2D(i.TEXTURE_2D,j,X,mt,V,q);g.generateMipmaps=!1}else if(vt){if(bt){let j=Jt(nt);e.texStorage2D(i.TEXTURE_2D,ot,X,j.width,j.height)}R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,V,nt)}else e.texImage2D(i.TEXTURE_2D,0,X,mt,V,nt);d(g)&&T(G),ft.__version=ct.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function ut(E,g,F){if(g.image.length!==6)return;let G=gt(E,g),Q=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);let ct=n.get(Q);if(Q.version!==ct.__version||G===!0){e.activeTexture(i.TEXTURE0+F);let ft=Xt.getPrimaries(Xt.workingColorSpace),et=g.colorSpace===In?null:Xt.getPrimaries(g.colorSpace),nt=g.colorSpace===In||ft===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let mt=g.isCompressedTexture||g.image[0].isCompressedTexture,V=g.image[0]&&g.image[0].isDataTexture,X=[];for(let st=0;st<6;st++)!mt&&!V?X[st]=m(g.image[st],!0,s.maxCubemapSize):X[st]=V?g.image[st].image:g.image[st],X[st]=ve(g,X[st]);let q=X[0],at=r.convert(g.format,g.colorSpace),vt=r.convert(g.type),bt=y(g.internalFormat,at,vt,g.normalized,g.colorSpace),R=g.isVideoTexture!==!0,ot=ct.__version===void 0||G===!0,j=Q.dataReady,ht=b(g,q);lt(i.TEXTURE_CUBE_MAP,g);let _t;if(mt){R&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,bt,q.width,q.height);for(let st=0;st<6;st++){_t=X[st].mipmaps;for(let It=0;It<_t.length;It++){let Rt=_t[It];g.format!==Ze?at!==null?R?j&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,It,0,0,Rt.width,Rt.height,at,Rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,It,bt,Rt.width,Rt.height,0,Rt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,It,0,0,Rt.width,Rt.height,at,vt,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,It,bt,Rt.width,Rt.height,0,at,vt,Rt.data)}}}else{if(_t=g.mipmaps,R&&ot){_t.length>0&&ht++;let st=Jt(X[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,bt,st.width,st.height)}for(let st=0;st<6;st++)if(V){R?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,X[st].width,X[st].height,at,vt,X[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,bt,X[st].width,X[st].height,0,at,vt,X[st].data);for(let It=0;It<_t.length;It++){let re=_t[It].image[st].image;R?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,It+1,0,0,re.width,re.height,at,vt,re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,It+1,bt,re.width,re.height,0,at,vt,re.data)}}else{R?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,at,vt,X[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,bt,at,vt,X[st]);for(let It=0;It<_t.length;It++){let Rt=_t[It];R?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,It+1,0,0,at,vt,Rt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,It+1,bt,at,vt,Rt.image[st])}}}d(g)&&T(i.TEXTURE_CUBE_MAP),ct.__version=Q.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function pt(E,g,F,G,Q,ct){let ft=r.convert(F.format,F.colorSpace),et=r.convert(F.type),nt=y(F.internalFormat,ft,et,F.normalized,F.colorSpace),mt=n.get(g),V=n.get(F);if(V.__renderTarget=g,!mt.__hasExternalTextures){let X=Math.max(1,g.width>>ct),q=Math.max(1,g.height>>ct);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,ct,nt,X,q,g.depth,0,ft,et,null):e.texImage2D(Q,ct,nt,X,q,0,ft,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Yt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,Q,V.__webglTexture,0,se(g)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,Q,V.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(E,g,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),g.depthBuffer){let G=g.depthTexture,Q=G&&G.isDepthTexture?G.type:null,ct=M(g.stencilBuffer,Q),ft=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Yt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se(g),ct,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,se(g),ct,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ct,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,E)}else{let G=g.textures;for(let Q=0;Q<G.length;Q++){let ct=G[Q],ft=r.convert(ct.format,ct.colorSpace),et=r.convert(ct.type),nt=y(ct.internalFormat,ft,et,ct.normalized,ct.colorSpace);Yt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se(g),nt,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,se(g),nt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,nt,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ie(E,g,F){let G=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(g.depthTexture);if(Q.__renderTarget=g,(!Q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),G){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,g.depthTexture.addEventListener("dispose",w)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),lt(i.TEXTURE_CUBE_MAP,g.depthTexture);let mt=r.convert(g.depthTexture.format),V=r.convert(g.depthTexture.type),X;g.depthTexture.format===dn?X=i.DEPTH_COMPONENT24:g.depthTexture.format===jn&&(X=i.DEPTH24_STENCIL8);for(let q=0;q<6;q++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,X,g.width,g.height,0,mt,V,null)}}else rt(g.depthTexture,0);let ct=Q.__webglTexture,ft=se(g),et=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,nt=g.depthTexture.format===jn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===dn)Yt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,et,ct,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,nt,et,ct,0);else if(g.depthTexture.format===jn)Yt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,et,ct,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,nt,et,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Bt(E){let g=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){let G=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),G){let Q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,G.removeEventListener("dispose",Q)};G.addEventListener("dispose",Q),g.__depthDisposeCallback=Q}g.__boundDepthTexture=G}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(F)for(let G=0;G<6;G++)ie(g.__webglFramebuffer[G],E,G);else{let G=E.texture.mipmaps;G&&G.length>0?ie(g.__webglFramebuffer[0],E,0):ie(g.__webglFramebuffer,E,0)}else if(F){g.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[G]),g.__webglDepthbuffer[G]===void 0)g.__webglDepthbuffer[G]=i.createRenderbuffer(),Ft(g.__webglDepthbuffer[G],E,!1);else{let Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=g.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ct)}}else{let G=E.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ft(g.__webglDepthbuffer,E,!1);else{let Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ct)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(E,g,F){let G=n.get(E);g!==void 0&&pt(G.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Bt(E)}function te(E){let g=E.texture,F=n.get(E),G=n.get(g);E.addEventListener("dispose",x);let Q=E.textures,ct=E.isWebGLCubeRenderTarget===!0,ft=Q.length>1;if(ft||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=g.version,a.memory.textures++),ct){F.__webglFramebuffer=[];for(let et=0;et<6;et++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[et]=[];for(let nt=0;nt<g.mipmaps.length;nt++)F.__webglFramebuffer[et][nt]=i.createFramebuffer()}else F.__webglFramebuffer[et]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let et=0;et<g.mipmaps.length;et++)F.__webglFramebuffer[et]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ft)for(let et=0,nt=Q.length;et<nt;et++){let mt=n.get(Q[et]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Yt(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let et=0;et<Q.length;et++){let nt=Q[et];F.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[et]);let mt=r.convert(nt.format,nt.colorSpace),V=r.convert(nt.type),X=y(nt.internalFormat,mt,V,nt.normalized,nt.colorSpace,E.isXRRenderTarget===!0),q=se(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,q,X,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,F.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ft(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),lt(i.TEXTURE_CUBE_MAP,g);for(let et=0;et<6;et++)if(g.mipmaps&&g.mipmaps.length>0)for(let nt=0;nt<g.mipmaps.length;nt++)pt(F.__webglFramebuffer[et][nt],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,nt);else pt(F.__webglFramebuffer[et],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);d(g)&&T(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let et=0,nt=Q.length;et<nt;et++){let mt=Q[et],V=n.get(mt),X=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(X=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(X,V.__webglTexture),lt(X,mt),pt(F.__webglFramebuffer,E,mt,i.COLOR_ATTACHMENT0+et,X,0),d(mt)&&T(X)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(et=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,G.__webglTexture),lt(et,g),g.mipmaps&&g.mipmaps.length>0)for(let nt=0;nt<g.mipmaps.length;nt++)pt(F.__webglFramebuffer[nt],E,g,i.COLOR_ATTACHMENT0,et,nt);else pt(F.__webglFramebuffer,E,g,i.COLOR_ATTACHMENT0,et,0);d(g)&&T(et),e.unbindTexture()}E.depthBuffer&&Bt(E)}function kt(E){let g=E.textures;for(let F=0,G=g.length;F<G;F++){let Q=g[F];if(d(Q)){let ct=C(E),ft=n.get(Q).__webglTexture;e.bindTexture(ct,ft),T(ct),e.unbindTexture()}}}let $t=[],de=[];function Ee(E){if(E.samples>0){if(Yt(E)===!1){let g=E.textures,F=E.width,G=E.height,Q=i.COLOR_BUFFER_BIT,ct=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(E),et=g.length>1;if(et)for(let mt=0;mt<g.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);let nt=E.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let mt=0;mt<g.length;mt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[mt]);let V=n.get(g[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,V,0)}i.blitFramebuffer(0,0,F,G,0,0,F,G,Q,i.NEAREST),c===!0&&($t.length=0,de.length=0,$t.push(i.COLOR_ATTACHMENT0+mt),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&($t.push(ct),de.push(ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,de)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$t))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let mt=0;mt<g.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,ft.__webglColorRenderbuffer[mt]);let V=n.get(g[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,V,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){let g=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function se(E){return Math.min(s.maxSamples,E.samples)}function Yt(E){let g=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function I(E){let g=a.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function ve(E,g){let F=E.colorSpace,G=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==ls&&F!==In&&(Xt.getTransfer(F)===jt?(G!==Ze||Q!==Be)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",F)),g}function Jt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=Z,this.resetTextureUnits=W,this.getTextureUnits=N,this.setTextureUnits=H,this.setTexture2D=rt,this.setTexture2DArray=$,this.setTexture3D=tt,this.setTextureCube=it,this.rebindTextures=Nt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function cg(i,t){function e(n,s=In){let r,a=Xt.getTransfer(s);if(n===Be)return i.UNSIGNED_BYTE;if(n===$r)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Kr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Oo)return i.BYTE;if(n===Bo)return i.SHORT;if(n===Xi)return i.UNSIGNED_SHORT;if(n===Jr)return i.INT;if(n===sn)return i.UNSIGNED_INT;if(n===rn)return i.FLOAT;if(n===an)return i.HALF_FLOAT;if(n===ko)return i.ALPHA;if(n===Go)return i.RGB;if(n===Ze)return i.RGBA;if(n===dn)return i.DEPTH_COMPONENT;if(n===jn)return i.DEPTH_STENCIL;if(n===Ho)return i.RED;if(n===Qr)return i.RED_INTEGER;if(n===ti)return i.RG;if(n===jr)return i.RG_INTEGER;if(n===ta)return i.RGBA_INTEGER;if(n===ws||n===Cs||n===Rs||n===Is)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ws)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ws)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Is)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ea||n===na||n===ia||n===sa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ia)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ra||n===aa||n===oa||n===la||n===ca||n===Ps||n===ha)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ra||n===aa)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===la)return r.COMPRESSED_R11_EAC;if(n===ca)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ps)return r.COMPRESSED_RG11_EAC;if(n===ha)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===xa||n===va||n===ya||n===Sa||n===Ma||n===ba||n===Ta)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ua)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===da)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ma)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ga)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_a)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===va)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ya)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ma)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ba)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ta)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ea||n===Aa||n===wa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ea)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Aa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ca||n===Ra||n===Ls||n===Ia)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ca)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ra)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ls)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ia)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var hg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ug=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,gl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new gs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ge({vertexShader:hg,fragmentShader:ug,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new oe(new Cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_l=class extends fn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,p=null,h=null,f=null,_=null,S=typeof XRWebGLBinding<"u",m=new gl,d={},T=e.getContextAttributes(),C=null,y=null,M=[],b=[],w=new Lt,x=null,A=null,D=new ye;D.viewport=new ue;let U=new ye;U.viewport=new ue;let k=[D,U],W=new Wr,N=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let J=M[O];return J===void 0&&(J=new Oi,M[O]=J),J.getTargetRaySpace()},this.getControllerGrip=function(O){let J=M[O];return J===void 0&&(J=new Oi,M[O]=J),J.getGripSpace()},this.getHand=function(O){let J=M[O];return J===void 0&&(J=new Oi,M[O]=J),J.getHandSpace()};function Z(O){let J=b.indexOf(O.inputSource);if(J===-1)return;let dt=M[J];dt!==void 0&&(dt.update(O.inputSource,O.frame,l||a),dt.dispatchEvent({type:O.type,data:O.inputSource}))}function K(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",rt);for(let O=0;O<M.length;O++){let J=b[O];J!==null&&(b[O]=null,M[O].disconnect(J))}N=null,H=null,m.reset();for(let O in d)delete d[O];if(t.setRenderTarget(C),f=null,h=null,p=null,s=null,y=null,gt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(w.width,w.height,!1),A!==null){let O=A.camera;O.fov=A.fov,O.zoom=A.zoom,O.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",K),s.addEventListener("inputsourceschange",rt),T.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(w),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,ut=null,pt=null;T.depth&&(pt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=T.stencil?jn:dn,ut=T.stencil?qi:sn);let Ft={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};p=this.getBinding(),h=p.createProjectionLayer(Ft),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Oe(h.textureWidth,h.textureHeight,{format:Ze,type:Be,depthTexture:new Hn(h.textureWidth,h.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let dt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Oe(f.framebufferWidth,f.framebufferHeight,{format:Ze,type:Be,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),gt.setContext(s),gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function rt(O){for(let J=0;J<O.removed.length;J++){let dt=O.removed[J],ut=b.indexOf(dt);ut>=0&&(b[ut]=null,M[ut].disconnect(dt))}for(let J=0;J<O.added.length;J++){let dt=O.added[J],ut=b.indexOf(dt);if(ut===-1){for(let Ft=0;Ft<M.length;Ft++)if(Ft>=b.length){b.push(dt),ut=Ft;break}else if(b[Ft]===null){b[Ft]=dt,ut=Ft;break}if(ut===-1)break}let pt=M[ut];pt&&pt.connect(dt)}}let $=new L,tt=new L;function it(O,J,dt){$.setFromMatrixPosition(J.matrixWorld),tt.setFromMatrixPosition(dt.matrixWorld);let ut=$.distanceTo(tt),pt=J.projectionMatrix.elements,Ft=dt.projectionMatrix.elements,ie=pt[14]/(pt[10]-1),Bt=pt[14]/(pt[10]+1),Nt=(pt[9]+1)/pt[5],te=(pt[9]-1)/pt[5],kt=(pt[8]-1)/pt[0],$t=(Ft[8]+1)/Ft[0],de=ie*kt,Ee=ie*$t,se=ut/(-kt+$t),Yt=se*-kt;if(J.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Yt),O.translateZ(se),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),pt[10]===-1)O.projectionMatrix.copy(J.projectionMatrix),O.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let I=ie+se,ve=Bt+se,Jt=de-Yt,E=Ee+(ut-Yt),g=Nt*Bt/ve*I,F=te*Bt/ve*I;O.projectionMatrix.makePerspective(Jt,E,g,F,I,ve),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function Mt(O,J){J===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(J.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let J=O.near,dt=O.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(dt=m.depthFar)),W.near=U.near=D.near=J,W.far=U.far=D.far=dt,(N!==W.near||H!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),N=W.near,H=W.far),W.layers.mask=O.layers.mask|6,D.layers.mask=W.layers.mask&-5,U.layers.mask=W.layers.mask&-3;let ut=O.parent,pt=W.cameras;Mt(W,ut);for(let Ft=0;Ft<pt.length;Ft++)Mt(pt[Ft],ut);pt.length===2?it(W,D,U):W.projectionMatrix.copy(D.projectionMatrix),A===null&&O.isPerspectiveCamera&&(A={camera:O,fov:O.fov,zoom:O.zoom}),Tt(O,W,ut)};function Tt(O,J,dt){dt===null?O.matrix.copy(J.matrixWorld):(O.matrix.copy(dt.matrixWorld),O.matrix.invert(),O.matrix.multiply(J.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(J.projectionMatrix),O.projectionMatrixInverse.copy(J.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Ui*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(O){c=O,h!==null&&(h.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(O){return d[O]};let qt=null;function lt(O,J){if(u=J.getViewerPose(l||a),_=J,u!==null){let dt=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let ut=!1;dt.length!==W.cameras.length&&(W.cameras.length=0,ut=!0);for(let Bt=0;Bt<dt.length;Bt++){let Nt=dt[Bt],te=null;if(f!==null)te=f.getViewport(Nt);else{let $t=p.getViewSubImage(h,Nt);te=$t.viewport,Bt===0&&(t.setRenderTargetTextures(y,$t.colorTexture,$t.depthStencilTexture),t.setRenderTarget(y))}let kt=k[Bt];kt===void 0&&(kt=new ye,kt.layers.enable(Bt),kt.viewport=new ue,k[Bt]=kt),kt.matrix.fromArray(Nt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Nt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(te.x,te.y,te.width,te.height),Bt===0&&(W.matrix.copy(kt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),ut===!0&&W.cameras.push(kt)}let pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){p=n.getBinding();let Bt=p.getDepthInformation(dt[0]);Bt&&Bt.isValid&&Bt.texture&&m.init(Bt,s.renderState)}if(pt&&pt.includes("camera-access")&&S){t.state.unbindTexture(),p=n.getBinding();for(let Bt=0;Bt<dt.length;Bt++){let Nt=dt[Bt].camera;if(Nt){let te=d[Nt];te||(te=new gs,d[Nt]=te);let kt=p.getCameraImage(Nt);te.sourceTexture=kt}}}}for(let dt=0;dt<M.length;dt++){let ut=b[dt],pt=M[dt];ut!==null&&pt!==void 0&&pt.update(ut,J,l||a)}qt&&qt(O,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}let gt=new lh;gt.setAnimationLoop(lt),this.setAnimationLoop=function(O){qt=O},this.dispose=function(){}}},dg=new he,ph=new Ot;ph.set(-1,0,0,0,1,0,0,0,1);function fg(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Zo(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,T,C,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),p(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&f(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),S(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,T,C):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Fe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Fe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let T=t.get(d),C=T.envMap,y=T.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(dg.makeRotationFromEuler(y)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ph),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,T,C){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=C*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Fe&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){let T=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function pg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){let b=M.program;n.uniformBlockBinding(y,b)}function l(y,M){let b=s[y.id];b===void 0&&(m(y),b=u(y),s[y.id]=b,y.addEventListener("dispose",T));let w=M.program;n.updateUBOMapping(y,w);let x=t.render.frame;r[y.id]!==x&&(h(y),r[y.id]=x)}function u(y){let M=p();y.__bindingPointIndex=M;let b=i.createBuffer(),w=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,w,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,b),b}function p(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let M=s[y.id],b=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let x=0,A=b.length;x<A;x++){let D=b[x];if(Array.isArray(D))for(let U=0,k=D.length;U<k;U++)f(D[U],x,U,w);else f(D,x,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,M,b,w){if(S(y,M,b,w)===!0){let x=y.__offset,A=y.value;if(Array.isArray(A)){let D=0;for(let U=0;U<A.length;U++){let k=A[U],W=d(k);_(k,y.__data,D),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(D+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(A,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function _(y,M,b){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,b)}function S(y,M,b,w){let x=y.value,A=M+"_"+b;if(w[A]===void 0)return typeof x=="number"||typeof x=="boolean"?w[A]=x:ArrayBuffer.isView(x)?w[A]=x.slice():w[A]=x.clone(),!0;{let D=w[A];if(typeof x=="number"||typeof x=="boolean"){if(D!==x)return w[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(D.equals(x)===!1)return D.copy(x),!0}}return!1}function m(y){let M=y.uniforms,b=0,w=16;for(let A=0,D=M.length;A<D;A++){let U=Array.isArray(M[A])?M[A]:[M[A]];for(let k=0,W=U.length;k<W;k++){let N=U[k],H=Array.isArray(N.value)?N.value:[N.value];for(let Z=0,K=H.length;Z<K;Z++){let rt=H[Z],$=d(rt),tt=b%w,it=tt%$.boundary,Mt=tt+it;b+=it,Mt!==0&&w-Mt<$.storage&&(b+=w-Mt),N.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=$.storage}}}let x=b%w;return x>0&&(b+=w-x),y.__size=b,y.__cache={},this}function d(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Dt("WebGLRenderer: Unsupported uniform value type.",y),M}function T(y){let M=y.target;M.removeEventListener("dispose",T);let b=a.indexOf(M.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function C(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:C}}var mg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vn=null;function gg(){return vn===null&&(vn=new Sr(mg,16,16,ti,an),vn.name="DFG_LUT",vn.minFilter=Ae,vn.magFilter=Ae,vn.wrapS=un,vn.wrapT=un,vn.generateMipmaps=!1,vn.needsUpdate=!0),vn}var Ki=class{constructor(t={}){let{canvas:e=Dc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Be}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let S=f,m=new Set([ta,jr,Qr]),d=new Set([Be,sn,Xi,qi,$r,Kr]),T=new Uint32Array(4),C=new Int32Array(4),y=new L,M=null,b=null,w=[],x=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,U=!1,k=null,W=null,N=null,H=null;this._outputColorSpace=_e;let Z=0,K=0,rt=null,$=-1,tt=null,it=new ue,Mt=new ue,Tt=null,qt=new Wt(0),lt=0,gt=e.width,O=e.height,J=1,dt=null,ut=null,pt=new ue(0,0,gt,O),Ft=new ue(0,0,gt,O),ie=!1,Bt=new zi,Nt=!1,te=!1,kt=new he,$t=new L,de=new ue,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},se=!1;function Yt(){return rt===null?J:1}let I=n;function ve(v,P){return e.getContext(v,P)}let Jt,E,g,F,G,Q,ct,ft,et,nt,mt,V,X,q,at,vt,bt,R,ot,j,ht,_t,st;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",re,!1),e.addEventListener("webglcontextrestored",Kt,!1),e.addEventListener("webglcontextcreationerror",$e,!1),I===null){let P="webgl2";if(I=ve(P,v),I===null)throw ve(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}It()}catch(v){throw e.removeEventListener("webglcontextlost",re,!1),e.removeEventListener("webglcontextrestored",Kt,!1),e.removeEventListener("webglcontextcreationerror",$e,!1),Ut("WebGLRenderer: "+v.message),v}function It(){Jt=new bp(I),Jt.init(),ht=new cg(I,Jt),E=new fp(I,Jt,t,ht),g=new og(I,Jt),E.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),W=I.createFramebuffer(),N=I.createFramebuffer(),H=I.createFramebuffer(),F=new Ap(I),G=new Ym,Q=new lg(I,Jt,g,G,E,ht,F),ct=new Mp(D),ft=new wu(I),_t=new up(I,ft),et=new Tp(I,ft,F,_t),nt=new Cp(I,et,ft,_t,F),R=new wp(I,E,Q),at=new pp(G),mt=new qm(D,ct,Jt,E,_t,at),V=new fg(D,G),X=new Jm,q=new eg(Jt),bt=new hp(D,ct,g,nt,_,c),vt=new ag(D,nt,E),st=new pg(I,F,E,g),ot=new dp(I,Jt,F),j=new Ep(I,Jt,F),F.programs=mt.programs,D.capabilities=E,D.extensions=Jt,D.properties=G,D.renderLists=X,D.shadowMap=vt,D.state=g,D.info=F}S!==Be&&(A=new Ip(S,e.width,e.height,o,s,r));let Rt=new _l(D,I);this.xr=Rt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let v=Jt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Jt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(v){v!==void 0&&(J=v,this.setSize(gt,O,!1))},this.getSize=function(v){return v.set(gt,O)},this.setSize=function(v,P,Y=!0){if(Rt.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}gt=v,O=P,e.width=Math.floor(v*J),e.height=Math.floor(P*J),Y===!0&&(e.style.width=v+"px",e.style.height=P+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(gt*J,O*J).floor()},this.setDrawingBufferSize=function(v,P,Y){gt=v,O=P,J=Y,e.width=Math.floor(v*Y),e.height=Math.floor(P*Y),this.setViewport(0,0,v,P)},this.setEffects=function(v){if(S===Be){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let P=0;P<v.length;P++)if(v[P].isOutputPass===!0){Dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(it)},this.getViewport=function(v){return v.copy(pt)},this.setViewport=function(v,P,Y,B){v.isVector4?pt.set(v.x,v.y,v.z,v.w):pt.set(v,P,Y,B),g.viewport(it.copy(pt).multiplyScalar(J).round())},this.getScissor=function(v){return v.copy(Ft)},this.setScissor=function(v,P,Y,B){v.isVector4?Ft.set(v.x,v.y,v.z,v.w):Ft.set(v,P,Y,B),g.scissor(Mt.copy(Ft).multiplyScalar(J).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(v){g.setScissorTest(ie=v)},this.setOpaqueSort=function(v){dt=v},this.setTransparentSort=function(v){ut=v},this.getClearColor=function(v){return v.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(v=!0,P=!0,Y=!0){let B=0;if(v){let z=!1;if(rt!==null){let St=rt.texture.format;z=m.has(St)}if(z){let St=rt.texture.type,At=d.has(St),yt=bt.getClearColor(),wt=bt.getClearAlpha(),Pt=yt.r,zt=yt.g,Ht=yt.b;At?(T[0]=Pt,T[1]=zt,T[2]=Ht,T[3]=wt,I.clearBufferuiv(I.COLOR,0,T)):(C[0]=Pt,C[1]=zt,C[2]=Ht,C[3]=wt,I.clearBufferiv(I.COLOR,0,C))}else B|=I.COLOR_BUFFER_BIT}P&&(B|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(B|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&I.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),k=v},this.dispose=function(){e.removeEventListener("webglcontextlost",re,!1),e.removeEventListener("webglcontextrestored",Kt,!1),e.removeEventListener("webglcontextcreationerror",$e,!1),bt.dispose(),X.dispose(),q.dispose(),G.dispose(),ct.dispose(),nt.dispose(),_t.dispose(),st.dispose(),mt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",vl),Rt.removeEventListener("sessionend",yl),ei.stop()};function re(v){v.preventDefault(),Xo("WebGLRenderer: Context Lost."),U=!0}function Kt(){Xo("WebGLRenderer: Context Restored."),U=!1;let v=F.autoReset,P=vt.enabled,Y=vt.autoUpdate,B=vt.needsUpdate,z=vt.type;It(),F.autoReset=v,vt.enabled=P,vt.autoUpdate=Y,vt.needsUpdate=B,vt.type=z}function $e(v){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ln(v){let P=v.target;P.removeEventListener("dispose",ln),mh(P)}function mh(v){gh(v),G.remove(v)}function gh(v){let P=G.get(v).programs;P!==void 0&&(P.forEach(function(Y){mt.releaseProgram(Y)}),v.isShaderMaterial&&mt.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,Y,B,z,St){P===null&&(P=Ee);let At=z.isMesh&&z.matrixWorld.determinantAffine()<0,yt=vh(v,P,Y,B,z);g.setMaterial(B,At);let wt=Y.index,Pt=1;if(B.wireframe===!0){if(wt=et.getWireframeAttribute(Y),wt===void 0)return;Pt=2}let zt=Y.drawRange,Ht=Y.attributes.position,Ct=zt.start*Pt,Qt=(zt.start+zt.count)*Pt;St!==null&&(Ct=Math.max(Ct,St.start*Pt),Qt=Math.min(Qt,(St.start+St.count)*Pt)),wt!==null?(Ct=Math.max(Ct,0),Qt=Math.min(Qt,wt.count)):Ht!=null&&(Ct=Math.max(Ct,0),Qt=Math.min(Qt,Ht.count));let me=Qt-Ct;if(me<0||me===1/0)return;_t.setup(z,B,yt,Y,wt);let le,ne=ot;if(wt!==null&&(le=ft.get(wt),ne=j,ne.setIndex(le)),z.isMesh)B.wireframe===!0?(g.setLineWidth(B.wireframeLinewidth*Yt()),ne.setMode(I.LINES)):ne.setMode(I.TRIANGLES);else if(z.isLine){let we=B.linewidth;we===void 0&&(we=1),g.setLineWidth(we*Yt()),z.isLineSegments?ne.setMode(I.LINES):z.isLineLoop?ne.setMode(I.LINE_LOOP):ne.setMode(I.LINE_STRIP)}else z.isPoints?ne.setMode(I.POINTS):z.isSprite&&ne.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(Jt.get("WEBGL_multi_draw"))ne.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let we=z._multiDrawStarts,Et=z._multiDrawCounts,Le=z._multiDrawCount,Zt=wt?ft.get(wt).bytesPerElement:1,We=G.get(B).currentProgram.getUniforms();for(let cn=0;cn<Le;cn++)We.setValue(I,"_gl_DrawID",cn),ne.render(we[cn]/Zt,Et[cn])}else if(z.isInstancedMesh)ne.renderInstances(Ct,me,z.count);else if(Y.isInstancedBufferGeometry){let we=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Et=Math.min(Y.instanceCount,we);ne.renderInstances(Ct,me,Et)}else ne.render(Ct,me)};function xl(v,P,Y,B){k!==null&&v.isNodeMaterial&&k.setObject(B,v),Nt===!0&&at.setState(v,Y,!1),v.transparent===!0&&v.side===gn&&v.forceSinglePass===!1?(v.side=Fe,v.needsUpdate=!0,zs(v,P,B),v.side=$n,v.needsUpdate=!0,zs(v,P,B),v.side=gn):zs(v,P,B)}this.compile=function(v,P,Y=null){Y===null&&(Y=v),k!==null&&k.renderStart(v,P,Y),b=q.get(Y),b.init(P),x.push(b),Y.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),v!==Y&&v.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights(),k!==null&&k.updateLights(b.state.lightsArray),te=this.localClippingEnabled,Nt=at.init(this.clippingPlanes,te),Nt===!0&&at.setGlobalState(this.clippingPlanes,P),k!==null&&vt.render(b.state.shadowsArray,Y,P);let B=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let St=z.material;if(St)if(Array.isArray(St))for(let At=0;At<St.length;At++){let yt=St[At];xl(yt,Y,P,z),B.add(yt)}else xl(St,Y,P,z),B.add(St)}),b=x.pop(),k!==null&&k.renderEnd(),B},this.compileAsync=function(v,P,Y=null){let B=this.compile(v,P,Y);return new Promise(z=>{function St(){if(B.forEach(function(At){let wt=G.get(At).currentProgram;(wt===void 0||wt.isReady())&&B.delete(At)}),B.size===0){z(v);return}setTimeout(St,10)}Jt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Ga=null;function _h(v){Ga&&Ga(v)}function vl(){ei.stop()}function yl(){ei.start()}let ei=new lh;ei.setAnimationLoop(_h),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(v){Ga=v,Rt.setAnimationLoop(v),v===null?ei.stop():ei.start()},Rt.addEventListener("sessionstart",vl),Rt.addEventListener("sessionend",yl),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;k!==null&&k.renderStart(v,P);let Y=Rt.enabled===!0&&Rt.isPresenting===!0,B=A!==null&&(rt===null||Y)&&A.begin(D,rt);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(P),P=Rt.getCamera()),v.isScene===!0&&v.onBeforeRender(D,v,P,rt),b=q.get(v,x.length),b.init(P),b.state.textureUnits=Q.getTextureUnits(),x.push(b),kt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Bt.setFromProjectionMatrix(kt,en,P.reversedDepth),te=this.localClippingEnabled,Nt=at.init(this.clippingPlanes,te),M=X.get(v,w.length),M.init(),w.push(M),Rt.enabled===!0&&Rt.isPresenting===!0){let At=D.xr.getDepthSensingMesh();At!==null&&Ha(At,P,-1/0,D.sortObjects)}Ha(v,P,0,D.sortObjects),M.finish(),k!==null&&k.updateLights(b.state.lightsArray),D.sortObjects===!0&&M.sort(dt,ut),se=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,se&&bt.addToRenderList(M,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Nt===!0&&at.beginShadows();let z=b.state.shadowsArray;if(vt.render(z,v,P),Nt===!0&&at.endShadows(),(B&&A.hasRenderPass())===!1){let At=M.opaque,yt=M.transmissive;if(b.setupLights(),P.isArrayCamera){let wt=P.cameras;if(yt.length>0)for(let Pt=0,zt=wt.length;Pt<zt;Pt++){let Ht=wt[Pt];Ml(At,yt,v,Ht)}se&&bt.render(v);for(let Pt=0,zt=wt.length;Pt<zt;Pt++){let Ht=wt[Pt];Sl(M,v,Ht,Ht.viewport)}}else yt.length>0&&Ml(At,yt,v,P),se&&bt.render(v),Sl(M,v,P)}rt!==null&&K===0&&(Q.updateMultisampleRenderTarget(rt),Q.updateRenderTargetMipmap(rt)),B&&A.end(D),v.isScene===!0&&v.onAfterRender(D,v,P),_t.resetDefaultState(),$=-1,tt=null,x.pop(),x.length>0?(b=x[x.length-1],Q.setTextureUnits(b.state.textureUnits),Nt===!0&&at.setGlobalState(D.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,k!==null&&k.renderEnd()};function Ha(v,P,Y,B){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)Y=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLightProbeGrid)b.pushLightProbeGrid(v);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(Bt)){B&&de.setFromMatrixPosition(v.matrixWorld).applyMatrix4(kt);let At=nt.update(v),yt=v.material;yt.visible&&M.push(v,At,yt,Y,de.z,null,P)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(Bt))){let At=nt.update(v),yt=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),de.copy(v.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),de.copy(At.boundingSphere.center)),de.applyMatrix4(v.matrixWorld).applyMatrix4(kt)),Array.isArray(yt)){let wt=At.groups;for(let Pt=0,zt=wt.length;Pt<zt;Pt++){let Ht=wt[Pt],Ct=yt[Ht.materialIndex];Ct&&Ct.visible&&M.push(v,At,Ct,Y,de.z,Ht,P)}}else yt.visible&&M.push(v,At,yt,Y,de.z,null,P)}}let St=v.children;for(let At=0,yt=St.length;At<yt;At++)Ha(St[At],P,Y,B)}function Sl(v,P,Y,B){let{opaque:z,transmissive:St,transparent:At}=v;b.setupLightsView(Y),Nt===!0&&at.setGlobalState(D.clippingPlanes,Y),B&&g.viewport(it.copy(B)),z.length>0&&Bs(z,P,Y),St.length>0&&Bs(St,P,Y),At.length>0&&Bs(At,P,Y),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Ml(v,P,Y,B){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[B.id]===void 0){let Ct=Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[B.id]=new Oe(1,1,{generateMipmaps:!0,type:Ct?an:Be,minFilter:Qn,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xt.workingColorSpace})}let St=b.state.transmissionRenderTarget[B.id],At=B.viewport||it;St.setSize(At.z*D.transmissionResolutionScale,At.w*D.transmissionResolutionScale);let yt=D.getRenderTarget(),wt=D.getActiveCubeFace(),Pt=D.getActiveMipmapLevel();D.setRenderTarget(St),D.getClearColor(qt),lt=D.getClearAlpha(),lt<1&&D.setClearColor(16777215,.5),D.clear(),se&&bt.render(Y);let zt=D.toneMapping;D.toneMapping=nn;let Ht=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),b.setupLightsView(B),Nt===!0&&at.setGlobalState(D.clippingPlanes,B),Bs(v,Y,B),Q.updateMultisampleRenderTarget(St),Q.updateRenderTargetMipmap(St),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let Qt=0,me=P.length;Qt<me;Qt++){let le=P[Qt],{object:ne,geometry:we,material:Et,group:Le}=le;if(Et.side===gn&&ne.layers.test(B.layers)){let Zt=Et.side;Et.side=Fe,Et.needsUpdate=!0,bl(ne,Y,B,we,Et,Le),Et.side=Zt,Et.needsUpdate=!0,Ct=!0}}Ct===!0&&(Q.updateMultisampleRenderTarget(St),Q.updateRenderTargetMipmap(St))}D.setRenderTarget(yt,wt,Pt),D.setClearColor(qt,lt),Ht!==void 0&&(B.viewport=Ht),D.toneMapping=zt}function Bs(v,P,Y){let B=P.isScene===!0?P.overrideMaterial:null;for(let z=0,St=v.length;z<St;z++){let At=v[z],{object:yt,geometry:wt,group:Pt}=At,zt=At.material;zt.allowOverride===!0&&B!==null&&(zt=B),yt.layers.test(Y.layers)&&bl(yt,P,Y,wt,zt,Pt)}}function bl(v,P,Y,B,z,St){k!==null&&z.isNodeMaterial&&k.setObject(v,z),v.onBeforeRender(D,P,Y,B,z,St),v.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(D,P,Y,B,v,St),z.transparent===!0&&z.side===gn&&z.forceSinglePass===!1?(z.side=Fe,z.needsUpdate=!0,D.renderBufferDirect(Y,P,B,z,v,St),z.side=$n,z.needsUpdate=!0,D.renderBufferDirect(Y,P,B,z,v,St),z.side=gn):D.renderBufferDirect(Y,P,B,z,v,St),v.onAfterRender(D,P,Y,B,z,St)}function zs(v,P,Y){P.isScene!==!0&&(P=Ee);let B=G.get(v),z=b.state.lights,St=b.state.shadowsArray,At=z.state.version,yt=mt.getParameters(v,z.state,St,P,Y,b.state.lightProbeGridArray),wt=mt.getProgramCacheKey(yt),Pt=B.programs;B.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,B.fog=P.fog;let zt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;B.envMap=ct.get(v.envMap||B.environment,zt),B.envMapRotation=B.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,Pt===void 0&&(v.addEventListener("dispose",ln),Pt=new Map,B.programs=Pt);let Ht=Pt.get(wt);if(Ht!==void 0){if(B.currentProgram===Ht&&B.lightsStateVersion===At)return El(v,yt),Ht}else yt.uniforms=mt.getUniforms(v),k!==null&&v.isNodeMaterial&&k.build(v,Y,yt),v.onBeforeCompile(yt,D),Ht=mt.acquireProgram(yt,wt),Pt.set(wt,Ht),B.uniforms=yt.uniforms;let Ct=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ct.clippingPlanes=at.uniform),El(v,yt),B.needsLights=Sh(v),B.lightsStateVersion=At,B.needsLights&&(Ct.ambientLightColor.value=z.state.ambient,Ct.lightProbe.value=z.state.probe,Ct.sunLights.value=z.state.sun,Ct.sunLightShadows.value=z.state.sunShadow,Ct.directionalLights.value=z.state.directional,Ct.directionalLightShadows.value=z.state.directionalShadow,Ct.spotLights.value=z.state.spot,Ct.spotLightShadows.value=z.state.spotShadow,Ct.rectAreaLights.value=z.state.rectArea,Ct.ltc_1.value=z.state.rectAreaLTC1,Ct.ltc_2.value=z.state.rectAreaLTC2,Ct.pointLights.value=z.state.point,Ct.pointLightShadows.value=z.state.pointShadow,Ct.hemisphereLights.value=z.state.hemi,Ct.sunShadowMatrix.value=z.state.sunShadowMatrix,Ct.sunShadowCascade.value=z.state.sunShadowCascade,Ct.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ct.spotLightMatrix.value=z.state.spotLightMatrix,Ct.spotLightMap.value=z.state.spotLightMap,Ct.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=b.state.lightProbeGridArray.length>0,B.currentProgram=Ht,B.uniformsList=null,Ht}function Tl(v){if(v.uniformsList===null){let P=v.currentProgram.getUniforms();v.uniformsList=$i.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function El(v,P){let Y=G.get(v);Y.outputColorSpace=P.outputColorSpace,Y.batching=P.batching,Y.batchingColor=P.batchingColor,Y.instancing=P.instancing,Y.instancingColor=P.instancingColor,Y.instancingMorph=P.instancingMorph,Y.skinning=P.skinning,Y.morphTargets=P.morphTargets,Y.morphNormals=P.morphNormals,Y.morphColors=P.morphColors,Y.morphTargetsCount=P.morphTargetsCount,Y.numClippingPlanes=P.numClippingPlanes,Y.numIntersection=P.numClipIntersection,Y.vertexAlphas=P.vertexAlphas,Y.vertexTangents=P.vertexTangents,Y.toneMapping=P.toneMapping}function xh(v,P){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;y.setFromMatrixPosition(P.matrixWorld);for(let Y=0,B=v.length;Y<B;Y++){let z=v[Y];if(z.texture!==null&&z.boundingBox.containsPoint(y))return z}return null}function vh(v,P,Y,B,z){P.isScene!==!0&&(P=Ee),Q.resetTextureUnits();let St=P.fog,At=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?P.environment:null,yt=rt===null?D.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Xt.workingColorSpace,wt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Pt=ct.get(B.envMap||At,wt),zt=B.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ht=!!Y.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ct=!!Y.morphAttributes.position,Qt=!!Y.morphAttributes.normal,me=!!Y.morphAttributes.color,le=nn;B.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(le=D.toneMapping);let ne=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,we=ne!==void 0?ne.length:0,Et=G.get(B),Le=b.state.lights;if(Nt===!0&&(te===!0||v!==tt)){let ae=v===tt&&B.id===$;at.setState(B,v,ae)}let Zt=!1;B.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Le.state.version||Et.outputColorSpace!==yt||z.isBatchedMesh&&Et.batching===!1||!z.isBatchedMesh&&Et.batching===!0||z.isBatchedMesh&&Et.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Et.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Et.instancing===!1||!z.isInstancedMesh&&Et.instancing===!0||z.isSkinnedMesh&&Et.skinning===!1||!z.isSkinnedMesh&&Et.skinning===!0||z.isInstancedMesh&&Et.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Et.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Et.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Et.instancingMorph===!1&&z.morphTexture!==null||Et.envMap!==Pt||B.fog===!0&&Et.fog!==St||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==at.numPlanes||Et.numIntersection!==at.numIntersection)||Et.vertexAlphas!==zt||Et.vertexTangents!==Ht||Et.morphTargets!==Ct||Et.morphNormals!==Qt||Et.morphColors!==me||Et.toneMapping!==le||Et.morphTargetsCount!==we||!!Et.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Zt=!0):(Zt=!0,Et.__version=B.version);let We=Et.currentProgram;Zt===!0&&(We=zs(B,P,z),k&&B.isNodeMaterial&&k.onUpdateProgram(B,We,Et));let cn=!1,Pn=!1,mi=!1,ee=We.getUniforms(),fe=Et.uniforms;if(g.useProgram(We.program)&&(cn=!0,Pn=!0,mi=!0),B.id!==$&&($=B.id,Pn=!0),Et.needsLights){let ae=xh(b.state.lightProbeGridArray,z);Et.lightProbeGrid!==ae&&(Et.lightProbeGrid=ae,Pn=!0)}if(cn||tt!==v){g.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ee.setValue(I,"projectionMatrix",v.projectionMatrix),ee.setValue(I,"viewMatrix",v.matrixWorldInverse);let Dn=ee.map.cameraPosition;Dn!==void 0&&Dn.setValue(I,$t.setFromMatrixPosition(v.matrixWorld)),E.logarithmicDepthBuffer&&ee.setValue(I,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ee.setValue(I,"isOrthographic",v.isOrthographicCamera===!0),tt!==v&&(tt=v,Pn=!0,mi=!0)}if(Et.needsLights&&(Le.state.sunShadowMap.length>0&&ee.setValue(I,"sunShadowMap",Le.state.sunShadowMap,Q),Le.state.directionalShadowMap.length>0&&ee.setValue(I,"directionalShadowMap",Le.state.directionalShadowMap,Q),Le.state.spotShadowMap.length>0&&ee.setValue(I,"spotShadowMap",Le.state.spotShadowMap,Q),Le.state.pointShadowMap.length>0&&ee.setValue(I,"pointShadowMap",Le.state.pointShadowMap,Q)),z.isSkinnedMesh){ee.setOptional(I,z,"bindMatrix"),ee.setOptional(I,z,"bindMatrixInverse");let ae=z.skeleton;ae&&(ae.boneTexture===null&&ae.computeBoneTexture(),ee.setValue(I,"boneTexture",ae.boneTexture,Q))}z.isBatchedMesh&&(ee.setOptional(I,z,"batchingTexture"),ee.setValue(I,"batchingTexture",z._matricesTexture,Q),ee.setOptional(I,z,"batchingIdTexture"),ee.setValue(I,"batchingIdTexture",z._indirectTexture,Q),ee.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&ee.setValue(I,"batchingColorTexture",z._colorsTexture,Q));let Ln=Y.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&R.update(z,Y,We),(Pn||Et.receiveShadow!==z.receiveShadow)&&(Et.receiveShadow=z.receiveShadow,ee.setValue(I,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&P.environment!==null&&(fe.envMapIntensity.value=P.environmentIntensity),fe.dfgLUT!==void 0&&(fe.dfgLUT.value=gg()),Pn){if(ee.setValue(I,"toneMappingExposure",D.toneMappingExposure),Et.needsLights&&yh(fe,mi),St&&B.fog===!0&&V.refreshFogUniforms(fe,St),V.refreshMaterialUniforms(fe,B,J,O,b.state.transmissionRenderTarget[v.id]),Et.needsLights&&Et.lightProbeGrid){let ae=Et.lightProbeGrid;fe.probesSH.value=ae.texture,fe.probesMin.value.copy(ae.boundingBox.min),fe.probesMax.value.copy(ae.boundingBox.max),fe.probesResolution.value.copy(ae.resolution)}$i.upload(I,Tl(Et),fe,Q)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&($i.upload(I,Tl(Et),fe,Q),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ee.setValue(I,"center",z.center),ee.setValue(I,"modelViewMatrix",z.modelViewMatrix),ee.setValue(I,"normalMatrix",z.normalMatrix),ee.setValue(I,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){let ae=B.uniformsGroups;for(let Dn=0,gi=ae.length;Dn<gi;Dn++){let wl=ae[Dn];st.update(wl,We),st.bind(wl,We)}}return We}function yh(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.sunLights.needsUpdate=P,v.sunLightShadows.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function Sh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(v,P,Y){let B=G.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),G.get(v.texture).__webglTexture=P,G.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:Y,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,P){let Y=G.get(v);Y.__webglFramebuffer=P,Y.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,Y=0){rt=v,Z=P,K=Y;let B=null,z=!1,St=!1;if(v){let yt=G.get(v);if(yt.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(I.FRAMEBUFFER,yt.__webglFramebuffer),it.copy(v.viewport),Mt.copy(v.scissor),Tt=v.scissorTest,g.viewport(it),g.scissor(Mt),g.setScissorTest(Tt),$=-1;return}else if(yt.__webglFramebuffer===void 0)Q.setupRenderTarget(v);else if(yt.__hasExternalTextures)Q.rebindTextures(v,G.get(v.texture).__webglTexture,G.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let zt=v.depthTexture;if(yt.__boundDepthTexture!==zt){if(zt!==null&&G.has(zt)&&(v.width!==zt.image.width||v.height!==zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(v)}}let wt=v.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(St=!0);let Pt=G.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Pt[P])?B=Pt[P][Y]:B=Pt[P],z=!0):v.samples>0&&Q.useMultisampledRTT(v)===!1?B=G.get(v).__webglMultisampledFramebuffer:Array.isArray(Pt)?B=Pt[Y]:B=Pt,it.copy(v.viewport),Mt.copy(v.scissor),Tt=v.scissorTest}else it.copy(pt).multiplyScalar(J).floor(),Mt.copy(Ft).multiplyScalar(J).floor(),Tt=ie;if(Y!==0&&(B=W),g.bindFramebuffer(I.FRAMEBUFFER,B)&&g.drawBuffers(v,B),g.viewport(it),g.scissor(Mt),g.setScissorTest(Tt),z){let yt=G.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+P,yt.__webglTexture,Y)}else if(St){let yt=P;for(let wt=0;wt<v.textures.length;wt++){let Pt=G.get(v.textures[wt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+wt,Pt.__webglTexture,Y,yt)}}else if(v!==null&&Y!==0){let yt=G.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,yt.__webglTexture,Y)}$=-1};function Al(v){let P=G.get(v);return(P.__readFormat!==v.format||P.__readType!==v.type)&&(P.__readFormat=v.format,P.__readType=v.type,P.__formatReadable=E.textureFormatReadable(v.format),P.__typeReadable=E.textureTypeReadable(v.type)),P}this.readRenderTargetPixels=function(v,P,Y,B,z,St,At,yt=0){if(!(v&&v.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=G.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&At!==void 0&&(wt=wt[At]),wt){g.bindFramebuffer(I.FRAMEBUFFER,wt);try{let Pt=v.textures[yt],zt=Pt.format,Ht=Pt.type;v.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+yt);let Ct=Al(Pt);if(Ct.__formatReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-B&&Y>=0&&Y<=v.height-z&&I.readPixels(P,Y,B,z,ht.convert(zt),ht.convert(Ht),St)}finally{let Pt=rt!==null?G.get(rt).__webglFramebuffer:null;g.bindFramebuffer(I.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(v,P,Y,B,z,St,At,yt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=G.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&At!==void 0&&(wt=wt[At]),wt)if(P>=0&&P<=v.width-B&&Y>=0&&Y<=v.height-z){g.bindFramebuffer(I.FRAMEBUFFER,wt);let Pt=v.textures[yt],zt=Pt.format,Ht=Pt.type;v.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+yt);let Ct=Al(Pt);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Qt),I.bufferData(I.PIXEL_PACK_BUFFER,St.byteLength,I.STREAM_READ),I.readPixels(P,Y,B,z,ht.convert(zt),ht.convert(Ht),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let me=rt!==null?G.get(rt).__webglFramebuffer:null;g.bindFramebuffer(I.FRAMEBUFFER,me);let le=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Uc(I,le,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Qt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,St),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(Qt),I.deleteSync(le),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,P=null,Y=0){let B=Math.pow(2,-Y),z=Math.floor(v.image.width*B),St=Math.floor(v.image.height*B),At=P!==null?P.x:0,yt=P!==null?P.y:0;Q.setTexture2D(v,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,At,yt,z,St),g.unbindTexture()},this.copyTextureToTexture=function(v,P,Y=null,B=null,z=0,St=0){let At,yt,wt,Pt,zt,Ht,Ct,Qt,me,le=v.isCompressedTexture?v.mipmaps[St]:v.image;if(Y!==null)At=Y.max.x-Y.min.x,yt=Y.max.y-Y.min.y,wt=Y.isBox3?Y.max.z-Y.min.z:1,Pt=Y.min.x,zt=Y.min.y,Ht=Y.isBox3?Y.min.z:0;else{let fe=Math.pow(2,-z);At=Math.floor(le.width*fe),yt=Math.floor(le.height*fe),v.isDataArrayTexture?wt=le.depth:v.isData3DTexture?wt=Math.floor(le.depth*fe):wt=1,Pt=0,zt=0,Ht=0}B!==null?(Ct=B.x,Qt=B.y,me=B.z):(Ct=0,Qt=0,me=0);let ne=ht.convert(P.format),we=ht.convert(P.type),Et;P.isData3DTexture?(Q.setTexture3D(P,0),Et=I.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Q.setTexture2DArray(P,0),Et=I.TEXTURE_2D_ARRAY):(Q.setTexture2D(P,0),Et=I.TEXTURE_2D),g.activeTexture(I.TEXTURE0),g.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,P.flipY),g.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),g.pixelStorei(I.UNPACK_ALIGNMENT,P.unpackAlignment);let Le=g.getParameter(I.UNPACK_ROW_LENGTH),Zt=g.getParameter(I.UNPACK_IMAGE_HEIGHT),We=g.getParameter(I.UNPACK_SKIP_PIXELS),cn=g.getParameter(I.UNPACK_SKIP_ROWS),Pn=g.getParameter(I.UNPACK_SKIP_IMAGES);g.pixelStorei(I.UNPACK_ROW_LENGTH,le.width),g.pixelStorei(I.UNPACK_IMAGE_HEIGHT,le.height),g.pixelStorei(I.UNPACK_SKIP_PIXELS,Pt),g.pixelStorei(I.UNPACK_SKIP_ROWS,zt),g.pixelStorei(I.UNPACK_SKIP_IMAGES,Ht);let mi=v.isDataArrayTexture||v.isData3DTexture,ee=P.isDataArrayTexture||P.isData3DTexture;if(v.isDepthTexture){let fe=G.get(v),Ln=G.get(P),ae=G.get(fe.__renderTarget),Dn=G.get(Ln.__renderTarget);g.bindFramebuffer(I.READ_FRAMEBUFFER,ae.__webglFramebuffer),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let gi=0;gi<wt;gi++)mi&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(v).__webglTexture,z,Ht+gi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(P).__webglTexture,St,me+gi)),I.blitFramebuffer(Pt,zt,At,yt,Ct,Qt,At,yt,I.DEPTH_BUFFER_BIT,I.NEAREST);g.bindFramebuffer(I.READ_FRAMEBUFFER,null),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||G.has(v)){let fe=G.get(v),Ln=G.get(P);g.bindFramebuffer(I.READ_FRAMEBUFFER,N),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,H);for(let ae=0;ae<wt;ae++)mi?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,fe.__webglTexture,z,Ht+ae):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,fe.__webglTexture,z),ee?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ln.__webglTexture,St,me+ae):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ln.__webglTexture,St),z!==0?I.blitFramebuffer(Pt,zt,At,yt,Ct,Qt,At,yt,I.COLOR_BUFFER_BIT,I.NEAREST):ee?I.copyTexSubImage3D(Et,St,Ct,Qt,me+ae,Pt,zt,At,yt):I.copyTexSubImage2D(Et,St,Ct,Qt,Pt,zt,At,yt);g.bindFramebuffer(I.READ_FRAMEBUFFER,null),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ee?v.isDataTexture||v.isData3DTexture?I.texSubImage3D(Et,St,Ct,Qt,me,At,yt,wt,ne,we,le.data):P.isCompressedArrayTexture?I.compressedTexSubImage3D(Et,St,Ct,Qt,me,At,yt,wt,ne,le.data):I.texSubImage3D(Et,St,Ct,Qt,me,At,yt,wt,ne,we,le):v.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,St,Ct,Qt,At,yt,ne,we,le.data):v.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,St,Ct,Qt,le.width,le.height,ne,le.data):I.texSubImage2D(I.TEXTURE_2D,St,Ct,Qt,At,yt,ne,we,le);g.pixelStorei(I.UNPACK_ROW_LENGTH,Le),g.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Zt),g.pixelStorei(I.UNPACK_SKIP_PIXELS,We),g.pixelStorei(I.UNPACK_SKIP_ROWS,cn),g.pixelStorei(I.UNPACK_SKIP_IMAGES,Pn),St===0&&P.generateMipmaps&&I.generateMipmap(Et),g.unbindTexture()},this.initRenderTarget=function(v){G.get(v).__webglFramebuffer===void 0&&Q.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Q.setTextureCube(v,0):v.isData3DTexture?Q.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Q.setTexture2DArray(v,0):Q.setTexture2D(v,0),g.unbindTexture()},this.resetState=function(){Z=0,K=0,rt=null,g.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return en}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}};var Fs=new L;function Je(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Fs.copy(t),Fs[n]=0,Fs.normalize();let l=.5*a/(a+o),u=1-Fs.angleTo(i)/c;return Math.sign(Fs[e])===1?u*l:o/(a+o)+l+l*(1-u)}var pi=class i extends Wn{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new L,l=new L,u=new L(t,e,n).divideScalar(2).subScalar(r),p=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,_=p.length/6,S=new L,m=.5/a;for(let d=0,T=0;d<p.length;d+=3,T+=2)switch(c.fromArray(p,d),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),p[d+0]=u.x*Math.sign(c.x)+l.x*r,p[d+1]=u.y*Math.sign(c.y)+l.y*r,p[d+2]=u.z*Math.sign(c.z)+l.z*r,h[d+0]=l.x,h[d+1]=l.y,h[d+2]=l.z,Math.floor(d/_)){case 0:S.set(1,0,0),f[T+0]=Je(S,l,"z","y",r,n),f[T+1]=1-Je(S,l,"y","z",r,e);break;case 1:S.set(-1,0,0),f[T+0]=1-Je(S,l,"z","y",r,n),f[T+1]=1-Je(S,l,"y","z",r,e);break;case 2:S.set(0,1,0),f[T+0]=1-Je(S,l,"x","z",r,t),f[T+1]=Je(S,l,"z","x",r,n);break;case 3:S.set(0,-1,0),f[T+0]=1-Je(S,l,"x","z",r,t),f[T+1]=1-Je(S,l,"z","x",r,n);break;case 4:S.set(0,0,1),f[T+0]=1-Je(S,l,"x","y",r,t),f[T+1]=1-Je(S,l,"y","x",r,e);break;case 5:S.set(0,0,-1),f[T+0]=Je(S,l,"x","y",r,t),f[T+1]=1-Je(S,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var on=(i,t,e,n)=>i+(t-i)*(1-Math.exp(-e*n));function Os({sharp:i=!1,width:t=1,height:e=1,ratio:n=devicePixelRatio||1}={}){let s=matchMedia("(max-width: 780px), (pointer: coarse)").matches,r=i?Math.max(1.5,Math.min(n,3)):Math.min(n,s?1.25:1.65),a=Math.sqrt(15e5/Math.max(1,t*e));return{compact:s,pixelRatio:i?Math.min(r,a):r,interval:1e3/(s?30:60)}}function Va(i,t){i.getAnimations().forEach(e=>e.cancel()),t&&i.animate([{opacity:.3,transform:"translateY(9px) scale(.985)"},{opacity:1,transform:"none"}],{duration:440,easing:"cubic-bezier(.22,1,.36,1)"})}var ka={web:[["React","INTERFACE"],["Express","SERVICES"],["MongoDB","DATA"]],mobile:[["Flutter","INTERFACE"],["Firebase Auth","IDENTITY"],["Firestore","DATA"]],ai:[["Public sources","KNOWLEDGE"],["Gemini","RETRIEVAL + AI"],["Linked answers","RESPONSES"]]};function _g(i,{motion:t}){let e=i.querySelector("canvas"),n=Os(),s=new Ki({canvas:e,alpha:!0,antialias:!0,powerPreference:"low-power"});s.setPixelRatio(n.pixelRatio),s.outputColorSpace=_e,i.dataset.quality=n.compact?"compact":"full",s.toneMapping=hi,s.toneMappingExposure=1.15;let r=new oi,a=new ye(34,1,.1,35),o=new xe;a.position.set(0,.25,9),r.add(o),r.add(new li(16054230,1326129,3));let c=new Rn(16777215,4);c.position.set(-4,5,6),r.add(c);let l=new Rn(11655056,4.5);l.position.set(4,1,2),r.add(l);let u=new Ue({color:4549970,metalness:.62,roughness:.25}),p=new Ue({color:11848072,metalness:.58,roughness:.28}),h=new mn({color:14280873}),f=new Ue({color:7969381,metalness:.5,roughness:.35,transparent:!0,opacity:.6}),_=[],S=new Map;function m(lt,gt,O){let J=lt+gt;if(S.has(J))return S.get(J);let dt=document.createElement("canvas");dt.width=768,dt.height=510;let ut=dt.getContext("2d"),pt=ut.createLinearGradient(0,0,768,510);pt.addColorStop(0,"#2f5947"),pt.addColorStop(1,"#15392f"),ut.fillStyle=pt,ut.fillRect(0,0,768,510),ut.strokeStyle="#a4c180",ut.lineWidth=2,ut.strokeRect(27,27,714,456),ut.fillStyle="#b1c68b",ut.font="22px Segoe UI, sans-serif",ut.fillText(`0${O+1}  /  ${gt}`,60,83),ut.strokeStyle="#9ab978",ut.lineWidth=3,ut.beginPath(),ut.arc(108,184,38,0,Math.PI*2),ut.stroke(),ut.font="32px Georgia, serif",ut.textAlign="center",ut.fillText(["\u2197","\u2194","\u25CE"][O],108,195),ut.textAlign="left",ut.fillStyle="#f0f2de",ut.font=`500 ${lt.length>12?"45":"52"}px Segoe UI, sans-serif`,ut.fillText(lt,60,320),ut.fillStyle="#a4bd8c",ut.font="19px Segoe UI, sans-serif",ut.fillText(["What people experience","Where requests connect","What the app remembers"][O],60,378);let Ft=new Gn(dt);return Ft.colorSpace=_e,S.set(J,Ft),Ft}let d=[[-2.23,.16,.03],[0,-.23,.65],[2.23,.23,-.16]];d.forEach((lt,gt)=>{let O=new xe;O.position.set(...lt),O.rotation.set(-.14,gt===1?0:gt===0?.14:-.14,gt===0?-.07:gt===2?.07:0),O.add(new oe(new pi(1.96,1.43,.2,3,.1),u));let J=new oe(new Cn(1.82,1.25),new mn({map:m(...ka.web[gt],gt),toneMapped:!1}));J.position.z=.106,O.add(J);for(let ut=1;ut<=2;ut++){let pt=new oe(new pi(2.04,1.49,.04,2,.08),ut===1?p:u);pt.position.set(-.06*ut,.08*ut,-.2*ut),pt.rotation.z=.04*ut,O.add(pt)}let dt=new oe(new qn(.5,.018,8,60),p);dt.rotation.x=1.21,dt.position.set(0,-1.17,-.06),O.add(dt),o.add(O),_.push({node:O,face:J,base:O.position.clone(),index:gt})});let T=[];for(let lt=0;lt<2;lt++){let gt=new L(...d[lt]),O=new L(...d[lt+1]),J=new Vi([gt.clone().add(new L(.66,.18,.15)),gt.clone().lerp(O,.5).add(new L(0,1.2,.18)),O.clone().add(new L(-.66,.2,.15))]),dt=new oe(new vs(J,54,.012,6,!1),f);o.add(dt);for(let ut=0;ut<3;ut++){let pt=new oe(new Xn(ut===0?.048:.027,12,8),h);o.add(pt),T.push({dot:pt,curve:J,offset:ut*.31+lt*.15})}}let C=new oe(new qn(3.55,.008,6,140),f);C.rotation.set(1.05,.25,.13),C.position.set(0,-.7,-.45),o.add(C);let y=new xe;for(let lt=0;lt<7;lt++){let gt=new oe(new Xn(.018,8,6),p),O=lt/7*Math.PI*2;gt.position.set(Math.cos(O)*3.7,Math.sin(O)*1.6,-.9),y.add(gt)}o.add(y);let M=t,b=!1,w=0,x=0,A=0,D=1,U=0,k=0,W=0,N=0,H="web",Z=()=>{!w&&b&&!document.hidden&&(w=requestAnimationFrame(tt))},K="";function rt(){let lt=i.clientWidth,gt=i.clientHeight;if(!lt||!gt)return;n=Os();let O=`${lt}:${gt}:${n.pixelRatio}`;O!==K&&(K=O,s.setPixelRatio(n.pixelRatio),s.setSize(lt,gt,!1),i.dataset.quality=n.compact?"compact":"full",a.aspect=lt/gt,a.position.z=Math.max(8.9,4.1/(Math.tan(xn.degToRad(a.fov/2))*a.aspect)),a.updateProjectionMatrix(),Z())}function $(lt){if(!ka[lt])return;let gt=H!==lt;H=lt,_.forEach(({face:O,index:J})=>{O.material.map=m(...ka[lt][J],J),O.material.needsUpdate=!0}),D=M?0:1,i.dataset.mode=lt,e.setAttribute("aria-label",`Illustrative 3D architecture: ${ka[lt].map(O=>O[0]).join(" connected to ")}.`),gt&&Va(e,M),Z()}function tt(lt){if(w=0,!b||document.hidden)return;if(M&&A&&lt-A<n.interval-1){Z();return}let gt=Math.min(A?(lt-A)/1e3:1/60,.08);A=lt,M&&(x+=gt),D=M?on(D,1,7,gt):1,W=on(W,U,5,gt),N=on(N,k,5,gt),o.rotation.set(-.02+(M?N*.035:0),-.1+(M?W*.08+Math.sin(x*.13)*.025:0),-.015),_.forEach(({node:O,base:J,index:dt})=>{O.position.y=J.y+(M?Math.sin(x*.65+dt*1.2)*.065:0)-(1-D)*.24,O.rotation.x=-.14+(M?Math.sin(x*.35+dt)*.035:0)}),T.forEach(({dot:O,curve:J,offset:dt})=>O.position.copy(J.getPoint((x*.13+dt)%1))),y.rotation.z=M?Math.sin(x*.1)*.05:0,s.render(r,a),e.dataset.rendered="true",i.dataset.sceneState=M?"playing":"still",(M||D<.999)&&Z()}let it=new AbortController,{signal:Mt}=it;i.addEventListener("pointermove",lt=>{if(!M||lt.pointerType!=="mouse")return;let gt=i.getBoundingClientRect();U=(lt.clientX-gt.left)/gt.width-.5,k=(lt.clientY-gt.top)/gt.height-.5,Z()},{signal:Mt}),i.addEventListener("pointerleave",()=>{U=k=0,Z()},{signal:Mt}),i.addEventListener("portfolio:system",lt=>$(lt.detail.mode),{signal:Mt}),document.addEventListener("portfolio:motion",lt=>{M=lt.detail.enabled,A=0,e.getAnimations().forEach(gt=>gt.cancel()),Z()},{signal:Mt}),document.addEventListener("visibilitychange",()=>{document.hidden&&w?(cancelAnimationFrame(w),w=0):(A=0,Z())},{signal:Mt});let Tt=new IntersectionObserver(lt=>{b=lt[0].isIntersecting,b?(A=0,Z()):(w&&cancelAnimationFrame(w),w=0,i.dataset.sceneState="offscreen")},{threshold:0});Tt.observe(i);let qt=new ResizeObserver(rt);return qt.observe(i),e.addEventListener("webglcontextlost",lt=>{lt.preventDefault(),w&&cancelAnimationFrame(w),it.abort(),Tt.disconnect(),qt.disconnect(),s.dispose(),e.hidden=!0,i.classList.remove("is-ready"),i.dataset.renderMode="poster"},{once:!0}),$(i.dataset.mode||H),rt(),e.hidden=!1,i.classList.add("is-ready"),i.dataset.renderMode="webgl",{mode:H}}async function Qx(i,t){let e=i.querySelector("canvas"),n=()=>Os({sharp:!0,width:i.clientWidth,height:i.clientHeight}),s=n(),r=new Ki({canvas:e,alpha:!0,antialias:!0,powerPreference:"low-power"});r.setPixelRatio(s.pixelRatio),i.dataset.quality=s.compact?"compact":"full",r.outputColorSpace=_e,r.toneMapping=hi,r.toneMappingExposure=1.25;let a=new oi,o=new ye(34,1,.1,40);o.position.set(0,.12,8.7);let c=new xe;a.add(c),a.add(new li(16184282,5798235,3));let l=new Rn(16777215,4.2);l.position.set(-3,5,5),a.add(l);let u=new Rn(12969636,3.4);u.position.set(4,2,-2),a.add(u);let p=new bs(16769969,18,12);p.position.set(2,-2,4),a.add(p);let h=new Ue({color:4352848,metalness:.48,roughness:.29}),f=new Ue({color:10927232,metalness:.5,roughness:.38}),_=new Ue({color:1321764,metalness:.34,roughness:.33}),S=new Ue({color:14476743,metalness:.2,roughness:.49}),m=new Ue({color:11585927,metalness:.35,roughness:.25}),d=new Ue({color:11762512,metalness:.4,roughness:.38}),T=new Map,C=async(V,X,q)=>{let at=`${V}:${X}:${q}`;if(T.has(at))return T.get(at);let vt=(async()=>{let bt=new Image;bt.src=V,await bt.decode();let R=document.createElement("canvas");R.width=X,R.height=q;let ot=R.getContext("2d");ot.imageSmoothingEnabled=!0,ot.imageSmoothingQuality="high",ot.fillStyle="#11202c",ot.fillRect(0,0,X,q);let j=Math.min(X/bt.naturalWidth,q/bt.naturalHeight),ht=bt.naturalWidth*j,_t=bt.naturalHeight*j;ot.drawImage(bt,(X-ht)/2,(q-_t)/2,ht,_t);let st=new Gn(R);return st.colorSpace=_e,st.anisotropy=Math.min(16,r.capabilities.getMaxAnisotropy()),st})();return T.set(at,vt),vt},y=(V,X,q,at,vt=.08)=>new oe(new pi(V,X,q,3,vt),at),M=(V,X)=>new oe(new Xn(V,18,12),X),b=(V,X,q)=>new oe(new Cn(V,X),new mn({map:q,toneMapped:!1})),w=[],x=(V,X)=>(w.push({object:V,phase:X,y:V.position.y}),V);function A(V){let X=document.createElement("canvas");X.width=512,X.height=320;let q=X.getContext("2d");q.fillStyle="#173c30",q.fillRect(0,0,512,320),q.fillStyle="#adc58c",q.font="18px Segoe UI, sans-serif",q.fillText("BUILT WITH",42,54),q.fillStyle="#eff1df",q.font="500 30px Segoe UI, sans-serif",V.slice(0,3).forEach((R,ot)=>q.fillText(R,42,113+ot*56));let at=new Gn(X);at.colorSpace=_e;let vt=new xe;vt.add(y(1.65,1.06,.09,h));let bt=b(1.53,.95,at);return bt.position.z=.05,vt.add(bt),vt}async function D(V){let X=new xe,q=new xe;q.add(y(4.3,3.05,.2,h,.11));let at=await C(`/assets/${V.image}`,1536,1012),vt=b(4.04,2.66,at);vt.position.set(0,-.1,.106),q.add(vt);let bt=y(4.05,.16,.025,_,.035);bt.position.set(0,1.31,.11),q.add(bt),[d,m,S].forEach((_t,st)=>{let It=M(.024,_t);It.position.set(-1.85+st*.09,1.31,.14),q.add(It)}),q.position.set(-.3,.3,0),q.rotation.z=-.035,X.add(q);let R=y(4.47,3.18,.07,f,.12);R.position.set(-.47,.48,-.31),R.rotation.z=.035,X.add(R);let ot=y(4.55,3.22,.045,S,.1);ot.position.set(-.59,.56,-.53),ot.rotation.z=.095,X.add(ot);let j=A(V.stack);j.position.set(1.55,-1.04,.68),j.rotation.set(.06,-.1,.09),X.add(j),x(j,.6);let ht=y(.49,.49,.42,m,.09);return ht.position.set(-2.13,-1.28,.55),ht.rotation.set(.45,.4,.2),X.add(ht),x(ht,2.1),X}async function U(V,X=!1){let q=new xe,at=1.24,vt=2.69;q.add(y(at,vt,.17,_,X?.13:.105));let bt=y(at+.035,vt+.025,.055,f,X?.13:.105);bt.position.z=-.065,q.add(bt);let R=await C(V,390,844),ot=b(1.105,2.39,R);ot.position.set(0,-.006,.092),q.add(ot);let j=X?y(.29,.047,.013,_,.018):M(.019,_);j.position.set(0,1.18,.104),q.add(j);let ht=y(.29,.018,.01,S,.008);return ht.position.set(0,-1.26,.094),q.add(ht),q}async function k(){let V=new xe,X=await U("/assets/technova-mobile.jpg");X.position.set(-1.72,-.07,.35),X.rotation.set(.03,-.13,-.075),V.add(X),x(X,.5);let q=await U("/assets/technova-mobile.jpg",!0);q.position.set(-.21,-.23,.9),q.rotation.set(-.02,.08,.045),V.add(q),x(q,1.9);let at=new xe;at.add(y(1.96,2.8,.13,h,.1));let vt=await C("/assets/technova-tablet.jpg",656,944),bt=b(1.78,2.56,vt);bt.position.z=.071,at.add(bt);let R=M(.013,_);return R.position.set(0,1.33,.076),at.add(R),at.position.set(1.5,.17,-.22),at.rotation.set(.02,-.16,.065),V.add(at),x(at,3.4),V}let W=new xe,N=new oe(new qn(2.4,.008,8,120),new Ue({color:10664072,metalness:.4,roughness:.5,transparent:!0,opacity:.6}));N.rotation.set(.28,.85,-.4),N.position.set(.1,.03,-.6),W.add(N);let H=M(.061,d);H.position.set(-2.02,1.06,-.65),W.add(H),c.add(W);let Z=JSON.parse(document.getElementById("project-data").textContent),K=new Map,rt=new Set,$=V=>(K.has(V.slug)||K.set(V.slug,(V.slug==="technova"?k():D(V)).then(X=>(X.visible=!1,X.children.forEach((q,at)=>{q.userData.home=q.position.clone(),q.userData.shift=V.slug==="technova"?[q.position.x*.27,(at-1)*.12,(at-1)*.3]:[at>2?at===3?.52:-.16:-.1*at,at===3?-.22:0,at===0?.28:at<3?-at*.48:.3]}),rt.add(X),c.add(X),X))),K.get(V.slug)),tt=t.motion,it=!0,Mt=0,Tt=0,qt=0,lt=0,gt=0,O=0,J=0,dt=0,ut=0,pt=0,Ft=0,ie=0,Bt=0,Nt=null,te,kt=0,$t=1,de=i.querySelector(".world-controls"),Ee=[...document.querySelectorAll("[data-scene-project]")],se=new AbortController,Yt=se.signal,I=()=>{!Mt&&!document.hidden&&it&&(Mt=requestAnimationFrame(E))},ve="";function Jt(){let V=i.clientWidth,X=i.clientHeight;if(!V||!X)return;s=n();let q=`${V}:${X}:${s.pixelRatio}`;q!==ve&&(ve=q,r.setPixelRatio(s.pixelRatio),r.setSize(V,X,!1),i.dataset.quality=s.compact?"compact":"full",i.dataset.pixelRatio=s.pixelRatio.toFixed(2),o.aspect=V/X,o.position.z=Math.max(8.7,3.25/(Math.tan(xn.degToRad(o.fov/2))*o.aspect)),o.updateProjectionMatrix(),I())}function E(V){if(Mt=0,document.hidden||!it)return;if(tt&&Tt&&V-Tt<s.interval-1){I();return}let X=Math.min(Tt?(V-Tt)/1e3:1/60,.08);Tt=V,tt&&(qt+=X),O=tt?on(O,lt,8,X):lt,J=tt?on(J,gt,8,X):gt,$t=tt?on($t,1,8,X):1,ie=tt?on(ie,Bt,7,X):Bt,pt=on(pt,dt,5,X),Ft=on(Ft,ut,5,X),c.rotation.set(-.055+J+(tt?Ft*.04+Math.sin(qt*.24)*.022:0),-.22+O+(tt?pt*.075+Math.sin(qt*.18)*.045:0),-.035),c.position.y=(1-$t)*-.18,c.scale.setScalar(.96+$t*.04),rt.forEach(q=>{q.visible&&q.children.forEach(at=>{let vt=at.userData.home,bt=at.userData.shift;at.position.set(vt.x+bt[0]*ie,vt.y+bt[1]*ie,vt.z+bt[2]*ie)})}),w.forEach(({object:q,phase:at})=>{q.parent?.visible&&(q.position.y+=tt?Math.sin(qt*.72+at)*.075:0)}),N.rotation.z=-.4+(tt?Math.sin(qt*.16)*.1:0),r.render(a,o),e.dataset.rendered="true",i.dataset.sceneState=tt?"playing":"still",(tt||Math.abs(O-lt)+Math.abs(J-gt)+Math.abs(ie-Bt)>.001||$t<.999)&&I()}function g(V){document.getElementById("lab-title").textContent=V.name,document.getElementById("lab-stack").textContent=V.slug==="technova"?"Flutter \xB7 Firebase \xB7 Browser form-factor previews":V.stack.slice(0,3).join(" \xB7 "),document.getElementById("lab-index").textContent=`${V.number} / ${String(Z.length).padStart(2,"0")}`;let X=document.getElementById("lab-project-link");X.href=`/projects/${V.slug}/`,X.setAttribute("aria-label",`Explore ${V.name}`),Ee.forEach(q=>{q.dataset.sceneProject===V.slug?q.setAttribute("aria-current","true"):q.removeAttribute("aria-current")}),i.querySelector(".coordinate-top").textContent=V.slug==="technova"?"BROWSER FORM-FACTOR PREVIEWS":"WEB / SERVICES / DATA",e.setAttribute("aria-label",`${V.name} in a rotatable 3D preview. Use the arrow keys to rotate or choose a project below.`)}async function F(V,X=!0){let q=Z.find(bt=>bt.slug===V);if(!q)return;let at=++kt,vt=await $(q);at===kt&&(rt.forEach(bt=>{bt.visible=!1}),vt.visible=!0,te=V,i.dataset.sceneProject=V,g(q),$t=tt?0:1,Va(e,tt&&X),X&&(document.getElementById("scene-status").textContent=`Previewing ${q.name}. ${q.slug==="technova"?"Device frames show browser previews; native iOS testing is pending.":"Use the explore link to read the project."}`),I())}await F(Z[0].slug,!1),Jt(),e.hidden=!1,i.classList.add("is-ready"),i.dataset.renderMode="webgl",de.hidden=!1,Ee.forEach(V=>V.addEventListener("click",X=>{X.preventDefault(),F(V.dataset.sceneProject).catch(()=>{location.href=V.href})},{signal:Yt}));let G=i.querySelector("[data-world-spread]");function Q(V){Bt=V,G.setAttribute("aria-pressed",String(!!V)),G.textContent=V?"Assemble view":"Separate layers",i.dataset.layers=V?"separated":"assembled",I()}G.addEventListener("click",()=>Q(Bt?0:1),{signal:Yt});let ct=()=>{lt=gt=dt=ut=0,Q(0),I()};i.querySelectorAll("[data-world-rotate]").forEach(V=>V.addEventListener("click",()=>{lt=xn.clamp(lt+Number(V.dataset.worldRotate)*.22,-.65,.65),I()},{signal:Yt})),i.querySelector("[data-world-reset]").addEventListener("click",ct,{signal:Yt}),e.addEventListener("pointerdown",V=>{V.button!==0||!V.isPrimary||(Nt={id:V.pointerId,x:V.clientX,y:V.clientY,yaw:lt,pitch:gt,engaged:V.pointerType==="mouse"},Nt.engaged&&(e.setPointerCapture(V.pointerId),e.classList.add("is-dragging")))},{signal:Yt}),e.addEventListener("pointermove",V=>{let X=e.getBoundingClientRect();if(Nt&&V.pointerId===Nt.id){let q=V.clientX-Nt.x,at=V.clientY-Nt.y;if(!Nt.engaged){if(Math.abs(at)>8&&Math.abs(at)>Math.abs(q)){Nt=null;return}if(Math.abs(q)<8||Math.abs(q)<Math.abs(at)*1.2)return;Nt.engaged=!0,e.setPointerCapture(V.pointerId),e.classList.add("is-dragging")}lt=xn.clamp(Nt.yaw+q/X.width*1.7,-.65,.65),gt=xn.clamp(Nt.pitch+at/X.height*.8,-.23,.23),I()}else V.pointerType==="mouse"&&tt&&(dt=(V.clientX-X.left)/X.width-.5,ut=(V.clientY-X.top)/X.height-.5,I())},{signal:Yt});let ft=()=>{Nt&&e.hasPointerCapture(Nt.id)&&e.releasePointerCapture(Nt.id),Nt=null,e.classList.remove("is-dragging")};e.addEventListener("pointerup",ft,{signal:Yt}),e.addEventListener("pointercancel",ft,{signal:Yt}),e.addEventListener("lostpointercapture",()=>{Nt=null,e.classList.remove("is-dragging")},{signal:Yt}),e.addEventListener("pointerleave",()=>{dt=ut=0,I()},{signal:Yt}),e.addEventListener("keydown",V=>{["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home"].includes(V.key)&&(V.preventDefault(),V.key==="Home"?ct():V.key==="ArrowLeft"||V.key==="ArrowRight"?lt=xn.clamp(lt+(V.key==="ArrowRight"?.18:-.18),-.65,.65):gt=xn.clamp(gt+(V.key==="ArrowDown"?.09:-.09),-.23,.23),I())},{signal:Yt});let et=new ResizeObserver(Jt);et.observe(i);let nt=new IntersectionObserver(V=>{it=V[0].isIntersecting,it?(Tt=0,I()):(Mt&&cancelAnimationFrame(Mt),Mt=0,ft(),i.dataset.sceneState="offscreen")},{threshold:0});nt.observe(i),document.addEventListener("portfolio:motion",V=>{tt=V.detail.enabled,Tt=0,e.getAnimations().forEach(X=>X.cancel()),I()},{signal:Yt}),document.addEventListener("visibilitychange",()=>{document.hidden&&Mt?(cancelAnimationFrame(Mt),Mt=0):(Tt=0,I())},{signal:Yt}),e.addEventListener("webglcontextlost",V=>{V.preventDefault(),Mt&&cancelAnimationFrame(Mt),Mt=0,se.abort(),et.disconnect(),nt.disconnect(),r.dispose(),e.hidden=!0,de.hidden=!0,i.classList.remove("is-ready"),i.dataset.renderMode="poster",g(Z[0])},{once:!0});let mt=()=>{!s.compact&&!document.hidden&&Z.filter(V=>V.slug!==te).forEach(V=>$(V).catch(()=>{}))};"requestIdleCallback"in window?requestIdleCallback(mt,{timeout:2200}):setTimeout(mt,1e3),I()}export{Qx as initProjectWorld,_g as initStackWorld};
/*! For license information please see hero-3d.js.LEGAL.txt */
