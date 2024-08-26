(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cl="131",In={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Dn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pc=0,Ta=1,Ic=2,ul=1,Dc=2,Ii=3,Hi=0,nt=1,oi=2,hl=1,dn=0,Ni=1,Aa=2,La=3,Ca=4,Fc=5,ei=100,Bc=101,Nc=102,Ra=103,Pa=104,Uc=200,Oc=201,zc=202,Hc=203,dl=204,fl=205,kc=206,Gc=207,Vc=208,Wc=209,Xc=210,qc=0,Yc=1,jc=2,Vs=3,Zc=4,$c=5,Jc=6,Qc=7,Ur=0,Kc=1,eu=2,An=0,tu=1,nu=2,iu=3,ru=4,su=5,pl=300,Or=301,zr=302,Ws=303,Xs=304,Hr=306,ta=307,qs=1e3,Lt=1001,Ys=1002,ot=1003,Ia=1004,Da=1005,Rt=1006,au=1007,kr=1008,li=1009,ou=1010,lu=1011,Rr=1012,cu=1013,Lr=1014,Tn=1015,ri=1016,uu=1017,hu=1018,du=1019,Ui=1020,fu=1021,Ln=1022,Ot=1023,pu=1024,mu=1025,gu=Ot,si=1026,ki=1027,xu=1028,vu=1029,yu=1030,_u=1031,wu=1032,Mu=1033,Fa=33776,Ba=33777,Na=33778,Ua=33779,Oa=35840,za=35841,Ha=35842,ka=35843,bu=36196,Ga=37492,Va=37496,Su=37808,Eu=37809,Tu=37810,Au=37811,Lu=37812,Cu=37813,Ru=37814,Pu=37815,Iu=37816,Du=37817,Fu=37818,Bu=37819,Nu=37820,Uu=37821,Ou=36492,zu=37840,Hu=37841,ku=37842,Gu=37843,Vu=37844,Wu=37845,Xu=37846,qu=37847,Yu=37848,ju=37849,Zu=37850,$u=37851,Ju=37852,Qu=37853,Ku=2200,eh=2201,th=2202,Pr=2300,Ir=2301,Kr=2302,ti=2400,ni=2401,Dr=2402,na=2500,ml=2501,nh=0,bt=3e3,Gr=3001,ia=3007,ra=3002,ih=3003,gl=3004,xl=3005,vl=3006,rh=3200,sh=3201,hi=0,ah=1,es=7680,oh=519,Gi=35044,Fr=35048,Wa="300 es";class vn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const ct=[];for(let r=0;r<256;r++)ct[r]=(r<16?"0":"")+r.toString(16);const ts=Math.PI/180,js=180/Math.PI;function Vt(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ct[r&255]+ct[r>>8&255]+ct[r>>16&255]+ct[r>>24&255]+"-"+ct[e&255]+ct[e>>8&255]+"-"+ct[e>>16&15|64]+ct[e>>24&255]+"-"+ct[t&63|128]+ct[t>>8&255]+"-"+ct[t>>16&255]+ct[t>>24&255]+ct[n&255]+ct[n>>8&255]+ct[n>>16&255]+ct[n>>24&255]).toUpperCase()}function Mt(r,e,t){return Math.max(e,Math.min(t,r))}function lh(r,e){return(r%e+e)%e}function ns(r,e,t){return(1-t)*r+t*e}function Xa(r){return(r&r-1)===0&&r!==0}function ch(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}class se{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}se.prototype.isVector2=!0;class ut{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],v=n[8],_=i[0],M=i[3],x=i[6],g=i[1],b=i[4],E=i[7],L=i[2],U=i[5],S=i[8];return s[0]=a*_+o*g+l*L,s[3]=a*M+o*b+l*U,s[6]=a*x+o*E+l*S,s[1]=c*_+u*g+h*L,s[4]=c*M+u*b+h*U,s[7]=c*x+u*E+h*S,s[2]=d*_+p*g+v*L,s[5]=d*M+p*b+v*U,s[8]=d*x+p*E+v*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,p=c*s-a*l,v=t*h+n*d+i*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],a=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*s+n*l,i[3]=t*a+n*c,i[6]=t*o+n*u,i[1]=-n*s+t*l,i[4]=-n*a+t*c,i[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}ut.prototype.isMatrix3=!0;let Fn;class di{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fn===void 0&&(Fn=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Fn.width=e.width,Fn.height=e.height;const n=Fn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let uh=0;class ht extends vn{constructor(e=ht.DEFAULT_IMAGE,t=ht.DEFAULT_MAPPING,n=Lt,i=Lt,s=Rt,a=kr,o=Ot,l=li,c=1,u=bt){super(),Object.defineProperty(this,"id",{value:uh++}),this.uuid=Vt(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=Vt()),!t&&e.images[i.uuid]===void 0){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(is(i[a].image)):s.push(is(i[a]))}else s=is(i);e.images[i.uuid]={uuid:i.uuid,url:s}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qs:e.x=e.x-Math.floor(e.x);break;case Lt:e.x=e.x<0?0:1;break;case Ys:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qs:e.y=e.y-Math.floor(e.y);break;case Lt:e.y=e.y<0?0:1;break;case Ys:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}ht.DEFAULT_IMAGE=void 0;ht.DEFAULT_MAPPING=pl;ht.prototype.isTexture=!0;function is(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?di.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Xe{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],v=l[9],_=l[2],M=l[6],x=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(v-M)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(v+M)<.1&&Math.abs(c+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,E=(p+1)/2,L=(x+1)/2,U=(u+d)/4,S=(h+_)/4,V=(v+M)/4;return b>E&&b>L?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=U/n,s=S/n):E>L?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=U/i,s=V/i):L<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(L),n=S/s,i=V/s),this.set(n,i,s,t),this}let g=Math.sqrt((M-v)*(M-v)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(g)<.001&&(g=1),this.x=(M-v)/g,this.y=(h-_)/g,this.z=(d-u)/g,this.w=Math.acos((c+p+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}Xe.prototype.isVector4=!0;class Wt extends vn{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new Xe(0,0,e,t),this.scissorTest=!1,this.viewport=new Xe(0,0,e,t),this.texture=new ht(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Rt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}Wt.prototype.isWebGLRenderTarget=!0;class hh extends Wt{constructor(e,t,n){super(e,t);const i=this.texture;this.texture=[];for(let s=0;s<n;s++)this.texture[s]=i.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}hh.prototype.isWebGLMultipleRenderTargets=!0;class yl extends Wt{constructor(e,t,n){super(e,t,n),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}yl.prototype.isWebGLMultisampleRenderTarget=!0;class mt{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[a+0],p=s[a+1],v=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=v,e[t+3]=_;return}if(h!==_||l!==d||c!==p||u!==v){let M=1-o;const x=l*d+c*p+u*v+h*_,g=x>=0?1:-1,b=1-x*x;if(b>Number.EPSILON){const L=Math.sqrt(b),U=Math.atan2(L,x*g);M=Math.sin(M*U)/L,o=Math.sin(o*U)/L}const E=o*g;if(l=l*M+d*E,c=c*M+p*E,u=u*M+v*E,h=h*M+_*E,M===1-o){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],p=s[a+2],v=s[a+3];return e[t]=o*v+u*h+l*p-c*d,e[t+1]=l*v+u*d+c*h-o*p,e[t+2]=c*v+u*p+o*d-l*h,e[t+3]=u*v-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),p=l(i/2),v=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h-d*p*v;break;case"YXZ":this._x=d*u*h+c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h+d*p*v;break;case"ZXY":this._x=d*u*h-c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h-d*p*v;break;case"ZYX":this._x=d*u*h-c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h+d*p*v;break;case"YZX":this._x=d*u*h+c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h-d*p*v;break;case"XZY":this._x=d*u*h-c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}mt.prototype.isQuaternion=!0;class I{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(qa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-s*i,h=l*i+s*n-a*t,d=-s*t-a*n-o*i;return this.x=c*l+d*-s+u*-o-h*-a,this.y=u*l+d*-a+h*-s-c*-o,this.z=h*l+d*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rs.copy(this).projectOnVector(e),this.sub(rs)}reflect(e){return this.sub(rs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}I.prototype.isVector3=!0;const rs=new I,qa=new mt;class It{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>a&&(a=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>a&&(a=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),ss.copy(t.boundingBox),ss.applyMatrix4(e.matrixWorld),this.union(ss));const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bi),Ji.subVectors(this.max,bi),Bn.subVectors(e.a,bi),Nn.subVectors(e.b,bi),Un.subVectors(e.c,bi),rn.subVectors(Nn,Bn),sn.subVectors(Un,Nn),Mn.subVectors(Bn,Un);let t=[0,-rn.z,rn.y,0,-sn.z,sn.y,0,-Mn.z,Mn.y,rn.z,0,-rn.x,sn.z,0,-sn.x,Mn.z,0,-Mn.x,-rn.y,rn.x,0,-sn.y,sn.x,0,-Mn.y,Mn.x,0];return!as(t,Bn,Nn,Un,Ji)||(t=[1,0,0,0,1,0,0,0,1],!as(t,Bn,Nn,Un,Ji))?!1:(Qi.crossVectors(rn,sn),t=[Qi.x,Qi.y,Qi.z],as(t,Bn,Nn,Un,Ji))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Mi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}It.prototype.isBox3=!0;const jt=[new I,new I,new I,new I,new I,new I,new I,new I],Mi=new I,ss=new It,Bn=new I,Nn=new I,Un=new I,rn=new I,sn=new I,Mn=new I,bi=new I,Ji=new I,Qi=new I,bn=new I;function as(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){bn.fromArray(r,s);const o=i.x*Math.abs(bn.x)+i.y*Math.abs(bn.y)+i.z*Math.abs(bn.z),l=e.dot(bn),c=t.dot(bn),u=n.dot(bn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const dh=new It,Ya=new I,os=new I,ls=new I;class Rn{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):dh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ls.subVectors(e,this.center);const t=ls.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(ls.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return os.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Ya.copy(e.center).add(os)),this.expandByPoint(Ya.copy(e.center).sub(os)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zt=new I,cs=new I,Ki=new I,an=new I,us=new I,er=new I,hs=new I;class fi{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zt.copy(this.direction).multiplyScalar(t).add(this.origin),Zt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){cs.copy(e).add(t).multiplyScalar(.5),Ki.copy(t).sub(e).normalize(),an.copy(this.origin).sub(cs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ki),o=an.dot(this.direction),l=-an.dot(Ki),c=an.lengthSq(),u=Math.abs(1-a*a);let h,d,p,v;if(u>0)if(h=a*l-o,d=a*o-l,v=s*u,h>=0)if(d>=-v)if(d<=v){const _=1/u;h*=_,d*=_,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Ki).multiplyScalar(d).add(cs),p}intersectSphere(e,t){Zt.subVectors(e.center,this.origin);const n=Zt.dot(this.direction),i=Zt.dot(Zt)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||n!==n)&&(n=s),(a<i||i!==i)&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Zt)!==null}intersectTriangle(e,t,n,i,s){us.subVectors(t,e),er.subVectors(n,e),hs.crossVectors(us,er);let a=this.direction.dot(hs),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;an.subVectors(this.origin,e);const l=o*this.direction.dot(er.crossVectors(an,er));if(l<0)return null;const c=o*this.direction.dot(us.cross(an));if(c<0||l+c>a)return null;const u=-o*an.dot(hs);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,a,o,l,c,u,h,d,p,v,_,M){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=a,x[9]=o,x[13]=l,x[2]=c,x[6]=u,x[10]=h,x[14]=d,x[3]=p,x[7]=v,x[11]=_,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/On.setFromMatrixColumn(e,0).length(),s=1/On.setFromMatrixColumn(e,1).length(),a=1/On.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*h,v=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+v*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,v=c*u,_=c*h;t[0]=d+_*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,v=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,v=o*u,_=o*h;t[0]=l*u,t[4]=v*c-p,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,v=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=v*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+v,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,p=a*c,v=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=p*h-v,t[2]=v*h-p,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fh,e,ph)}lookAt(e,t,n){const i=this.elements;return Tt.subVectors(e,t),Tt.lengthSq()===0&&(Tt.z=1),Tt.normalize(),on.crossVectors(n,Tt),on.lengthSq()===0&&(Math.abs(n.z)===1?Tt.x+=1e-4:Tt.z+=1e-4,Tt.normalize(),on.crossVectors(n,Tt)),on.normalize(),tr.crossVectors(Tt,on),i[0]=on.x,i[4]=tr.x,i[8]=Tt.x,i[1]=on.y,i[5]=tr.y,i[9]=Tt.y,i[2]=on.z,i[6]=tr.z,i[10]=Tt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],v=n[2],_=n[6],M=n[10],x=n[14],g=n[3],b=n[7],E=n[11],L=n[15],U=i[0],S=i[4],V=i[8],q=i[12],Y=i[1],G=i[5],F=i[9],j=i[13],D=i[2],N=i[6],C=i[10],O=i[14],W=i[3],Z=i[7],$=i[11],ne=i[15];return s[0]=a*U+o*Y+l*D+c*W,s[4]=a*S+o*G+l*N+c*Z,s[8]=a*V+o*F+l*C+c*$,s[12]=a*q+o*j+l*O+c*ne,s[1]=u*U+h*Y+d*D+p*W,s[5]=u*S+h*G+d*N+p*Z,s[9]=u*V+h*F+d*C+p*$,s[13]=u*q+h*j+d*O+p*ne,s[2]=v*U+_*Y+M*D+x*W,s[6]=v*S+_*G+M*N+x*Z,s[10]=v*V+_*F+M*C+x*$,s[14]=v*q+_*j+M*O+x*ne,s[3]=g*U+b*Y+E*D+L*W,s[7]=g*S+b*G+E*N+L*Z,s[11]=g*V+b*F+E*C+L*$,s[15]=g*q+b*j+E*O+L*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],v=e[3],_=e[7],M=e[11],x=e[15];return v*(+s*l*h-i*c*h-s*o*d+n*c*d+i*o*p-n*l*p)+_*(+t*l*p-t*c*d+s*a*d-i*a*p+i*c*u-s*l*u)+M*(+t*c*h-t*o*p-s*a*h+n*a*p+s*o*u-n*c*u)+x*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],v=e[12],_=e[13],M=e[14],x=e[15],g=h*M*c-_*d*c+_*l*p-o*M*p-h*l*x+o*d*x,b=v*d*c-u*M*c-v*l*p+a*M*p+u*l*x-a*d*x,E=u*_*c-v*h*c+v*o*p-a*_*p-u*o*x+a*h*x,L=v*h*l-u*_*l-v*o*d+a*_*d+u*o*M-a*h*M,U=t*g+n*b+i*E+s*L;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/U;return e[0]=g*S,e[1]=(_*d*s-h*M*s-_*i*p+n*M*p+h*i*x-n*d*x)*S,e[2]=(o*M*s-_*l*s+_*i*c-n*M*c-o*i*x+n*l*x)*S,e[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*p-n*l*p)*S,e[4]=b*S,e[5]=(u*M*s-v*d*s+v*i*p-t*M*p-u*i*x+t*d*x)*S,e[6]=(v*l*s-a*M*s-v*i*c+t*M*c+a*i*x-t*l*x)*S,e[7]=(a*d*s-u*l*s+u*i*c-t*d*c-a*i*p+t*l*p)*S,e[8]=E*S,e[9]=(v*h*s-u*_*s-v*n*p+t*_*p+u*n*x-t*h*x)*S,e[10]=(a*_*s-v*o*s+v*n*c-t*_*c-a*n*x+t*o*x)*S,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*p-t*o*p)*S,e[12]=L*S,e[13]=(u*_*i-v*h*i+v*n*d-t*_*d-u*n*M+t*h*M)*S,e[14]=(v*o*i-a*_*i-v*n*l+t*_*l+a*n*M-t*o*M)*S,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*S,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,p=s*u,v=s*h,_=a*u,M=a*h,x=o*h,g=l*c,b=l*u,E=l*h,L=n.x,U=n.y,S=n.z;return i[0]=(1-(_+x))*L,i[1]=(p+E)*L,i[2]=(v-b)*L,i[3]=0,i[4]=(p-E)*U,i[5]=(1-(d+x))*U,i[6]=(M+g)*U,i[7]=0,i[8]=(v+b)*S,i[9]=(M-g)*S,i[10]=(1-(d+_))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=On.set(i[0],i[1],i[2]).length();const a=On.set(i[4],i[5],i[6]).length(),o=On.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ft.copy(this);const c=1/s,u=1/a,h=1/o;return Ft.elements[0]*=c,Ft.elements[1]*=c,Ft.elements[2]*=c,Ft.elements[4]*=u,Ft.elements[5]*=u,Ft.elements[6]*=u,Ft.elements[8]*=h,Ft.elements[9]*=h,Ft.elements[10]*=h,t.setFromRotationMatrix(Ft),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-s),h=(t+e)*l,d=(n+i)*c,p=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}Re.prototype.isMatrix4=!0;const On=new I,Ft=new Re,fh=new I(0,0,0),ph=new I(1,1,1),on=new I,tr=new I,Tt=new I,ja=new Re,Za=new mt;class pi{constructor(e=0,t=0,n=0,i=pi.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ja.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ja,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Za.setFromEuler(this),this.setFromQuaternion(Za,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new I(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}pi.prototype.isEuler=!0;pi.DefaultOrder="XYZ";pi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class mh{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let gh=0;const $a=new I,zn=new mt,$t=new Re,nr=new I,Si=new I,xh=new I,vh=new mt,Ja=new I(1,0,0),Qa=new I(0,1,0),Ka=new I(0,0,1),yh={type:"added"},eo={type:"removed"};class ke extends vn{constructor(){super(),Object.defineProperty(this,"id",{value:gh++}),this.uuid=Vt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DefaultUp.clone();const e=new I,t=new pi,n=new mt,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new ut}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=ke.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new mh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zn.setFromAxisAngle(e,t),this.quaternion.multiply(zn),this}rotateOnWorldAxis(e,t){return zn.setFromAxisAngle(e,t),this.quaternion.premultiply(zn),this}rotateX(e){return this.rotateOnAxis(Ja,e)}rotateY(e){return this.rotateOnAxis(Qa,e)}rotateZ(e){return this.rotateOnAxis(Ka,e)}translateOnAxis(e,t){return $a.copy(e).applyQuaternion(this.quaternion),this.position.add($a.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ja,e)}translateY(e){return this.translateOnAxis(Qa,e)}translateZ(e){return this.translateOnAxis(Ka,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4($t.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?nr.copy(e):nr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Si.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$t.lookAt(Si,nr,this.up):$t.lookAt(nr,Si,this.up),this.quaternion.setFromRotationMatrix($t),i&&($t.extractRotation(i.matrixWorld),zn.setFromRotationMatrix($t),this.quaternion.premultiply(zn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(yh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eo)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(eo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),$t.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$t.multiply(e.parent.matrixWorld)),e.applyMatrix4($t),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,e,xh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,vh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ke.DefaultUp=new I(0,1,0);ke.DefaultMatrixAutoUpdate=!0;ke.prototype.isObject3D=!0;const Bt=new I,Jt=new I,ds=new I,Qt=new I,Hn=new I,kn=new I,to=new I,fs=new I,ps=new I,ms=new I;class it{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Bt.subVectors(e,t),i.cross(Bt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Bt.subVectors(i,t),Jt.subVectors(n,t),ds.subVectors(e,t);const a=Bt.dot(Bt),o=Bt.dot(Jt),l=Bt.dot(ds),c=Jt.dot(Jt),u=Jt.dot(ds),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const d=1/h,p=(c*l-o*u)*d,v=(a*u-o*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Qt),Qt.x>=0&&Qt.y>=0&&Qt.x+Qt.y<=1}static getUV(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Qt),l.set(0,0),l.addScaledVector(s,Qt.x),l.addScaledVector(a,Qt.y),l.addScaledVector(o,Qt.z),l}static isFrontFacing(e,t,n,i){return Bt.subVectors(n,t),Jt.subVectors(e,t),Bt.cross(Jt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bt.subVectors(this.c,this.b),Jt.subVectors(this.a,this.b),Bt.cross(Jt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return it.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return it.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return it.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return it.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return it.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Hn.subVectors(i,n),kn.subVectors(s,n),fs.subVectors(e,n);const l=Hn.dot(fs),c=kn.dot(fs);if(l<=0&&c<=0)return t.copy(n);ps.subVectors(e,i);const u=Hn.dot(ps),h=kn.dot(ps);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Hn,a);ms.subVectors(e,s);const p=Hn.dot(ms),v=kn.dot(ms);if(v>=0&&p<=v)return t.copy(s);const _=p*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(kn,o);const M=u*v-p*h;if(M<=0&&h-u>=0&&p-v>=0)return to.subVectors(s,i),o=(h-u)/(h-u+(p-v)),t.copy(i).addScaledVector(to,o);const x=1/(M+_+d);return a=_*x,o=d*x,t.copy(n).addScaledVector(Hn,a).addScaledVector(kn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let _h=0;class xt extends vn{constructor(){super(),Object.defineProperty(this,"id",{value:_h++}),this.uuid=Vt(),this.name="",this.type="Material",this.fog=!0,this.blending=Ni,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=dl,this.blendDst=fl,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}onBuild(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===hl;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularTint&&this.specularTint.isColor&&(n.specularTint=this.specularTint.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularTintMap&&this.specularTintMap.isTexture&&(n.specularTintMap=this.specularTintMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationTint!==void 0&&(n.attenuationTint=this.attenuationTint.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==Hi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}xt.prototype.isMaterial=!0;const _l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nt={h:0,s:0,l:0},ir={h:0,s:0,l:0};function gs(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function xs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function vs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}class Ee{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=lh(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,s=2*n-i;this.r=gs(s,i,e+1/3),this.g=gs(s,i,e),this.b=gs(s,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const s=n[1],a=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(o,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=_l[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,i=this.b,s=Math.max(t,n,i),a=Math.min(t,n,i);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const u=s-a;switch(l=c<=.5?u/(s+a):u/(2-s-a),s){case t:o=(n-i)/u+(n<i?6:0);break;case n:o=(i-t)/u+2;break;case i:o=(t-n)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Nt),Nt.h+=e,Nt.s+=t,Nt.l+=n,this.setHSL(Nt.h,Nt.s,Nt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nt),e.getHSL(ir);const n=ns(Nt.h,ir.h,t),i=ns(Nt.s,ir.s,t),s=ns(Nt.l,ir.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}Ee.NAMES=_l;Ee.prototype.isColor=!0;Ee.prototype.r=1;Ee.prototype.g=1;Ee.prototype.b=1;class Vr extends xt{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ur,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Vr.prototype.isMeshBasicMaterial=!0;const je=new I,rr=new se;class $e{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Gi,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new Ee),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new se),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new I),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new Xe),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)rr.fromBufferAttribute(this,t),rr.applyMatrix3(e),this.setXY(t,rr.x,rr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)je.fromBufferAttribute(this,t),je.applyMatrix3(e),this.setXYZ(t,je.x,je.y,je.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)je.x=this.getX(t),je.y=this.getY(t),je.z=this.getZ(t),je.applyMatrix4(e),this.setXYZ(t,je.x,je.y,je.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)je.x=this.getX(t),je.y=this.getY(t),je.z=this.getZ(t),je.applyNormalMatrix(e),this.setXYZ(t,je.x,je.y,je.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)je.x=this.getX(t),je.y=this.getY(t),je.z=this.getZ(t),je.transformDirection(e),this.setXYZ(t,je.x,je.y,je.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gi&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}$e.prototype.isBufferAttribute=!0;class wl extends $e{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ml extends $e{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class wh extends $e{constructor(e,t,n){super(new Uint16Array(e),t,n)}}wh.prototype.isFloat16BufferAttribute=!0;class tt extends $e{constructor(e,t,n){super(new Float32Array(e),t,n)}}function bl(r){if(r.length===0)return-1/0;let e=r[0];for(let t=1,n=r.length;t<n;++t)r[t]>e&&(e=r[t]);return e}let Mh=0;const Ct=new Re,ys=new ke,Gn=new I,At=new It,Ei=new It,at=new I;class qe extends vn{constructor(){super(),Object.defineProperty(this,"id",{value:Mh++}),this.uuid=Vt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bl(e)>65535?Ml:wl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ut().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ct.makeRotationFromQuaternion(e),this.applyMatrix4(Ct),this}rotateX(e){return Ct.makeRotationX(e),this.applyMatrix4(Ct),this}rotateY(e){return Ct.makeRotationY(e),this.applyMatrix4(Ct),this}rotateZ(e){return Ct.makeRotationZ(e),this.applyMatrix4(Ct),this}translate(e,t,n){return Ct.makeTranslation(e,t,n),this.applyMatrix4(Ct),this}scale(e,t,n){return Ct.makeScale(e,t,n),this.applyMatrix4(Ct),this}lookAt(e){return ys.lookAt(e),ys.updateMatrix(),this.applyMatrix4(ys.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gn).negate(),this.translate(Gn.x,Gn.y,Gn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new It);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];At.setFromBufferAttribute(s),this.morphTargetsRelative?(at.addVectors(this.boundingBox.min,At.min),this.boundingBox.expandByPoint(at),at.addVectors(this.boundingBox.max,At.max),this.boundingBox.expandByPoint(at)):(this.boundingBox.expandByPoint(At.min),this.boundingBox.expandByPoint(At.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(At.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ei.setFromBufferAttribute(o),this.morphTargetsRelative?(at.addVectors(At.min,Ei.min),At.expandByPoint(at),at.addVectors(At.max,Ei.max),At.expandByPoint(at)):(At.expandByPoint(Ei.min),At.expandByPoint(Ei.max))}At.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)at.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(at));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)at.fromBufferAttribute(o,c),l&&(Gn.fromBufferAttribute(e,c),at.add(Gn)),i=Math.max(i,n.distanceToSquared(at))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeFaceNormals(){}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new $e(new Float32Array(4*o),4));const l=t.tangent.array,c=[],u=[];for(let Y=0;Y<o;Y++)c[Y]=new I,u[Y]=new I;const h=new I,d=new I,p=new I,v=new se,_=new se,M=new se,x=new I,g=new I;function b(Y,G,F){h.fromArray(i,Y*3),d.fromArray(i,G*3),p.fromArray(i,F*3),v.fromArray(a,Y*2),_.fromArray(a,G*2),M.fromArray(a,F*2),d.sub(h),p.sub(h),_.sub(v),M.sub(v);const j=1/(_.x*M.y-M.x*_.y);isFinite(j)&&(x.copy(d).multiplyScalar(M.y).addScaledVector(p,-_.y).multiplyScalar(j),g.copy(p).multiplyScalar(_.x).addScaledVector(d,-M.x).multiplyScalar(j),c[Y].add(x),c[G].add(x),c[F].add(x),u[Y].add(g),u[G].add(g),u[F].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let Y=0,G=E.length;Y<G;++Y){const F=E[Y],j=F.start,D=F.count;for(let N=j,C=j+D;N<C;N+=3)b(n[N+0],n[N+1],n[N+2])}const L=new I,U=new I,S=new I,V=new I;function q(Y){S.fromArray(s,Y*3),V.copy(S);const G=c[Y];L.copy(G),L.sub(S.multiplyScalar(S.dot(G))).normalize(),U.crossVectors(V,G);const j=U.dot(u[Y])<0?-1:1;l[Y*4]=L.x,l[Y*4+1]=L.y,l[Y*4+2]=L.z,l[Y*4+3]=j}for(let Y=0,G=E.length;Y<G;++Y){const F=E[Y],j=F.start,D=F.count;for(let N=j,C=j+D;N<C;N+=3)q(n[N+0]),q(n[N+1]),q(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new I,s=new I,a=new I,o=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),_=e.getX(d+1),M=e.getX(d+2);i.fromBufferAttribute(t,v),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,M),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,M),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(M,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const a=n[i].array,o=e.attributes[i],l=o.array,c=o.itemSize*t,u=Math.min(l.length,a.length-c);for(let h=0,d=c;h<u;h++,d++)a[d]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)at.fromBufferAttribute(e,t),at.normalize(),e.setXYZ(t,at.x,at.y,at.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,v=0;for(let _=0,M=l.length;_<M;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let x=0;x<u;x++)d[v++]=c[p++]}return new $e(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qe,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new qe().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}qe.prototype.isBufferGeometry=!0;const no=new Re,Vn=new fi,_s=new Rn,ln=new I,cn=new I,un=new I,ws=new I,Ms=new I,bs=new I,sr=new I,ar=new I,or=new I,lr=new se,cr=new se,ur=new se,Ss=new I,hr=new I;class _t extends ke{constructor(e=new qe,t=new Vr){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(s),e.ray.intersectsSphere(_s)===!1)||(no.copy(s).invert(),Vn.copy(e.ray).applyMatrix4(no),n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1))return;let a;if(n.isBufferGeometry){const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,p=n.groups,v=n.drawRange;if(o!==null)if(Array.isArray(i))for(let _=0,M=p.length;_<M;_++){const x=p[_],g=i[x.materialIndex],b=Math.max(x.start,v.start),E=Math.min(x.start+x.count,v.start+v.count);for(let L=b,U=E;L<U;L+=3){const S=o.getX(L),V=o.getX(L+1),q=o.getX(L+2);a=dr(this,g,e,Vn,l,c,u,h,d,S,V,q),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const _=Math.max(0,v.start),M=Math.min(o.count,v.start+v.count);for(let x=_,g=M;x<g;x+=3){const b=o.getX(x),E=o.getX(x+1),L=o.getX(x+2);a=dr(this,i,e,Vn,l,c,u,h,d,b,E,L),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let _=0,M=p.length;_<M;_++){const x=p[_],g=i[x.materialIndex],b=Math.max(x.start,v.start),E=Math.min(x.start+x.count,v.start+v.count);for(let L=b,U=E;L<U;L+=3){const S=L,V=L+1,q=L+2;a=dr(this,g,e,Vn,l,c,u,h,d,S,V,q),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const _=Math.max(0,v.start),M=Math.min(l.count,v.start+v.count);for(let x=_,g=M;x<g;x+=3){const b=x,E=x+1,L=x+2;a=dr(this,i,e,Vn,l,c,u,h,d,b,E,L),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}_t.prototype.isMesh=!0;function bh(r,e,t,n,i,s,a,o){let l;if(e.side===nt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side!==oi,o),l===null)return null;hr.copy(o),hr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(hr);return c<t.near||c>t.far?null:{distance:c,point:hr.clone(),object:r}}function dr(r,e,t,n,i,s,a,o,l,c,u,h){ln.fromBufferAttribute(i,c),cn.fromBufferAttribute(i,u),un.fromBufferAttribute(i,h);const d=r.morphTargetInfluences;if(s&&d){sr.set(0,0,0),ar.set(0,0,0),or.set(0,0,0);for(let v=0,_=s.length;v<_;v++){const M=d[v],x=s[v];M!==0&&(ws.fromBufferAttribute(x,c),Ms.fromBufferAttribute(x,u),bs.fromBufferAttribute(x,h),a?(sr.addScaledVector(ws,M),ar.addScaledVector(Ms,M),or.addScaledVector(bs,M)):(sr.addScaledVector(ws.sub(ln),M),ar.addScaledVector(Ms.sub(cn),M),or.addScaledVector(bs.sub(un),M)))}ln.add(sr),cn.add(ar),un.add(or)}r.isSkinnedMesh&&(r.boneTransform(c,ln),r.boneTransform(u,cn),r.boneTransform(h,un));const p=bh(r,e,t,n,ln,cn,un,Ss);if(p){o&&(lr.fromBufferAttribute(o,c),cr.fromBufferAttribute(o,u),ur.fromBufferAttribute(o,h),p.uv=it.getUV(Ss,ln,cn,un,lr,cr,ur,new se)),l&&(lr.fromBufferAttribute(l,c),cr.fromBufferAttribute(l,u),ur.fromBufferAttribute(l,h),p.uv2=it.getUV(Ss,ln,cn,un,lr,cr,ur,new se));const v={a:c,b:u,c:h,normal:new I,materialIndex:0};it.getNormal(ln,cn,un,v.normal),p.face=v}return p}class Yi extends qe{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,i,a,2),v("x","z","y",1,-1,e,n,-t,i,a,3),v("x","y","z",1,-1,e,t,n,i,s,4),v("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(h,2));function v(_,M,x,g,b,E,L,U,S,V,q){const Y=E/S,G=L/V,F=E/2,j=L/2,D=U/2,N=S+1,C=V+1;let O=0,W=0;const Z=new I;for(let $=0;$<C;$++){const ne=$*G-j;for(let pe=0;pe<N;pe++){const de=pe*Y-F;Z[_]=de*g,Z[M]=ne*b,Z[x]=D,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[M]=0,Z[x]=U>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(pe/S),h.push(1-$/V),O+=1}}for(let $=0;$<V;$++)for(let ne=0;ne<S;ne++){const pe=d+ne+N*$,de=d+ne+N*($+1),Me=d+(ne+1)+N*($+1),be=d+(ne+1)+N*$;l.push(pe,de,be),l.push(de,Me,be),W+=6}o.addGroup(p,W,q),p+=W,d+=O}}static fromJSON(e){return new Yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ci(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function pt(r){const e={};for(let t=0;t<r.length;t++){const n=ci(r[t]);for(const i in n)e[i]=n[i]}return e}const Sh={clone:ci,merge:pt};var Eh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Th=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends xt{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Eh,this.fragmentShader=Th,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ci(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}Cn.prototype.isShaderMaterial=!0;class sa extends ke{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}sa.prototype.isCamera=!0;class yt extends sa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ts*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}yt.prototype.isPerspectiveCamera=!0;const Wn=90,Xn=1;class aa extends ke{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new yt(Wn,Xn,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new I(1,0,0)),this.add(i);const s=new yt(Wn,Xn,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new I(-1,0,0)),this.add(s);const a=new yt(Wn,Xn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new I(0,1,0)),this.add(a);const o=new yt(Wn,Xn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new I(0,-1,0)),this.add(o);const l=new yt(Wn,Xn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new I(0,0,1)),this.add(l);const c=new yt(Wn,Xn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new I(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,u=e.xr.enabled,h=e.getRenderTarget();e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.xr.enabled=u}}class Wr extends ht{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Or,o=o!==void 0?o:Ln,super(e,t,n,i,s,a,o,l,c,u),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Wr.prototype.isCubeTexture=!0;class Sl extends Wt{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new Wr(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rt,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Ot,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Yi(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nt,blending:dn});s.uniforms.tEquirect.value=t;const a=new _t(i,s),o=t.minFilter;return t.minFilter===kr&&(t.minFilter=Rt),new aa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}Sl.prototype.isWebGLCubeRenderTarget=!0;const Es=new I,Ah=new I,Lh=new ut;class Kt{constructor(e=new I(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Es.subVectors(n,t).cross(Ah.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Es),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lh.getNormalMatrix(e),i=this.coplanarPoint(Es).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Kt.prototype.isPlane=!0;const qn=new Rn,fr=new I;class Xr{constructor(e=new Kt,t=new Kt,n=new Kt,i=new Kt,s=new Kt,a=new Kt){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],p=n[9],v=n[10],_=n[11],M=n[12],x=n[13],g=n[14],b=n[15];return t[0].setComponents(o-i,h-l,_-d,b-M).normalize(),t[1].setComponents(o+i,h+l,_+d,b+M).normalize(),t[2].setComponents(o+s,h+c,_+p,b+x).normalize(),t[3].setComponents(o-s,h-c,_-p,b-x).normalize(),t[4].setComponents(o-a,h-u,_-v,b-g).normalize(),t[5].setComponents(o+a,h+u,_+v,b+g).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSprite(e){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(fr.x=i.normal.x>0?e.max.x:e.min.x,fr.y=i.normal.y>0?e.max.y:e.min.y,fr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function El(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Ch(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,p=r.createBuffer();r.bindBuffer(u,p),r.bufferData(u,h,d),c.onUploadCallback();let v=5126;return h instanceof Float32Array?v=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?c.isFloat16BufferAttribute?t?v=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):v=5123:h instanceof Int16Array?v=5122:h instanceof Uint32Array?v=5125:h instanceof Int32Array?v=5124:h instanceof Int8Array?v=5120:(h instanceof Uint8Array||h instanceof Uint8ClampedArray)&&(v=5121),{buffer:p,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,p=u.updateRange;r.bindBuffer(h,c),p.count===-1?r.bufferSubData(h,0,d):(t?r.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):r.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class oa extends qe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,p=[],v=[],_=[],M=[];for(let x=0;x<u;x++){const g=x*d-a;for(let b=0;b<c;b++){const E=b*h-s;v.push(E,-g,0),_.push(0,0,1),M.push(b/o),M.push(1-x/l)}}for(let x=0;x<l;x++)for(let g=0;g<o;g++){const b=g+c*x,E=g+c*(x+1),L=g+1+c*(x+1),U=g+1+c*x;p.push(b,E,U),p.push(E,L,U)}this.setIndex(p),this.setAttribute("position",new tt(v,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(M,2))}static fromJSON(e){return new oa(e.width,e.height,e.widthSegments,e.heightSegments)}}var Rh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ph=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ih=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,Dh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,Fh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bh="vec3 transformed = vec3( position );",Nh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uh=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in vec3 f90, const in float dotVH ) {
	float fresnel = exp2( ( -5.55473 * dotVH - 6.98316 ) * dotVH );
	return ( f90 - f0 ) * fresnel + f0;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in vec3 f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, vec3( 1.0 ), dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,Oh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,jh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,Zh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$h=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Qh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ed="gl_FragColor = linearToOutputTexel( gl_FragColor );",td=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,nd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,id=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,od=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,ld=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,cd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,dd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,fd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pd=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,md=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
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
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
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
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,gd=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,xd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vd=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,yd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_d=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,wd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	#ifdef SPECULAR
		vec3 specularIntensityFactor = vec3( specularIntensity );
		vec3 specularTintFactor = specularTint;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARTINTMAP
			specularTintFactor *= specularTintMapTexelToLinear( texture2D( specularTintMap, vUv ) ).rgb;
		#endif
		material.specularColorF90 = mix( specularIntensityFactor, vec3( 1.0 ), metalnessFactor );
	#else
		vec3 specularIntensityFactor = vec3( 1.0 );
		vec3 specularTintFactor = vec3( 1.0 );
		material.specularColorF90 = vec3( 1.0 );
	#endif
	material.specularColor = mix( min( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ) * specularTintFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
	material.specularColorF90 = vec3( 1.0 );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,Md=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
	vec3 specularColorF90;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), vec3( 1.0 ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularColorF90, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,Ed=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Td=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ad=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ld=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Rd=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Id=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,Ud=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,Od=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Hd=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Gd=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Vd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Wd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Xd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,qd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$d=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Kd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ef=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,tf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,sf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,af=`#ifdef USE_SKINNING
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
#endif`,of=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uf=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hf=`#ifdef USE_TRANSMISSION
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition.xyz / vWorldPosition.w;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	float ior = ( 1.0 + 0.4 * reflectivity ) / ( 1.0 - 0.4 * reflectivity );
	vec3 transmission = transmissionFactor * getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationTint, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission, transmissionFactor );
#endif`,df=`#ifdef USE_TRANSMISSION
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
	varying vec4 vWorldPosition;
	vec3 getVolumeTransmissionRay(vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix) {
		vec3 refractionVector = refract(-v, normalize(n), 1.0 / ior);
		vec3 modelScale;
		modelScale.x = length(vec3(modelMatrix[0].xyz));
		modelScale.y = length(vec3(modelMatrix[1].xyz));
		modelScale.z = length(vec3(modelMatrix[2].xyz));
		return normalize(refractionVector) * thickness * modelScale;
	}
	float applyIorToRoughness(float roughness, float ior) {
		return roughness * clamp(ior * 2.0 - 2.0, 0.0, 1.0);
	}
	vec3 getTransmissionSample(vec2 fragCoord, float roughness, float ior) {
		float framebufferLod = log2(transmissionSamplerSize.x) * applyIorToRoughness(roughness, ior);
		return texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod).rgb;
	}
	vec3 applyVolumeAttenuation(vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance) {
		if (attenuationDistance == 0.0) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log(attenuationColor) / attenuationDistance;
			vec3 transmittance = exp(-attenuationCoefficient * transmissionDistance);			return transmittance * radiance;
		}
	}
	vec3 getIBLVolumeRefraction(vec3 n, vec3 v, float perceptualRoughness, vec3 baseColor, vec3 specularColor,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance) {
		vec3 transmissionRay = getVolumeTransmissionRay(n, v, thickness, ior, modelMatrix);
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4(refractedRayExit, 1.0);
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec3 transmittedLight = getTransmissionSample(refractionCoords, perceptualRoughness, ior);
		vec3 attenuatedColor = applyVolumeAttenuation(transmittedLight, length(transmissionRay), attenuationColor, attenuationDistance);
		return (1.0 - specularColor) * attenuatedColor * baseColor;
	}
#endif`,ff=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,pf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,mf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,gf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,xf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,vf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,yf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_f=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mf=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ef=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Tf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Af=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Lf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,If=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Df=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,Ff=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bf=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uf=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
		#ifdef USE_TANGENT
			vTangent = normalize( transformedTangent );
			vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#endif
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Of=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,Hf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kf=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,Gf=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationTint;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularTint;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARTINTMAP
		uniform sampler2D specularTintMap;
	#endif
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <transmission_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vf=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#ifdef USE_TRANSMISSION
	varying vec4 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
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
	vWorldPosition = worldPosition;
#endif
}`,Wf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,Xf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,jf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Zf=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$f=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Jf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`;const Ue={alphamap_fragment:Rh,alphamap_pars_fragment:Ph,alphatest_fragment:Ih,aomap_fragment:Dh,aomap_pars_fragment:Fh,begin_vertex:Bh,beginnormal_vertex:Nh,bsdfs:Uh,bumpmap_pars_fragment:Oh,clipping_planes_fragment:zh,clipping_planes_pars_fragment:Hh,clipping_planes_pars_vertex:kh,clipping_planes_vertex:Gh,color_fragment:Vh,color_pars_fragment:Wh,color_pars_vertex:Xh,color_vertex:qh,common:Yh,cube_uv_reflection_fragment:jh,defaultnormal_vertex:Zh,displacementmap_pars_vertex:$h,displacementmap_vertex:Jh,emissivemap_fragment:Qh,emissivemap_pars_fragment:Kh,encodings_fragment:ed,encodings_pars_fragment:td,envmap_fragment:nd,envmap_common_pars_fragment:id,envmap_pars_fragment:rd,envmap_pars_vertex:sd,envmap_physical_pars_fragment:gd,envmap_vertex:ad,fog_vertex:od,fog_pars_vertex:ld,fog_fragment:cd,fog_pars_fragment:ud,gradientmap_pars_fragment:hd,lightmap_fragment:dd,lightmap_pars_fragment:fd,lights_lambert_vertex:pd,lights_pars_begin:md,lights_toon_fragment:xd,lights_toon_pars_fragment:vd,lights_phong_fragment:yd,lights_phong_pars_fragment:_d,lights_physical_fragment:wd,lights_physical_pars_fragment:Md,lights_fragment_begin:bd,lights_fragment_maps:Sd,lights_fragment_end:Ed,logdepthbuf_fragment:Td,logdepthbuf_pars_fragment:Ad,logdepthbuf_pars_vertex:Ld,logdepthbuf_vertex:Cd,map_fragment:Rd,map_pars_fragment:Pd,map_particle_fragment:Id,map_particle_pars_fragment:Dd,metalnessmap_fragment:Fd,metalnessmap_pars_fragment:Bd,morphnormal_vertex:Nd,morphtarget_pars_vertex:Ud,morphtarget_vertex:Od,normal_fragment_begin:zd,normal_fragment_maps:Hd,normalmap_pars_fragment:kd,clearcoat_normal_fragment_begin:Gd,clearcoat_normal_fragment_maps:Vd,clearcoat_pars_fragment:Wd,packing:Xd,premultiplied_alpha_fragment:qd,project_vertex:Yd,dithering_fragment:jd,dithering_pars_fragment:Zd,roughnessmap_fragment:$d,roughnessmap_pars_fragment:Jd,shadowmap_pars_fragment:Qd,shadowmap_pars_vertex:Kd,shadowmap_vertex:ef,shadowmask_pars_fragment:tf,skinbase_vertex:nf,skinning_pars_vertex:rf,skinning_vertex:sf,skinnormal_vertex:af,specularmap_fragment:of,specularmap_pars_fragment:lf,tonemapping_fragment:cf,tonemapping_pars_fragment:uf,transmission_fragment:hf,transmission_pars_fragment:df,uv_pars_fragment:ff,uv_pars_vertex:pf,uv_vertex:mf,uv2_pars_fragment:gf,uv2_pars_vertex:xf,uv2_vertex:vf,worldpos_vertex:yf,background_frag:_f,background_vert:wf,cube_frag:Mf,cube_vert:bf,depth_frag:Sf,depth_vert:Ef,distanceRGBA_frag:Tf,distanceRGBA_vert:Af,equirect_frag:Lf,equirect_vert:Cf,linedashed_frag:Rf,linedashed_vert:Pf,meshbasic_frag:If,meshbasic_vert:Df,meshlambert_frag:Ff,meshlambert_vert:Bf,meshmatcap_frag:Nf,meshmatcap_vert:Uf,meshtoon_frag:Of,meshtoon_vert:zf,meshphong_frag:Hf,meshphong_vert:kf,meshphysical_frag:Gf,meshphysical_vert:Vf,normal_frag:Wf,normal_vert:Xf,points_frag:qf,points_vert:Yf,shadow_frag:jf,shadow_vert:Zf,sprite_frag:$f,sprite_vert:Jf},he={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ut},uv2Transform:{value:new ut},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new ut}}},kt={basic:{uniforms:pt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:pt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.fog,he.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:pt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:pt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:pt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:pt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:pt([he.points,he.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:pt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:pt([he.common,he.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:pt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.normal_vert,fragmentShader:Ue.normal_frag},sprite:{uniforms:pt([he.sprite,he.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},cube:{uniforms:pt([he.envmap,{opacity:{value:1}}]),vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:pt([he.common,he.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:pt([he.lights,he.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};kt.physical={uniforms:pt([kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new se(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new Ee(0)},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationTint:{value:new Ee(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularTint:{value:new Ee(1,1,1)},specularTintMap:{value:null}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};function Qf(r,e,t,n,i){const s=new Ee(0);let a=0,o,l,c=null,u=0,h=null;function d(v,_){let M=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=e.get(x));const g=r.xr,b=g.getSession&&g.getSession();b&&b.environmentBlendMode==="additive"&&(x=null),x===null?p(s,a):x&&x.isColor&&(p(x,1),M=!0),(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Hr)?(l===void 0&&(l=new _t(new Yi(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:ci(kt.cube.uniforms),vertexShader:kt.cube.vertexShader,fragmentShader:kt.cube.fragmentShader,side:nt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(c!==x||u!==x.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,c=x,u=x.version,h=r.toneMapping),v.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(o===void 0&&(o=new _t(new oa(2,2),new Cn({name:"BackgroundMaterial",uniforms:ci(kt.background.uniforms),vertexShader:kt.background.vertexShader,fragmentShader:kt.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),o.material.uniforms.uvTransform.value.copy(x.matrix),(c!==x||u!==x.version||h!==r.toneMapping)&&(o.material.needsUpdate=!0,c=x,u=x.version,h=r.toneMapping),v.unshift(o,o.geometry,o.material,0,0,null))}function p(v,_){t.buffers.color.setClear(v.r,v.g,v.b,_,i)}return{getClearColor:function(){return s},setClearColor:function(v,_=1){s.set(v),a=_,p(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(s,a)},render:d}}function Kf(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=_(null);let c=l;function u(j,D,N,C,O){let W=!1;if(a){const Z=v(C,N,D);c!==Z&&(c=Z,d(c.object)),W=M(C,O),W&&x(C,O)}else{const Z=D.wireframe===!0;(c.geometry!==C.id||c.program!==N.id||c.wireframe!==Z)&&(c.geometry=C.id,c.program=N.id,c.wireframe=Z,W=!0)}j.isInstancedMesh===!0&&(W=!0),O!==null&&t.update(O,34963),W&&(S(j,D,N,C),O!==null&&r.bindBuffer(34963,t.get(O).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(j){return n.isWebGL2?r.bindVertexArray(j):s.bindVertexArrayOES(j)}function p(j){return n.isWebGL2?r.deleteVertexArray(j):s.deleteVertexArrayOES(j)}function v(j,D,N){const C=N.wireframe===!0;let O=o[j.id];O===void 0&&(O={},o[j.id]=O);let W=O[D.id];W===void 0&&(W={},O[D.id]=W);let Z=W[C];return Z===void 0&&(Z=_(h()),W[C]=Z),Z}function _(j){const D=[],N=[],C=[];for(let O=0;O<i;O++)D[O]=0,N[O]=0,C[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:C,object:j,attributes:{},index:null}}function M(j,D){const N=c.attributes,C=j.attributes;let O=0;for(const W in C){const Z=N[W],$=C[W];if(Z===void 0||Z.attribute!==$||Z.data!==$.data)return!0;O++}return c.attributesNum!==O||c.index!==D}function x(j,D){const N={},C=j.attributes;let O=0;for(const W in C){const Z=C[W],$={};$.attribute=Z,Z.data&&($.data=Z.data),N[W]=$,O++}c.attributes=N,c.attributesNum=O,c.index=D}function g(){const j=c.newAttributes;for(let D=0,N=j.length;D<N;D++)j[D]=0}function b(j){E(j,0)}function E(j,D){const N=c.newAttributes,C=c.enabledAttributes,O=c.attributeDivisors;N[j]=1,C[j]===0&&(r.enableVertexAttribArray(j),C[j]=1),O[j]!==D&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,D),O[j]=D)}function L(){const j=c.newAttributes,D=c.enabledAttributes;for(let N=0,C=D.length;N<C;N++)D[N]!==j[N]&&(r.disableVertexAttribArray(N),D[N]=0)}function U(j,D,N,C,O,W){n.isWebGL2===!0&&(N===5124||N===5125)?r.vertexAttribIPointer(j,D,N,O,W):r.vertexAttribPointer(j,D,N,C,O,W)}function S(j,D,N,C){if(n.isWebGL2===!1&&(j.isInstancedMesh||C.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const O=C.attributes,W=N.getAttributes(),Z=D.defaultAttributeValues;for(const $ in W){const ne=W[$];if(ne>=0){const pe=O[$];if(pe!==void 0){const de=pe.normalized,Me=pe.itemSize,be=t.get(pe);if(be===void 0)continue;const J=be.buffer,Oe=be.type,Ie=be.bytesPerElement;if(pe.isInterleavedBufferAttribute){const Ae=pe.data,me=Ae.stride,Le=pe.offset;Ae&&Ae.isInstancedInterleavedBuffer?(E(ne,Ae.meshPerAttribute),C._maxInstanceCount===void 0&&(C._maxInstanceCount=Ae.meshPerAttribute*Ae.count)):b(ne),r.bindBuffer(34962,J),U(ne,Me,Oe,de,me*Ie,Le*Ie)}else pe.isInstancedBufferAttribute?(E(ne,pe.meshPerAttribute),C._maxInstanceCount===void 0&&(C._maxInstanceCount=pe.meshPerAttribute*pe.count)):b(ne),r.bindBuffer(34962,J),U(ne,Me,Oe,de,0,0)}else if($==="instanceMatrix"){const de=t.get(j.instanceMatrix);if(de===void 0)continue;const Me=de.buffer,be=de.type;E(ne+0,1),E(ne+1,1),E(ne+2,1),E(ne+3,1),r.bindBuffer(34962,Me),r.vertexAttribPointer(ne+0,4,be,!1,64,0),r.vertexAttribPointer(ne+1,4,be,!1,64,16),r.vertexAttribPointer(ne+2,4,be,!1,64,32),r.vertexAttribPointer(ne+3,4,be,!1,64,48)}else if($==="instanceColor"){const de=t.get(j.instanceColor);if(de===void 0)continue;const Me=de.buffer,be=de.type;E(ne,1),r.bindBuffer(34962,Me),r.vertexAttribPointer(ne,3,be,!1,12,0)}else if(Z!==void 0){const de=Z[$];if(de!==void 0)switch(de.length){case 2:r.vertexAttrib2fv(ne,de);break;case 3:r.vertexAttrib3fv(ne,de);break;case 4:r.vertexAttrib4fv(ne,de);break;default:r.vertexAttrib1fv(ne,de)}}}}L()}function V(){G();for(const j in o){const D=o[j];for(const N in D){const C=D[N];for(const O in C)p(C[O].object),delete C[O];delete D[N]}delete o[j]}}function q(j){if(o[j.id]===void 0)return;const D=o[j.id];for(const N in D){const C=D[N];for(const O in C)p(C[O].object),delete C[O];delete D[N]}delete o[j.id]}function Y(j){for(const D in o){const N=o[D];if(N[j.id]===void 0)continue;const C=N[j.id];for(const O in C)p(C[O].object),delete C[O];delete N[j.id]}}function G(){F(),c!==l&&(c=l,d(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:G,resetDefaultState:F,dispose:V,releaseStatesOfGeometry:q,releaseStatesOfProgram:Y,initAttributes:g,enableAttribute:b,disableUnusedAttributes:L}}function ep(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,p;if(i)d=r,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function tp(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(S){if(S==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),d=r.getParameter(35660),p=r.getParameter(3379),v=r.getParameter(34076),_=r.getParameter(34921),M=r.getParameter(36347),x=r.getParameter(36348),g=r.getParameter(36349),b=d>0,E=a||e.has("OES_texture_float"),L=b&&E,U=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:g,vertexTextures:b,floatFragmentTextures:E,floatVertexTextures:L,maxSamples:U}}function np(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Kt,o=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,p){const v=h.length!==0||d||n!==0||i;return i=d,t=u(h,p,0),n=h.length,v},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,d,p){const v=h.clippingPlanes,_=h.clipIntersection,M=h.clipShadows,x=r.get(h);if(!i||v===null||v.length===0||s&&!M)s?u(null):c();else{const g=s?0:n,b=g*4;let E=x.clippingState||null;l.value=E,E=u(v,d,b,p);for(let L=0;L!==b;++L)E[L]=t[L];x.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,v){const _=h!==null?h.length:0;let M=null;if(_!==0){if(M=l.value,v!==!0||M===null){const x=p+_*4,g=d.matrixWorldInverse;o.getNormalMatrix(g),(M===null||M.length<x)&&(M=new Float32Array(x));for(let b=0,E=p;b!==_;++b,E+=4)a.copy(h[b]).applyMatrix4(g,o),a.normal.toArray(M,E),M[E+3]=a.constant}l.value=M,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,M}}function ip(r){let e=new WeakMap;function t(a,o){return o===Ws?a.mapping=Or:o===Xs&&(a.mapping=zr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ws||o===Xs)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=r.getRenderTarget(),u=new Sl(l.height/2);return u.fromEquirectangularTexture(r,a),e.set(a,u),r.setRenderTarget(c),a.addEventListener("dispose",i),t(u.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class la extends sa{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}la.prototype.isOrthographicCamera=!0;class qr extends Cn{constructor(e){super(e),this.type="RawShaderMaterial"}}qr.prototype.isRawShaderMaterial=!0;const ai=4,fn=8,Ht=Math.pow(2,fn),Tl=[.125,.215,.35,.446,.526,.582],Al=fn-ai+1+Tl.length,Yn=20,Gt={[bt]:0,[Gr]:1,[ra]:2,[gl]:3,[xl]:4,[vl]:5,[ia]:6},Sn=new Vr({side:nt,depthWrite:!1,depthTest:!1}),rp=new _t(new Yi,Sn),Ts=new la,{_lodPlanes:Ti,_sizeLods:io,_sigmas:pr}=op(),ro=new Ee;let As=null;const En=(1+Math.sqrt(5))/2,jn=1/En,so=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,En,jn),new I(0,En,-jn),new I(jn,0,En),new I(-jn,0,En),new I(En,jn,0),new I(-En,jn,0)];function ao(r){const e=Math.max(r.r,r.g,r.b),t=Math.min(Math.max(Math.ceil(Math.log2(e)),-128),127);return r.multiplyScalar(Math.pow(2,-t)),(t+128)/255}class sp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=lp(Yn),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){As=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=co(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=lo(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Ti.length;e++)Ti[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(As),e.scissorTest=!1,mr(e,0,0,e.width,e.height)}_fromTexture(e){As=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:ot,minFilter:ot,generateMipmaps:!1,type:li,format:gu,encoding:ap(e)?e.encoding:ra,depthBuffer:!1},n=oo(t);return n.depthBuffer=!e,this._pingPongRenderTarget=oo(t),n}_compileMaterial(e){const t=new _t(Ti[0],e);this._renderer.compile(t,Ts)}_sceneToCubeUV(e,t,n,i){const o=new yt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.outputEncoding,p=u.toneMapping;u.getClearColor(ro),u.toneMapping=An,u.outputEncoding=bt,u.autoClear=!1;let v=!1;const _=e.background;if(_){if(_.isColor){Sn.color.copy(_).convertSRGBToLinear(),e.background=null;const M=ao(Sn.color);Sn.opacity=M,v=!0}}else{Sn.color.copy(ro).convertSRGBToLinear();const M=ao(Sn.color);Sn.opacity=M,v=!0}for(let M=0;M<6;M++){const x=M%3;x==0?(o.up.set(0,l[M],0),o.lookAt(c[M],0,0)):x==1?(o.up.set(0,0,l[M]),o.lookAt(0,c[M],0)):(o.up.set(0,l[M],0),o.lookAt(0,0,c[M])),mr(i,x*Ht,M>2?Ht:0,Ht,Ht),u.setRenderTarget(i),v&&u.render(rp,o),u.render(e,o)}u.toneMapping=p,u.outputEncoding=d,u.autoClear=h}_textureToCubeUV(e,t){const n=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=co()):this._equirectShader==null&&(this._equirectShader=lo());const i=e.isCubeTexture?this._cubemapShader:this._equirectShader,s=new _t(Ti[0],i),a=i.uniforms;a.envMap.value=e,e.isCubeTexture||a.texelSize.value.set(1/e.image.width,1/e.image.height),a.inputEncoding.value=Gt[e.encoding],a.outputEncoding.value=Gt[t.texture.encoding],mr(t,0,0,3*Ht,2*Ht),n.setRenderTarget(t),n.render(s,Ts)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<Al;i++){const s=Math.sqrt(pr[i]*pr[i]-pr[i-1]*pr[i-1]),a=so[(i-1)%so.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new _t(Ti[i],c),d=c.uniforms,p=io[n]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Yn-1),_=s/v,M=isFinite(s)?1+Math.floor(u*_):Yn;M>Yn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Yn}`);const x=[];let g=0;for(let U=0;U<Yn;++U){const S=U/_,V=Math.exp(-S*S/2);x.push(V),U==0?g+=V:U<M&&(g+=2*V)}for(let U=0;U<x.length;U++)x[U]=x[U]/g;d.envMap.value=e.texture,d.samples.value=M,d.weights.value=x,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o),d.dTheta.value=v,d.mipInt.value=fn-n,d.inputEncoding.value=Gt[e.texture.encoding],d.outputEncoding.value=Gt[e.texture.encoding];const b=io[i],E=3*Math.max(0,Ht-2*b),L=(i===0?0:2*Ht)+2*b*(i>fn-ai?i-fn+ai:0);mr(t,E,L,3*b,2*b),l.setRenderTarget(t),l.render(h,Ts)}}function ap(r){return r===void 0||r.type!==li?!1:r.encoding===bt||r.encoding===Gr||r.encoding===ia}function op(){const r=[],e=[],t=[];let n=fn;for(let i=0;i<Al;i++){const s=Math.pow(2,n);e.push(s);let a=1/s;i>fn-ai?a=Tl[i-fn+ai-1]:i==0&&(a=0),t.push(a);const o=1/(s-1),l=-o/2,c=1+o/2,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,p=3,v=2,_=1,M=new Float32Array(p*d*h),x=new Float32Array(v*d*h),g=new Float32Array(_*d*h);for(let E=0;E<h;E++){const L=E%3*2/3-1,U=E>2?0:-1,S=[L,U,0,L+2/3,U,0,L+2/3,U+1,0,L,U,0,L+2/3,U+1,0,L,U+1,0];M.set(S,p*d*E),x.set(u,v*d*E);const V=[E,E,E,E,E,E];g.set(V,_*d*E)}const b=new qe;b.setAttribute("position",new $e(M,p)),b.setAttribute("uv",new $e(x,v)),b.setAttribute("faceIndex",new $e(g,_)),r.push(b),n>ai&&n--}return{_lodPlanes:r,_sizeLods:e,_sigmas:t}}function oo(r){const e=new Wt(3*Ht,3*Ht,r);return e.texture.mapping=Hr,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function mr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function lp(r){const e=new Float32Array(r),t=new I(0,1,0);return new qr({name:"SphericalGaussianBlur",defines:{n:r},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:Gt[bt]},outputEncoding:{value:Gt[bt]}},vertexShader:ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${ua()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function lo(){const r=new se(1,1);return new qr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:r},inputEncoding:{value:Gt[bt]},outputEncoding:{value:Gt[bt]}},vertexShader:ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${ua()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function co(){return new qr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:Gt[bt]},outputEncoding:{value:Gt[bt]}},vertexShader:ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${ua()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function ca(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ua(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function cp(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const l=o.mapping,c=l===Ws||l===Xs,u=l===Or||l===zr;if(c||u){if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){const d=r.getRenderTarget();t===null&&(t=new sp(r));const p=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),r.setRenderTarget(d),o.addEventListener("dispose",s),p.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(c.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function up(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function hp(r,e,t,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)e.update(d[v],34962);const p=h.morphAttributes;for(const v in p){const _=p[v];for(let M=0,x=_.length;M<x;M++)e.update(_[M],34962)}}function c(h){const d=[],p=h.index,v=h.attributes.position;let _=0;if(p!==null){const g=p.array;_=p.version;for(let b=0,E=g.length;b<E;b+=3){const L=g[b+0],U=g[b+1],S=g[b+2];d.push(L,U,U,S,S,L)}}else{const g=v.array;_=v.version;for(let b=0,E=g.length/3-1;b<E;b+=3){const L=b+0,U=b+1,S=b+2;d.push(L,U,U,S,S,L)}}const M=new(bl(d)>65535?Ml:wl)(d,1);M.version=_;const x=s.get(h);x&&e.remove(x),s.set(h,M)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function dp(r,e,t,n){const i=n.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,p){r.drawElements(s,p,o,d*l),t.update(p,s,1)}function h(d,p,v){if(v===0)return;let _,M;if(i)_=r,M="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),M="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[M](s,p,o,d*l,v),t.update(p,s,v)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function fp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function pp(r,e){return r[0]-e[0]}function mp(r,e){return Math.abs(e[1])-Math.abs(r[1])}function gp(r){const e={},t=new Float32Array(8),n=[];for(let s=0;s<8;s++)n[s]=[s,0];function i(s,a,o,l){const c=s.morphTargetInfluences,u=c===void 0?0:c.length;let h=e[a.id];if(h===void 0||h.length!==u){h=[];for(let M=0;M<u;M++)h[M]=[M,0];e[a.id]=h}for(let M=0;M<u;M++){const x=h[M];x[0]=M,x[1]=c[M]}h.sort(mp);for(let M=0;M<8;M++)M<u&&h[M][1]?(n[M][0]=h[M][0],n[M][1]=h[M][1]):(n[M][0]=Number.MAX_SAFE_INTEGER,n[M][1]=0);n.sort(pp);const d=a.morphAttributes.position,p=a.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const x=n[M],g=x[0],b=x[1];g!==Number.MAX_SAFE_INTEGER&&b?(d&&a.getAttribute("morphTarget"+M)!==d[g]&&a.setAttribute("morphTarget"+M,d[g]),p&&a.getAttribute("morphNormal"+M)!==p[g]&&a.setAttribute("morphNormal"+M,p[g]),t[M]=b,v+=b):(d&&a.hasAttribute("morphTarget"+M)===!0&&a.deleteAttribute("morphTarget"+M),p&&a.hasAttribute("morphNormal"+M)===!0&&a.deleteAttribute("morphNormal"+M),t[M]=0)}const _=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",t)}return{update:i}}function xp(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Ll extends ht{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=ot,this.minFilter=ot,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Ll.prototype.isDataTexture2DArray=!0;class Cl extends ht{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=ot,this.minFilter=ot,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Cl.prototype.isDataTexture3D=!0;const Rl=new ht,vp=new Ll,yp=new Cl,Pl=new Wr,uo=[],ho=[],fo=new Float32Array(16),po=new Float32Array(9),mo=new Float32Array(4);function mi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=uo[i];if(s===void 0&&(s=new Float32Array(i),uo[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function wt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function gt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Il(r,e){let t=ho[e];t===void 0&&(t=new Int32Array(e),ho[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function _p(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function wp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;r.uniform2fv(this.addr,e),gt(t,e)}}function Mp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;r.uniform3fv(this.addr,e),gt(t,e)}}function bp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;r.uniform4fv(this.addr,e),gt(t,e)}}function Sp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(wt(t,n))return;mo.set(n),r.uniformMatrix2fv(this.addr,!1,mo),gt(t,n)}}function Ep(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(wt(t,n))return;po.set(n),r.uniformMatrix3fv(this.addr,!1,po),gt(t,n)}}function Tp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(wt(t,n))return;fo.set(n),r.uniformMatrix4fv(this.addr,!1,fo),gt(t,n)}}function Ap(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Lp(r,e){const t=this.cache;wt(t,e)||(r.uniform2iv(this.addr,e),gt(t,e))}function Cp(r,e){const t=this.cache;wt(t,e)||(r.uniform3iv(this.addr,e),gt(t,e))}function Rp(r,e){const t=this.cache;wt(t,e)||(r.uniform4iv(this.addr,e),gt(t,e))}function Pp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Ip(r,e){const t=this.cache;wt(t,e)||(r.uniform2uiv(this.addr,e),gt(t,e))}function Dp(r,e){const t=this.cache;wt(t,e)||(r.uniform3uiv(this.addr,e),gt(t,e))}function Fp(r,e){const t=this.cache;wt(t,e)||(r.uniform4uiv(this.addr,e),gt(t,e))}function Bp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||Rl,i)}function Np(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||yp,i)}function Up(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||Pl,i)}function Op(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||vp,i)}function zp(r){switch(r){case 5126:return _p;case 35664:return wp;case 35665:return Mp;case 35666:return bp;case 35674:return Sp;case 35675:return Ep;case 35676:return Tp;case 5124:case 35670:return Ap;case 35667:case 35671:return Lp;case 35668:case 35672:return Cp;case 35669:case 35673:return Rp;case 5125:return Pp;case 36294:return Ip;case 36295:return Dp;case 36296:return Fp;case 35678:case 36198:case 36298:case 36306:case 35682:return Bp;case 35679:case 36299:case 36307:return Np;case 35680:case 36300:case 36308:case 36293:return Up;case 36289:case 36303:case 36311:case 36292:return Op}}function Hp(r,e){r.uniform1fv(this.addr,e)}function kp(r,e){const t=mi(e,this.size,2);r.uniform2fv(this.addr,t)}function Gp(r,e){const t=mi(e,this.size,3);r.uniform3fv(this.addr,t)}function Vp(r,e){const t=mi(e,this.size,4);r.uniform4fv(this.addr,t)}function Wp(r,e){const t=mi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Xp(r,e){const t=mi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function qp(r,e){const t=mi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Yp(r,e){r.uniform1iv(this.addr,e)}function jp(r,e){r.uniform2iv(this.addr,e)}function Zp(r,e){r.uniform3iv(this.addr,e)}function $p(r,e){r.uniform4iv(this.addr,e)}function Jp(r,e){r.uniform1uiv(this.addr,e)}function Qp(r,e){r.uniform2uiv(this.addr,e)}function Kp(r,e){r.uniform3uiv(this.addr,e)}function em(r,e){r.uniform4uiv(this.addr,e)}function tm(r,e,t){const n=e.length,i=Il(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||Rl,i[s])}function nm(r,e,t){const n=e.length,i=Il(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||Pl,i[s])}function im(r){switch(r){case 5126:return Hp;case 35664:return kp;case 35665:return Gp;case 35666:return Vp;case 35674:return Wp;case 35675:return Xp;case 35676:return qp;case 5124:case 35670:return Yp;case 35667:case 35671:return jp;case 35668:case 35672:return Zp;case 35669:case 35673:return $p;case 5125:return Jp;case 36294:return Qp;case 36295:return Kp;case 36296:return em;case 35678:case 36198:case 36298:case 36306:case 35682:return tm;case 35680:case 36300:case 36308:case 36293:return nm}}function rm(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=zp(e.type)}function Dl(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=im(e.type)}Dl.prototype.updateCache=function(r){const e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),gt(e,r)};function Fl(r){this.id=r,this.seq=[],this.map={}}Fl.prototype.setValue=function(r,e,t){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const a=n[i];a.setValue(r,e[a.id],t)}};const Ls=/(\w+)(\])?(\[|\.)?/g;function go(r,e){r.seq.push(e),r.map[e.id]=e}function sm(r,e,t){const n=r.name,i=n.length;for(Ls.lastIndex=0;;){const s=Ls.exec(n),a=Ls.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){go(t,c===void 0?new rm(o,r,e):new Dl(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new Fl(o),go(t,h)),t=h}}}function pn(r,e){this.seq=[],this.map={};const t=r.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=r.getActiveUniform(e,n),s=r.getUniformLocation(e,i.name);sm(i,s,this)}}pn.prototype.setValue=function(r,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(r,t,n)};pn.prototype.setOptional=function(r,e,t){const n=e[t];n!==void 0&&this.setValue(r,t,n)};pn.upload=function(r,e,t,n){for(let i=0,s=e.length;i!==s;++i){const a=e[i],o=t[a.id];o.needsUpdate!==!1&&a.setValue(r,o.value,n)}};pn.seqWithValue=function(r,e){const t=[];for(let n=0,i=r.length;n!==i;++n){const s=r[n];s.id in e&&t.push(s)}return t};function xo(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let am=0;function om(r){const e=r.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Bl(r){switch(r){case bt:return["Linear","( value )"];case Gr:return["sRGB","( value )"];case ra:return["RGBE","( value )"];case gl:return["RGBM","( value, 7.0 )"];case xl:return["RGBM","( value, 16.0 )"];case vl:return["RGBD","( value, 256.0 )"];case ia:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case ih:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function vo(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=r.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+i+om(s)}function Zn(r,e){const t=Bl(e);return"vec4 "+r+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function lm(r,e){const t=Bl(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function cm(r,e){let t;switch(e){case tu:t="Linear";break;case nu:t="Reinhard";break;case iu:t="OptimizedCineon";break;case ru:t="ACESFilmic";break;case su:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function um(r){return[r.extensionDerivatives||r.envMapCubeUV||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission>0)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Di).join(`
`)}function hm(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dm(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const a=r.getActiveAttrib(e,i).name;t[a]=r.getAttribLocation(e,a)}return t}function Di(r){return r!==""}function yo(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _o(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zs(r){return r.replace(fm,pm)}function pm(r,e){const t=Ue[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Zs(t)}const mm=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,gm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wo(r){return r.replace(gm,Nl).replace(mm,xm)}function xm(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Nl(r,e,t,n)}function Nl(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Mo(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vm(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ul?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Dc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function ym(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Or:case zr:e="ENVMAP_TYPE_CUBE";break;case Hr:case ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _m(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case zr:case ta:e="ENVMAP_MODE_REFRACTION";break}return e}function wm(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ur:e="ENVMAP_BLENDING_MULTIPLY";break;case Kc:e="ENVMAP_BLENDING_MIX";break;case eu:e="ENVMAP_BLENDING_ADD";break}return e}function Mm(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=vm(t),c=ym(t),u=_m(t),h=wm(t),d=r.gammaFactor>0?r.gammaFactor:1,p=t.isWebGL2?"":um(t),v=hm(s),_=i.createProgram();let M,x,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=[v].filter(Di).join(`
`),M.length>0&&(M+=`
`),x=[p,v].filter(Di).join(`
`),x.length>0&&(x+=`
`)):(M=[Mo(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularTintMap?"#define USE_SPECULARTINTMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Di).join(`
`),x=[p,Mo(t),"#define SHADER_NAME "+t.shaderName,v,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularTintMap?"#define USE_SPECULARTINTMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==An?"#define TONE_MAPPING":"",t.toneMapping!==An?Ue.tonemapping_pars_fragment:"",t.toneMapping!==An?cm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",Ue.encodings_pars_fragment,t.map?Zn("mapTexelToLinear",t.mapEncoding):"",t.matcap?Zn("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Zn("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Zn("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularTintMap?Zn("specularTintMapTexelToLinear",t.specularTintMapEncoding):"",t.lightMap?Zn("lightMapTexelToLinear",t.lightMapEncoding):"",lm("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Di).join(`
`)),a=Zs(a),a=yo(a,t),a=_o(a,t),o=Zs(o),o=yo(o,t),o=_o(o,t),a=wo(a),o=wo(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,M=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",t.glslVersion===Wa?"":"out highp vec4 pc_fragColor;",t.glslVersion===Wa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const b=g+M+a,E=g+x+o,L=xo(i,35633,b),U=xo(i,35632,E);if(i.attachShader(_,L),i.attachShader(_,U),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),r.debug.checkShaderErrors){const q=i.getProgramInfoLog(_).trim(),Y=i.getShaderInfoLog(L).trim(),G=i.getShaderInfoLog(U).trim();let F=!0,j=!0;if(i.getProgramParameter(_,35714)===!1){F=!1;const D=vo(i,L,"vertex"),N=vo(i,U,"fragment");console.error("THREE.WebGLProgram: shader error: ",i.getError(),"35715",i.getProgramParameter(_,35715),"gl.getProgramInfoLog",q,D,N)}else q!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",q):(Y===""||G==="")&&(j=!1);j&&(this.diagnostics={runnable:F,programLog:q,vertexShader:{log:Y,prefix:M},fragmentShader:{log:G,prefix:x}})}i.deleteShader(L),i.deleteShader(U);let S;this.getUniforms=function(){return S===void 0&&(S=new pn(i,_)),S};let V;return this.getAttributes=function(){return V===void 0&&(V=dm(i,_)),V},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=am++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=U,this}function bm(r,e,t,n,i,s,a){const o=[],l=i.isWebGL2,c=i.logarithmicDepthBuffer,u=i.floatVertexTextures,h=i.maxVertexUniforms,d=i.vertexTextures;let p=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},_=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","specularIntensityMap","specularTintMap","specularTintMapEncoding","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmission","transmissionMap","thicknessMap"];function M(S){const q=S.skeleton.bones;if(u)return 1024;{const G=Math.floor((h-20)/4),F=Math.min(G,q.length);return F<q.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+q.length+" bones. This GPU supports "+F+"."),0):F}}function x(S){let V;return S&&S.isTexture?V=S.encoding:S&&S.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),V=S.texture.encoding):V=bt,V}function g(S,V,q,Y,G){const F=Y.fog,j=S.isMeshStandardMaterial?Y.environment:null,D=(S.isMeshStandardMaterial?t:e).get(S.envMap||j),N=v[S.type],C=G.isSkinnedMesh?M(G):0;S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let O,W;if(N){const ne=kt[N];O=ne.vertexShader,W=ne.fragmentShader}else O=S.vertexShader,W=S.fragmentShader;const Z=r.getRenderTarget();return{isWebGL2:l,shaderID:N,shaderName:S.type,vertexShader:O,fragmentShader:W,defines:S.defines,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:G.isInstancedMesh===!0,instancingColor:G.isInstancedMesh===!0&&G.instanceColor!==null,supportsVertexTextures:d,outputEncoding:Z!==null?x(Z.texture):r.outputEncoding,map:!!S.map,mapEncoding:x(S.map),matcap:!!S.matcap,matcapEncoding:x(S.matcap),envMap:!!D,envMapMode:D&&D.mapping,envMapEncoding:x(D),envMapCubeUV:!!D&&(D.mapping===Hr||D.mapping===ta),lightMap:!!S.lightMap,lightMapEncoding:x(S.lightMap),aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,emissiveMapEncoding:x(S.emissiveMap),bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===ah,tangentSpaceNormalMap:S.normalMapType===hi,clearcoatMap:!!S.clearcoatMap,clearcoatRoughnessMap:!!S.clearcoatRoughnessMap,clearcoatNormalMap:!!S.clearcoatNormalMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularTintMap:!!S.specularTintMap,specularTintMapEncoding:x(S.specularTintMap),alphaMap:!!S.alphaMap,gradientMap:!!S.gradientMap,sheen:!!S.sheen,transmission:!!S.transmission,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!G.geometry&&!!G.geometry.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.geometry&&!!G.geometry.attributes.color&&G.geometry.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularTintMap,uvsVertexOnly:!(S.map||S.bumpMap||S.normalMap||S.specularMap||S.alphaMap||S.emissiveMap||S.roughnessMap||S.metalnessMap||S.clearcoatNormalMap||S.transmission||S.transmissionMap||S.thicknessMap||S.specularIntensityMap||S.specularTintMap)&&!!S.displacementMap,fog:!!F,useFog:S.fog,fogExp2:F&&F.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:c,skinning:G.isSkinnedMesh===!0&&C>0,maxBones:C,useVertexTexture:u,morphTargets:!!G.geometry&&!!G.geometry.morphAttributes.position,morphNormals:!!G.geometry&&!!G.geometry.morphAttributes.normal,numDirLights:V.directional.length,numPointLights:V.point.length,numSpotLights:V.spot.length,numRectAreaLights:V.rectArea.length,numHemiLights:V.hemi.length,numDirLightShadows:V.directionalShadowMap.length,numPointLightShadows:V.pointShadowMap.length,numSpotLightShadows:V.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&q.length>0,shadowMapType:r.shadowMap.type,toneMapping:S.toneMapped?r.toneMapping:An,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:S.premultipliedAlpha,alphaTest:S.alphaTest,doubleSided:S.side===oi,flipSided:S.side===nt,depthPacking:S.depthPacking!==void 0?S.depthPacking:!1,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function b(S){const V=[];if(S.shaderID?V.push(S.shaderID):(V.push(S.fragmentShader),V.push(S.vertexShader)),S.defines!==void 0)for(const q in S.defines)V.push(q),V.push(S.defines[q]);if(S.isRawShaderMaterial===!1){for(let q=0;q<_.length;q++)V.push(S[_[q]]);V.push(r.outputEncoding),V.push(r.gammaFactor)}return V.push(S.customProgramCacheKey),V.join()}function E(S){const V=v[S.type];let q;if(V){const Y=kt[V];q=Sh.clone(Y.uniforms)}else q=S.uniforms;return q}function L(S,V){let q;for(let Y=0,G=o.length;Y<G;Y++){const F=o[Y];if(F.cacheKey===V){q=F,++q.usedTimes;break}}return q===void 0&&(q=new Mm(r,V,S,s),o.push(q)),q}function U(S){if(--S.usedTimes===0){const V=o.indexOf(S);o[V]=o[o.length-1],o.pop(),S.destroy()}}return{getParameters:g,getProgramCacheKey:b,getUniforms:E,acquireProgram:L,releaseProgram:U,programs:o}}function Sm(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Em(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.program!==e.program?r.program.id-e.program.id:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function bo(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function So(r){const e=[];let t=0;const n=[],i=[],s=[],a={id:-1};function o(){t=0,n.length=0,i.length=0,s.length=0}function l(p,v,_,M,x,g){let b=e[t];const E=r.get(_);return b===void 0?(b={id:p.id,object:p,geometry:v,material:_,program:E.program||a,groupOrder:M,renderOrder:p.renderOrder,z:x,group:g},e[t]=b):(b.id=p.id,b.object=p,b.geometry=v,b.material=_,b.program=E.program||a,b.groupOrder=M,b.renderOrder=p.renderOrder,b.z=x,b.group=g),t++,b}function c(p,v,_,M,x,g){const b=l(p,v,_,M,x,g);_.transmission>0?i.push(b):_.transparent===!0?s.push(b):n.push(b)}function u(p,v,_,M,x,g){const b=l(p,v,_,M,x,g);_.transmission>0?i.unshift(b):_.transparent===!0?s.unshift(b):n.unshift(b)}function h(p,v){n.length>1&&n.sort(p||Em),i.length>1&&i.sort(v||bo),s.length>1&&s.sort(v||bo)}function d(){for(let p=t,v=e.length;p<v;p++){const _=e[p];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.program=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:o,push:c,unshift:u,finish:d,sort:h}}function Tm(r){let e=new WeakMap;function t(i,s){let a;return e.has(i)===!1?(a=new So(r),e.set(i,[a])):s>=e.get(i).length?(a=new So(r),e.get(i).push(a)):a=e.get(i)[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function Am(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ee};break;case"SpotLight":t={position:new I,direction:new I,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function Lm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Cm=0;function Rm(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function Pm(r,e){const t=new Am,n=Lm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new I);const s=new I,a=new Re,o=new Re;function l(u){let h=0,d=0,p=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let v=0,_=0,M=0,x=0,g=0,b=0,E=0,L=0;u.sort(Rm);for(let S=0,V=u.length;S<V;S++){const q=u[S],Y=q.color,G=q.intensity,F=q.distance,j=q.shadow&&q.shadow.map?q.shadow.map.texture:null;if(q.isAmbientLight)h+=Y.r*G,d+=Y.g*G,p+=Y.b*G;else if(q.isLightProbe)for(let D=0;D<9;D++)i.probe[D].addScaledVector(q.sh.coefficients[D],G);else if(q.isDirectionalLight){const D=t.get(q);if(D.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){const N=q.shadow,C=n.get(q);C.shadowBias=N.bias,C.shadowNormalBias=N.normalBias,C.shadowRadius=N.radius,C.shadowMapSize=N.mapSize,i.directionalShadow[v]=C,i.directionalShadowMap[v]=j,i.directionalShadowMatrix[v]=q.shadow.matrix,b++}i.directional[v]=D,v++}else if(q.isSpotLight){const D=t.get(q);if(D.position.setFromMatrixPosition(q.matrixWorld),D.color.copy(Y).multiplyScalar(G),D.distance=F,D.coneCos=Math.cos(q.angle),D.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),D.decay=q.decay,q.castShadow){const N=q.shadow,C=n.get(q);C.shadowBias=N.bias,C.shadowNormalBias=N.normalBias,C.shadowRadius=N.radius,C.shadowMapSize=N.mapSize,i.spotShadow[M]=C,i.spotShadowMap[M]=j,i.spotShadowMatrix[M]=q.shadow.matrix,L++}i.spot[M]=D,M++}else if(q.isRectAreaLight){const D=t.get(q);D.color.copy(Y).multiplyScalar(G),D.halfWidth.set(q.width*.5,0,0),D.halfHeight.set(0,q.height*.5,0),i.rectArea[x]=D,x++}else if(q.isPointLight){const D=t.get(q);if(D.color.copy(q.color).multiplyScalar(q.intensity),D.distance=q.distance,D.decay=q.decay,q.castShadow){const N=q.shadow,C=n.get(q);C.shadowBias=N.bias,C.shadowNormalBias=N.normalBias,C.shadowRadius=N.radius,C.shadowMapSize=N.mapSize,C.shadowCameraNear=N.camera.near,C.shadowCameraFar=N.camera.far,i.pointShadow[_]=C,i.pointShadowMap[_]=j,i.pointShadowMatrix[_]=q.shadow.matrix,E++}i.point[_]=D,_++}else if(q.isHemisphereLight){const D=t.get(q);D.skyColor.copy(q.color).multiplyScalar(G),D.groundColor.copy(q.groundColor).multiplyScalar(G),i.hemi[g]=D,g++}}x>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=p;const U=i.hash;(U.directionalLength!==v||U.pointLength!==_||U.spotLength!==M||U.rectAreaLength!==x||U.hemiLength!==g||U.numDirectionalShadows!==b||U.numPointShadows!==E||U.numSpotShadows!==L)&&(i.directional.length=v,i.spot.length=M,i.rectArea.length=x,i.point.length=_,i.hemi.length=g,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=E,i.spotShadowMatrix.length=L,U.directionalLength=v,U.pointLength=_,U.spotLength=M,U.rectAreaLength=x,U.hemiLength=g,U.numDirectionalShadows=b,U.numPointShadows=E,U.numSpotShadows=L,i.version=Cm++)}function c(u,h){let d=0,p=0,v=0,_=0,M=0;const x=h.matrixWorldInverse;for(let g=0,b=u.length;g<b;g++){const E=u[g];if(E.isDirectionalLight){const L=i.directional[d];L.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(x),d++}else if(E.isSpotLight){const L=i.spot[v];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(x),L.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(x),v++}else if(E.isRectAreaLight){const L=i.rectArea[_];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(x),o.identity(),a.copy(E.matrixWorld),a.premultiply(x),o.extractRotation(a),L.halfWidth.set(E.width*.5,0,0),L.halfHeight.set(0,E.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const L=i.point[p];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(x),p++}else if(E.isHemisphereLight){const L=i.hemi[M];L.direction.setFromMatrixPosition(E.matrixWorld),L.direction.transformDirection(x),L.direction.normalize(),M++}}}return{setup:l,setupView:c,state:i}}function Eo(r,e){const t=new Pm(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(){t.setup(n)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Im(r,e){let t=new WeakMap;function n(s,a=0){let o;return t.has(s)===!1?(o=new Eo(r,e),t.set(s,[o])):a>=t.get(s).length?(o=new Eo(r,e),t.get(s).push(o)):o=t.get(s)[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class Ul extends xt{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=rh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}Ul.prototype.isMeshDepthMaterial=!0;class Ol extends xt{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}Ol.prototype.isMeshDistanceMaterial=!0;var Dm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,Fm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function zl(r,e,t){let n=new Xr;const i=new se,s=new se,a=new Xe,o=new Ul({depthPacking:sh}),l=new Ol,c={},u=t.maxTextureSize,h={0:nt,1:Hi,2:oi},d=new Cn({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:Fm,fragmentShader:Dm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new qe;v.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _t(v,d),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ul,this.render=function(E,L,U){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||E.length===0)return;const S=r.getRenderTarget(),V=r.getActiveCubeFace(),q=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(dn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);for(let G=0,F=E.length;G<F;G++){const j=E[G],D=j.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const N=D.getFrameExtents();if(i.multiply(N),s.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/N.x),i.x=s.x*N.x,D.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/N.y),i.y=s.y*N.y,D.mapSize.y=s.y)),D.map===null&&!D.isPointLightShadow&&this.type===Ii){const O={minFilter:Rt,magFilter:Rt,format:Ot};D.map=new Wt(i.x,i.y,O),D.map.texture.name=j.name+".shadowMap",D.mapPass=new Wt(i.x,i.y,O),D.camera.updateProjectionMatrix()}if(D.map===null){const O={minFilter:ot,magFilter:ot,format:Ot};D.map=new Wt(i.x,i.y,O),D.map.texture.name=j.name+".shadowMap",D.camera.updateProjectionMatrix()}r.setRenderTarget(D.map),r.clear();const C=D.getViewportCount();for(let O=0;O<C;O++){const W=D.getViewport(O);a.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),Y.viewport(a),D.updateMatrices(j,O),n=D.getFrustum(),b(L,U,D.camera,j,this.type)}!D.isPointLightShadow&&this.type===Ii&&x(D,U),D.needsUpdate=!1}M.needsUpdate=!1,r.setRenderTarget(S,V,q)};function x(E,L){const U=e.update(_);d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(L,null,U,d,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(L,null,U,p,_,null)}function g(E,L,U,S,V,q,Y){let G=null;const F=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(F!==void 0?G=F:G=S.isPointLight===!0?l:o,r.localClippingEnabled&&U.clipShadows===!0&&U.clippingPlanes.length!==0){const j=G.uuid,D=U.uuid;let N=c[j];N===void 0&&(N={},c[j]=N);let C=N[D];C===void 0&&(C=G.clone(),N[D]=C),G=C}return G.visible=U.visible,G.wireframe=U.wireframe,Y===Ii?G.side=U.shadowSide!==null?U.shadowSide:U.side:G.side=U.shadowSide!==null?U.shadowSide:h[U.side],G.clipShadows=U.clipShadows,G.clippingPlanes=U.clippingPlanes,G.clipIntersection=U.clipIntersection,G.wireframeLinewidth=U.wireframeLinewidth,G.linewidth=U.linewidth,S.isPointLight===!0&&G.isMeshDistanceMaterial===!0&&(G.referencePosition.setFromMatrixPosition(S.matrixWorld),G.nearDistance=V,G.farDistance=q),G}function b(E,L,U,S,V){if(E.visible===!1)return;if(E.layers.test(L.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&V===Ii)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,E.matrixWorld);const G=e.update(E),F=E.material;if(Array.isArray(F)){const j=G.groups;for(let D=0,N=j.length;D<N;D++){const C=j[D],O=F[C.materialIndex];if(O&&O.visible){const W=g(E,G,O,S,U.near,U.far,V);r.renderBufferDirect(U,null,G,W,E,C)}}}else if(F.visible){const j=g(E,G,F,S,U.near,U.far,V);r.renderBufferDirect(U,null,G,j,E,null)}}const Y=E.children;for(let G=0,F=Y.length;G<F;G++)b(Y[G],L,U,S,V)}}function Bm(r,e,t){const n=t.isWebGL2;function i(){let k=!1;const ue=new Xe;let ee=null;const xe=new Xe(0,0,0,0);return{setMask:function(B){ee!==B&&!k&&(r.colorMask(B,B,B,B),ee=B)},setLocked:function(B){k=B},setClear:function(B,ae,Ne,De,Ye){Ye===!0&&(B*=De,ae*=De,Ne*=De),ue.set(B,ae,Ne,De),xe.equals(ue)===!1&&(r.clearColor(B,ae,Ne,De),xe.copy(ue))},reset:function(){k=!1,ee=null,xe.set(-1,0,0,0)}}}function s(){let k=!1,ue=null,ee=null,xe=null;return{setTest:function(B){B?Me(2929):be(2929)},setMask:function(B){ue!==B&&!k&&(r.depthMask(B),ue=B)},setFunc:function(B){if(ee!==B){if(B)switch(B){case qc:r.depthFunc(512);break;case Yc:r.depthFunc(519);break;case jc:r.depthFunc(513);break;case Vs:r.depthFunc(515);break;case Zc:r.depthFunc(514);break;case $c:r.depthFunc(518);break;case Jc:r.depthFunc(516);break;case Qc:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);ee=B}},setLocked:function(B){k=B},setClear:function(B){xe!==B&&(r.clearDepth(B),xe=B)},reset:function(){k=!1,ue=null,ee=null,xe=null}}}function a(){let k=!1,ue=null,ee=null,xe=null,B=null,ae=null,Ne=null,De=null,Ye=null;return{setTest:function(Ge){k||(Ge?Me(2960):be(2960))},setMask:function(Ge){ue!==Ge&&!k&&(r.stencilMask(Ge),ue=Ge)},setFunc:function(Ge,dt,ft){(ee!==Ge||xe!==dt||B!==ft)&&(r.stencilFunc(Ge,dt,ft),ee=Ge,xe=dt,B=ft)},setOp:function(Ge,dt,ft){(ae!==Ge||Ne!==dt||De!==ft)&&(r.stencilOp(Ge,dt,ft),ae=Ge,Ne=dt,De=ft)},setLocked:function(Ge){k=Ge},setClear:function(Ge){Ye!==Ge&&(r.clearStencil(Ge),Ye=Ge)},reset:function(){k=!1,ue=null,ee=null,xe=null,B=null,ae=null,Ne=null,De=null,Ye=null}}}const o=new i,l=new s,c=new a;let u={},h=null,d={},p=null,v=!1,_=null,M=null,x=null,g=null,b=null,E=null,L=null,U=!1,S=null,V=null,q=null,Y=null,G=null;const F=r.getParameter(35661);let j=!1,D=0;const N=r.getParameter(7938);N.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(N)[1]),j=D>=1):N.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),j=D>=2);let C=null,O={};const W=r.getParameter(3088),Z=r.getParameter(2978),$=new Xe().fromArray(W),ne=new Xe().fromArray(Z);function pe(k,ue,ee){const xe=new Uint8Array(4),B=r.createTexture();r.bindTexture(k,B),r.texParameteri(k,10241,9728),r.texParameteri(k,10240,9728);for(let ae=0;ae<ee;ae++)r.texImage2D(ue+ae,0,6408,1,1,0,6408,5121,xe);return B}const de={};de[3553]=pe(3553,3553,1),de[34067]=pe(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Me(2929),l.setFunc(Vs),ie(!1),oe(Ta),Me(2884),Le(dn);function Me(k){u[k]!==!0&&(r.enable(k),u[k]=!0)}function be(k){u[k]!==!1&&(r.disable(k),u[k]=!1)}function J(k){k!==h&&(r.bindFramebuffer(36160,k),h=k)}function Oe(k,ue){return ue===null&&h!==null&&(ue=h),d[k]!==ue?(r.bindFramebuffer(k,ue),d[k]=ue,n&&(k===36009&&(d[36160]=ue),k===36160&&(d[36009]=ue)),!0):!1}function Ie(k){return p!==k?(r.useProgram(k),p=k,!0):!1}const Ae={[ei]:32774,[Bc]:32778,[Nc]:32779};if(n)Ae[Ra]=32775,Ae[Pa]=32776;else{const k=e.get("EXT_blend_minmax");k!==null&&(Ae[Ra]=k.MIN_EXT,Ae[Pa]=k.MAX_EXT)}const me={[Uc]:0,[Oc]:1,[zc]:768,[dl]:770,[Xc]:776,[Vc]:774,[kc]:772,[Hc]:769,[fl]:771,[Wc]:775,[Gc]:773};function Le(k,ue,ee,xe,B,ae,Ne,De){if(k===dn){v===!0&&(be(3042),v=!1);return}if(v===!1&&(Me(3042),v=!0),k!==Fc){if(k!==_||De!==U){if((M!==ei||b!==ei)&&(r.blendEquation(32774),M=ei,b=ei),De)switch(k){case Ni:r.blendFuncSeparate(1,771,1,771);break;case Aa:r.blendFunc(1,1);break;case La:r.blendFuncSeparate(0,0,769,771);break;case Ca:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ni:r.blendFuncSeparate(770,771,1,771);break;case Aa:r.blendFunc(770,1);break;case La:r.blendFunc(0,769);break;case Ca:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}x=null,g=null,E=null,L=null,_=k,U=De}return}B=B||ue,ae=ae||ee,Ne=Ne||xe,(ue!==M||B!==b)&&(r.blendEquationSeparate(Ae[ue],Ae[B]),M=ue,b=B),(ee!==x||xe!==g||ae!==E||Ne!==L)&&(r.blendFuncSeparate(me[ee],me[xe],me[ae],me[Ne]),x=ee,g=xe,E=ae,L=Ne),_=k,U=null}function te(k,ue){k.side===oi?be(2884):Me(2884);let ee=k.side===nt;ue&&(ee=!ee),ie(ee),k.blending===Ni&&k.transparent===!1?Le(dn):Le(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),o.setMask(k.colorWrite);const xe=k.stencilWrite;c.setTest(xe),xe&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ce(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Me(32926):be(32926)}function ie(k){S!==k&&(k?r.frontFace(2304):r.frontFace(2305),S=k)}function oe(k){k!==Pc?(Me(2884),k!==V&&(k===Ta?r.cullFace(1029):k===Ic?r.cullFace(1028):r.cullFace(1032))):be(2884),V=k}function ye(k){k!==q&&(j&&r.lineWidth(k),q=k)}function ce(k,ue,ee){k?(Me(32823),(Y!==ue||G!==ee)&&(r.polygonOffset(ue,ee),Y=ue,G=ee)):be(32823)}function P(k){k?Me(3089):be(3089)}function A(k){k===void 0&&(k=33984+F-1),C!==k&&(r.activeTexture(k),C=k)}function Q(k,ue){C===null&&A();let ee=O[C];ee===void 0&&(ee={type:void 0,texture:void 0},O[C]=ee),(ee.type!==k||ee.texture!==ue)&&(r.bindTexture(k,ue||de[k]),ee.type=k,ee.texture=ue)}function re(){const k=O[C];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function fe(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function le(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(k){$.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),$.copy(k))}function Ce(k){ne.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),ne.copy(k))}function we(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},C=null,O={},h=null,d={},p=null,v=!1,_=null,M=null,x=null,g=null,b=null,E=null,L=null,U=!1,S=null,V=null,q=null,Y=null,G=null,$.set(0,0,r.canvas.width,r.canvas.height),ne.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Me,disable:be,bindFramebuffer:Oe,bindXRFramebuffer:J,useProgram:Ie,setBlending:Le,setMaterial:te,setFlipSided:ie,setCullFace:oe,setLineWidth:ye,setPolygonOffset:ce,setScissorTest:P,activeTexture:A,bindTexture:Q,unbindTexture:re,compressedTexImage2D:fe,texImage2D:le,texImage3D:_e,scissor:Se,viewport:Ce,reset:we}}function Nm(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=new WeakMap;let p,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,A){return v?new OffscreenCanvas(P,A):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function M(P,A,Q,re){let fe=1;if((P.width>re||P.height>re)&&(fe=re/Math.max(P.width,P.height)),fe<1||A===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const le=A?ch:Math.floor,_e=le(fe*P.width),Se=le(fe*P.height);p===void 0&&(p=_(_e,Se));const Ce=Q?_(_e,Se):p;return Ce.width=_e,Ce.height=Se,Ce.getContext("2d").drawImage(P,0,0,_e,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+_e+"x"+Se+")."),Ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function x(P){return Xa(P.width)&&Xa(P.height)}function g(P){return o?!1:P.wrapS!==Lt||P.wrapT!==Lt||P.minFilter!==ot&&P.minFilter!==Rt}function b(P,A){return P.generateMipmaps&&A&&P.minFilter!==ot&&P.minFilter!==Rt}function E(P,A,Q,re,fe=1){r.generateMipmap(P);const le=n.get(A);le.__maxMipLevel=Math.log2(Math.max(Q,re,fe))}function L(P,A,Q){if(o===!1)return A;if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let re=A;return A===6403&&(Q===5126&&(re=33326),Q===5131&&(re=33325),Q===5121&&(re=33321)),A===6407&&(Q===5126&&(re=34837),Q===5131&&(re=34843),Q===5121&&(re=32849)),A===6408&&(Q===5126&&(re=34836),Q===5131&&(re=34842),Q===5121&&(re=32856)),(re===33325||re===33326||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function U(P){return P===ot||P===Ia||P===Da?9728:9729}function S(P){const A=P.target;A.removeEventListener("dispose",S),q(A),A.isVideoTexture&&d.delete(A),a.memory.textures--}function V(P){const A=P.target;A.removeEventListener("dispose",V),Y(A)}function q(P){const A=n.get(P);A.__webglInit!==void 0&&(r.deleteTexture(A.__webglTexture),n.remove(P))}function Y(P){const A=P.texture,Q=n.get(P),re=n.get(A);if(P){if(re.__webglTexture!==void 0&&(r.deleteTexture(re.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++)r.deleteFramebuffer(Q.__webglFramebuffer[fe]),Q.__webglDepthbuffer&&r.deleteRenderbuffer(Q.__webglDepthbuffer[fe]);else r.deleteFramebuffer(Q.__webglFramebuffer),Q.__webglDepthbuffer&&r.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&r.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer&&r.deleteRenderbuffer(Q.__webglColorRenderbuffer),Q.__webglDepthRenderbuffer&&r.deleteRenderbuffer(Q.__webglDepthRenderbuffer);if(P.isWebGLMultipleRenderTargets)for(let fe=0,le=A.length;fe<le;fe++){const _e=n.get(A[fe]);_e.__webglTexture&&(r.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(A[fe])}n.remove(A),n.remove(P)}}let G=0;function F(){G=0}function j(){const P=G;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),G+=1,P}function D(P,A){const Q=n.get(P);if(P.isVideoTexture&&te(P),P.version>0&&Q.__version!==P.version){const re=P.image;if(re===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(Q,P,A);return}}t.activeTexture(33984+A),t.bindTexture(3553,Q.__webglTexture)}function N(P,A){const Q=n.get(P);if(P.version>0&&Q.__version!==P.version){pe(Q,P,A);return}t.activeTexture(33984+A),t.bindTexture(35866,Q.__webglTexture)}function C(P,A){const Q=n.get(P);if(P.version>0&&Q.__version!==P.version){pe(Q,P,A);return}t.activeTexture(33984+A),t.bindTexture(32879,Q.__webglTexture)}function O(P,A){const Q=n.get(P);if(P.version>0&&Q.__version!==P.version){de(Q,P,A);return}t.activeTexture(33984+A),t.bindTexture(34067,Q.__webglTexture)}const W={[qs]:10497,[Lt]:33071,[Ys]:33648},Z={[ot]:9728,[Ia]:9984,[Da]:9986,[Rt]:9729,[au]:9985,[kr]:9987};function $(P,A,Q){if(Q?(r.texParameteri(P,10242,W[A.wrapS]),r.texParameteri(P,10243,W[A.wrapT]),(P===32879||P===35866)&&r.texParameteri(P,32882,W[A.wrapR]),r.texParameteri(P,10240,Z[A.magFilter]),r.texParameteri(P,10241,Z[A.minFilter])):(r.texParameteri(P,10242,33071),r.texParameteri(P,10243,33071),(P===32879||P===35866)&&r.texParameteri(P,32882,33071),(A.wrapS!==Lt||A.wrapT!==Lt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(P,10240,U(A.magFilter)),r.texParameteri(P,10241,U(A.minFilter)),A.minFilter!==ot&&A.minFilter!==Rt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(A.type===Tn&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===ri&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(r.texParameterf(P,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function ne(P,A){P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",S),P.__webglTexture=r.createTexture(),a.memory.textures++)}function pe(P,A,Q){let re=3553;A.isDataTexture2DArray&&(re=35866),A.isDataTexture3D&&(re=32879),ne(P,A),t.activeTexture(33984+Q),t.bindTexture(re,P.__webglTexture),r.pixelStorei(37440,A.flipY),r.pixelStorei(37441,A.premultiplyAlpha),r.pixelStorei(3317,A.unpackAlignment),r.pixelStorei(37443,0);const fe=g(A)&&x(A.image)===!1,le=M(A.image,fe,!1,u),_e=x(le)||o,Se=s.convert(A.format);let Ce=s.convert(A.type),we=L(A.internalFormat,Se,Ce);$(re,A,_e);let k;const ue=A.mipmaps;if(A.isDepthTexture)we=6402,o?A.type===Tn?we=36012:A.type===Lr?we=33190:A.type===Ui?we=35056:we=33189:A.type===Tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===si&&we===6402&&A.type!==Rr&&A.type!==Lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Rr,Ce=s.convert(A.type)),A.format===ki&&we===6402&&(we=34041,A.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Ui,Ce=s.convert(A.type))),t.texImage2D(3553,0,we,le.width,le.height,0,Se,Ce,null);else if(A.isDataTexture)if(ue.length>0&&_e){for(let ee=0,xe=ue.length;ee<xe;ee++)k=ue[ee],t.texImage2D(3553,ee,we,k.width,k.height,0,Se,Ce,k.data);A.generateMipmaps=!1,P.__maxMipLevel=ue.length-1}else t.texImage2D(3553,0,we,le.width,le.height,0,Se,Ce,le.data),P.__maxMipLevel=0;else if(A.isCompressedTexture){for(let ee=0,xe=ue.length;ee<xe;ee++)k=ue[ee],A.format!==Ot&&A.format!==Ln?Se!==null?t.compressedTexImage2D(3553,ee,we,k.width,k.height,0,k.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,ee,we,k.width,k.height,0,Se,Ce,k.data);P.__maxMipLevel=ue.length-1}else if(A.isDataTexture2DArray)t.texImage3D(35866,0,we,le.width,le.height,le.depth,0,Se,Ce,le.data),P.__maxMipLevel=0;else if(A.isDataTexture3D)t.texImage3D(32879,0,we,le.width,le.height,le.depth,0,Se,Ce,le.data),P.__maxMipLevel=0;else if(ue.length>0&&_e){for(let ee=0,xe=ue.length;ee<xe;ee++)k=ue[ee],t.texImage2D(3553,ee,we,Se,Ce,k);A.generateMipmaps=!1,P.__maxMipLevel=ue.length-1}else t.texImage2D(3553,0,we,Se,Ce,le),P.__maxMipLevel=0;b(A,_e)&&E(re,A,le.width,le.height),P.__version=A.version,A.onUpdate&&A.onUpdate(A)}function de(P,A,Q){if(A.image.length!==6)return;ne(P,A),t.activeTexture(33984+Q),t.bindTexture(34067,P.__webglTexture),r.pixelStorei(37440,A.flipY),r.pixelStorei(37441,A.premultiplyAlpha),r.pixelStorei(3317,A.unpackAlignment),r.pixelStorei(37443,0);const re=A&&(A.isCompressedTexture||A.image[0].isCompressedTexture),fe=A.image[0]&&A.image[0].isDataTexture,le=[];for(let ee=0;ee<6;ee++)!re&&!fe?le[ee]=M(A.image[ee],!1,!0,c):le[ee]=fe?A.image[ee].image:A.image[ee];const _e=le[0],Se=x(_e)||o,Ce=s.convert(A.format),we=s.convert(A.type),k=L(A.internalFormat,Ce,we);$(34067,A,Se);let ue;if(re){for(let ee=0;ee<6;ee++){ue=le[ee].mipmaps;for(let xe=0;xe<ue.length;xe++){const B=ue[xe];A.format!==Ot&&A.format!==Ln?Ce!==null?t.compressedTexImage2D(34069+ee,xe,k,B.width,B.height,0,B.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+ee,xe,k,B.width,B.height,0,Ce,we,B.data)}}P.__maxMipLevel=ue.length-1}else{ue=A.mipmaps;for(let ee=0;ee<6;ee++)if(fe){t.texImage2D(34069+ee,0,k,le[ee].width,le[ee].height,0,Ce,we,le[ee].data);for(let xe=0;xe<ue.length;xe++){const ae=ue[xe].image[ee].image;t.texImage2D(34069+ee,xe+1,k,ae.width,ae.height,0,Ce,we,ae.data)}}else{t.texImage2D(34069+ee,0,k,Ce,we,le[ee]);for(let xe=0;xe<ue.length;xe++){const B=ue[xe];t.texImage2D(34069+ee,xe+1,k,Ce,we,B.image[ee])}}P.__maxMipLevel=ue.length}b(A,Se)&&E(34067,A,_e.width,_e.height),P.__version=A.version,A.onUpdate&&A.onUpdate(A)}function Me(P,A,Q,re,fe){const le=s.convert(Q.format),_e=s.convert(Q.type),Se=L(Q.internalFormat,le,_e);fe===32879||fe===35866?t.texImage3D(fe,0,Se,A.width,A.height,A.depth,0,le,_e,null):t.texImage2D(fe,0,Se,A.width,A.height,0,le,_e,null),t.bindFramebuffer(36160,P),r.framebufferTexture2D(36160,re,fe,n.get(Q).__webglTexture,0),t.bindFramebuffer(36160,null)}function be(P,A,Q){if(r.bindRenderbuffer(36161,P),A.depthBuffer&&!A.stencilBuffer){let re=33189;if(Q){const fe=A.depthTexture;fe&&fe.isDepthTexture&&(fe.type===Tn?re=36012:fe.type===Lr&&(re=33190));const le=Le(A);r.renderbufferStorageMultisample(36161,le,re,A.width,A.height)}else r.renderbufferStorage(36161,re,A.width,A.height);r.framebufferRenderbuffer(36160,36096,36161,P)}else if(A.depthBuffer&&A.stencilBuffer){if(Q){const re=Le(A);r.renderbufferStorageMultisample(36161,re,35056,A.width,A.height)}else r.renderbufferStorage(36161,34041,A.width,A.height);r.framebufferRenderbuffer(36160,33306,36161,P)}else{const re=A.isWebGLMultipleRenderTargets===!0?A.texture[0]:A.texture,fe=s.convert(re.format),le=s.convert(re.type),_e=L(re.internalFormat,fe,le);if(Q){const Se=Le(A);r.renderbufferStorageMultisample(36161,Se,_e,A.width,A.height)}else r.renderbufferStorage(36161,_e,A.width,A.height)}r.bindRenderbuffer(36161,null)}function J(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),D(A.depthTexture,0);const re=n.get(A.depthTexture).__webglTexture;if(A.depthTexture.format===si)r.framebufferTexture2D(36160,36096,3553,re,0);else if(A.depthTexture.format===ki)r.framebufferTexture2D(36160,33306,3553,re,0);else throw new Error("Unknown depthTexture format")}function Oe(P){const A=n.get(P),Q=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");J(A.__webglFramebuffer,P)}else if(Q){A.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(36160,A.__webglFramebuffer[re]),A.__webglDepthbuffer[re]=r.createRenderbuffer(),be(A.__webglDepthbuffer[re],P,!1)}else t.bindFramebuffer(36160,A.__webglFramebuffer),A.__webglDepthbuffer=r.createRenderbuffer(),be(A.__webglDepthbuffer,P,!1);t.bindFramebuffer(36160,null)}function Ie(P){const A=P.texture,Q=n.get(P),re=n.get(A);P.addEventListener("dispose",V),P.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture=r.createTexture(),re.__version=A.version,a.memory.textures++);const fe=P.isWebGLCubeRenderTarget===!0,le=P.isWebGLMultipleRenderTargets===!0,_e=P.isWebGLMultisampleRenderTarget===!0,Se=A.isDataTexture3D||A.isDataTexture2DArray,Ce=x(P)||o;if(o&&A.format===Ln&&(A.type===Tn||A.type===ri)&&(A.format=Ot,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),fe){Q.__webglFramebuffer=[];for(let we=0;we<6;we++)Q.__webglFramebuffer[we]=r.createFramebuffer()}else if(Q.__webglFramebuffer=r.createFramebuffer(),le)if(i.drawBuffers){const we=P.texture;for(let k=0,ue=we.length;k<ue;k++){const ee=n.get(we[k]);ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(_e)if(o){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,Q.__webglColorRenderbuffer);const we=s.convert(A.format),k=s.convert(A.type),ue=L(A.internalFormat,we,k),ee=Le(P);r.renderbufferStorageMultisample(36161,ee,ue,P.width,P.height),t.bindFramebuffer(36160,Q.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,Q.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),P.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),be(Q.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(fe){t.bindTexture(34067,re.__webglTexture),$(34067,A,Ce);for(let we=0;we<6;we++)Me(Q.__webglFramebuffer[we],P,A,36064,34069+we);b(A,Ce)&&E(34067,A,P.width,P.height),t.bindTexture(34067,null)}else if(le){const we=P.texture;for(let k=0,ue=we.length;k<ue;k++){const ee=we[k],xe=n.get(ee);t.bindTexture(3553,xe.__webglTexture),$(3553,ee,Ce),Me(Q.__webglFramebuffer,P,ee,36064+k,3553),b(ee,Ce)&&E(3553,ee,P.width,P.height)}t.bindTexture(3553,null)}else{let we=3553;Se&&(o?we=A.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(we,re.__webglTexture),$(we,A,Ce),Me(Q.__webglFramebuffer,P,A,36064,we),b(A,Ce)&&E(we,A,P.width,P.height,P.depth),t.bindTexture(we,null)}P.depthBuffer&&Oe(P)}function Ae(P){const A=x(P)||o,Q=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let re=0,fe=Q.length;re<fe;re++){const le=Q[re];if(b(le,A)){const _e=P.isWebGLCubeRenderTarget?34067:3553,Se=n.get(le).__webglTexture;t.bindTexture(_e,Se),E(_e,le,P.width,P.height),t.bindTexture(_e,null)}}}function me(P){if(P.isWebGLMultisampleRenderTarget)if(o){const A=P.width,Q=P.height;let re=16384;P.depthBuffer&&(re|=256),P.stencilBuffer&&(re|=1024);const fe=n.get(P);t.bindFramebuffer(36008,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,fe.__webglFramebuffer),r.blitFramebuffer(0,0,A,Q,0,0,A,Q,re,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,fe.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Le(P){return o&&P.isWebGLMultisampleRenderTarget?Math.min(h,P.samples):0}function te(P){const A=a.render.frame;d.get(P)!==A&&(d.set(P,A),P.update())}let ie=!1,oe=!1;function ye(P,A){P&&P.isWebGLRenderTarget&&(ie===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),ie=!0),P=P.texture),D(P,A)}function ce(P,A){P&&P.isWebGLCubeRenderTarget&&(oe===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),oe=!0),P=P.texture),O(P,A)}this.allocateTextureUnit=j,this.resetTextureUnits=F,this.setTexture2D=D,this.setTexture2DArray=N,this.setTexture3D=C,this.setTextureCube=O,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=me,this.safeSetTexture2D=ye,this.safeSetTextureCube=ce}function Um(r,e,t){const n=t.isWebGL2;function i(s){let a;if(s===li)return 5121;if(s===uu)return 32819;if(s===hu)return 32820;if(s===du)return 33635;if(s===ou)return 5120;if(s===lu)return 5122;if(s===Rr)return 5123;if(s===cu)return 5124;if(s===Lr)return 5125;if(s===Tn)return 5126;if(s===ri)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===fu)return 6406;if(s===Ln)return 6407;if(s===Ot)return 6408;if(s===pu)return 6409;if(s===mu)return 6410;if(s===si)return 6402;if(s===ki)return 34041;if(s===xu)return 6403;if(s===vu)return 36244;if(s===yu)return 33319;if(s===_u)return 33320;if(s===wu)return 36248;if(s===Mu)return 36249;if(s===Fa||s===Ba||s===Na||s===Ua)if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Fa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ba)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Na)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ua)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Oa||s===za||s===Ha||s===ka)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Oa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===za)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ha)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ka)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===bu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===Ga||s===Va)&&(a=e.get("WEBGL_compressed_texture_etc"),a!==null)){if(s===Ga)return a.COMPRESSED_RGB8_ETC2;if(s===Va)return a.COMPRESSED_RGBA8_ETC2_EAC}if(s===Su||s===Eu||s===Tu||s===Au||s===Lu||s===Cu||s===Ru||s===Pu||s===Iu||s===Du||s===Fu||s===Bu||s===Nu||s===Uu||s===zu||s===Hu||s===ku||s===Gu||s===Vu||s===Wu||s===Xu||s===qu||s===Yu||s===ju||s===Zu||s===$u||s===Ju||s===Qu)return a=e.get("WEBGL_compressed_texture_astc"),a!==null?s:null;if(s===Ou)return a=e.get("EXT_texture_compression_bptc"),a!==null?s:null;if(s===Ui)return n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class Hl extends yt{constructor(e=[]){super(),this.cameras=e}}Hl.prototype.isArrayCamera=!0;class Fi extends ke{constructor(){super(),this.type="Group"}}Fi.prototype.isGroup=!0;const Om={type:"move"};class Cs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Om))),c&&e.hand){a=!0;for(const _ of e.hand.values()){const M=t.getJointPose(_,n);if(c.joints[_.jointName]===void 0){const g=new Fi;g.matrixAutoUpdate=!1,g.visible=!1,c.joints[_.jointName]=g,c.add(g)}const x=c.joints[_.jointName];M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=M.radius),x.visible=M!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class zm extends vn{constructor(e,t){super();const n=this,i=e.state;let s=null,a=1,o=null,l="local-floor",c=null,u=null,h=null,d=null,p=null;const v=[],_=new Map,M=new yt;M.layers.enable(1),M.viewport=new Xe;const x=new yt;x.layers.enable(2),x.viewport=new Xe;const g=[M,x],b=new Hl;b.layers.enable(1),b.layers.enable(2);let E=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let O=v[C];return O===void 0&&(O=new Cs,v[C]=O),O.getTargetRaySpace()},this.getControllerGrip=function(C){let O=v[C];return O===void 0&&(O=new Cs,v[C]=O),O.getGripSpace()},this.getHand=function(C){let O=v[C];return O===void 0&&(O=new Cs,v[C]=O),O.getHandSpace()};function U(C){const O=_.get(C.inputSource);O&&O.dispatchEvent({type:C.type,data:C.inputSource})}function S(){_.forEach(function(C,O){C.disconnect(O)}),_.clear(),E=null,L=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),N.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){a=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){l=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getSession=function(){return s},this.setSession=async function(C){if(s=C,s!==null){s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",S),s.addEventListener("inputsourceschange",V);const O=t.getContextAttributes();if(O.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0){const W={antialias:O.antialias,alpha:O.alpha,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,t,W),s.updateRenderState({baseLayer:p})}else{let W=0;if(O.antialias){const Z={antialias:!0,alpha:O.alpha,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,t,Z),s.updateRenderState({layers:[p]})}else{O.depth&&(W=O.stencil?34041:6402);const Z={colorFormat:O.alpha?6408:6407,depthFormat:W,scaleFactor:a};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Z),h=t.createFramebuffer(),s.updateRenderState({layers:[d]})}}o=await s.requestReferenceSpace(l),N.setContext(s),N.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function V(C){const O=s.inputSources;for(let W=0;W<v.length;W++)_.set(O[W],v[W]);for(let W=0;W<C.removed.length;W++){const Z=C.removed[W],$=_.get(Z);$&&($.dispatchEvent({type:"disconnected",data:Z}),_.delete(Z))}for(let W=0;W<C.added.length;W++){const Z=C.added[W],$=_.get(Z);$&&$.dispatchEvent({type:"connected",data:Z})}}const q=new I,Y=new I;function G(C,O,W){q.setFromMatrixPosition(O.matrixWorld),Y.setFromMatrixPosition(W.matrixWorld);const Z=q.distanceTo(Y),$=O.projectionMatrix.elements,ne=W.projectionMatrix.elements,pe=$[14]/($[10]-1),de=$[14]/($[10]+1),Me=($[9]+1)/$[5],be=($[9]-1)/$[5],J=($[8]-1)/$[0],Oe=(ne[8]+1)/ne[0],Ie=pe*J,Ae=pe*Oe,me=Z/(-J+Oe),Le=me*-J;O.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(Le),C.translateZ(me),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert();const te=pe+me,ie=de+me,oe=Ie-Le,ye=Ae+(Z-Le),ce=Me*de/ie*te,P=be*de/ie*te;C.projectionMatrix.makePerspective(oe,ye,ce,P,te,ie)}function F(C,O){O===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(O.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(s===null)return;b.near=x.near=M.near=C.near,b.far=x.far=M.far=C.far,(E!==b.near||L!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),E=b.near,L=b.far);const O=C.parent,W=b.cameras;F(b,O);for(let $=0;$<W.length;$++)F(W[$],O);b.matrixWorld.decompose(b.position,b.quaternion,b.scale),C.position.copy(b.position),C.quaternion.copy(b.quaternion),C.scale.copy(b.scale),C.matrix.copy(b.matrix),C.matrixWorld.copy(b.matrixWorld);const Z=C.children;for(let $=0,ne=Z.length;$<ne;$++)Z[$].updateMatrixWorld(!0);W.length===2?G(b,M,x):b.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(p!==null)return p.fixedFoveation},this.setFoveation=function(C){d!==null&&(d.fixedFoveation=C),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=C)};let j=null;function D(C,O){if(c=O.getViewerPose(o),c!==null){const Z=c.views;p!==null&&i.bindXRFramebuffer(p.framebuffer);let $=!1;Z.length!==b.cameras.length&&(b.cameras.length=0,$=!0);for(let ne=0;ne<Z.length;ne++){const pe=Z[ne];let de=null;if(p!==null)de=p.getViewport(pe);else{const be=u.getViewSubImage(d,pe);i.bindXRFramebuffer(h),be.depthStencilTexture!==void 0&&t.framebufferTexture2D(36160,36096,3553,be.depthStencilTexture,0),t.framebufferTexture2D(36160,36064,3553,be.colorTexture,0),de=be.viewport}const Me=g[ne];Me.matrix.fromArray(pe.transform.matrix),Me.projectionMatrix.fromArray(pe.projectionMatrix),Me.viewport.set(de.x,de.y,de.width,de.height),ne===0&&b.matrix.copy(Me.matrix),$===!0&&b.cameras.push(Me)}}const W=s.inputSources;for(let Z=0;Z<v.length;Z++){const $=v[Z],ne=W[Z];$.update(ne,O,o)}j&&j(C,O)}const N=new El;N.setAnimationLoop(D),this.setAnimationLoop=function(C){j=C},this.dispose=function(){}}}function Hm(r){function e(x,g){x.fogColor.value.copy(g.color),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function t(x,g,b,E,L){g.isMeshBasicMaterial?n(x,g):g.isMeshLambertMaterial?(n(x,g),l(x,g)):g.isMeshToonMaterial?(n(x,g),u(x,g)):g.isMeshPhongMaterial?(n(x,g),c(x,g)):g.isMeshStandardMaterial?(n(x,g),g.isMeshPhysicalMaterial?d(x,g,L):h(x,g)):g.isMeshMatcapMaterial?(n(x,g),p(x,g)):g.isMeshDepthMaterial?(n(x,g),v(x,g)):g.isMeshDistanceMaterial?(n(x,g),_(x,g)):g.isMeshNormalMaterial?(n(x,g),M(x,g)):g.isLineBasicMaterial?(i(x,g),g.isLineDashedMaterial&&s(x,g)):g.isPointsMaterial?a(x,g,b,E):g.isSpriteMaterial?o(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function n(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map),g.alphaMap&&(x.alphaMap.value=g.alphaMap),g.specularMap&&(x.specularMap.value=g.specularMap);const b=r.get(g).envMap;if(b){x.envMap.value=b,x.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.refractionRatio.value=g.refractionRatio;const U=r.get(b).__maxMipLevel;U!==void 0&&(x.maxMipLevel.value=U)}g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity);let E;g.map?E=g.map:g.specularMap?E=g.specularMap:g.displacementMap?E=g.displacementMap:g.normalMap?E=g.normalMap:g.bumpMap?E=g.bumpMap:g.roughnessMap?E=g.roughnessMap:g.metalnessMap?E=g.metalnessMap:g.alphaMap?E=g.alphaMap:g.emissiveMap?E=g.emissiveMap:g.clearcoatMap?E=g.clearcoatMap:g.clearcoatNormalMap?E=g.clearcoatNormalMap:g.clearcoatRoughnessMap?E=g.clearcoatRoughnessMap:g.specularIntensityMap?E=g.specularIntensityMap:g.specularTintMap&&(E=g.specularTintMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),x.uvTransform.value.copy(E.matrix));let L;g.aoMap?L=g.aoMap:g.lightMap&&(L=g.lightMap),L!==void 0&&(L.isWebGLRenderTarget&&(L=L.texture),L.matrixAutoUpdate===!0&&L.updateMatrix(),x.uv2Transform.value.copy(L.matrix))}function i(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity}function s(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function a(x,g,b,E){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*b,x.scale.value=E*.5,g.map&&(x.map.value=g.map),g.alphaMap&&(x.alphaMap.value=g.alphaMap);let L;g.map?L=g.map:g.alphaMap&&(L=g.alphaMap),L!==void 0&&(L.matrixAutoUpdate===!0&&L.updateMatrix(),x.uvTransform.value.copy(L.matrix))}function o(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map),g.alphaMap&&(x.alphaMap.value=g.alphaMap);let b;g.map?b=g.map:g.alphaMap&&(b=g.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),x.uvTransform.value.copy(b.matrix))}function l(x,g){g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap)}function c(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap),g.bumpMap&&(x.bumpMap.value=g.bumpMap,x.bumpScale.value=g.bumpScale,g.side===nt&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,x.normalScale.value.copy(g.normalScale),g.side===nt&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias)}function u(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap),g.bumpMap&&(x.bumpMap.value=g.bumpMap,x.bumpScale.value=g.bumpScale,g.side===nt&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,x.normalScale.value.copy(g.normalScale),g.side===nt&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias)}function h(x,g){x.roughness.value=g.roughness,x.metalness.value=g.metalness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap),g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap),g.bumpMap&&(x.bumpMap.value=g.bumpMap,x.bumpScale.value=g.bumpScale,g.side===nt&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,x.normalScale.value.copy(g.normalScale),g.side===nt&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),r.get(g).envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function d(x,g,b){h(x,g),x.reflectivity.value=g.reflectivity,x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.sheen&&x.sheen.value.copy(g.sheen),g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),x.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===nt&&x.clearcoatNormalScale.value.negate()),x.transmission.value=g.transmission,g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap),g.transmission>0&&(x.transmissionSamplerMap.value=b.texture,x.transmissionSamplerSize.value.set(b.width,b.height)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap),x.attenuationDistance.value=g.attenuationDistance,x.attenuationTint.value.copy(g.attenuationTint),x.specularIntensity.value=g.specularIntensity,x.specularTint.value.copy(g.specularTint),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap),g.specularTintMap&&(x.specularTintMap.value=g.specularTintMap)}function p(x,g){g.matcap&&(x.matcap.value=g.matcap),g.bumpMap&&(x.bumpMap.value=g.bumpMap,x.bumpScale.value=g.bumpScale,g.side===nt&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,x.normalScale.value.copy(g.normalScale),g.side===nt&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias)}function v(x,g){g.displacementMap&&(x.displacementMap.value=g.displacementMap,x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias)}function _(x,g){g.displacementMap&&(x.displacementMap.value=g.displacementMap,x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),x.referencePosition.value.copy(g.referencePosition),x.nearDistance.value=g.nearDistance,x.farDistance.value=g.farDistance}function M(x,g){g.bumpMap&&(x.bumpMap.value=g.bumpMap,x.bumpScale.value=g.bumpScale,g.side===nt&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,x.normalScale.value.copy(g.normalScale),g.side===nt&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function km(){const r=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return r.style.display="block",r}function We(r={}){const e=r.canvas!==void 0?r.canvas:km(),t=r.context!==void 0?r.context:null,n=r.alpha!==void 0?r.alpha:!1,i=r.depth!==void 0?r.depth:!0,s=r.stencil!==void 0?r.stencil:!0,a=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,l=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",u=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h=null,d=null;const p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=bt,this.physicallyCorrectLights=!1,this.toneMapping=An,this.toneMappingExposure=1;const _=this;let M=!1,x=0,g=0,b=null,E=-1,L=null;const U=new Xe,S=new Xe;let V=null,q=e.width,Y=e.height,G=1,F=null,j=null;const D=new Xe(0,0,q,Y),N=new Xe(0,0,q,Y);let C=!1;const O=[],W=new Xr;let Z=!1,$=!1,ne=null;const pe=new Re,de=new I,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function be(){return b===null?G:1}let J=t;function Oe(y,R){for(let z=0;z<y.length;z++){const X=y[z],K=e.getContext(X,R);if(K!==null)return K}return null}try{const y={alpha:n,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if(e.addEventListener("webglcontextlost",Ne,!1),e.addEventListener("webglcontextrestored",De,!1),J===null){const R=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&R.shift(),J=Oe(R,y),J===null)throw Oe(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ie,Ae,me,Le,te,ie,oe,ye,ce,P,A,Q,re,fe,le,_e,Se,Ce,we,k,ue,ee,xe;function B(){Ie=new up(J),Ae=new tp(J,Ie,r),Ie.init(Ae),ee=new Um(J,Ie,Ae),me=new Bm(J,Ie,Ae),O[0]=1029,Le=new fp,te=new Sm,ie=new Nm(J,Ie,me,te,Ae,ee,Le),oe=new ip(_),ye=new cp(_),ce=new Ch(J,Ae),xe=new Kf(J,Ie,ce,Ae),P=new hp(J,ce,Le,xe),A=new xp(J,P,ce,Le),we=new gp(J),_e=new np(te),Q=new bm(_,oe,ye,Ie,Ae,xe,_e),re=new Hm(te),fe=new Tm(te),le=new Im(Ie,Ae),Ce=new Qf(_,oe,me,A,o),Se=new zl(_,A,Ae),k=new ep(J,Ie,Le,Ae),ue=new dp(J,Ie,Le,Ae),Le.programs=Q.programs,_.capabilities=Ae,_.extensions=Ie,_.properties=te,_.renderLists=fe,_.shadowMap=Se,_.state=me,_.info=Le}B();const ae=new zm(_,J);this.xr=ae,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const y=Ie.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ie.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(y){y!==void 0&&(G=y,this.setSize(q,Y,!1))},this.getSize=function(y){return y.set(q,Y)},this.setSize=function(y,R,z){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=y,Y=R,e.width=Math.floor(y*G),e.height=Math.floor(R*G),z!==!1&&(e.style.width=y+"px",e.style.height=R+"px"),this.setViewport(0,0,y,R)},this.getDrawingBufferSize=function(y){return y.set(q*G,Y*G).floor()},this.setDrawingBufferSize=function(y,R,z){q=y,Y=R,G=z,e.width=Math.floor(y*z),e.height=Math.floor(R*z),this.setViewport(0,0,y,R)},this.getCurrentViewport=function(y){return y.copy(U)},this.getViewport=function(y){return y.copy(D)},this.setViewport=function(y,R,z,X){y.isVector4?D.set(y.x,y.y,y.z,y.w):D.set(y,R,z,X),me.viewport(U.copy(D).multiplyScalar(G).floor())},this.getScissor=function(y){return y.copy(N)},this.setScissor=function(y,R,z,X){y.isVector4?N.set(y.x,y.y,y.z,y.w):N.set(y,R,z,X),me.scissor(S.copy(N).multiplyScalar(G).floor())},this.getScissorTest=function(){return C},this.setScissorTest=function(y){me.setScissorTest(C=y)},this.setOpaqueSort=function(y){F=y},this.setTransparentSort=function(y){j=y},this.getClearColor=function(y){return y.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(y,R,z){let X=0;(y===void 0||y)&&(X|=16384),(R===void 0||R)&&(X|=256),(z===void 0||z)&&(X|=1024),J.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ne,!1),e.removeEventListener("webglcontextrestored",De,!1),fe.dispose(),le.dispose(),te.dispose(),oe.dispose(),ye.dispose(),A.dispose(),xe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",wi),ae.removeEventListener("sessionend",_n),ne&&(ne.dispose(),ne=null),rt.stop()};function Ne(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const y=Le.autoReset,R=Se.enabled,z=Se.autoUpdate,X=Se.needsUpdate,K=Se.type;B(),Le.autoReset=y,Se.enabled=R,Se.autoUpdate=z,Se.needsUpdate=X,Se.type=K}function Ye(y){const R=y.target;R.removeEventListener("dispose",Ye),Ge(R)}function Ge(y){dt(y),te.remove(y)}function dt(y){const R=te.get(y).programs;R!==void 0&&R.forEach(function(z){Q.releaseProgram(z)})}function ft(y,R){y.render(function(z){_.renderBufferImmediate(z,R)})}this.renderBufferImmediate=function(y,R){xe.initAttributes();const z=te.get(y);y.hasPositions&&!z.position&&(z.position=J.createBuffer()),y.hasNormals&&!z.normal&&(z.normal=J.createBuffer()),y.hasUvs&&!z.uv&&(z.uv=J.createBuffer()),y.hasColors&&!z.color&&(z.color=J.createBuffer());const X=R.getAttributes();y.hasPositions&&(J.bindBuffer(34962,z.position),J.bufferData(34962,y.positionArray,35048),xe.enableAttribute(X.position),J.vertexAttribPointer(X.position,3,5126,!1,0,0)),y.hasNormals&&(J.bindBuffer(34962,z.normal),J.bufferData(34962,y.normalArray,35048),xe.enableAttribute(X.normal),J.vertexAttribPointer(X.normal,3,5126,!1,0,0)),y.hasUvs&&(J.bindBuffer(34962,z.uv),J.bufferData(34962,y.uvArray,35048),xe.enableAttribute(X.uv),J.vertexAttribPointer(X.uv,2,5126,!1,0,0)),y.hasColors&&(J.bindBuffer(34962,z.color),J.bufferData(34962,y.colorArray,35048),xe.enableAttribute(X.color),J.vertexAttribPointer(X.color,3,5126,!1,0,0)),xe.disableUnusedAttributes(),J.drawArrays(4,0,y.count),y.count=0},this.renderBufferDirect=function(y,R,z,X,K,ve){R===null&&(R=Me);const ge=K.isMesh&&K.matrixWorld.determinant()<0,Te=m(y,R,X,K);me.setMaterial(X,ge);let Fe=z.index;const He=z.attributes.position;if(Fe===null){if(He===void 0||He.count===0)return}else if(Fe.count===0)return;let Be=1;X.wireframe===!0&&(Fe=P.getWireframeAttribute(z),Be=2),(z.morphAttributes.position!==void 0||z.morphAttributes.normal!==void 0)&&we.update(K,z,X,Te),xe.setup(K,X,Te,z,Fe);let ze,Pe=k;Fe!==null&&(ze=ce.get(Fe),Pe=ue,Pe.setIndex(ze));const Yt=Fe!==null?Fe.count:He.count,Qe=z.drawRange.start*Be,tn=z.drawRange.count*Be,Dt=ve!==null?ve.start*Be:0,wn=ve!==null?ve.count*Be:1/0,nn=Math.max(Qe,Dt),st=Math.min(Yt,Qe+tn,Dt+wn)-1,zt=Math.max(0,st-nn+1);if(zt!==0){if(K.isMesh)X.wireframe===!0?(me.setLineWidth(X.wireframeLinewidth*be()),Pe.setMode(1)):Pe.setMode(4);else if(K.isLine){let lt=X.linewidth;lt===void 0&&(lt=1),me.setLineWidth(lt*be()),K.isLineSegments?Pe.setMode(1):K.isLineLoop?Pe.setMode(2):Pe.setMode(3)}else K.isPoints?Pe.setMode(0):K.isSprite&&Pe.setMode(4);if(K.isInstancedMesh)Pe.renderInstances(nn,zt,K.count);else if(z.isInstancedBufferGeometry){const lt=Math.min(z.instanceCount,z._maxInstanceCount);Pe.renderInstances(nn,zt,lt)}else Pe.render(nn,zt)}},this.compile=function(y,R){d=le.get(y),d.init(),v.push(d),y.traverseVisible(function(z){z.isLight&&z.layers.test(R.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights(),y.traverse(function(z){const X=z.material;if(X)if(Array.isArray(X))for(let K=0;K<X.length;K++){const ve=X[K];w(ve,y,z)}else w(X,y,z)}),v.pop(),d=null};let vt=null;function St(y){vt&&vt(y)}function wi(){rt.stop()}function _n(){rt.start()}const rt=new El;rt.setAnimationLoop(St),typeof window<"u"&&rt.setContext(window),this.setAnimationLoop=function(y){vt=y,ae.setAnimationLoop(y),y===null?rt.stop():rt.start()},ae.addEventListener("sessionstart",wi),ae.addEventListener("sessionend",_n),this.render=function(y,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;y.autoUpdate===!0&&y.updateMatrixWorld(),R.parent===null&&R.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(R),R=ae.getCamera()),y.isScene===!0&&y.onBeforeRender(_,y,R,b),d=le.get(y,v.length),d.init(),v.push(d),pe.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),W.setFromProjectionMatrix(pe),$=this.localClippingEnabled,Z=_e.init(this.clippingPlanes,$,R),h=fe.get(y,p.length),h.init(),p.push(h),Pn(y,R,0,_.sortObjects),h.finish(),_.sortObjects===!0&&h.sort(F,j),Z===!0&&_e.beginShadows();const z=d.state.shadowsArray;Se.render(z,y,R),d.setupLights(),d.setupLightsView(R),Z===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ce.render(h,y);const X=h.opaque,K=h.transmissive,ve=h.transparent;X.length>0&&Et(X,y,R),K.length>0&&Qr(X,K,y,R),ve.length>0&&Et(ve,y,R),b!==null&&(ie.updateMultisampleRenderTarget(b),ie.updateRenderTargetMipmap(b)),y.isScene===!0&&y.onAfterRender(_,y,R),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1),xe.resetDefaultState(),E=-1,L=null,v.pop(),v.length>0?d=v[v.length-1]:d=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function Pn(y,R,z,X){if(y.visible===!1)return;if(y.layers.test(R.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(R);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||W.intersectsSprite(y)){X&&de.setFromMatrixPosition(y.matrixWorld).applyMatrix4(pe);const ge=A.update(y),Te=y.material;Te.visible&&h.push(y,ge,Te,z,de.z,null)}}else if(y.isImmediateRenderObject)X&&de.setFromMatrixPosition(y.matrixWorld).applyMatrix4(pe),h.push(y,null,y.material,z,de.z,null);else if((y.isMesh||y.isLine||y.isPoints)&&(y.isSkinnedMesh&&y.skeleton.frame!==Le.render.frame&&(y.skeleton.update(),y.skeleton.frame=Le.render.frame),!y.frustumCulled||W.intersectsObject(y))){X&&de.setFromMatrixPosition(y.matrixWorld).applyMatrix4(pe);const ge=A.update(y),Te=y.material;if(Array.isArray(Te)){const Fe=ge.groups;for(let He=0,Be=Fe.length;He<Be;He++){const ze=Fe[He],Pe=Te[ze.materialIndex];Pe&&Pe.visible&&h.push(y,ge,Pe,z,de.z,ze)}}else Te.visible&&h.push(y,ge,Te,z,de.z,null)}}const ve=y.children;for(let ge=0,Te=ve.length;ge<Te;ge++)Pn(ve[ge],R,z,X)}function Qr(y,R,z,X){if(ne===null){const Te=a===!0&&Ae.isWebGL2===!0?yl:Wt;ne=new Te(1024,1024,{generateMipmaps:!0,type:ee.convert(ri)!==null?ri:li,minFilter:kr,magFilter:ot,wrapS:Lt,wrapT:Lt})}const K=_.getRenderTarget();_.setRenderTarget(ne),_.clear();const ve=_.toneMapping;_.toneMapping=An,Et(y,z,X),_.toneMapping=ve,ie.updateMultisampleRenderTarget(ne),ie.updateRenderTargetMipmap(ne),_.setRenderTarget(K),Et(R,z,X)}function Et(y,R,z){const X=R.isScene===!0?R.overrideMaterial:null;if(z.isArrayCamera){const K=z.cameras;for(let ve=0,ge=K.length;ve<ge;ve++){const Te=K[ve];me.viewport(U.copy(Te.viewport)),d.setupLightsView(Te);for(let Fe=0,He=y.length;Fe<He;Fe++){const Be=y[Fe],ze=Be.object,Pe=Be.geometry,Yt=X===null?Be.material:X,Qe=Be.group;ze.layers.test(Te.layers)&&$i(ze,R,Te,Pe,Yt,Qe)}}}else for(let K=0,ve=y.length;K<ve;K++){const ge=y[K],Te=ge.object,Fe=ge.geometry,He=X===null?ge.material:X,Be=ge.group;$i(Te,R,z,Fe,He,Be)}}function $i(y,R,z,X,K,ve){if(y.onBeforeRender(_,R,z,X,K,ve),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),y.isImmediateRenderObject){const ge=m(z,R,K,y);me.setMaterial(K),xe.reset(),ft(y,ge)}else K.transparent===!0&&K.side===oi?(K.side=nt,K.needsUpdate=!0,_.renderBufferDirect(z,R,X,K,y,ve),K.side=Hi,K.needsUpdate=!0,_.renderBufferDirect(z,R,X,K,y,ve),K.side=oi):_.renderBufferDirect(z,R,X,K,y,ve);y.onAfterRender(_,R,z,X,K,ve)}function w(y,R,z){R.isScene!==!0&&(R=Me);const X=te.get(y),K=d.state.lights,ve=d.state.shadowsArray,ge=K.state.version,Te=Q.getParameters(y,K.state,ve,R,z),Fe=Q.getProgramCacheKey(Te);let He=X.programs;X.environment=y.isMeshStandardMaterial?R.environment:null,X.fog=R.fog,X.envMap=(y.isMeshStandardMaterial?ye:oe).get(y.envMap||X.environment),He===void 0&&(y.addEventListener("dispose",Ye),He=new Map,X.programs=He);let Be=He.get(Fe);if(Be!==void 0){if(X.currentProgram===Be&&X.lightsStateVersion===ge)return f(y,Te),Be}else Te.uniforms=Q.getUniforms(y),y.onBuild(Te,_),y.onBeforeCompile(Te,_),Be=Q.acquireProgram(Te,Fe),He.set(Fe,Be),X.uniforms=Te.uniforms;const ze=X.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ze.clippingPlanes=_e.uniform),f(y,Te),X.needsLights=H(y),X.lightsStateVersion=ge,X.needsLights&&(ze.ambientLightColor.value=K.state.ambient,ze.lightProbe.value=K.state.probe,ze.directionalLights.value=K.state.directional,ze.directionalLightShadows.value=K.state.directionalShadow,ze.spotLights.value=K.state.spot,ze.spotLightShadows.value=K.state.spotShadow,ze.rectAreaLights.value=K.state.rectArea,ze.ltc_1.value=K.state.rectAreaLTC1,ze.ltc_2.value=K.state.rectAreaLTC2,ze.pointLights.value=K.state.point,ze.pointLightShadows.value=K.state.pointShadow,ze.hemisphereLights.value=K.state.hemi,ze.directionalShadowMap.value=K.state.directionalShadowMap,ze.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ze.spotShadowMap.value=K.state.spotShadowMap,ze.spotShadowMatrix.value=K.state.spotShadowMatrix,ze.pointShadowMap.value=K.state.pointShadowMap,ze.pointShadowMatrix.value=K.state.pointShadowMatrix);const Pe=Be.getUniforms(),Yt=pn.seqWithValue(Pe.seq,ze);return X.currentProgram=Be,X.uniformsList=Yt,Be}function f(y,R){const z=te.get(y);z.outputEncoding=R.outputEncoding,z.instancing=R.instancing,z.skinning=R.skinning,z.morphTargets=R.morphTargets,z.morphNormals=R.morphNormals,z.numClippingPlanes=R.numClippingPlanes,z.numIntersection=R.numClipIntersection,z.vertexAlphas=R.vertexAlphas,z.vertexTangents=R.vertexTangents}function m(y,R,z,X){R.isScene!==!0&&(R=Me),ie.resetTextureUnits();const K=R.fog,ve=z.isMeshStandardMaterial?R.environment:null,ge=b===null?_.outputEncoding:b.texture.encoding,Te=(z.isMeshStandardMaterial?ye:oe).get(z.envMap||ve),Fe=z.vertexColors===!0&&!!X.geometry&&!!X.geometry.attributes.color&&X.geometry.attributes.color.itemSize===4,He=!!X.geometry&&!!X.geometry.attributes.tangent,Be=!!X.geometry&&!!X.geometry.morphAttributes.position,ze=!!X.geometry&&!!X.geometry.morphAttributes.normal,Pe=te.get(z),Yt=d.state.lights;if(Z===!0&&($===!0||y!==L)){const lt=y===L&&z.id===E;_e.setState(z,y,lt)}let Qe=!1;z.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Yt.state.version||Pe.outputEncoding!==ge||X.isInstancedMesh&&Pe.instancing===!1||!X.isInstancedMesh&&Pe.instancing===!0||X.isSkinnedMesh&&Pe.skinning===!1||!X.isSkinnedMesh&&Pe.skinning===!0||Pe.envMap!==Te||z.fog&&Pe.fog!==K||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==_e.numPlanes||Pe.numIntersection!==_e.numIntersection)||Pe.vertexAlphas!==Fe||Pe.vertexTangents!==He||Pe.morphTargets!==Be||Pe.morphNormals!==ze)&&(Qe=!0):(Qe=!0,Pe.__version=z.version);let tn=Pe.currentProgram;Qe===!0&&(tn=w(z,R,X));let Dt=!1,wn=!1,nn=!1;const st=tn.getUniforms(),zt=Pe.uniforms;if(me.useProgram(tn.program)&&(Dt=!0,wn=!0,nn=!0),z.id!==E&&(E=z.id,wn=!0),Dt||L!==y){if(st.setValue(J,"projectionMatrix",y.projectionMatrix),Ae.logarithmicDepthBuffer&&st.setValue(J,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),L!==y&&(L=y,wn=!0,nn=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const lt=st.map.cameraPosition;lt!==void 0&&lt.setValue(J,de.setFromMatrixPosition(y.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&st.setValue(J,"isOrthographic",y.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||X.isSkinnedMesh)&&st.setValue(J,"viewMatrix",y.matrixWorldInverse)}if(X.isSkinnedMesh){st.setOptional(J,X,"bindMatrix"),st.setOptional(J,X,"bindMatrixInverse");const lt=X.skeleton;lt&&(Ae.floatVertexTextures?(lt.boneTexture===null&&lt.computeBoneTexture(),st.setValue(J,"boneTexture",lt.boneTexture,ie),st.setValue(J,"boneTextureSize",lt.boneTextureSize)):st.setOptional(J,lt,"boneMatrices"))}return(wn||Pe.receiveShadow!==X.receiveShadow)&&(Pe.receiveShadow=X.receiveShadow,st.setValue(J,"receiveShadow",X.receiveShadow)),wn&&(st.setValue(J,"toneMappingExposure",_.toneMappingExposure),Pe.needsLights&&T(zt,nn),K&&z.fog&&re.refreshFogUniforms(zt,K),re.refreshMaterialUniforms(zt,z,G,Y,ne),pn.upload(J,Pe.uniformsList,zt,ie)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(pn.upload(J,Pe.uniformsList,zt,ie),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&st.setValue(J,"center",X.center),st.setValue(J,"modelViewMatrix",X.modelViewMatrix),st.setValue(J,"normalMatrix",X.normalMatrix),st.setValue(J,"modelMatrix",X.matrixWorld),tn}function T(y,R){y.ambientLightColor.needsUpdate=R,y.lightProbe.needsUpdate=R,y.directionalLights.needsUpdate=R,y.directionalLightShadows.needsUpdate=R,y.pointLights.needsUpdate=R,y.pointLightShadows.needsUpdate=R,y.spotLights.needsUpdate=R,y.spotLightShadows.needsUpdate=R,y.rectAreaLights.needsUpdate=R,y.hemisphereLights.needsUpdate=R}function H(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return b},this.setRenderTarget=function(y,R=0,z=0){b=y,x=R,g=z,y&&te.get(y).__webglFramebuffer===void 0&&ie.setupRenderTarget(y);let X=null,K=!1,ve=!1;if(y){const Te=y.texture;(Te.isDataTexture3D||Te.isDataTexture2DArray)&&(ve=!0);const Fe=te.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(X=Fe[R],K=!0):y.isWebGLMultisampleRenderTarget?X=te.get(y).__webglMultisampledFramebuffer:X=Fe,U.copy(y.viewport),S.copy(y.scissor),V=y.scissorTest}else U.copy(D).multiplyScalar(G).floor(),S.copy(N).multiplyScalar(G).floor(),V=C;if(me.bindFramebuffer(36160,X)&&Ae.drawBuffers){let Te=!1;if(y)if(y.isWebGLMultipleRenderTargets){const Fe=y.texture;if(O.length!==Fe.length||O[0]!==36064){for(let He=0,Be=Fe.length;He<Be;He++)O[He]=36064+He;O.length=Fe.length,Te=!0}}else(O.length!==1||O[0]!==36064)&&(O[0]=36064,O.length=1,Te=!0);else(O.length!==1||O[0]!==1029)&&(O[0]=1029,O.length=1,Te=!0);Te&&(Ae.isWebGL2?J.drawBuffers(O):Ie.get("WEBGL_draw_buffers").drawBuffersWEBGL(O))}if(me.viewport(U),me.scissor(S),me.setScissorTest(V),K){const Te=te.get(y.texture);J.framebufferTexture2D(36160,36064,34069+R,Te.__webglTexture,z)}else if(ve){const Te=te.get(y.texture),Fe=R||0;J.framebufferTextureLayer(36160,36064,Te.__webglTexture,z||0,Fe)}},this.readRenderTargetPixels=function(y,R,z,X,K,ve,ge){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=te.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te){me.bindFramebuffer(36160,Te);try{const Fe=y.texture,He=Fe.format,Be=Fe.type;if(He!==Ot&&ee.convert(He)!==J.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Be===ri&&(Ie.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&Ie.has("EXT_color_buffer_float"));if(Be!==li&&ee.convert(Be)!==J.getParameter(35738)&&!(Be===Tn&&(Ae.isWebGL2||Ie.has("OES_texture_float")||Ie.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J.checkFramebufferStatus(36160)===36053?R>=0&&R<=y.width-X&&z>=0&&z<=y.height-K&&J.readPixels(R,z,X,K,ee.convert(He),ee.convert(Be),ve):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Fe=b!==null?te.get(b).__webglFramebuffer:null;me.bindFramebuffer(36160,Fe)}}},this.copyFramebufferToTexture=function(y,R,z=0){const X=Math.pow(2,-z),K=Math.floor(R.image.width*X),ve=Math.floor(R.image.height*X);let ge=ee.convert(R.format);Ae.isWebGL2&&(ge===6407&&(ge=32849),ge===6408&&(ge=32856)),ie.setTexture2D(R,0),J.copyTexImage2D(3553,z,ge,y.x,y.y,K,ve,0),me.unbindTexture()},this.copyTextureToTexture=function(y,R,z,X=0){const K=R.image.width,ve=R.image.height,ge=ee.convert(z.format),Te=ee.convert(z.type);ie.setTexture2D(z,0),J.pixelStorei(37440,z.flipY),J.pixelStorei(37441,z.premultiplyAlpha),J.pixelStorei(3317,z.unpackAlignment),R.isDataTexture?J.texSubImage2D(3553,X,y.x,y.y,K,ve,ge,Te,R.image.data):R.isCompressedTexture?J.compressedTexSubImage2D(3553,X,y.x,y.y,R.mipmaps[0].width,R.mipmaps[0].height,ge,R.mipmaps[0].data):J.texSubImage2D(3553,X,y.x,y.y,ge,Te,R.image),X===0&&z.generateMipmaps&&J.generateMipmap(3553),me.unbindTexture()},this.copyTextureToTexture3D=function(y,R,z,X,K=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=y.max.x-y.min.x+1,ge=y.max.y-y.min.y+1,Te=y.max.z-y.min.z+1,Fe=ee.convert(X.format),He=ee.convert(X.type);let Be;if(X.isDataTexture3D)ie.setTexture3D(X,0),Be=32879;else if(X.isDataTexture2DArray)ie.setTexture2DArray(X,0),Be=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(37440,X.flipY),J.pixelStorei(37441,X.premultiplyAlpha),J.pixelStorei(3317,X.unpackAlignment);const ze=J.getParameter(3314),Pe=J.getParameter(32878),Yt=J.getParameter(3316),Qe=J.getParameter(3315),tn=J.getParameter(32877),Dt=z.isCompressedTexture?z.mipmaps[0]:z.image;J.pixelStorei(3314,Dt.width),J.pixelStorei(32878,Dt.height),J.pixelStorei(3316,y.min.x),J.pixelStorei(3315,y.min.y),J.pixelStorei(32877,y.min.z),z.isDataTexture||z.isDataTexture3D?J.texSubImage3D(Be,K,R.x,R.y,R.z,ve,ge,Te,Fe,He,Dt.data):z.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(Be,K,R.x,R.y,R.z,ve,ge,Te,Fe,Dt.data)):J.texSubImage3D(Be,K,R.x,R.y,R.z,ve,ge,Te,Fe,He,Dt),J.pixelStorei(3314,ze),J.pixelStorei(32878,Pe),J.pixelStorei(3316,Yt),J.pixelStorei(3315,Qe),J.pixelStorei(32877,tn),K===0&&X.generateMipmaps&&J.generateMipmap(Be),me.unbindTexture()},this.initTexture=function(y){ie.setTexture2D(y,0),me.unbindTexture()},this.resetState=function(){x=0,g=0,b=null,me.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Gm extends We{}Gm.prototype.isWebGL1Renderer=!0;class ha extends ke{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}ha.prototype.isScene=!0;class ji{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gi,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Vt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}ji.prototype.isInterleavedBuffer=!0;const Ke=new I;class Vi{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ke.x=this.getX(t),Ke.y=this.getY(t),Ke.z=this.getZ(t),Ke.applyMatrix4(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ke.x=this.getX(t),Ke.y=this.getY(t),Ke.z=this.getZ(t),Ke.applyNormalMatrix(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ke.x=this.getX(t),Ke.y=this.getY(t),Ke.z=this.getZ(t),Ke.transformDirection(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new $e(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Vi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Vi.prototype.isInterleavedBufferAttribute=!0;class kl extends xt{constructor(e){super(),this.type="SpriteMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}kl.prototype.isSpriteMaterial=!0;let $n;const Ai=new I,Jn=new I,Qn=new I,Kn=new se,Li=new se,Gl=new Re,gr=new I,Ci=new I,xr=new I,To=new se,Rs=new se,Ao=new se;class Vm extends ke{constructor(e){if(super(),this.type="Sprite",$n===void 0){$n=new qe;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ji(t,5);$n.setIndex([0,1,2,0,2,3]),$n.setAttribute("position",new Vi(n,3,0,!1)),$n.setAttribute("uv",new Vi(n,2,3,!1))}this.geometry=$n,this.material=e!==void 0?e:new kl,this.center=new se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Jn.setFromMatrixScale(this.matrixWorld),Gl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Qn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Jn.multiplyScalar(-Qn.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;vr(gr.set(-.5,-.5,0),Qn,a,Jn,i,s),vr(Ci.set(.5,-.5,0),Qn,a,Jn,i,s),vr(xr.set(.5,.5,0),Qn,a,Jn,i,s),To.set(0,0),Rs.set(1,0),Ao.set(1,1);let o=e.ray.intersectTriangle(gr,Ci,xr,!1,Ai);if(o===null&&(vr(Ci.set(-.5,.5,0),Qn,a,Jn,i,s),Rs.set(0,1),o=e.ray.intersectTriangle(gr,xr,Ci,!1,Ai),o===null))return;const l=e.ray.origin.distanceTo(Ai);l<e.near||l>e.far||t.push({distance:l,point:Ai.clone(),uv:it.getUV(Ai,gr,Ci,xr,To,Rs,Ao,new se),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}Vm.prototype.isSprite=!0;function vr(r,e,t,n,i,s){Kn.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Li.x=s*Kn.x-i*Kn.y,Li.y=i*Kn.x+s*Kn.y):Li.copy(Kn),r.copy(e),r.x+=Li.x,r.y+=Li.y,r.applyMatrix4(Gl)}const Lo=new I,Co=new Xe,Ro=new Xe,Wm=new I,Po=new Re;class Vl extends _t{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Re,this.bindMatrixInverse=new Re}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Xe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Co.fromBufferAttribute(i.attributes.skinIndex,e),Ro.fromBufferAttribute(i.attributes.skinWeight,e),Lo.fromBufferAttribute(i.attributes.position,e).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Ro.getComponent(s);if(a!==0){const o=Co.getComponent(s);Po.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Wm.copy(Lo).applyMatrix4(Po),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}Vl.prototype.isSkinnedMesh=!0;class Xm extends ke{constructor(){super(),this.type="Bone"}}Xm.prototype.isBone=!0;class qm extends ht{constructor(e=null,t=1,n=1,i,s,a,o,l,c=ot,u=ot,h,d){super(null,a,o,l,c,u,i,s,h,d),this.image={data:e,width:t,height:n},this.magFilter=c,this.minFilter=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}qm.prototype.isDataTexture=!0;const Io=new Re,Do=new Re,yr=[],Ri=new _t;class Ym extends _t{constructor(e,t,n){super(e,t),this.instanceMatrix=new $e(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ri.geometry=this.geometry,Ri.material=this.material,Ri.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Io),Do.multiplyMatrices(n,Io),Ri.matrixWorld=Do,Ri.raycast(e,yr);for(let a=0,o=yr.length;a<o;a++){const l=yr[a];l.instanceId=s,l.object=this,t.push(l)}yr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $e(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}Ym.prototype.isInstancedMesh=!0;class gi extends xt{constructor(e){super(),this.type="LineBasicMaterial",this.color=new Ee(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}gi.prototype.isLineBasicMaterial=!0;const Fo=new I,Bo=new I,No=new Re,Ps=new fi,_r=new Rn;class da extends ke{constructor(e=new qe,t=new gi){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Fo.fromBufferAttribute(t,i-1),Bo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Fo.distanceTo(Bo);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(i),_r.radius+=s,e.ray.intersectsSphere(_r)===!1)return;No.copy(i).invert(),Ps.copy(e.ray).applyMatrix4(No);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new I,u=new I,h=new I,d=new I,p=this.isLineSegments?2:1;if(n.isBufferGeometry){const v=n.index,M=n.attributes.position;if(v!==null){const x=Math.max(0,a.start),g=Math.min(v.count,a.start+a.count);for(let b=x,E=g-1;b<E;b+=p){const L=v.getX(b),U=v.getX(b+1);if(c.fromBufferAttribute(M,L),u.fromBufferAttribute(M,U),Ps.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const V=e.ray.origin.distanceTo(d);V<e.near||V>e.far||t.push({distance:V,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,a.start),g=Math.min(M.count,a.start+a.count);for(let b=x,E=g-1;b<E;b+=p){if(c.fromBufferAttribute(M,b),u.fromBufferAttribute(M,b+1),Ps.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(d);U<e.near||U>e.far||t.push({distance:U,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}da.prototype.isLine=!0;const Uo=new I,Oo=new I;class Yr extends da{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Uo.fromBufferAttribute(t,i),Oo.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Uo.distanceTo(Oo);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}Yr.prototype.isLineSegments=!0;class jm extends da{constructor(e,t){super(e,t),this.type="LineLoop"}}jm.prototype.isLineLoop=!0;class Wl extends xt{constructor(e){super(),this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}Wl.prototype.isPointsMaterial=!0;const zo=new Re,$s=new fi,wr=new Rn,Mr=new I;class Zm extends ke{constructor(e=new qe,t=new Wl){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(i),wr.radius+=s,e.ray.intersectsSphere(wr)===!1)return;zo.copy(i).invert(),$s.copy(e.ray).applyMatrix4(zo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(n.isBufferGeometry){const c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=d,_=p;v<_;v++){const M=c.getX(v);Mr.fromBufferAttribute(h,M),Ho(Mr,M,l,i,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=d,_=p;v<_;v++)Mr.fromBufferAttribute(h,v),Ho(Mr,v,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Zm.prototype.isPoints=!0;function Ho(r,e,t,n,i,s,a){const o=$s.distanceSqToPoint(r);if(o<t){const l=new I;$s.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class $m extends ht{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.format=o!==void 0?o:Ln,this.minFilter=a!==void 0?a:Rt,this.magFilter=s!==void 0?s:Rt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}$m.prototype.isVideoTexture=!0;class Jm extends ht{constructor(e,t,n,i,s,a,o,l,c,u,h,d){super(null,a,o,l,c,u,i,s,h,d),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}Jm.prototype.isCompressedTexture=!0;class Qm extends ht{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.needsUpdate=!0}}Qm.prototype.isCanvasTexture=!0;class Km extends ht{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:si,u!==si&&u!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===si&&(n=Rr),n===void 0&&u===ki&&(n=Ui),super(null,i,s,a,o,l,u,n,c),this.image={width:e,height:t},this.magFilter=o!==void 0?o:ot,this.minFilter=l!==void 0?l:ot,this.flipY=!1,this.generateMipmaps=!1}}Km.prototype.isDepthTexture=!0;class Pt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],d=n[i+1]-u,p=(a-u)/d;return(i+p)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new se:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,i=[],s=[],a=[],o=new I,l=new Re;for(let p=0;p<=e;p++){const v=p/e;i[p]=this.getTangentAt(v,new I),i[p].normalize()}s[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(Mt(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,v))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(Mt(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(i[v],p*v)),a[v].crossVectors(i[v],s[v])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class jr extends Pt{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new se,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}jr.prototype.isEllipseCurve=!0;class Xl extends jr{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.type="ArcCurve"}}Xl.prototype.isArcCurve=!0;function fa(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,p*=u,i(a,o,d,p)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const br=new I,Is=new fa,Ds=new fa,Fs=new fa;class ql extends Pt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(br.subVectors(i[0],i[1]).add(i[0]),c=br);const h=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(br.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=br),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(d),p),M=Math.pow(d.distanceToSquared(u),p);_<1e-4&&(_=1),v<1e-4&&(v=_),M<1e-4&&(M=_),Is.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,v,_,M),Ds.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,v,_,M),Fs.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,v,_,M)}else this.curveType==="catmullrom"&&(Is.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Ds.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Fs.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Is.calc(l),Ds.calc(l),Fs.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}ql.prototype.isCatmullRomCurve3=!0;function ko(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function eg(r,e){const t=1-r;return t*t*e}function tg(r,e){return 2*(1-r)*r*e}function ng(r,e){return r*r*e}function Oi(r,e,t,n){return eg(r,e)+tg(r,t)+ng(r,n)}function ig(r,e){const t=1-r;return t*t*t*e}function rg(r,e){const t=1-r;return 3*t*t*r*e}function sg(r,e){return 3*(1-r)*r*r*e}function ag(r,e){return r*r*r*e}function zi(r,e,t,n,i){return ig(r,e)+rg(r,t)+sg(r,n)+ag(r,i)}class pa extends Pt{constructor(e=new se,t=new se,n=new se,i=new se){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new se){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(zi(e,i.x,s.x,a.x,o.x),zi(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}pa.prototype.isCubicBezierCurve=!0;class Yl extends Pt{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(zi(e,i.x,s.x,a.x,o.x),zi(e,i.y,s.y,a.y,o.y),zi(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Yl.prototype.isCubicBezierCurve3=!0;class Zr extends Pt{constructor(e=new se,t=new se){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new se;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Zr.prototype.isLineCurve=!0;class og extends Pt{constructor(e=new I,t=new I){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ma extends Pt{constructor(e=new se,t=new se,n=new se){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Oi(e,i.x,s.x,a.x),Oi(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}ma.prototype.isQuadraticBezierCurve=!0;class jl extends Pt{constructor(e=new I,t=new I,n=new I){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Oi(e,i.x,s.x,a.x),Oi(e,i.y,s.y,a.y),Oi(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}jl.prototype.isQuadraticBezierCurve3=!0;class ga extends Pt{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new se){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(ko(o,l.x,c.x,u.x,h.x),ko(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new se().fromArray(i))}return this}}ga.prototype.isSplineCurve=!0;var Zl=Object.freeze({__proto__:null,ArcCurve:Xl,CatmullRomCurve3:ql,CubicBezierCurve:pa,CubicBezierCurve3:Yl,EllipseCurve:jr,LineCurve:Zr,LineCurve3:og,QuadraticBezierCurve:ma,QuadraticBezierCurve3:jl,SplineCurve:ga});const lg={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=$l(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,d,p;if(n&&(s=fg(r,e,s,t)),r.length>80*t){o=c=r[0],l=u=r[1];for(let v=t;v<i;v+=t)h=r[v],d=r[v+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);p=Math.max(c-o,u-l),p=p!==0?1/p:0}return Wi(s,a,t,o,l,p),a}};function $l(r,e,t,n,i){let s,a;if(i===Sg(r,e,t,n)>0)for(s=e;s<t;s+=n)a=Go(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=Go(s,r[s],r[s+1],a);return a&&$r(a,a.next)&&(qi(a),a=a.next),a}function gn(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&($r(t,t.next)||Je(t.prev,t,t.next)===0)){if(qi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Wi(r,e,t,n,i,s,a){if(!r)return;!a&&s&&vg(r,n,i,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?ug(r,n,i,s):cg(r)){e.push(l.i/t),e.push(r.i/t),e.push(c.i/t),qi(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=hg(gn(r),e,t),Wi(r,e,t,n,i,s,2)):a===2&&dg(r,e,t,n,i,s):Wi(gn(r),e,t,n,i,s,1);break}}}function cg(r){const e=r.prev,t=r,n=r.next;if(Je(e,t,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(ii(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&Je(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function ug(r,e,t,n){const i=r.prev,s=r,a=r.next;if(Je(i,s,a)>=0)return!1;const o=i.x<s.x?i.x<a.x?i.x:a.x:s.x<a.x?s.x:a.x,l=i.y<s.y?i.y<a.y?i.y:a.y:s.y<a.y?s.y:a.y,c=i.x>s.x?i.x>a.x?i.x:a.x:s.x>a.x?s.x:a.x,u=i.y>s.y?i.y>a.y?i.y:a.y:s.y>a.y?s.y:a.y,h=Js(o,l,e,t,n),d=Js(c,u,e,t,n);let p=r.prevZ,v=r.nextZ;for(;p&&p.z>=h&&v&&v.z<=d;){if(p!==r.prev&&p!==r.next&&ii(i.x,i.y,s.x,s.y,a.x,a.y,p.x,p.y)&&Je(p.prev,p,p.next)>=0||(p=p.prevZ,v!==r.prev&&v!==r.next&&ii(i.x,i.y,s.x,s.y,a.x,a.y,v.x,v.y)&&Je(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;p&&p.z>=h;){if(p!==r.prev&&p!==r.next&&ii(i.x,i.y,s.x,s.y,a.x,a.y,p.x,p.y)&&Je(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;v&&v.z<=d;){if(v!==r.prev&&v!==r.next&&ii(i.x,i.y,s.x,s.y,a.x,a.y,v.x,v.y)&&Je(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function hg(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!$r(i,s)&&Jl(i,n,n.next,s)&&Xi(i,s)&&Xi(s,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(s.i/t),qi(n),qi(n.next),n=r=s),n=n.next}while(n!==r);return gn(n)}function dg(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&wg(a,o)){let l=Ql(a,o);a=gn(a,a.next),l=gn(l,l.next),Wi(a,e,t,n,i,s),Wi(l,e,t,n,i,s);return}o=o.next}a=a.next}while(a!==r)}function fg(r,e,t,n){const i=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=$l(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(_g(c));for(i.sort(pg),s=0;s<i.length;s++)mg(i[s],t),t=gn(t,t.next);return t}function pg(r,e){return r.x-e.x}function mg(r,e){if(e=gg(r,e),e){const t=Ql(e,r);gn(e,e.next),gn(t,t.next)}}function gg(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s){if(s=d,d===n){if(i===t.y)return t;if(i===t.next.y)return t.next}a=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!a)return null;if(n===s)return a;const o=a,l=a.x,c=a.y;let u=1/0,h;t=a;do n>=t.x&&t.x>=l&&n!==t.x&&ii(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)&&(h=Math.abs(i-t.y)/(n-t.x),Xi(t,r)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&xg(a,t)))&&(a=t,u=h)),t=t.next;while(t!==o);return a}function xg(r,e){return Je(r.prev,r,e.prev)<0&&Je(e.next,r,r.next)<0}function vg(r,e,t,n){let i=r;do i.z===null&&(i.z=Js(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,yg(i)}function yg(r){let e,t,n,i,s,a,o,l,c=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(a>1);return r}function Js(r,e,t,n,i){return r=32767*(r-t)*i,e=32767*(e-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function _g(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function ii(r,e,t,n,i,s,a,o){return(i-a)*(e-o)-(r-a)*(s-o)>=0&&(r-a)*(n-o)-(t-a)*(e-o)>=0&&(t-a)*(s-o)-(i-a)*(n-o)>=0}function wg(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Mg(r,e)&&(Xi(r,e)&&Xi(e,r)&&bg(r,e)&&(Je(r.prev,r,e.prev)||Je(r,e.prev,e))||$r(r,e)&&Je(r.prev,r,r.next)>0&&Je(e.prev,e,e.next)>0)}function Je(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function $r(r,e){return r.x===e.x&&r.y===e.y}function Jl(r,e,t,n){const i=Er(Je(r,e,t)),s=Er(Je(r,e,n)),a=Er(Je(t,n,r)),o=Er(Je(t,n,e));return!!(i!==s&&a!==o||i===0&&Sr(r,t,e)||s===0&&Sr(r,n,e)||a===0&&Sr(t,r,n)||o===0&&Sr(t,e,n))}function Sr(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Er(r){return r>0?1:r<0?-1:0}function Mg(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Jl(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Xi(r,e){return Je(r.prev,r,r.next)<0?Je(r,e,r.next)>=0&&Je(r,r.prev,e)>=0:Je(r,e,r.prev)<0||Je(r,r.next,e)<0}function bg(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Ql(r,e){const t=new Qs(r.i,r.x,r.y),n=new Qs(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Go(r,e,t,n){const i=new Qs(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function qi(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Qs(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Sg(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class mn{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return mn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Vo(e),Wo(n,e);let a=e.length;t.forEach(Vo);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Wo(n,t[l]);const o=lg.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Vo(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Wo(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class xi extends qe{constructor(e,t){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new tt(i,3)),this.setAttribute("uv",new tt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:100,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:6,v=t.bevelSize!==void 0?t.bevelSize:p-2,_=t.bevelOffset!==void 0?t.bevelOffset:0,M=t.bevelSegments!==void 0?t.bevelSegments:3;const x=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:Eg;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let b,E=!1,L,U,S,V;x&&(b=x.getSpacedPoints(u),E=!0,d=!1,L=x.computeFrenetFrames(u,!1),U=new I,S=new I,V=new I),d||(M=0,p=0,v=0,_=0);const q=o.extractPoints(c);let Y=q.shape;const G=q.holes;if(!mn.isClockWise(Y)){Y=Y.reverse();for(let te=0,ie=G.length;te<ie;te++){const oe=G[te];mn.isClockWise(oe)&&(G[te]=oe.reverse())}}const j=mn.triangulateShape(Y,G),D=Y;for(let te=0,ie=G.length;te<ie;te++){const oe=G[te];Y=Y.concat(oe)}function N(te,ie,oe){return ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),ie.clone().multiplyScalar(oe).add(te)}const C=Y.length,O=j.length;function W(te,ie,oe){let ye,ce,P;const A=te.x-ie.x,Q=te.y-ie.y,re=oe.x-te.x,fe=oe.y-te.y,le=A*A+Q*Q,_e=A*fe-Q*re;if(Math.abs(_e)>Number.EPSILON){const Se=Math.sqrt(le),Ce=Math.sqrt(re*re+fe*fe),we=ie.x-Q/Se,k=ie.y+A/Se,ue=oe.x-fe/Ce,ee=oe.y+re/Ce,xe=((ue-we)*fe-(ee-k)*re)/(A*fe-Q*re);ye=we+A*xe-te.x,ce=k+Q*xe-te.y;const B=ye*ye+ce*ce;if(B<=2)return new se(ye,ce);P=Math.sqrt(B/2)}else{let Se=!1;A>Number.EPSILON?re>Number.EPSILON&&(Se=!0):A<-Number.EPSILON?re<-Number.EPSILON&&(Se=!0):Math.sign(Q)===Math.sign(fe)&&(Se=!0),Se?(ye=-Q,ce=A,P=Math.sqrt(le)):(ye=A,ce=Q,P=Math.sqrt(le/2))}return new se(ye/P,ce/P)}const Z=[];for(let te=0,ie=D.length,oe=ie-1,ye=te+1;te<ie;te++,oe++,ye++)oe===ie&&(oe=0),ye===ie&&(ye=0),Z[te]=W(D[te],D[oe],D[ye]);const $=[];let ne,pe=Z.concat();for(let te=0,ie=G.length;te<ie;te++){const oe=G[te];ne=[];for(let ye=0,ce=oe.length,P=ce-1,A=ye+1;ye<ce;ye++,P++,A++)P===ce&&(P=0),A===ce&&(A=0),ne[ye]=W(oe[ye],oe[P],oe[A]);$.push(ne),pe=pe.concat(ne)}for(let te=0;te<M;te++){const ie=te/M,oe=p*Math.cos(ie*Math.PI/2),ye=v*Math.sin(ie*Math.PI/2)+_;for(let ce=0,P=D.length;ce<P;ce++){const A=N(D[ce],Z[ce],ye);Oe(A.x,A.y,-oe)}for(let ce=0,P=G.length;ce<P;ce++){const A=G[ce];ne=$[ce];for(let Q=0,re=A.length;Q<re;Q++){const fe=N(A[Q],ne[Q],ye);Oe(fe.x,fe.y,-oe)}}}const de=v+_;for(let te=0;te<C;te++){const ie=d?N(Y[te],pe[te],de):Y[te];E?(S.copy(L.normals[0]).multiplyScalar(ie.x),U.copy(L.binormals[0]).multiplyScalar(ie.y),V.copy(b[0]).add(S).add(U),Oe(V.x,V.y,V.z)):Oe(ie.x,ie.y,0)}for(let te=1;te<=u;te++)for(let ie=0;ie<C;ie++){const oe=d?N(Y[ie],pe[ie],de):Y[ie];E?(S.copy(L.normals[te]).multiplyScalar(oe.x),U.copy(L.binormals[te]).multiplyScalar(oe.y),V.copy(b[te]).add(S).add(U),Oe(V.x,V.y,V.z)):Oe(oe.x,oe.y,h/u*te)}for(let te=M-1;te>=0;te--){const ie=te/M,oe=p*Math.cos(ie*Math.PI/2),ye=v*Math.sin(ie*Math.PI/2)+_;for(let ce=0,P=D.length;ce<P;ce++){const A=N(D[ce],Z[ce],ye);Oe(A.x,A.y,h+oe)}for(let ce=0,P=G.length;ce<P;ce++){const A=G[ce];ne=$[ce];for(let Q=0,re=A.length;Q<re;Q++){const fe=N(A[Q],ne[Q],ye);E?Oe(fe.x,fe.y+b[u-1].y,b[u-1].x+oe):Oe(fe.x,fe.y,h+oe)}}}Me(),be();function Me(){const te=i.length/3;if(d){let ie=0,oe=C*ie;for(let ye=0;ye<O;ye++){const ce=j[ye];Ie(ce[2]+oe,ce[1]+oe,ce[0]+oe)}ie=u+M*2,oe=C*ie;for(let ye=0;ye<O;ye++){const ce=j[ye];Ie(ce[0]+oe,ce[1]+oe,ce[2]+oe)}}else{for(let ie=0;ie<O;ie++){const oe=j[ie];Ie(oe[2],oe[1],oe[0])}for(let ie=0;ie<O;ie++){const oe=j[ie];Ie(oe[0]+C*u,oe[1]+C*u,oe[2]+C*u)}}n.addGroup(te,i.length/3-te,0)}function be(){const te=i.length/3;let ie=0;J(D,ie),ie+=D.length;for(let oe=0,ye=G.length;oe<ye;oe++){const ce=G[oe];J(ce,ie),ie+=ce.length}n.addGroup(te,i.length/3-te,1)}function J(te,ie){let oe=te.length;for(;--oe>=0;){const ye=oe;let ce=oe-1;ce<0&&(ce=te.length-1);for(let P=0,A=u+M*2;P<A;P++){const Q=C*P,re=C*(P+1),fe=ie+ye+Q,le=ie+ce+Q,_e=ie+ce+re,Se=ie+ye+re;Ae(fe,le,_e,Se)}}}function Oe(te,ie,oe){l.push(te),l.push(ie),l.push(oe)}function Ie(te,ie,oe){me(te),me(ie),me(oe);const ye=i.length/3,ce=g.generateTopUV(n,i,ye-3,ye-2,ye-1);Le(ce[0]),Le(ce[1]),Le(ce[2])}function Ae(te,ie,oe,ye){me(te),me(ie),me(ye),me(ie),me(oe),me(ye);const ce=i.length/3,P=g.generateSideWallUV(n,i,ce-6,ce-3,ce-2,ce-1);Le(P[0]),Le(P[1]),Le(P[3]),Le(P[1]),Le(P[2]),Le(P[3])}function me(te){i.push(l[te*3+0]),i.push(l[te*3+1]),i.push(l[te*3+2])}function Le(te){s.push(te.x),s.push(te.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Tg(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Zl[i.type]().fromJSON(i)),new xi(n,e.options)}}const Eg={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new se(s,a),new se(o,l),new se(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],p=e[i*3+1],v=e[i*3+2],_=e[s*3],M=e[s*3+1],x=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new se(a,1-l),new se(c,1-h),new se(d,1-v),new se(_,1-x)]:[new se(o,1-l),new se(u,1-h),new se(p,1-v),new se(M,1-x)]}};function Tg(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class xa extends qe{constructor(e,t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new tt(i,3)),this.setAttribute("normal",new tt(s,3)),this.setAttribute("uv",new tt(a,2));function c(u){const h=i.length/3,d=u.extractPoints(t);let p=d.shape;const v=d.holes;mn.isClockWise(p)===!1&&(p=p.reverse());for(let M=0,x=v.length;M<x;M++){const g=v[M];mn.isClockWise(g)===!0&&(v[M]=g.reverse())}const _=mn.triangulateShape(p,v);for(let M=0,x=v.length;M<x;M++){const g=v[M];p=p.concat(g)}for(let M=0,x=p.length;M<x;M++){const g=p[M];i.push(g.x,g.y,0),s.push(0,0,1),a.push(g.x,g.y)}for(let M=0,x=_.length;M<x;M++){const g=_[M],b=g[0]+h,E=g[1]+h,L=g[2]+h;n.push(b,E,L),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Ag(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new xa(n,e.curveSegments)}}function Ag(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class Lg extends xt{constructor(e){super(),this.type="ShadowMaterial",this.color=new Ee(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}Lg.prototype.isShadowMaterial=!0;class Kl extends xt{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hi,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Kl.prototype.isMeshStandardMaterial=!0;class Cg extends Kl{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(t){this.reflectivity=Mt(2.5*(t-1)/(t+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.thickness=.01,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationTint=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularTint=new Ee(1,1,1),this.specularTintMap=null,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new Ee).copy(e.sheen):this.sheen=null,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationTint.copy(e.attenuationTint),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularTint.copy(e.specularTint),this.specularTintMap=e.specularTintMap,this}}Cg.prototype.isMeshPhysicalMaterial=!0;class Rg extends xt{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new Ee(16777215),this.specular=new Ee(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hi,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ur,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Rg.prototype.isMeshPhongMaterial=!0;class Pg extends xt{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ee(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hi,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Pg.prototype.isMeshToonMaterial=!0;class Ig extends xt{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hi,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}Ig.prototype.isMeshNormalMaterial=!0;class Dg extends xt{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ur,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Dg.prototype.isMeshLambertMaterial=!0;class Fg extends xt{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ee(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hi,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}Fg.prototype.isMeshMatcapMaterial=!0;class Bg extends gi{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Bg.prototype.isLineDashedMaterial=!0;const Ze={arraySlice:function(r,e,t){return Ze.isTypedArray(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)},convertArray:function(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i},flattenJSON:function(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)},subclip:function(r,e,t,n,i=30){const s=r.clone();s.name=e;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),h=[],d=[];for(let p=0;p<c.times.length;++p){const v=c.times[p]*i;if(!(v<t||v>=n)){h.push(c.times[p]);for(let _=0;_<u;++_)d.push(c.values[p*u+_])}}h.length!==0&&(c.times=Ze.convertArray(h,c.times.constructor),c.values=Ze.convertArray(d,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(x){return x.name===o.name&&x.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);const v=o.times.length-1;let _;if(s<=o.times[0]){const x=u,g=h-u;_=Ze.arraySlice(o.values,x,g)}else if(s>=o.times[v]){const x=v*h+u,g=x+h-u;_=Ze.arraySlice(o.values,x,g)}else{const x=o.createInterpolant(),g=u,b=h-u;x.evaluate(s),_=Ze.arraySlice(x.resultBuffer,g,b)}l==="quaternion"&&new mt().fromArray(_).normalize().conjugate().toArray(_);const M=c.times.length;for(let x=0;x<M;++x){const g=x*p+d;if(l==="quaternion")mt.multiplyQuaternionsFlat(c.values,g,_,0,c.values,g);else{const b=p-d*2;for(let E=0;E<b;++E)c.values[g+E]-=_[E]}}}return r.blendMode=ml,r}};class xn{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}xn.prototype.beforeStart_=xn.prototype.copySampleValue_;xn.prototype.afterEnd_=xn.prototype.copySampleValue_;class Ng extends xn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ti,endingEnd:ti}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ni:s=e,o=2*t-n;break;case Dr:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ni:a=e,l=2*n-t;break;case Dr:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,v=(n-t)/(i-t),_=v*v,M=_*v,x=-d*M+2*d*_-d*v,g=(1+d)*M+(-1.5-2*d)*_+(-.5+d)*v+1,b=(-1-p)*M+(1.5+p)*_+.5*v,E=p*M-p*_;for(let L=0;L!==o;++L)s[L]=x*a[u+L]+g*a[c+L]+b*a[l+L]+E*a[h+L];return s}}class ec extends xn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*h+a[l+d]*u;return s}}class Ug extends xn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class qt{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ze.convertArray(t,this.TimeBufferType),this.values=Ze.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ze.convertArray(e.times,Array),values:Ze.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ug(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ng(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Pr:t=this.InterpolantFactoryMethodDiscrete;break;case Ir:t=this.InterpolantFactoryMethodLinear;break;case Kr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return Ir;case this.InterpolantFactoryMethodSmooth:return Kr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=Ze.arraySlice(n,s,a),this.values=Ze.arraySlice(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Ze.isTypedArray(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Ze.arraySlice(this.times),t=Ze.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Kr,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,d=h-n,p=h+n;for(let v=0;v!==n;++v){const _=t[h+v];if(_!==t[d+v]||_!==t[p+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=Ze.arraySlice(e,0,a),this.values=Ze.arraySlice(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=Ze.arraySlice(this.times,0),t=Ze.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}qt.prototype.TimeBufferType=Float32Array;qt.prototype.ValueBufferType=Float32Array;qt.prototype.DefaultInterpolation=Ir;class vi extends qt{}vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Pr;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;class tc extends qt{}tc.prototype.ValueTypeName="color";class Br extends qt{}Br.prototype.ValueTypeName="number";class Og extends xn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)mt.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Zi extends qt{InterpolantFactoryMethodLinear(e){return new Og(this.times,this.values,this.getValueSize(),e)}}Zi.prototype.ValueTypeName="quaternion";Zi.prototype.DefaultInterpolation=Ir;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;class yi extends qt{}yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=Pr;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;class Nr extends qt{}Nr.prototype.ValueTypeName="vector";class Xo{constructor(e,t=-1,n,i=na){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Vt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Hg(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(qt.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=Ze.getKeyframeOrder(l);l=Ze.sortedArray(l,1,u),c=Ze.sortedArray(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Br(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,v,_){if(p.length!==0){const M=[],x=[];Ze.flattenJSON(p,M,x,v),M.length!==0&&_.push(new h(d,M,x))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let v;for(v=0;v<d.length;v++)if(d[v].morphTargets)for(let _=0;_<d[v].morphTargets.length;_++)p[d[v].morphTargets[_]]=-1;for(const _ in p){const M=[],x=[];for(let g=0;g!==d[v].morphTargets.length;++g){const b=d[v];M.push(b.time),x.push(b.morphTarget===_?1:0)}i.push(new Br(".morphTargetInfluence["+_+"]",M,x))}l=p.length*(a||1)}else{const p=".bones["+t[h].name+"]";n(Nr,p+".position",d,"pos",i),n(Zi,p+".quaternion",d,"rot",i),n(Nr,p+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function zg(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Br;case"vector":case"vector2":case"vector3":case"vector4":return Nr;case"color":return tc;case"quaternion":return Zi;case"bool":case"boolean":return vi;case"string":return yi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Hg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=zg(r.type);if(r.times===void 0){const t=[],n=[];Ze.flattenJSON(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ui={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class kg{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],v=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const Gg=new kg;class yn{constructor(e){this.manager=e!==void 0?e:Gg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Ut={};class Vg extends yn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ui.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;if(Ut[e]!==void 0){Ut[e].push({onLoad:t,onProgress:n,onError:i});return}const o=/^data:(.*?)(;base64)?,(.*)$/,l=e.match(o);let c;if(l){const u=l[1],h=!!l[2];let d=l[3];d=decodeURIComponent(d),h&&(d=atob(d));try{let p;const v=(this.responseType||"").toLowerCase();switch(v){case"arraybuffer":case"blob":const _=new Uint8Array(d.length);for(let x=0;x<d.length;x++)_[x]=d.charCodeAt(x);v==="blob"?p=new Blob([_.buffer],{type:u}):p=_.buffer;break;case"document":p=new DOMParser().parseFromString(d,u);break;case"json":p=JSON.parse(d);break;default:p=d;break}setTimeout(function(){t&&t(p),s.manager.itemEnd(e)},0)}catch(p){setTimeout(function(){i&&i(p),s.manager.itemError(e),s.manager.itemEnd(e)},0)}}else{Ut[e]=[],Ut[e].push({onLoad:t,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",e,!0),c.addEventListener("load",function(u){const h=this.response,d=Ut[e];if(delete Ut[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),ui.add(e,h);for(let p=0,v=d.length;p<v;p++){const _=d[p];_.onLoad&&_.onLoad(h)}s.manager.itemEnd(e)}else{for(let p=0,v=d.length;p<v;p++){const _=d[p];_.onError&&_.onError(u)}s.manager.itemError(e),s.manager.itemEnd(e)}},!1),c.addEventListener("progress",function(u){const h=Ut[e];for(let d=0,p=h.length;d<p;d++){const v=h[d];v.onProgress&&v.onProgress(u)}},!1),c.addEventListener("error",function(u){const h=Ut[e];delete Ut[e];for(let d=0,p=h.length;d<p;d++){const v=h[d];v.onError&&v.onError(u)}s.manager.itemError(e),s.manager.itemEnd(e)},!1),c.addEventListener("abort",function(u){const h=Ut[e];delete Ut[e];for(let d=0,p=h.length;d<p;d++){const v=h[d];v.onError&&v.onError(u)}s.manager.itemError(e),s.manager.itemEnd(e)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const u in this.requestHeader)c.setRequestHeader(u,this.requestHeader[u]);c.send(null)}return s.manager.itemStart(e),c}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class nc extends yn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ui.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function l(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1),ui.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Wg extends yn{constructor(e){super(e)}load(e,t,n,i){const s=new Wr,a=new nc(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){s.images[c]=u,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class ic extends yn{constructor(e){super(e)}load(e,t,n,i){const s=new ht,a=new nc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o;const l=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;s.format=l?Ln:Ot,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Xg extends Pt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Zr(t,e))}getPoint(e){const t=e*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=t){const s=n[i]-t,a=this.curves[i],o=a.getLength(),l=o===0?0:1-s/o;return a.getPointAt(l)}i++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a&&a.isEllipseCurve?e*2:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Zl[i.type]().fromJSON(i))}return this}}class Ks extends Xg{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Zr(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new ma(this.currentPoint.clone(),new se(e,t),new se(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new pa(this.currentPoint.clone(),new se(e,t),new se(n,i),new se(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ga(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new jr(e,t,n,i,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class va extends Ks{constructor(e){super(e),this.uuid=Vt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Ks().fromJSON(i))}return this}}class Xt extends ke{constructor(e,t=1){super(),this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}Xt.prototype.isLight=!0;class qg extends Xt{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(ke.DefaultUp),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e){return Xt.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}qg.prototype.isHemisphereLight=!0;const qo=new Re,Yo=new I,jo=new I;class ya{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xr,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Yo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yo),jo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jo),t.updateMatrixWorld(),qo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class rc extends ya{constructor(){super(new yt(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=js*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}rc.prototype.isSpotLightShadow=!0;class Yg extends Xt{constructor(e,t,n=0,i=Math.PI/3,s=0,a=1){super(e,t),this.type="SpotLight",this.position.copy(ke.DefaultUp),this.updateMatrix(),this.target=new ke,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.shadow=new rc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Yg.prototype.isSpotLight=!0;const Zo=new Re,Pi=new I,Bs=new I;class sc extends ya{constructor(){super(new yt(90,1,.5,500)),this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new Xe(2,1,1,1),new Xe(0,1,1,1),new Xe(3,1,1,1),new Xe(1,1,1,1),new Xe(3,0,1,1),new Xe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Pi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Pi),Bs.copy(n.position),Bs.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Bs),n.updateMatrixWorld(),i.makeTranslation(-Pi.x,-Pi.y,-Pi.z),Zo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zo)}}sc.prototype.isPointLightShadow=!0;class ac extends Xt{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new sc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}ac.prototype.isPointLight=!0;class oc extends ya{constructor(){super(new la(-5,5,5,-5,.5,500))}}oc.prototype.isDirectionalLightShadow=!0;class jg extends Xt{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(ke.DefaultUp),this.updateMatrix(),this.target=new ke,this.shadow=new oc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}jg.prototype.isDirectionalLight=!0;class lc extends Xt{constructor(e,t){super(e,t),this.type="AmbientLight"}}lc.prototype.isAmbientLight=!0;class Zg extends Xt{constructor(e,t,n=10,i=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=i}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}Zg.prototype.isRectAreaLight=!0;class cc{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new I)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}cc.prototype.isSphericalHarmonics3=!0;class _a extends Xt{constructor(e=new cc,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}_a.prototype.isLightProbe=!0;class $g{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}}class Jg extends qe{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}Jg.prototype.isInstancedBufferGeometry=!0;class Qg extends $e{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}Qg.prototype.isInstancedBufferAttribute=!0;class Kg extends yn{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ui.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){ui.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}Kg.prototype.isImageBitmapLoader=!0;let Tr;const e0={getContext:function(){return Tr===void 0&&(Tr=new(window.AudioContext||window.webkitAudioContext)),Tr},setContext:function(r){Tr=r}};class t0 extends yn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Vg(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{const l=o.slice(0);e0.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}}class n0 extends _a{constructor(e,t,n=1){super(void 0,n);const i=new Ee().set(e),s=new Ee().set(t),a=new I(i.r,i.g,i.b),o=new I(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(l),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)}}n0.prototype.isHemisphereLightProbe=!0;class i0 extends _a{constructor(e,t=1){super(void 0,t);const n=new Ee().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}i0.prototype.isAmbientLightProbe=!0;class r0 extends ke{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class s0{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){mt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;mt.multiplyQuaternionsFlat(e,a,e,t,e,n),mt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const wa="\\[\\]\\.:\\/",a0=new RegExp("["+wa+"]","g"),Ma="[^"+wa+"]",o0="[^"+wa.replace("\\.","")+"]",l0=/((?:WC+[\/:])*)/.source.replace("WC",Ma),c0=/(WCOD+)?/.source.replace("WCOD",o0),u0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ma),h0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ma),d0=new RegExp("^"+l0+c0+u0+h0+"$"),f0=["material","materials","bones"];class p0{constructor(e,t,n){const i=n||Ve.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ve{constructor(e,t,n){this.path=t,this.parsedPath=n||Ve.parseTrackName(t),this.node=Ve.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ve.Composite(e,t,n):new Ve(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(a0,"")}static parseTrackName(e){const t=d0.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);f0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.node[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ve.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ve.Composite=p0;Ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ve.prototype.GetterByBindingType=[Ve.prototype._getValue_direct,Ve.prototype._getValue_array,Ve.prototype._getValue_arrayElement,Ve.prototype._getValue_toArray];Ve.prototype.SetterByBindingTypeAndVersioning=[[Ve.prototype._setValue_direct,Ve.prototype._setValue_direct_setNeedsUpdate,Ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_array,Ve.prototype._setValue_array_setNeedsUpdate,Ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_arrayElement,Ve.prototype._setValue_arrayElement_setNeedsUpdate,Ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_fromArray,Ve.prototype._setValue_fromArray_setNeedsUpdate,Ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class m0{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:ti,endingEnd:ti};for(let c=0;c!==a;++c){const u=s[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=eh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ml:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case na:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===th;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===Ku){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ni,i.endingEnd=ni):(e?i.endingStart=this.zeroSlopeAtStart?ni:ti:i.endingStart=Dr,t?i.endingEnd=this.zeroSlopeAtEnd?ni:ti:i.endingEnd=Dr)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}class g0 extends vn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const d=i[h],p=d.name;let v=u[p];if(v!==void 0)a[h]=v;else{if(v=a[h],v!==void 0){v._cacheIndex===null&&(++v.referenceCount,this._addInactiveBinding(v,l,p));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;v=new s0(Ve.create(n,p,_),d.ValueTypeName,d.getValueSize()),++v.referenceCount,this._addInactiveBinding(v,l,p),a[h]=v}o[h].resultBuffer=v.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new ec(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?Xo.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=na),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new m0(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Xo.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}g0.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class x0 extends ji{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}x0.prototype.isInstancedInterleavedBuffer=!0;class $o{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class v0 extends ke{constructor(e){super(),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}}v0.prototype.isImmediateRenderObject=!0;const hn=new I,Ar=new Re,Ns=new Re;class y0 extends Yr{constructor(e){const t=uc(e),n=new qe,i=[],s=[],a=new Ee(0,0,1),o=new Ee(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}n.setAttribute("position",new tt(i,3)),n.setAttribute("color",new tt(s,3));const l=new gi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Ns.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&(Ar.multiplyMatrices(Ns,o.matrixWorld),hn.setFromMatrixPosition(Ar),i.setXYZ(a,hn.x,hn.y,hn.z),Ar.multiplyMatrices(Ns,o.parent.matrixWorld),hn.setFromMatrixPosition(Ar),i.setXYZ(a+1,hn.x,hn.y,hn.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function uc(r){const e=[];r&&r.isBone&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,uc(r.children[t]));return e}class _0 extends Yr{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ee(n),i=new Ee(i);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,p=0,v=-o;d<=t;d++,v+=a){l.push(-o,0,v,o,0,v),l.push(v,0,-o,v,0,o);const _=d===s?n:i;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const u=new qe;u.setAttribute("position",new tt(l,3)),u.setAttribute("color",new tt(c,3));const h=new gi({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}}class w0 extends Yr{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new qe;i.setAttribute("position",new tt(t,3)),i.setAttribute("color",new tt(n,3));const s=new gi({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Ee,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}const M0=new Float32Array(1);new Int32Array(M0.buffer);Pt.create=function(r,e){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(Pt.prototype),r.prototype.constructor=r,r.prototype.getPoint=e,r};Ks.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)};_0.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};y0.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};yn.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),$g.extractUrlBase(r)};yn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};It.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)};It.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};It.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};It.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};It.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)};Rn.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Xr.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)};ut.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};ut.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};ut.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};ut.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};ut.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};ut.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};Re.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)};Re.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};Re.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new I().setFromMatrixColumn(this,3)};Re.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)};Re.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};Re.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};Re.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};Re.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};Re.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)};Re.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};Re.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};Re.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};Re.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};Re.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};Re.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};Re.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};Re.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};Re.prototype.makeFrustum=function(r,e,t,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,e,n,t,i,s)};Re.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};Kt.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)};mt.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)};mt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};fi.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};fi.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)};fi.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};it.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};it.prototype.barycoordFromPoint=function(r,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,e)};it.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)};it.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)};it.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)};it.barycoordFromPoint=function(r,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),it.getBarycoord(r,e,t,n,i)};it.normal=function(r,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),it.getNormal(r,e,t,n)};va.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)};va.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new xi(this,r)};va.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new xa(this,r)};se.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};se.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};se.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};I.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};I.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};I.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)};I.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)};I.prototype.getColumnFromMatrix=function(r,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,r)};I.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)};I.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};I.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};I.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Xe.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};Xe.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};ke.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)};ke.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};ke.prototype.translate=function(r,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,r)};ke.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};ke.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(ke.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});_t.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(_t.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),nh},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Vl.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};yt.prototype.setLens=function(r,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(r)};Object.defineProperties(Xt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}});Object.defineProperties($e.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Fr},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Fr)}}});$e.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Fr:Gi),this};$e.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},$e.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};qe.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)};qe.prototype.addAttribute=function(r,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new $e(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(r,e)};qe.prototype.addDrawCall=function(r,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,e)};qe.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};qe.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};qe.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)};qe.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(qe.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});ji.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Fr:Gi),this};ji.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};xi.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};xi.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};xi.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};ha.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(xt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new Ee}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===hl}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(Cn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}});We.prototype.clearTarget=function(r,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(e,t,n)};We.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)};We.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};We.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};We.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};We.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};We.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};We.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};We.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};We.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};We.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};We.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};We.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};We.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};We.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)};We.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};We.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};We.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};We.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};We.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};We.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};We.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};We.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};We.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};We.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(We.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?Gr:bt}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(zl.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Wt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}});r0.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new t0().load(r,function(n){e.setBuffer(n)}),this};aa.prototype.updateCubeMap=function(r,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,e)};aa.prototype.clear=function(r,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,e,t,n)};di.crossOrigin=void 0;di.loadTexture=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new ic;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};di.loadTextureCube=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new Wg;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};di.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};di.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cl);var ea=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ba(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Sa={};(function(r){Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});var e={},t={};t.byteLength=u,t.toByteArray=d,t.fromByteArray=_;for(var n=[],i=[],s=typeof Uint8Array<"u"?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=0,l=a.length;o<l;++o)n[o]=a[o],i[a.charCodeAt(o)]=o;i[45]=62,i[95]=63;function c(g){var b=g.length;if(b%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var E=g.indexOf("=");E===-1&&(E=b);var L=E===b?0:4-E%4;return[E,L]}function u(g){var b=c(g),E=b[0],L=b[1];return(E+L)*3/4-L}function h(g,b,E){return(b+E)*3/4-E}function d(g){var b,E=c(g),L=E[0],U=E[1],S=new s(h(g,L,U)),V=0,q=U>0?L-4:L,Y;for(Y=0;Y<q;Y+=4)b=i[g.charCodeAt(Y)]<<18|i[g.charCodeAt(Y+1)]<<12|i[g.charCodeAt(Y+2)]<<6|i[g.charCodeAt(Y+3)],S[V++]=b>>16&255,S[V++]=b>>8&255,S[V++]=b&255;return U===2&&(b=i[g.charCodeAt(Y)]<<2|i[g.charCodeAt(Y+1)]>>4,S[V++]=b&255),U===1&&(b=i[g.charCodeAt(Y)]<<10|i[g.charCodeAt(Y+1)]<<4|i[g.charCodeAt(Y+2)]>>2,S[V++]=b>>8&255,S[V++]=b&255),S}function p(g){return n[g>>18&63]+n[g>>12&63]+n[g>>6&63]+n[g&63]}function v(g,b,E){for(var L,U=[],S=b;S<E;S+=3)L=(g[S]<<16&16711680)+(g[S+1]<<8&65280)+(g[S+2]&255),U.push(p(L));return U.join("")}function _(g){for(var b,E=g.length,L=E%3,U=[],S=16383,V=0,q=E-L;V<q;V+=S)U.push(v(g,V,V+S>q?q:V+S));return L===1?(b=g[E-1],U.push(n[b>>2]+n[b<<4&63]+"==")):L===2&&(b=(g[E-2]<<8)+g[E-1],U.push(n[b>>10]+n[b>>4&63]+n[b<<2&63]+"=")),U.join("")}var M={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */M.read=function(g,b,E,L,U){var S,V,q=U*8-L-1,Y=(1<<q)-1,G=Y>>1,F=-7,j=E?U-1:0,D=E?-1:1,N=g[b+j];for(j+=D,S=N&(1<<-F)-1,N>>=-F,F+=q;F>0;S=S*256+g[b+j],j+=D,F-=8);for(V=S&(1<<-F)-1,S>>=-F,F+=L;F>0;V=V*256+g[b+j],j+=D,F-=8);if(S===0)S=1-G;else{if(S===Y)return V?NaN:(N?-1:1)*(1/0);V=V+Math.pow(2,L),S=S-G}return(N?-1:1)*V*Math.pow(2,S-L)},M.write=function(g,b,E,L,U,S){var V,q,Y,G=S*8-U-1,F=(1<<G)-1,j=F>>1,D=U===23?Math.pow(2,-24)-Math.pow(2,-77):0,N=L?0:S-1,C=L?1:-1,O=b<0||b===0&&1/b<0?1:0;for(b=Math.abs(b),isNaN(b)||b===1/0?(q=isNaN(b)?1:0,V=F):(V=Math.floor(Math.log(b)/Math.LN2),b*(Y=Math.pow(2,-V))<1&&(V--,Y*=2),V+j>=1?b+=D/Y:b+=D*Math.pow(2,1-j),b*Y>=2&&(V++,Y/=2),V+j>=F?(q=0,V=F):V+j>=1?(q=(b*Y-1)*Math.pow(2,U),V=V+j):(q=b*Math.pow(2,j-1)*Math.pow(2,U),V=0));U>=8;g[E+N]=q&255,N+=C,q/=256,U-=8);for(V=V<<U|q,G+=U;G>0;g[E+N]=V&255,N+=C,V/=256,G-=8);g[E+N-C]|=O*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(g){const b=t,E=M,L=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;g.Buffer=F,g.SlowBuffer=de,g.INSPECT_MAX_BYTES=50;const U=2147483647;g.kMaxLength=U;const{Uint8Array:S,ArrayBuffer:V,SharedArrayBuffer:q}=globalThis;F.TYPED_ARRAY_SUPPORT=Y(),!F.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Y(){try{const w=new S(1),f={foo:function(){return 42}};return Object.setPrototypeOf(f,S.prototype),Object.setPrototypeOf(w,f),w.foo()===42}catch{return!1}}Object.defineProperty(F.prototype,"parent",{enumerable:!0,get:function(){if(F.isBuffer(this))return this.buffer}}),Object.defineProperty(F.prototype,"offset",{enumerable:!0,get:function(){if(F.isBuffer(this))return this.byteOffset}});function G(w){if(w>U)throw new RangeError('The value "'+w+'" is invalid for option "size"');const f=new S(w);return Object.setPrototypeOf(f,F.prototype),f}function F(w,f,m){if(typeof w=="number"){if(typeof f=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return C(w)}return j(w,f,m)}F.poolSize=8192;function j(w,f,m){if(typeof w=="string")return O(w,f);if(V.isView(w))return Z(w);if(w==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof w);if(rt(w,V)||w&&rt(w.buffer,V)||typeof q<"u"&&(rt(w,q)||w&&rt(w.buffer,q)))return $(w,f,m);if(typeof w=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const T=w.valueOf&&w.valueOf();if(T!=null&&T!==w)return F.from(T,f,m);const H=ne(w);if(H)return H;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof w[Symbol.toPrimitive]=="function")return F.from(w[Symbol.toPrimitive]("string"),f,m);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof w)}F.from=function(w,f,m){return j(w,f,m)},Object.setPrototypeOf(F.prototype,S.prototype),Object.setPrototypeOf(F,S);function D(w){if(typeof w!="number")throw new TypeError('"size" argument must be of type number');if(w<0)throw new RangeError('The value "'+w+'" is invalid for option "size"')}function N(w,f,m){return D(w),w<=0?G(w):f!==void 0?typeof m=="string"?G(w).fill(f,m):G(w).fill(f):G(w)}F.alloc=function(w,f,m){return N(w,f,m)};function C(w){return D(w),G(w<0?0:pe(w)|0)}F.allocUnsafe=function(w){return C(w)},F.allocUnsafeSlow=function(w){return C(w)};function O(w,f){if((typeof f!="string"||f==="")&&(f="utf8"),!F.isEncoding(f))throw new TypeError("Unknown encoding: "+f);const m=Me(w,f)|0;let T=G(m);const H=T.write(w,f);return H!==m&&(T=T.slice(0,H)),T}function W(w){const f=w.length<0?0:pe(w.length)|0,m=G(f);for(let T=0;T<f;T+=1)m[T]=w[T]&255;return m}function Z(w){if(rt(w,S)){const f=new S(w);return $(f.buffer,f.byteOffset,f.byteLength)}return W(w)}function $(w,f,m){if(f<0||w.byteLength<f)throw new RangeError('"offset" is outside of buffer bounds');if(w.byteLength<f+(m||0))throw new RangeError('"length" is outside of buffer bounds');let T;return f===void 0&&m===void 0?T=new S(w):m===void 0?T=new S(w,f):T=new S(w,f,m),Object.setPrototypeOf(T,F.prototype),T}function ne(w){if(F.isBuffer(w)){const f=pe(w.length)|0,m=G(f);return m.length===0||w.copy(m,0,0,f),m}if(w.length!==void 0)return typeof w.length!="number"||Pn(w.length)?G(0):W(w);if(w.type==="Buffer"&&Array.isArray(w.data))return W(w.data)}function pe(w){if(w>=U)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+U.toString(16)+" bytes");return w|0}function de(w){return+w!=w&&(w=0),F.alloc(+w)}F.isBuffer=function(f){return f!=null&&f._isBuffer===!0&&f!==F.prototype},F.compare=function(f,m){if(rt(f,S)&&(f=F.from(f,f.offset,f.byteLength)),rt(m,S)&&(m=F.from(m,m.offset,m.byteLength)),!F.isBuffer(f)||!F.isBuffer(m))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(f===m)return 0;let T=f.length,H=m.length;for(let y=0,R=Math.min(T,H);y<R;++y)if(f[y]!==m[y]){T=f[y],H=m[y];break}return T<H?-1:H<T?1:0},F.isEncoding=function(f){switch(String(f).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},F.concat=function(f,m){if(!Array.isArray(f))throw new TypeError('"list" argument must be an Array of Buffers');if(f.length===0)return F.alloc(0);let T;if(m===void 0)for(m=0,T=0;T<f.length;++T)m+=f[T].length;const H=F.allocUnsafe(m);let y=0;for(T=0;T<f.length;++T){let R=f[T];if(rt(R,S))y+R.length>H.length?(F.isBuffer(R)||(R=F.from(R)),R.copy(H,y)):S.prototype.set.call(H,R,y);else if(F.isBuffer(R))R.copy(H,y);else throw new TypeError('"list" argument must be an Array of Buffers');y+=R.length}return H};function Me(w,f){if(F.isBuffer(w))return w.length;if(V.isView(w)||rt(w,V))return w.byteLength;if(typeof w!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof w);const m=w.length,T=arguments.length>2&&arguments[2]===!0;if(!T&&m===0)return 0;let H=!1;for(;;)switch(f){case"ascii":case"latin1":case"binary":return m;case"utf8":case"utf-8":return ft(w).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return m*2;case"hex":return m>>>1;case"base64":return wi(w).length;default:if(H)return T?-1:ft(w).length;f=(""+f).toLowerCase(),H=!0}}F.byteLength=Me;function be(w,f,m){let T=!1;if((f===void 0||f<0)&&(f=0),f>this.length||((m===void 0||m>this.length)&&(m=this.length),m<=0)||(m>>>=0,f>>>=0,m<=f))return"";for(w||(w="utf8");;)switch(w){case"hex":return re(this,f,m);case"utf8":case"utf-8":return ye(this,f,m);case"ascii":return A(this,f,m);case"latin1":case"binary":return Q(this,f,m);case"base64":return oe(this,f,m);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return fe(this,f,m);default:if(T)throw new TypeError("Unknown encoding: "+w);w=(w+"").toLowerCase(),T=!0}}F.prototype._isBuffer=!0;function J(w,f,m){const T=w[f];w[f]=w[m],w[m]=T}F.prototype.swap16=function(){const f=this.length;if(f%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let m=0;m<f;m+=2)J(this,m,m+1);return this},F.prototype.swap32=function(){const f=this.length;if(f%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let m=0;m<f;m+=4)J(this,m,m+3),J(this,m+1,m+2);return this},F.prototype.swap64=function(){const f=this.length;if(f%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let m=0;m<f;m+=8)J(this,m,m+7),J(this,m+1,m+6),J(this,m+2,m+5),J(this,m+3,m+4);return this},F.prototype.toString=function(){const f=this.length;return f===0?"":arguments.length===0?ye(this,0,f):be.apply(this,arguments)},F.prototype.toLocaleString=F.prototype.toString,F.prototype.equals=function(f){if(!F.isBuffer(f))throw new TypeError("Argument must be a Buffer");return this===f?!0:F.compare(this,f)===0},F.prototype.inspect=function(){let f="";const m=g.INSPECT_MAX_BYTES;return f=this.toString("hex",0,m).replace(/(.{2})/g,"$1 ").trim(),this.length>m&&(f+=" ... "),"<Buffer "+f+">"},L&&(F.prototype[L]=F.prototype.inspect),F.prototype.compare=function(f,m,T,H,y){if(rt(f,S)&&(f=F.from(f,f.offset,f.byteLength)),!F.isBuffer(f))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof f);if(m===void 0&&(m=0),T===void 0&&(T=f?f.length:0),H===void 0&&(H=0),y===void 0&&(y=this.length),m<0||T>f.length||H<0||y>this.length)throw new RangeError("out of range index");if(H>=y&&m>=T)return 0;if(H>=y)return-1;if(m>=T)return 1;if(m>>>=0,T>>>=0,H>>>=0,y>>>=0,this===f)return 0;let R=y-H,z=T-m;const X=Math.min(R,z),K=this.slice(H,y),ve=f.slice(m,T);for(let ge=0;ge<X;++ge)if(K[ge]!==ve[ge]){R=K[ge],z=ve[ge];break}return R<z?-1:z<R?1:0};function Oe(w,f,m,T,H){if(w.length===0)return-1;if(typeof m=="string"?(T=m,m=0):m>2147483647?m=2147483647:m<-2147483648&&(m=-2147483648),m=+m,Pn(m)&&(m=H?0:w.length-1),m<0&&(m=w.length+m),m>=w.length){if(H)return-1;m=w.length-1}else if(m<0)if(H)m=0;else return-1;if(typeof f=="string"&&(f=F.from(f,T)),F.isBuffer(f))return f.length===0?-1:Ie(w,f,m,T,H);if(typeof f=="number")return f=f&255,typeof S.prototype.indexOf=="function"?H?S.prototype.indexOf.call(w,f,m):S.prototype.lastIndexOf.call(w,f,m):Ie(w,[f],m,T,H);throw new TypeError("val must be string, number or Buffer")}function Ie(w,f,m,T,H){let y=1,R=w.length,z=f.length;if(T!==void 0&&(T=String(T).toLowerCase(),T==="ucs2"||T==="ucs-2"||T==="utf16le"||T==="utf-16le")){if(w.length<2||f.length<2)return-1;y=2,R/=2,z/=2,m/=2}function X(ve,ge){return y===1?ve[ge]:ve.readUInt16BE(ge*y)}let K;if(H){let ve=-1;for(K=m;K<R;K++)if(X(w,K)===X(f,ve===-1?0:K-ve)){if(ve===-1&&(ve=K),K-ve+1===z)return ve*y}else ve!==-1&&(K-=K-ve),ve=-1}else for(m+z>R&&(m=R-z),K=m;K>=0;K--){let ve=!0;for(let ge=0;ge<z;ge++)if(X(w,K+ge)!==X(f,ge)){ve=!1;break}if(ve)return K}return-1}F.prototype.includes=function(f,m,T){return this.indexOf(f,m,T)!==-1},F.prototype.indexOf=function(f,m,T){return Oe(this,f,m,T,!0)},F.prototype.lastIndexOf=function(f,m,T){return Oe(this,f,m,T,!1)};function Ae(w,f,m,T){m=Number(m)||0;const H=w.length-m;T?(T=Number(T),T>H&&(T=H)):T=H;const y=f.length;T>y/2&&(T=y/2);let R;for(R=0;R<T;++R){const z=parseInt(f.substr(R*2,2),16);if(Pn(z))return R;w[m+R]=z}return R}function me(w,f,m,T){return _n(ft(f,w.length-m),w,m,T)}function Le(w,f,m,T){return _n(vt(f),w,m,T)}function te(w,f,m,T){return _n(wi(f),w,m,T)}function ie(w,f,m,T){return _n(St(f,w.length-m),w,m,T)}F.prototype.write=function(f,m,T,H){if(m===void 0)H="utf8",T=this.length,m=0;else if(T===void 0&&typeof m=="string")H=m,T=this.length,m=0;else if(isFinite(m))m=m>>>0,isFinite(T)?(T=T>>>0,H===void 0&&(H="utf8")):(H=T,T=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const y=this.length-m;if((T===void 0||T>y)&&(T=y),f.length>0&&(T<0||m<0)||m>this.length)throw new RangeError("Attempt to write outside buffer bounds");H||(H="utf8");let R=!1;for(;;)switch(H){case"hex":return Ae(this,f,m,T);case"utf8":case"utf-8":return me(this,f,m,T);case"ascii":case"latin1":case"binary":return Le(this,f,m,T);case"base64":return te(this,f,m,T);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ie(this,f,m,T);default:if(R)throw new TypeError("Unknown encoding: "+H);H=(""+H).toLowerCase(),R=!0}},F.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function oe(w,f,m){return f===0&&m===w.length?b.fromByteArray(w):b.fromByteArray(w.slice(f,m))}function ye(w,f,m){m=Math.min(w.length,m);const T=[];let H=f;for(;H<m;){const y=w[H];let R=null,z=y>239?4:y>223?3:y>191?2:1;if(H+z<=m){let X,K,ve,ge;switch(z){case 1:y<128&&(R=y);break;case 2:X=w[H+1],(X&192)===128&&(ge=(y&31)<<6|X&63,ge>127&&(R=ge));break;case 3:X=w[H+1],K=w[H+2],(X&192)===128&&(K&192)===128&&(ge=(y&15)<<12|(X&63)<<6|K&63,ge>2047&&(ge<55296||ge>57343)&&(R=ge));break;case 4:X=w[H+1],K=w[H+2],ve=w[H+3],(X&192)===128&&(K&192)===128&&(ve&192)===128&&(ge=(y&15)<<18|(X&63)<<12|(K&63)<<6|ve&63,ge>65535&&ge<1114112&&(R=ge))}}R===null?(R=65533,z=1):R>65535&&(R-=65536,T.push(R>>>10&1023|55296),R=56320|R&1023),T.push(R),H+=z}return P(T)}const ce=4096;function P(w){const f=w.length;if(f<=ce)return String.fromCharCode.apply(String,w);let m="",T=0;for(;T<f;)m+=String.fromCharCode.apply(String,w.slice(T,T+=ce));return m}function A(w,f,m){let T="";m=Math.min(w.length,m);for(let H=f;H<m;++H)T+=String.fromCharCode(w[H]&127);return T}function Q(w,f,m){let T="";m=Math.min(w.length,m);for(let H=f;H<m;++H)T+=String.fromCharCode(w[H]);return T}function re(w,f,m){const T=w.length;(!f||f<0)&&(f=0),(!m||m<0||m>T)&&(m=T);let H="";for(let y=f;y<m;++y)H+=Qr[w[y]];return H}function fe(w,f,m){const T=w.slice(f,m);let H="";for(let y=0;y<T.length-1;y+=2)H+=String.fromCharCode(T[y]+T[y+1]*256);return H}F.prototype.slice=function(f,m){const T=this.length;f=~~f,m=m===void 0?T:~~m,f<0?(f+=T,f<0&&(f=0)):f>T&&(f=T),m<0?(m+=T,m<0&&(m=0)):m>T&&(m=T),m<f&&(m=f);const H=this.subarray(f,m);return Object.setPrototypeOf(H,F.prototype),H};function le(w,f,m){if(w%1!==0||w<0)throw new RangeError("offset is not uint");if(w+f>m)throw new RangeError("Trying to access beyond buffer length")}F.prototype.readUintLE=F.prototype.readUIntLE=function(f,m,T){f=f>>>0,m=m>>>0,T||le(f,m,this.length);let H=this[f],y=1,R=0;for(;++R<m&&(y*=256);)H+=this[f+R]*y;return H},F.prototype.readUintBE=F.prototype.readUIntBE=function(f,m,T){f=f>>>0,m=m>>>0,T||le(f,m,this.length);let H=this[f+--m],y=1;for(;m>0&&(y*=256);)H+=this[f+--m]*y;return H},F.prototype.readUint8=F.prototype.readUInt8=function(f,m){return f=f>>>0,m||le(f,1,this.length),this[f]},F.prototype.readUint16LE=F.prototype.readUInt16LE=function(f,m){return f=f>>>0,m||le(f,2,this.length),this[f]|this[f+1]<<8},F.prototype.readUint16BE=F.prototype.readUInt16BE=function(f,m){return f=f>>>0,m||le(f,2,this.length),this[f]<<8|this[f+1]},F.prototype.readUint32LE=F.prototype.readUInt32LE=function(f,m){return f=f>>>0,m||le(f,4,this.length),(this[f]|this[f+1]<<8|this[f+2]<<16)+this[f+3]*16777216},F.prototype.readUint32BE=F.prototype.readUInt32BE=function(f,m){return f=f>>>0,m||le(f,4,this.length),this[f]*16777216+(this[f+1]<<16|this[f+2]<<8|this[f+3])},F.prototype.readBigUInt64LE=Et(function(f){f=f>>>0,De(f,"offset");const m=this[f],T=this[f+7];(m===void 0||T===void 0)&&Ye(f,this.length-8);const H=m+this[++f]*2**8+this[++f]*2**16+this[++f]*2**24,y=this[++f]+this[++f]*2**8+this[++f]*2**16+T*2**24;return BigInt(H)+(BigInt(y)<<BigInt(32))}),F.prototype.readBigUInt64BE=Et(function(f){f=f>>>0,De(f,"offset");const m=this[f],T=this[f+7];(m===void 0||T===void 0)&&Ye(f,this.length-8);const H=m*2**24+this[++f]*2**16+this[++f]*2**8+this[++f],y=this[++f]*2**24+this[++f]*2**16+this[++f]*2**8+T;return(BigInt(H)<<BigInt(32))+BigInt(y)}),F.prototype.readIntLE=function(f,m,T){f=f>>>0,m=m>>>0,T||le(f,m,this.length);let H=this[f],y=1,R=0;for(;++R<m&&(y*=256);)H+=this[f+R]*y;return y*=128,H>=y&&(H-=Math.pow(2,8*m)),H},F.prototype.readIntBE=function(f,m,T){f=f>>>0,m=m>>>0,T||le(f,m,this.length);let H=m,y=1,R=this[f+--H];for(;H>0&&(y*=256);)R+=this[f+--H]*y;return y*=128,R>=y&&(R-=Math.pow(2,8*m)),R},F.prototype.readInt8=function(f,m){return f=f>>>0,m||le(f,1,this.length),this[f]&128?(255-this[f]+1)*-1:this[f]},F.prototype.readInt16LE=function(f,m){f=f>>>0,m||le(f,2,this.length);const T=this[f]|this[f+1]<<8;return T&32768?T|4294901760:T},F.prototype.readInt16BE=function(f,m){f=f>>>0,m||le(f,2,this.length);const T=this[f+1]|this[f]<<8;return T&32768?T|4294901760:T},F.prototype.readInt32LE=function(f,m){return f=f>>>0,m||le(f,4,this.length),this[f]|this[f+1]<<8|this[f+2]<<16|this[f+3]<<24},F.prototype.readInt32BE=function(f,m){return f=f>>>0,m||le(f,4,this.length),this[f]<<24|this[f+1]<<16|this[f+2]<<8|this[f+3]},F.prototype.readBigInt64LE=Et(function(f){f=f>>>0,De(f,"offset");const m=this[f],T=this[f+7];(m===void 0||T===void 0)&&Ye(f,this.length-8);const H=this[f+4]+this[f+5]*2**8+this[f+6]*2**16+(T<<24);return(BigInt(H)<<BigInt(32))+BigInt(m+this[++f]*2**8+this[++f]*2**16+this[++f]*2**24)}),F.prototype.readBigInt64BE=Et(function(f){f=f>>>0,De(f,"offset");const m=this[f],T=this[f+7];(m===void 0||T===void 0)&&Ye(f,this.length-8);const H=(m<<24)+this[++f]*2**16+this[++f]*2**8+this[++f];return(BigInt(H)<<BigInt(32))+BigInt(this[++f]*2**24+this[++f]*2**16+this[++f]*2**8+T)}),F.prototype.readFloatLE=function(f,m){return f=f>>>0,m||le(f,4,this.length),E.read(this,f,!0,23,4)},F.prototype.readFloatBE=function(f,m){return f=f>>>0,m||le(f,4,this.length),E.read(this,f,!1,23,4)},F.prototype.readDoubleLE=function(f,m){return f=f>>>0,m||le(f,8,this.length),E.read(this,f,!0,52,8)},F.prototype.readDoubleBE=function(f,m){return f=f>>>0,m||le(f,8,this.length),E.read(this,f,!1,52,8)};function _e(w,f,m,T,H,y){if(!F.isBuffer(w))throw new TypeError('"buffer" argument must be a Buffer instance');if(f>H||f<y)throw new RangeError('"value" argument is out of bounds');if(m+T>w.length)throw new RangeError("Index out of range")}F.prototype.writeUintLE=F.prototype.writeUIntLE=function(f,m,T,H){if(f=+f,m=m>>>0,T=T>>>0,!H){const z=Math.pow(2,8*T)-1;_e(this,f,m,T,z,0)}let y=1,R=0;for(this[m]=f&255;++R<T&&(y*=256);)this[m+R]=f/y&255;return m+T},F.prototype.writeUintBE=F.prototype.writeUIntBE=function(f,m,T,H){if(f=+f,m=m>>>0,T=T>>>0,!H){const z=Math.pow(2,8*T)-1;_e(this,f,m,T,z,0)}let y=T-1,R=1;for(this[m+y]=f&255;--y>=0&&(R*=256);)this[m+y]=f/R&255;return m+T},F.prototype.writeUint8=F.prototype.writeUInt8=function(f,m,T){return f=+f,m=m>>>0,T||_e(this,f,m,1,255,0),this[m]=f&255,m+1},F.prototype.writeUint16LE=F.prototype.writeUInt16LE=function(f,m,T){return f=+f,m=m>>>0,T||_e(this,f,m,2,65535,0),this[m]=f&255,this[m+1]=f>>>8,m+2},F.prototype.writeUint16BE=F.prototype.writeUInt16BE=function(f,m,T){return f=+f,m=m>>>0,T||_e(this,f,m,2,65535,0),this[m]=f>>>8,this[m+1]=f&255,m+2},F.prototype.writeUint32LE=F.prototype.writeUInt32LE=function(f,m,T){return f=+f,m=m>>>0,T||_e(this,f,m,4,4294967295,0),this[m+3]=f>>>24,this[m+2]=f>>>16,this[m+1]=f>>>8,this[m]=f&255,m+4},F.prototype.writeUint32BE=F.prototype.writeUInt32BE=function(f,m,T){return f=+f,m=m>>>0,T||_e(this,f,m,4,4294967295,0),this[m]=f>>>24,this[m+1]=f>>>16,this[m+2]=f>>>8,this[m+3]=f&255,m+4};function Se(w,f,m,T,H){Ne(f,T,H,w,m,7);let y=Number(f&BigInt(4294967295));w[m++]=y,y=y>>8,w[m++]=y,y=y>>8,w[m++]=y,y=y>>8,w[m++]=y;let R=Number(f>>BigInt(32)&BigInt(4294967295));return w[m++]=R,R=R>>8,w[m++]=R,R=R>>8,w[m++]=R,R=R>>8,w[m++]=R,m}function Ce(w,f,m,T,H){Ne(f,T,H,w,m,7);let y=Number(f&BigInt(4294967295));w[m+7]=y,y=y>>8,w[m+6]=y,y=y>>8,w[m+5]=y,y=y>>8,w[m+4]=y;let R=Number(f>>BigInt(32)&BigInt(4294967295));return w[m+3]=R,R=R>>8,w[m+2]=R,R=R>>8,w[m+1]=R,R=R>>8,w[m]=R,m+8}F.prototype.writeBigUInt64LE=Et(function(f,m=0){return Se(this,f,m,BigInt(0),BigInt("0xffffffffffffffff"))}),F.prototype.writeBigUInt64BE=Et(function(f,m=0){return Ce(this,f,m,BigInt(0),BigInt("0xffffffffffffffff"))}),F.prototype.writeIntLE=function(f,m,T,H){if(f=+f,m=m>>>0,!H){const X=Math.pow(2,8*T-1);_e(this,f,m,T,X-1,-X)}let y=0,R=1,z=0;for(this[m]=f&255;++y<T&&(R*=256);)f<0&&z===0&&this[m+y-1]!==0&&(z=1),this[m+y]=(f/R>>0)-z&255;return m+T},F.prototype.writeIntBE=function(f,m,T,H){if(f=+f,m=m>>>0,!H){const X=Math.pow(2,8*T-1);_e(this,f,m,T,X-1,-X)}let y=T-1,R=1,z=0;for(this[m+y]=f&255;--y>=0&&(R*=256);)f<0&&z===0&&this[m+y+1]!==0&&(z=1),this[m+y]=(f/R>>0)-z&255;return m+T},F.prototype.writeInt8=function(f,m,T){return f=+f,m=m>>>0,T||_e(this,f,m,1,127,-128),f<0&&(f=255+f+1),this[m]=f&255,m+1},F.prototype.writeInt16LE=function(f,m,T){return f=+f,m=m>>>0,T||_e(this,f,m,2,32767,-32768),this[m]=f&255,this[m+1]=f>>>8,m+2},F.prototype.writeInt16BE=function(f,m,T){return f=+f,m=m>>>0,T||_e(this,f,m,2,32767,-32768),this[m]=f>>>8,this[m+1]=f&255,m+2},F.prototype.writeInt32LE=function(f,m,T){return f=+f,m=m>>>0,T||_e(this,f,m,4,2147483647,-2147483648),this[m]=f&255,this[m+1]=f>>>8,this[m+2]=f>>>16,this[m+3]=f>>>24,m+4},F.prototype.writeInt32BE=function(f,m,T){return f=+f,m=m>>>0,T||_e(this,f,m,4,2147483647,-2147483648),f<0&&(f=4294967295+f+1),this[m]=f>>>24,this[m+1]=f>>>16,this[m+2]=f>>>8,this[m+3]=f&255,m+4},F.prototype.writeBigInt64LE=Et(function(f,m=0){return Se(this,f,m,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),F.prototype.writeBigInt64BE=Et(function(f,m=0){return Ce(this,f,m,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function we(w,f,m,T,H,y){if(m+T>w.length)throw new RangeError("Index out of range");if(m<0)throw new RangeError("Index out of range")}function k(w,f,m,T,H){return f=+f,m=m>>>0,H||we(w,f,m,4),E.write(w,f,m,T,23,4),m+4}F.prototype.writeFloatLE=function(f,m,T){return k(this,f,m,!0,T)},F.prototype.writeFloatBE=function(f,m,T){return k(this,f,m,!1,T)};function ue(w,f,m,T,H){return f=+f,m=m>>>0,H||we(w,f,m,8),E.write(w,f,m,T,52,8),m+8}F.prototype.writeDoubleLE=function(f,m,T){return ue(this,f,m,!0,T)},F.prototype.writeDoubleBE=function(f,m,T){return ue(this,f,m,!1,T)},F.prototype.copy=function(f,m,T,H){if(!F.isBuffer(f))throw new TypeError("argument should be a Buffer");if(T||(T=0),!H&&H!==0&&(H=this.length),m>=f.length&&(m=f.length),m||(m=0),H>0&&H<T&&(H=T),H===T||f.length===0||this.length===0)return 0;if(m<0)throw new RangeError("targetStart out of bounds");if(T<0||T>=this.length)throw new RangeError("Index out of range");if(H<0)throw new RangeError("sourceEnd out of bounds");H>this.length&&(H=this.length),f.length-m<H-T&&(H=f.length-m+T);const y=H-T;return this===f&&typeof S.prototype.copyWithin=="function"?this.copyWithin(m,T,H):S.prototype.set.call(f,this.subarray(T,H),m),y},F.prototype.fill=function(f,m,T,H){if(typeof f=="string"){if(typeof m=="string"?(H=m,m=0,T=this.length):typeof T=="string"&&(H=T,T=this.length),H!==void 0&&typeof H!="string")throw new TypeError("encoding must be a string");if(typeof H=="string"&&!F.isEncoding(H))throw new TypeError("Unknown encoding: "+H);if(f.length===1){const R=f.charCodeAt(0);(H==="utf8"&&R<128||H==="latin1")&&(f=R)}}else typeof f=="number"?f=f&255:typeof f=="boolean"&&(f=Number(f));if(m<0||this.length<m||this.length<T)throw new RangeError("Out of range index");if(T<=m)return this;m=m>>>0,T=T===void 0?this.length:T>>>0,f||(f=0);let y;if(typeof f=="number")for(y=m;y<T;++y)this[y]=f;else{const R=F.isBuffer(f)?f:F.from(f,H),z=R.length;if(z===0)throw new TypeError('The value "'+f+'" is invalid for argument "value"');for(y=0;y<T-m;++y)this[y+m]=R[y%z]}return this};const ee={};function xe(w,f,m){ee[w]=class extends m{constructor(){super(),Object.defineProperty(this,"message",{value:f.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${w}]`,this.stack,delete this.name}get code(){return w}set code(H){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:H,writable:!0})}toString(){return`${this.name} [${w}]: ${this.message}`}}}xe("ERR_BUFFER_OUT_OF_BOUNDS",function(w){return w?`${w} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),xe("ERR_INVALID_ARG_TYPE",function(w,f){return`The "${w}" argument must be of type number. Received type ${typeof f}`},TypeError),xe("ERR_OUT_OF_RANGE",function(w,f,m){let T=`The value of "${w}" is out of range.`,H=m;return Number.isInteger(m)&&Math.abs(m)>2**32?H=B(String(m)):typeof m=="bigint"&&(H=String(m),(m>BigInt(2)**BigInt(32)||m<-(BigInt(2)**BigInt(32)))&&(H=B(H)),H+="n"),T+=` It must be ${f}. Received ${H}`,T},RangeError);function B(w){let f="",m=w.length;const T=w[0]==="-"?1:0;for(;m>=T+4;m-=3)f=`_${w.slice(m-3,m)}${f}`;return`${w.slice(0,m)}${f}`}function ae(w,f,m){De(f,"offset"),(w[f]===void 0||w[f+m]===void 0)&&Ye(f,w.length-(m+1))}function Ne(w,f,m,T,H,y){if(w>m||w<f){const R=typeof f=="bigint"?"n":"";let z;throw f===0||f===BigInt(0)?z=`>= 0${R} and < 2${R} ** ${(y+1)*8}${R}`:z=`>= -(2${R} ** ${(y+1)*8-1}${R}) and < 2 ** ${(y+1)*8-1}${R}`,new ee.ERR_OUT_OF_RANGE("value",z,w)}ae(T,H,y)}function De(w,f){if(typeof w!="number")throw new ee.ERR_INVALID_ARG_TYPE(f,"number",w)}function Ye(w,f,m){throw Math.floor(w)!==w?(De(w,m),new ee.ERR_OUT_OF_RANGE("offset","an integer",w)):f<0?new ee.ERR_BUFFER_OUT_OF_BOUNDS:new ee.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${f}`,w)}const Ge=/[^+/0-9A-Za-z-_]/g;function dt(w){if(w=w.split("=")[0],w=w.trim().replace(Ge,""),w.length<2)return"";for(;w.length%4!==0;)w=w+"=";return w}function ft(w,f){f=f||1/0;let m;const T=w.length;let H=null;const y=[];for(let R=0;R<T;++R){if(m=w.charCodeAt(R),m>55295&&m<57344){if(!H){if(m>56319){(f-=3)>-1&&y.push(239,191,189);continue}else if(R+1===T){(f-=3)>-1&&y.push(239,191,189);continue}H=m;continue}if(m<56320){(f-=3)>-1&&y.push(239,191,189),H=m;continue}m=(H-55296<<10|m-56320)+65536}else H&&(f-=3)>-1&&y.push(239,191,189);if(H=null,m<128){if((f-=1)<0)break;y.push(m)}else if(m<2048){if((f-=2)<0)break;y.push(m>>6|192,m&63|128)}else if(m<65536){if((f-=3)<0)break;y.push(m>>12|224,m>>6&63|128,m&63|128)}else if(m<1114112){if((f-=4)<0)break;y.push(m>>18|240,m>>12&63|128,m>>6&63|128,m&63|128)}else throw new Error("Invalid code point")}return y}function vt(w){const f=[];for(let m=0;m<w.length;++m)f.push(w.charCodeAt(m)&255);return f}function St(w,f){let m,T,H;const y=[];for(let R=0;R<w.length&&!((f-=2)<0);++R)m=w.charCodeAt(R),T=m>>8,H=m%256,y.push(H),y.push(T);return y}function wi(w){return b.toByteArray(dt(w))}function _n(w,f,m,T){let H;for(H=0;H<T&&!(H+m>=f.length||H>=w.length);++H)f[H+m]=w[H];return H}function rt(w,f){return w instanceof f||w!=null&&w.constructor!=null&&w.constructor.name!=null&&w.constructor.name===f.name}function Pn(w){return w!==w}const Qr=function(){const w="0123456789abcdef",f=new Array(256);for(let m=0;m<16;++m){const T=m*16;for(let H=0;H<16;++H)f[T+H]=w[m]+w[H]}return f}();function Et(w){return typeof BigInt>"u"?$i:w}function $i(){throw new Error("BigInt not supported")}})(e);const x=e.Buffer;r.Blob=e.Blob,r.BlobOptions=e.BlobOptions,r.Buffer=e.Buffer,r.File=e.File,r.FileOptions=e.FileOptions,r.INSPECT_MAX_BYTES=e.INSPECT_MAX_BYTES,r.SlowBuffer=e.SlowBuffer,r.TranscodeEncoding=e.TranscodeEncoding,r.atob=e.atob,r.btoa=e.btoa,r.constants=e.constants,r.default=x,r.isAscii=e.isAscii,r.isUtf8=e.isUtf8,r.kMaxLength=e.kMaxLength,r.kStringMaxLength=e.kStringMaxLength,r.resolveObjectURL=e.resolveObjectURL,r.transcode=e.transcode})(Sa);const Cr=ba(Sa);var Ea={exports:{}},Bi;typeof window<"u"?Bi=window:typeof ea<"u"?Bi=ea:typeof self<"u"?Bi=self:Bi={};var b0=Bi,S0=T0,E0=Object.prototype.toString;function T0(r){if(!r)return!1;var e=E0.call(r);return e==="[object Function]"||typeof r=="function"&&e!=="[object RegExp]"||typeof window<"u"&&(r===window.setTimeout||r===window.alert||r===window.confirm||r===window.prompt)}var Us=function(r){return r.replace(/^\s+|\s+$/g,"")},A0=function(r){return Object.prototype.toString.call(r)==="[object Array]"},L0=function(r){if(!r)return{};for(var e={},t=Us(r).split(`
`),n=0;n<t.length;n++){var i=t[n],s=i.indexOf(":"),a=Us(i.slice(0,s)).toLowerCase(),o=Us(i.slice(s+1));typeof e[a]>"u"?e[a]=o:A0(e[a])?e[a].push(o):e[a]=[e[a],o]}return e},hc=R0,C0=Object.prototype.hasOwnProperty;function R0(){for(var r={},e=0;e<arguments.length;e++){var t=arguments[e];for(var n in t)C0.call(t,n)&&(r[n]=t[n])}return r}var dc=b0,P0=S0,I0=L0,D0=hc;Ea.exports=en;Ea.exports.default=en;en.XMLHttpRequest=dc.XMLHttpRequest||U0;en.XDomainRequest="withCredentials"in new en.XMLHttpRequest?en.XMLHttpRequest:dc.XDomainRequest;F0(["get","put","post","patch","head","delete"],function(r){en[r==="delete"?"del":r]=function(e,t,n){return t=fc(e,t,n),t.method=r.toUpperCase(),pc(t)}});function F0(r,e){for(var t=0;t<r.length;t++)e(r[t])}function B0(r){for(var e in r)if(r.hasOwnProperty(e))return!1;return!0}function fc(r,e,t){var n=r;return P0(e)?(t=e,typeof r=="string"&&(n={uri:r})):n=D0(e,{uri:r}),n.callback=t,n}function en(r,e,t){return e=fc(r,e,t),pc(e)}function pc(r){if(typeof r.callback>"u")throw new Error("callback argument missing");var e=!1,t=function(b,E,L){e||(e=!0,r.callback(b,E,L))};function n(){o.readyState===4&&setTimeout(a,0)}function i(){var g=void 0;if(o.response?g=o.response:g=o.responseText||N0(o),_)try{g=JSON.parse(g)}catch{}return g}function s(g){return clearTimeout(M),g instanceof Error||(g=new Error(""+(g||"Unknown XMLHttpRequest Error"))),g.statusCode=0,t(g,x)}function a(){if(!c){var g;clearTimeout(M),r.useXDR&&o.status===void 0?g=200:g=o.status===1223?204:o.status;var b=x,E=null;return g!==0?(b={body:i(),statusCode:g,method:h,headers:{},url:u,rawRequest:o},o.getAllResponseHeaders&&(b.headers=I0(o.getAllResponseHeaders()))):E=new Error("Internal XMLHttpRequest Error"),t(E,b,b.body)}}var o=r.xhr||null;o||(r.cors||r.useXDR?o=new en.XDomainRequest:o=new en.XMLHttpRequest);var l,c,u=o.url=r.uri||r.url,h=o.method=r.method||"GET",d=r.body||r.data,p=o.headers=r.headers||{},v=!!r.sync,_=!1,M,x={body:void 0,headers:{},statusCode:0,method:h,url:u,rawRequest:o};if("json"in r&&r.json!==!1&&(_=!0,p.accept||p.Accept||(p.Accept="application/json"),h!=="GET"&&h!=="HEAD"&&(p["content-type"]||p["Content-Type"]||(p["Content-Type"]="application/json"),d=JSON.stringify(r.json===!0?d:r.json))),o.onreadystatechange=n,o.onload=a,o.onerror=s,o.onprogress=function(){},o.onabort=function(){c=!0},o.ontimeout=s,o.open(h,u,!v,r.username,r.password),v||(o.withCredentials=!!r.withCredentials),!v&&r.timeout>0&&(M=setTimeout(function(){if(!c){c=!0,o.abort("timeout");var g=new Error("XMLHttpRequest timeout");g.code="ETIMEDOUT",s(g)}},r.timeout)),o.setRequestHeader)for(l in p)p.hasOwnProperty(l)&&o.setRequestHeader(l,p[l]);else if(r.headers&&!B0(r.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in r&&(o.responseType=r.responseType),"beforeSend"in r&&typeof r.beforeSend=="function"&&r.beforeSend(o),o.send(d||null),o}function N0(r){try{if(r.responseType==="document")return r.responseXML;var e=r.responseXML&&r.responseXML.documentElement.nodeName==="parsererror";if(r.responseType===""&&!e)return r.responseXML}catch{}return null}function U0(){}var O0=Ea.exports,z0=function(e){if(!e)throw new Error("no data provided");e=e.toString().trim();var t={pages:[],chars:[],kernings:[]},n=e.split(/\r\n?|\n/g);if(n.length===0)throw new Error("no data in BMFont file");for(var i=0;i<n.length;i++){var s=H0(n[i],i);if(s)if(s.key==="page"){if(typeof s.data.id!="number")throw new Error("malformed file at line "+i+" -- needs page id=N");if(typeof s.data.file!="string")throw new Error("malformed file at line "+i+' -- needs page file="path"');t.pages[s.data.id]=s.data.file}else s.key==="chars"||s.key==="kernings"||(s.key==="char"?t.chars.push(s.data):s.key==="kerning"?t.kernings.push(s.data):t[s.key]=s.data)}return t};function H0(r,e){if(r=r.replace(/\t+/g," ").trim(),!r)return null;var t=r.indexOf(" ");if(t===-1)throw new Error("no named row at line "+e);var n=r.substring(0,t);r=r.substring(t+1),r=r.replace(/letter=[\'\"]\S+[\'\"]/gi,""),r=r.split("="),r=r.map(function(l){return l.trim().match(/(".*?"|[^"\s]+)+(?=\s*|\s*$)/g)});for(var i=[],s=0;s<r.length;s++){var a=r[s];s===0?i.push({key:a[0],data:""}):s===r.length-1?i[i.length-1].data=Jo(a[0]):(i[i.length-1].data=Jo(a[0]),i.push({key:a[1],data:""}))}var o={key:n,data:{}};return i.forEach(function(l){o.data[l.key]=l.data}),o}function Jo(r){return!r||r.length===0?"":r.indexOf('"')===0||r.indexOf("'")===0?r.substring(1,r.length-1):r.indexOf(",")!==-1?k0(r):parseInt(r,10)}function k0(r){return r.split(",").map(function(e){return parseInt(e,10)})}var Os="chasrset",G0=function(e){e=Object.assign({},e),Os in e&&(e.charset=e[Os],delete e[Os]);for(var t in e)t==="face"||t==="charset"||(t==="padding"||t==="spacing"?e[t]=V0(e[t]):e[t]=parseInt(e[t],10));return e};function V0(r){return r.split(",").map(function(e){return parseInt(e,10)})}var W0=function(){return typeof self.DOMParser<"u"?function(e){var t=new self.DOMParser;return t.parseFromString(e,"application/xml")}:typeof self.ActiveXObject<"u"&&new self.ActiveXObject("Microsoft.XMLDOM")?function(e){var t=new self.ActiveXObject("Microsoft.XMLDOM");return t.async="false",t.loadXML(e),t}:function(e){var t=document.createElement("div");return t.innerHTML=e,t}}(),Qo=G0,X0=W0,q0={scaleh:"scaleH",scalew:"scaleW",stretchh:"stretchH",lineheight:"lineHeight",alphachnl:"alphaChnl",redchnl:"redChnl",greenchnl:"greenChnl",bluechnl:"blueChnl"},Y0=function(e){e=e.toString();var t=X0(e),n={pages:[],chars:[],kernings:[]};["info","common"].forEach(function(u){var h=t.getElementsByTagName(u)[0];h&&(n[u]=Qo(Ko(h)))});var i=t.getElementsByTagName("pages")[0];if(!i)throw new Error("malformed file -- no <pages> element");for(var s=i.getElementsByTagName("page"),a=0;a<s.length;a++){var o=s[a],l=parseInt(o.getAttribute("id"),10),c=o.getAttribute("file");if(isNaN(l))throw new Error('malformed file -- page "id" attribute is NaN');if(!c)throw new Error('malformed file -- needs page "file" attribute');n.pages[parseInt(l,10)]=c}return["chars","kernings"].forEach(function(u){var h=t.getElementsByTagName(u)[0];if(h)for(var d=u.substring(0,u.length-1),p=h.getElementsByTagName(d),v=0;v<p.length;v++){var _=p[v];n[u].push(Qo(Ko(_)))}}),n};function Ko(r){var e=j0(r);return e.reduce(function(t,n){var i=Z0(n.nodeName);return t[i]=n.nodeValue,t},{})}function j0(r){for(var e=[],t=0;t<r.attributes.length;t++)e.push(r.attributes[t]);return e}function Z0(r){return q0[r.toLowerCase()]||r}var $0=[66,77,70],J0=function(e){if(e.length<6)throw new Error("invalid buffer length for BMFont");var t=$0.every(function(o,l){return e.readUInt8(l)===o});if(!t)throw new Error("BMFont missing BMF byte header");var n=3,i=e.readUInt8(n++);if(i>3)throw new Error("Only supports BMFont Binary v3 (BMFont App v1.10)");for(var s={kernings:[],chars:[]},a=0;a<5;a++)n+=Q0(s,e,n);return s};function Q0(r,e,t){if(t>e.length-1)return 0;var n=e.readUInt8(t++),i=e.readInt32LE(t);switch(t+=4,n){case 1:r.info=K0(e,t);break;case 2:r.common=ex(e,t);break;case 3:r.pages=tx(e,t,i);break;case 4:r.chars=nx(e,t,i);break;case 5:r.kernings=ix(e,t,i);break}return 5+i}function K0(r,e){var t={};t.size=r.readInt16LE(e);var n=r.readUInt8(e+2);return t.smooth=n>>7&1,t.unicode=n>>6&1,t.italic=n>>5&1,t.bold=n>>4&1,n>>3&1&&(t.fixedHeight=1),t.charset=r.readUInt8(e+3)||"",t.stretchH=r.readUInt16LE(e+4),t.aa=r.readUInt8(e+6),t.padding=[r.readInt8(e+7),r.readInt8(e+8),r.readInt8(e+9),r.readInt8(e+10)],t.spacing=[r.readInt8(e+11),r.readInt8(e+12)],t.outline=r.readUInt8(e+13),t.face=rx(r,e+14),t}function ex(r,e){var t={};return t.lineHeight=r.readUInt16LE(e),t.base=r.readUInt16LE(e+2),t.scaleW=r.readUInt16LE(e+4),t.scaleH=r.readUInt16LE(e+6),t.pages=r.readUInt16LE(e+8),r.readUInt8(e+10),t.packed=0,t.alphaChnl=r.readUInt8(e+11),t.redChnl=r.readUInt8(e+12),t.greenChnl=r.readUInt8(e+13),t.blueChnl=r.readUInt8(e+14),t}function tx(r,e,t){for(var n=[],i=mc(r,e),s=i.length+1,a=t/s,o=0;o<a;o++)n[o]=r.slice(e,e+i.length).toString("utf8"),e+=s;return n}function nx(r,e,t){for(var n=[],i=t/20,s=0;s<i;s++){var a={},o=s*20;a.id=r.readUInt32LE(e+0+o),a.x=r.readUInt16LE(e+4+o),a.y=r.readUInt16LE(e+6+o),a.width=r.readUInt16LE(e+8+o),a.height=r.readUInt16LE(e+10+o),a.xoffset=r.readInt16LE(e+12+o),a.yoffset=r.readInt16LE(e+14+o),a.xadvance=r.readInt16LE(e+16+o),a.page=r.readUInt8(e+18+o),a.chnl=r.readUInt8(e+19+o),n[s]=a}return n}function ix(r,e,t){for(var n=[],i=t/10,s=0;s<i;s++){var a={},o=s*10;a.first=r.readUInt32LE(e+0+o),a.second=r.readUInt32LE(e+4+o),a.amount=r.readInt16LE(e+8+o),n[s]=a}return n}function mc(r,e){for(var t=e;t<r.length&&r[t]!==0;t++);return r.slice(e,t)}function rx(r,e){return mc(r,e).toString("utf8")}var el=Sa.Buffer,sx=function(r,e){if(el.isBuffer(r)&&el.isBuffer(e)){if(typeof r.equals=="function")return r.equals(e);if(r.length!==e.length)return!1;for(var t=0;t<r.length;t++)if(r[t]!==e[t])return!1;return!0}},ax=sx,ox=Cr.from([66,77,70,3]),lx=function(r){return typeof r=="string"?r.substring(0,3)==="BMF":r.length>4&&ax(r.slice(0,4),ox)},cx=O0,tl=function(){},ux=z0,hx=Y0,dx=J0,fx=lx,nl=hc,px=function(){return self.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}(),mx=function(r,e){e=typeof e=="function"?e:tl,typeof r=="string"?r={uri:r}:r||(r={});var t=r.binary;t&&(r=xx(r)),cx(r,function(n,i,s){if(n)return e(n);if(!/^2/.test(i.statusCode))return e(new Error("http status code: "+i.statusCode));if(!s)return e(new Error("no body result"));var a=!1;if(gx(s)){var o=new Uint8Array(s);s=Cr.from(o,"binary")}fx(s)&&(a=!0,typeof s=="string"&&(s=Cr.from(s,"binary"))),a||(Cr.isBuffer(s)&&(s=s.toString(r.encoding)),s=s.trim());var l;try{var c=i.headers["content-type"];a?l=dx(s):/json/.test(c)||s.charAt(0)==="{"?l=JSON.parse(s):/xml/.test(c)||s.charAt(0)==="<"?l=hx(s):l=ux(s)}catch(u){e(new Error("error parsing font "+u.message)),e=tl}e(null,l)})};function gx(r){var e=Object.prototype.toString;return e.call(r)==="[object ArrayBuffer]"}function xx(r){if(px)return nl(r,{responseType:"arraybuffer"});if(typeof self.XMLHttpRequest>"u")throw new Error("your browser does not support XHR loading");var e=new self.XMLHttpRequest;return e.overrideMimeType("text/plain; charset=x-user-defined"),nl({xhr:e},r)}const vx=ba(mx);var yx=Object.defineProperty,_x=(r,e,t)=>e in r?yx(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,zs=(r,e,t)=>_x(r,typeof e!="symbol"?e+"":e,t);function gc(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var xc={exports:{}};(function(r){var e=/\n/,t=`
`,n=/\s/;r.exports=function(c,u){var h=r.exports.lines(c,u);return h.map(function(d){return c.substring(d.start,d.end)}).join(`
`)},r.exports.lines=function(c,u){if(u=u||{},u.width===0&&u.mode!=="nowrap")return[];c=c||"";var h=typeof u.width=="number"?u.width:Number.MAX_VALUE,d=Math.max(0,u.start||0),p=typeof u.end=="number"?u.end:c.length,v=u.mode,_=u.measure||l;return v==="pre"?a(_,c,d,p,h):o(_,c,d,p,h,v)};function i(c,u,h,d){var p=c.indexOf(u,h);return p===-1||p>d?d:p}function s(c){return n.test(c)}function a(c,u,h,d,p){for(var v=[],_=h,M=h;M<d&&M<u.length;M++){var x=u.charAt(M),g=e.test(x);if(g||M===d-1){var b=g?M:M+1,E=c(u,_,b,p);v.push(E),_=M+1}}return v}function o(c,u,h,d,p,v){var _=[],M=p;for(v==="nowrap"&&(M=Number.MAX_VALUE);h<d&&h<u.length;){for(var x=i(u,t,h,d);h<x&&s(u.charAt(h));)h++;var g=c(u,h,x,M),b=h+(g.end-g.start),E=b+t.length;if(b<x){for(;b>h&&!s(u.charAt(b));)b--;if(b===h)E>h+t.length&&E--,b=E;else for(E=b;b>h&&s(u.charAt(b-t.length));)b--}if(b>=h){var L=c(u,h,b,M);_.push(L)}h=E}return _}function l(c,u,h,d){var p=Math.min(d,h-u);return{start:u,end:u+p}}})(xc);var wx=xc.exports,Mx=Sx,bx=Object.prototype.hasOwnProperty;function Sx(){for(var r={},e=0;e<arguments.length;e++){var t=arguments[e];for(var n in t)bx.call(t,n)&&(r[n]=t[n])}return r}var Ex=function(r,e){return typeof r=="number"?r:typeof e=="number"?e:0},Tx=wx,vc=Mx,il=Ex,rl=["x","e","a","o","n","s","r","c","u","m","v","w","z"],sl=["m","w"],al=["H","I","N","E","F","K","L","T","U","V","W","X","Y","Z"],yc=9,_c=32,Ax=0,wc=1,Mc=2,Lx=function(r){return new _i(r)};function _i(r){this.glyphs=[],this._measure=this.computeMetrics.bind(this),this.update(r)}_i.prototype.update=function(r){if(r=vc({measure:this._measure},r),this._opt=r,this._opt.tabSize=il(this._opt.tabSize,4),!r.font)throw new Error("must provide a valid bitmap font");var e=this.glyphs,t=r.text||"",n=r.font;this._setupSpaceGlyphs(n);var i=Tx.lines(t,r),s=r.width||0;e.length=0;var a=i.reduce(function(M,x){return Math.max(M,x.width,s)},0),o=0,l=0,c=il(r.lineHeight,n.common.lineHeight),u=n.common.base,h=c-u,d=r.letterSpacing||0,p=c*i.length-h,v=Fx(this._opt.align);l-=p,this._width=a,this._height=p,this._descender=c-u,this._baseline=u,this._xHeight=Px(n),this._capHeight=Dx(n),this._lineHeight=c,this._ascender=c-h-this._xHeight;var _=this;i.forEach(function(M,x){for(var g=M.start,b=M.end,E=M.width,L,U=g;U<b;U++){var S=t.charCodeAt(U),V=_.getGlyph(n,S);if(V){L&&(o+=Sc(n,L.id,V.id));var q=o;v===wc?q+=(a-E)/2:v===Mc&&(q+=a-E),e.push({position:[q,l],data:V,index:U,line:x}),o+=V.xadvance+d,L=V}}l+=c,o=0}),this._linesTotal=i.length};_i.prototype._setupSpaceGlyphs=function(r){if(this._fallbackSpaceGlyph=null,this._fallbackTabGlyph=null,!(!r.chars||r.chars.length===0)){var e=bc(r,_c)||Ix(r)||r.chars[0],t=this._opt.tabSize*e.xadvance;this._fallbackSpaceGlyph=e,this._fallbackTabGlyph=vc(e,{x:0,y:0,xadvance:t,id:yc,xoffset:0,yoffset:0,width:0,height:0})}};_i.prototype.getGlyph=function(r,e){var t=bc(r,e);return t||(e===yc?this._fallbackTabGlyph:e===_c?this._fallbackSpaceGlyph:null)};_i.prototype.computeMetrics=function(r,e,t,n){var i=this._opt.letterSpacing||0,s=this._opt.font,a=0,o=0,l=0,c,u;if(!s.chars||s.chars.length===0)return{start:e,end:e,width:0};t=Math.min(r.length,t);for(var h=e;h<t;h++){var d=r.charCodeAt(h),c=this.getGlyph(s,d);if(c){c.xoffset;var p=u?Sc(s,u.id,c.id):0;a+=p;var v=a+c.xadvance+i,_=a+c.width;if(_>=n||v>=n)break;a=v,o=_,u=c}l++}return u&&(o+=u.xoffset),{start:e,end:e+l,width:o}};["width","height","descender","ascender","xHeight","baseline","capHeight","lineHeight"].forEach(Cx);function Cx(r){Object.defineProperty(_i.prototype,r,{get:Rx(r),configurable:!0})}function Rx(r){return new Function(["return function "+r+"() {","  return this._"+r,"}"].join(`
`))()}function bc(r,e){if(!r.chars||r.chars.length===0)return null;var t=Jr(r.chars,e);return t>=0?r.chars[t]:null}function Px(r){for(var e=0;e<rl.length;e++){var t=rl[e].charCodeAt(0),n=Jr(r.chars,t);if(n>=0)return r.chars[n].height}return 0}function Ix(r){for(var e=0;e<sl.length;e++){var t=sl[e].charCodeAt(0),n=Jr(r.chars,t);if(n>=0)return r.chars[n]}return 0}function Dx(r){for(var e=0;e<al.length;e++){var t=al[e].charCodeAt(0),n=Jr(r.chars,t);if(n>=0)return r.chars[n].height}return 0}function Sc(r,e,t){if(!r.kernings||r.kernings.length===0)return 0;for(var n=r.kernings,i=0;i<n.length;i++){var s=n[i];if(s.first===e&&s.second===t)return s.amount}return 0}function Fx(r){return r==="center"?wc:r==="right"?Mc:Ax}function Jr(r,e,t){t=t||0;for(var n=t;n<r.length;n++)if(r[n].id===e)return n;return-1}const Bx=gc(Lx);var Nx=function(r){switch(r){case"int8":return Int8Array;case"int16":return Int16Array;case"int32":return Int32Array;case"uint8":return Uint8Array;case"uint16":return Uint16Array;case"uint32":return Uint32Array;case"float32":return Float32Array;case"float64":return Float64Array;case"array":return Array;case"uint8_clamped":return Uint8ClampedArray}},Ux=Object.prototype.toString,Ox=zx;function zx(r){return r.BYTES_PER_ELEMENT&&Ux.call(r.buffer)==="[object ArrayBuffer]"||Array.isArray(r)}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var Hx=function(r){return r!=null&&(Ec(r)||kx(r)||!!r._isBuffer)};function Ec(r){return!!r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function kx(r){return typeof r.readFloatLE=="function"&&typeof r.slice=="function"&&Ec(r.slice(0,0))}var Gx=Nx,Vx=Ox,Wx=Hx,Xx=[0,2,3],qx=[2,1,3],Yx=function(r,e){(!r||!(Vx(r)||Wx(r)))&&(e=r||{},r=null),typeof e=="number"?e={count:e}:e=e||{};for(var t=typeof e.type=="string"?e.type:"uint16",n=typeof e.count=="number"?e.count:1,i=e.start||0,s=e.clockwise!==!1?Xx:qx,a=s[0],o=s[1],l=s[2],c=n*6,u=r||new(Gx(t))(c),h=0,d=0;h<c;h+=6,d+=4){var p=h+i;u[p+0]=d+0,u[p+1]=d+1,u[p+2]=d+2,u[p+3]=d+a,u[p+4]=d+o,u[p+5]=d+l}return u};const jx=gc(Yx);function Zx(r){var e=new Float32Array(r.length*4*1),t=0;return r.forEach(function(n){var i=n.data.page||0;e[t++]=i,e[t++]=i,e[t++]=i,e[t++]=i}),e}function $x(r,e,t,n){var i=new Float32Array(r.length*4*2),s=0;return r.forEach(function(a){var o=a.data,l=o.x+o.width,c=o.y+o.height,u=o.x/e,h=o.y/t,d=l/e,p=c/t;n&&(h=(t-o.y)/t,p=(t-c)/t),i[s++]=u,i[s++]=h,i[s++]=u,i[s++]=p,i[s++]=d,i[s++]=p,i[s++]=d,i[s++]=h}),i}function Jx(r){var e=new Float32Array(r.length*4*2),t=0;return r.forEach(function(n){var i=n.data,s=n.position[0]+i.xoffset,a=n.position[1]+i.yoffset,o=i.width,l=i.height;e[t++]=s,e[t++]=a,e[t++]=s,e[t++]=a+l,e[t++]=s+o,e[t++]=a+l,e[t++]=s+o,e[t++]=a}),e}var Hs=2,et={min:[0,0],max:[0,0]};function Tc(r){var e=r.length/Hs;et.min[0]=r[0],et.min[1]=r[1],et.max[0]=r[0],et.max[1]=r[1];for(var t=0;t<e;t++){var n=r[t*Hs+0],i=r[t*Hs+1];et.min[0]=Math.min(n,et.min[0]),et.min[1]=Math.min(i,et.min[1]),et.max[0]=Math.max(n,et.max[0]),et.max[1]=Math.max(i,et.max[1])}}function Qx(r,e){Tc(r),e.min.set(et.min[0],et.min[1],0),e.max.set(et.max[0],et.max[1],0)}function Kx(r,e){Tc(r);var t=et.min[0],n=et.min[1],i=et.max[0],s=et.max[1],a=i-t,o=s-n,l=Math.sqrt(a*a+o*o);e.center.set(t+a/2,n+o/2,0),e.radius=l/2}function Ac(r){return new ev(r)}class ev extends qe{constructor(e){super(),zs(this,"_opt"),zs(this,"layout"),zs(this,"visibleGlyphs",[]),this._opt=Object.assign({flipY:!0,multipage:!1,align:"left",letterSpacing:0,lineHeight:e.font.common.lineHeight,tabSize:0,start:0,end:e.text.length},e),e&&this.update(e)}update(e){if(e=Object.assign({},this._opt,e),!e.font)throw new TypeError("must specify a { font } in options");this.layout=Bx(e);var t=e.flipY!==!1,n=e.font,i=n.common.scaleW,s=n.common.scaleH,a=this.layout.glyphs.filter(function(h){var d=h.data;return d.width*d.height>0});this.visibleGlyphs=a;var o=Jx(a),l=$x(a,i,s,t),c=jx([],{clockwise:!0,type:"uint16",count:a.length});if(this.setIndex(c),this.setAttribute("position",new $e(o,2)),this.setAttribute("uv",new $e(l,2)),!e.multipage&&"page"in this.attributes)this.removeAttribute("page");else if(e.multipage){var u=Zx(a);this.setAttribute("page",new $e(u,1))}this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere()}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);var e=this.attributes.position.array,t=this.attributes.position.itemSize;if(!e||!t||e.length<2){this.boundingSphere.radius=0,this.boundingSphere.center.set(0,0,0);return}Kx(e,this.boundingSphere),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.')}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new It);var e=this.boundingBox,t=this.attributes.position.array,n=this.attributes.position.itemSize;if(!t||!n||t.length<2){e.makeEmpty();return}Qx(t,e)}}var Lc={exports:{}};(function(r,e){(function(t,n){r.exports=n()})(ea,function(){var t=1e3,n=6e4,i=36e5,s="millisecond",a="second",o="minute",l="hour",c="day",u="week",h="month",d="quarter",p="year",v="date",_="Invalid Date",M=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,x=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(D){var N=["th","st","nd","rd"],C=D%100;return"["+D+(N[(C-20)%10]||N[C]||N[0])+"]"}},b=function(D,N,C){var O=String(D);return!O||O.length>=N?D:""+Array(N+1-O.length).join(C)+D},E={s:b,z:function(D){var N=-D.utcOffset(),C=Math.abs(N),O=Math.floor(C/60),W=C%60;return(N<=0?"+":"-")+b(O,2,"0")+":"+b(W,2,"0")},m:function D(N,C){if(N.date()<C.date())return-D(C,N);var O=12*(C.year()-N.year())+(C.month()-N.month()),W=N.clone().add(O,h),Z=C-W<0,$=N.clone().add(O+(Z?-1:1),h);return+(-(O+(C-W)/(Z?W-$:$-W))||0)},a:function(D){return D<0?Math.ceil(D)||0:Math.floor(D)},p:function(D){return{M:h,y:p,w:u,d:c,D:v,h:l,m:o,s:a,ms:s,Q:d}[D]||String(D||"").toLowerCase().replace(/s$/,"")},u:function(D){return D===void 0}},L="en",U={};U[L]=g;var S="$isDayjsObject",V=function(D){return D instanceof F||!(!D||!D[S])},q=function D(N,C,O){var W;if(!N)return L;if(typeof N=="string"){var Z=N.toLowerCase();U[Z]&&(W=Z),C&&(U[Z]=C,W=Z);var $=N.split("-");if(!W&&$.length>1)return D($[0])}else{var ne=N.name;U[ne]=N,W=ne}return!O&&W&&(L=W),W||!O&&L},Y=function(D,N){if(V(D))return D.clone();var C=typeof N=="object"?N:{};return C.date=D,C.args=arguments,new F(C)},G=E;G.l=q,G.i=V,G.w=function(D,N){return Y(D,{locale:N.$L,utc:N.$u,x:N.$x,$offset:N.$offset})};var F=function(){function D(C){this.$L=q(C.locale,null,!0),this.parse(C),this.$x=this.$x||C.x||{},this[S]=!0}var N=D.prototype;return N.parse=function(C){this.$d=function(O){var W=O.date,Z=O.utc;if(W===null)return new Date(NaN);if(G.u(W))return new Date;if(W instanceof Date)return new Date(W);if(typeof W=="string"&&!/Z$/i.test(W)){var $=W.match(M);if($){var ne=$[2]-1||0,pe=($[7]||"0").substring(0,3);return Z?new Date(Date.UTC($[1],ne,$[3]||1,$[4]||0,$[5]||0,$[6]||0,pe)):new Date($[1],ne,$[3]||1,$[4]||0,$[5]||0,$[6]||0,pe)}}return new Date(W)}(C),this.init()},N.init=function(){var C=this.$d;this.$y=C.getFullYear(),this.$M=C.getMonth(),this.$D=C.getDate(),this.$W=C.getDay(),this.$H=C.getHours(),this.$m=C.getMinutes(),this.$s=C.getSeconds(),this.$ms=C.getMilliseconds()},N.$utils=function(){return G},N.isValid=function(){return this.$d.toString()!==_},N.isSame=function(C,O){var W=Y(C);return this.startOf(O)<=W&&W<=this.endOf(O)},N.isAfter=function(C,O){return Y(C)<this.startOf(O)},N.isBefore=function(C,O){return this.endOf(O)<Y(C)},N.$g=function(C,O,W){return G.u(C)?this[O]:this.set(W,C)},N.unix=function(){return Math.floor(this.valueOf()/1e3)},N.valueOf=function(){return this.$d.getTime()},N.startOf=function(C,O){var W=this,Z=!!G.u(O)||O,$=G.p(C),ne=function(Ae,me){var Le=G.w(W.$u?Date.UTC(W.$y,me,Ae):new Date(W.$y,me,Ae),W);return Z?Le:Le.endOf(c)},pe=function(Ae,me){return G.w(W.toDate()[Ae].apply(W.toDate("s"),(Z?[0,0,0,0]:[23,59,59,999]).slice(me)),W)},de=this.$W,Me=this.$M,be=this.$D,J="set"+(this.$u?"UTC":"");switch($){case p:return Z?ne(1,0):ne(31,11);case h:return Z?ne(1,Me):ne(0,Me+1);case u:var Oe=this.$locale().weekStart||0,Ie=(de<Oe?de+7:de)-Oe;return ne(Z?be-Ie:be+(6-Ie),Me);case c:case v:return pe(J+"Hours",0);case l:return pe(J+"Minutes",1);case o:return pe(J+"Seconds",2);case a:return pe(J+"Milliseconds",3);default:return this.clone()}},N.endOf=function(C){return this.startOf(C,!1)},N.$set=function(C,O){var W,Z=G.p(C),$="set"+(this.$u?"UTC":""),ne=(W={},W[c]=$+"Date",W[v]=$+"Date",W[h]=$+"Month",W[p]=$+"FullYear",W[l]=$+"Hours",W[o]=$+"Minutes",W[a]=$+"Seconds",W[s]=$+"Milliseconds",W)[Z],pe=Z===c?this.$D+(O-this.$W):O;if(Z===h||Z===p){var de=this.clone().set(v,1);de.$d[ne](pe),de.init(),this.$d=de.set(v,Math.min(this.$D,de.daysInMonth())).$d}else ne&&this.$d[ne](pe);return this.init(),this},N.set=function(C,O){return this.clone().$set(C,O)},N.get=function(C){return this[G.p(C)]()},N.add=function(C,O){var W,Z=this;C=Number(C);var $=G.p(O),ne=function(Me){var be=Y(Z);return G.w(be.date(be.date()+Math.round(Me*C)),Z)};if($===h)return this.set(h,this.$M+C);if($===p)return this.set(p,this.$y+C);if($===c)return ne(1);if($===u)return ne(7);var pe=(W={},W[o]=n,W[l]=i,W[a]=t,W)[$]||1,de=this.$d.getTime()+C*pe;return G.w(de,this)},N.subtract=function(C,O){return this.add(-1*C,O)},N.format=function(C){var O=this,W=this.$locale();if(!this.isValid())return W.invalidDate||_;var Z=C||"YYYY-MM-DDTHH:mm:ssZ",$=G.z(this),ne=this.$H,pe=this.$m,de=this.$M,Me=W.weekdays,be=W.months,J=W.meridiem,Oe=function(me,Le,te,ie){return me&&(me[Le]||me(O,Z))||te[Le].slice(0,ie)},Ie=function(me){return G.s(ne%12||12,me,"0")},Ae=J||function(me,Le,te){var ie=me<12?"AM":"PM";return te?ie.toLowerCase():ie};return Z.replace(x,function(me,Le){return Le||function(te){switch(te){case"YY":return String(O.$y).slice(-2);case"YYYY":return G.s(O.$y,4,"0");case"M":return de+1;case"MM":return G.s(de+1,2,"0");case"MMM":return Oe(W.monthsShort,de,be,3);case"MMMM":return Oe(be,de);case"D":return O.$D;case"DD":return G.s(O.$D,2,"0");case"d":return String(O.$W);case"dd":return Oe(W.weekdaysMin,O.$W,Me,2);case"ddd":return Oe(W.weekdaysShort,O.$W,Me,3);case"dddd":return Me[O.$W];case"H":return String(ne);case"HH":return G.s(ne,2,"0");case"h":return Ie(1);case"hh":return Ie(2);case"a":return Ae(ne,pe,!0);case"A":return Ae(ne,pe,!1);case"m":return String(pe);case"mm":return G.s(pe,2,"0");case"s":return String(O.$s);case"ss":return G.s(O.$s,2,"0");case"SSS":return G.s(O.$ms,3,"0");case"Z":return $}return null}(me)||$.replace(":","")})},N.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},N.diff=function(C,O,W){var Z,$=this,ne=G.p(O),pe=Y(C),de=(pe.utcOffset()-this.utcOffset())*n,Me=this-pe,be=function(){return G.m($,pe)};switch(ne){case p:Z=be()/12;break;case h:Z=be();break;case d:Z=be()/3;break;case u:Z=(Me-de)/6048e5;break;case c:Z=(Me-de)/864e5;break;case l:Z=Me/i;break;case o:Z=Me/n;break;case a:Z=Me/t;break;default:Z=Me}return W?Z:G.a(Z)},N.daysInMonth=function(){return this.endOf(h).$D},N.$locale=function(){return U[this.$L]},N.locale=function(C,O){if(!C)return this.$L;var W=this.clone(),Z=q(C,O,!0);return Z&&(W.$L=Z),W},N.clone=function(){return G.w(this.$d,this)},N.toDate=function(){return new Date(this.valueOf())},N.toJSON=function(){return this.isValid()?this.toISOString():null},N.toISOString=function(){return this.$d.toISOString()},N.toString=function(){return this.$d.toUTCString()},D}(),j=F.prototype;return Y.prototype=j,[["$ms",s],["$s",a],["$m",o],["$H",l],["$W",c],["$M",h],["$y",p],["$D",v]].forEach(function(D){j[D[1]]=function(N){return this.$g(N,D[0],D[1])}}),Y.extend=function(D,N){return D.$i||(D(N,F,Y),D.$i=!0),Y},Y.locale=q,Y.isDayjs=V,Y.unix=function(D){return Y(1e3*D)},Y.en=U[L],Y.Ls=U,Y.p={},Y})})(Lc);var tv=Lc.exports;const Cc=ba(tv),ol={type:"change"},ks={type:"start"},Gs={type:"end"};class nv extends vn{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:In.ROTATE,MIDDLE:In.DOLLY,RIGHT:In.PAN},this.touches={ONE:Dn.ROTATE,TWO:Dn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(B){B.addEventListener("keydown",le),this._domElementKeyEvents=B},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ol),n.update(),s=i.NONE},this.update=function(){const B=new I,ae=new mt().setFromUnitVectors(e.up,new I(0,1,0)),Ne=ae.clone().invert(),De=new I,Ye=new mt,Ge=2*Math.PI;return function(){const ft=n.object.position;B.copy(ft).sub(n.target),B.applyQuaternion(ae),o.setFromVector3(B),n.autoRotate&&s===i.NONE&&q(S()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let vt=n.minAzimuthAngle,St=n.maxAzimuthAngle;return isFinite(vt)&&isFinite(St)&&(vt<-Math.PI?vt+=Ge:vt>Math.PI&&(vt-=Ge),St<-Math.PI?St+=Ge:St>Math.PI&&(St-=Ge),vt<=St?o.theta=Math.max(vt,Math.min(St,o.theta)):o.theta=o.theta>(vt+St)/2?Math.max(vt,o.theta):Math.min(St,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),B.setFromSpherical(o),B.applyQuaternion(Ne),ft.copy(n.target).add(B),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||De.distanceToSquared(n.object.position)>a||8*(1-Ye.dot(n.object.quaternion))>a?(n.dispatchEvent(ol),De.copy(n.object.position),Ye.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",we),n.domElement.removeEventListener("pointerdown",oe),n.domElement.removeEventListener("pointercancel",P),n.domElement.removeEventListener("wheel",fe),n.domElement.removeEventListener("pointermove",ye),n.domElement.removeEventListener("pointerup",ce),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",le)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new $o,l=new $o;let c=1;const u=new I;let h=!1;const d=new se,p=new se,v=new se,_=new se,M=new se,x=new se,g=new se,b=new se,E=new se,L=[],U={};function S(){return 2*Math.PI/60/60*n.autoRotateSpeed}function V(){return Math.pow(.95,n.zoomSpeed)}function q(B){l.theta-=B}function Y(B){l.phi-=B}const G=function(){const B=new I;return function(Ne,De){B.setFromMatrixColumn(De,0),B.multiplyScalar(-Ne),u.add(B)}}(),F=function(){const B=new I;return function(Ne,De){n.screenSpacePanning===!0?B.setFromMatrixColumn(De,1):(B.setFromMatrixColumn(De,0),B.crossVectors(n.object.up,B)),B.multiplyScalar(Ne),u.add(B)}}(),j=function(){const B=new I;return function(Ne,De){const Ye=n.domElement;if(n.object.isPerspectiveCamera){const Ge=n.object.position;B.copy(Ge).sub(n.target);let dt=B.length();dt*=Math.tan(n.object.fov/2*Math.PI/180),G(2*Ne*dt/Ye.clientHeight,n.object.matrix),F(2*De*dt/Ye.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(G(Ne*(n.object.right-n.object.left)/n.object.zoom/Ye.clientWidth,n.object.matrix),F(De*(n.object.top-n.object.bottom)/n.object.zoom/Ye.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function D(B){n.object.isPerspectiveCamera?c/=B:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*B)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(B){n.object.isPerspectiveCamera?c*=B:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/B)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function C(B){d.set(B.clientX,B.clientY)}function O(B){g.set(B.clientX,B.clientY)}function W(B){_.set(B.clientX,B.clientY)}function Z(B){p.set(B.clientX,B.clientY),v.subVectors(p,d).multiplyScalar(n.rotateSpeed);const ae=n.domElement;q(2*Math.PI*v.x/ae.clientHeight),Y(2*Math.PI*v.y/ae.clientHeight),d.copy(p),n.update()}function $(B){b.set(B.clientX,B.clientY),E.subVectors(b,g),E.y>0?D(V()):E.y<0&&N(V()),g.copy(b),n.update()}function ne(B){M.set(B.clientX,B.clientY),x.subVectors(M,_).multiplyScalar(n.panSpeed),j(x.x,x.y),_.copy(M),n.update()}function pe(B){B.deltaY<0?N(V()):B.deltaY>0&&D(V()),n.update()}function de(B){let ae=!1;switch(B.code){case n.keys.UP:j(0,n.keyPanSpeed),ae=!0;break;case n.keys.BOTTOM:j(0,-n.keyPanSpeed),ae=!0;break;case n.keys.LEFT:j(n.keyPanSpeed,0),ae=!0;break;case n.keys.RIGHT:j(-n.keyPanSpeed,0),ae=!0;break}ae&&(B.preventDefault(),n.update())}function Me(){if(L.length===1)d.set(L[0].pageX,L[0].pageY);else{const B=.5*(L[0].pageX+L[1].pageX),ae=.5*(L[0].pageY+L[1].pageY);d.set(B,ae)}}function be(){if(L.length===1)_.set(L[0].pageX,L[0].pageY);else{const B=.5*(L[0].pageX+L[1].pageX),ae=.5*(L[0].pageY+L[1].pageY);_.set(B,ae)}}function J(){const B=L[0].pageX-L[1].pageX,ae=L[0].pageY-L[1].pageY,Ne=Math.sqrt(B*B+ae*ae);g.set(0,Ne)}function Oe(){n.enableZoom&&J(),n.enablePan&&be()}function Ie(){n.enableZoom&&J(),n.enableRotate&&Me()}function Ae(B){if(L.length==1)p.set(B.pageX,B.pageY);else{const Ne=xe(B),De=.5*(B.pageX+Ne.x),Ye=.5*(B.pageY+Ne.y);p.set(De,Ye)}v.subVectors(p,d).multiplyScalar(n.rotateSpeed);const ae=n.domElement;q(2*Math.PI*v.x/ae.clientHeight),Y(2*Math.PI*v.y/ae.clientHeight),d.copy(p)}function me(B){if(L.length===1)M.set(B.pageX,B.pageY);else{const ae=xe(B),Ne=.5*(B.pageX+ae.x),De=.5*(B.pageY+ae.y);M.set(Ne,De)}x.subVectors(M,_).multiplyScalar(n.panSpeed),j(x.x,x.y),_.copy(M)}function Le(B){const ae=xe(B),Ne=B.pageX-ae.x,De=B.pageY-ae.y,Ye=Math.sqrt(Ne*Ne+De*De);b.set(0,Ye),E.set(0,Math.pow(b.y/g.y,n.zoomSpeed)),D(E.y),g.copy(b)}function te(B){n.enableZoom&&Le(B),n.enablePan&&me(B)}function ie(B){n.enableZoom&&Le(B),n.enableRotate&&Ae(B)}function oe(B){n.enabled!==!1&&(L.length===0&&(n.domElement.setPointerCapture(B.pointerId),n.domElement.addEventListener("pointermove",ye),n.domElement.addEventListener("pointerup",ce)),k(B),B.pointerType==="touch"?_e(B):A(B))}function ye(B){n.enabled!==!1&&(B.pointerType==="touch"?Se(B):Q(B))}function ce(B){n.enabled!==!1&&(B.pointerType==="touch"?Ce():re(),ue(B),L.length===0&&(n.domElement.releasePointerCapture(B.pointerId),n.domElement.removeEventListener("pointermove",ye),n.domElement.removeEventListener("pointerup",ce)))}function P(B){ue(B)}function A(B){let ae;switch(B.button){case 0:ae=n.mouseButtons.LEFT;break;case 1:ae=n.mouseButtons.MIDDLE;break;case 2:ae=n.mouseButtons.RIGHT;break;default:ae=-1}switch(ae){case In.DOLLY:if(n.enableZoom===!1)return;O(B),s=i.DOLLY;break;case In.ROTATE:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enablePan===!1)return;W(B),s=i.PAN}else{if(n.enableRotate===!1)return;C(B),s=i.ROTATE}break;case In.PAN:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enableRotate===!1)return;C(B),s=i.ROTATE}else{if(n.enablePan===!1)return;W(B),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ks)}function Q(B){if(n.enabled!==!1)switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Z(B);break;case i.DOLLY:if(n.enableZoom===!1)return;$(B);break;case i.PAN:if(n.enablePan===!1)return;ne(B);break}}function re(B){n.dispatchEvent(Gs),s=i.NONE}function fe(B){n.enabled===!1||n.enableZoom===!1||s!==i.NONE&&s!==i.ROTATE||(B.preventDefault(),n.dispatchEvent(ks),pe(B),n.dispatchEvent(Gs))}function le(B){n.enabled===!1||n.enablePan===!1||de(B)}function _e(B){switch(ee(B),L.length){case 1:switch(n.touches.ONE){case Dn.ROTATE:if(n.enableRotate===!1)return;Me(),s=i.TOUCH_ROTATE;break;case Dn.PAN:if(n.enablePan===!1)return;be(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Dn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Oe(),s=i.TOUCH_DOLLY_PAN;break;case Dn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ie(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ks)}function Se(B){switch(ee(B),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ae(B),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;me(B),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;te(B),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ie(B),n.update();break;default:s=i.NONE}}function Ce(B){n.dispatchEvent(Gs),s=i.NONE}function we(B){n.enabled!==!1&&B.preventDefault()}function k(B){L.push(B)}function ue(B){delete U[B.pointerId];for(let ae=0;ae<L.length;ae++)if(L[ae].pointerId==B.pointerId){L.splice(ae,1);return}}function ee(B){let ae=U[B.pointerId];ae===void 0&&(ae=new se,U[B.pointerId]=ae),ae.set(B.pageX,B.pageY)}function xe(B){const ae=B.pointerId===L[0].pointerId?L[1]:L[0];return U[ae.pointerId]}n.domElement.addEventListener("contextmenu",we),n.domElement.addEventListener("pointerdown",oe),n.domElement.addEventListener("pointercancel",P),n.domElement.addEventListener("wheel",fe,{passive:!1}),this.update()}}const iv=""+new URL("Simple-Dpth75CW.fnt",import.meta.url).href,rv=""+new URL("Simple-CZKQpzoq.png",import.meta.url).href,sv=r=>new Promise((e,t)=>{vx(r,(n,i)=>{if(n){t(n);return}e(i)})}),av=r=>new Promise(e=>{const n=new ic().load(r);e(n)}),ov=async()=>{const r=new ha;r.background=new Ee(16777215);const e=new We({antialias:!0});e.setPixelRatio(window.devicePixelRatio),e.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(e.domElement);const t=new yt(40,window.innerWidth/window.innerHeight,1,1e3);t.position.set(15,15,30),r.add(t);const n=new nv(t,e.domElement);n.target=new I(10,0,0),r.add(new lc(6710886));const i=new ac(16777215,3,0,0);t.add(i),r.add(new w0(20));const[s,a]=await Promise.all([sv(iv),av(rv)]),o=new Vr({map:a,transparent:!0,color:"rgb(230, 230, 230)"}),l=Ac({text:Cc().format("HH:mm:ss SSS"),font:s,width:1e3}),c=new _t(l,o);var u=new ke;u.scale.set(.05,-.05,-.05),u.add(c),r.add(u);function h(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",h),{renderer:e,controls:n,scene:r,camera:t,text:c,font:s}},{renderer:lv,controls:cv,scene:uv,camera:hv,text:ll,font:dv}=await ov();function Rc(){requestAnimationFrame(Rc);const r=Ac({text:Cc().format("HH:mm:ss SSS"),font:dv,width:1e3}),e=ll.geometry;ll.geometry=r,e.dispose(),cv.update(),lv.render(uv,hv)}Rc();
