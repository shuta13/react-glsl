precision mediump float;
uniform float t; // time
uniform vec2  r; // resolution

const float PI = 3.1415926;
const vec3 lightColor = vec3(0.95, 0.25, 0.25);  // 背景の後光の色
const vec3 backColor =  vec3(1.0, 1.0, 1.0); // 背景の下地の色
const vec3 faceColor = vec3(0.95, 0.75, 0.5);   // 顔の色
const vec3 noseColor = vec3(1.0, 0.0, 0.0);  // 鼻の色
const vec3 cheekColor = vec3(1.0, 0.55, 0.25);  // 頬の色
const vec3 eyesColor = vec3(0.15, 0.05, 0.05);  // 目の色
const vec3 highlight = vec3(0.95, 0.95, 0.95);  // ハイライトの色
const vec3 lineColor = vec3(0.3, 0.2, 0.2);     // ラインの色

// 背景の後光を描く
void sunrise(vec2 p, inout vec3 i){
    float f = atan(p.y, p.x) + t;
    float fs = sin(f * 10.0);
    i = mix(lightColor, backColor, fs);
}

// 円を描く
void circle(vec2 p, vec2 offset, float size, vec3 color, inout vec3 i){
    float l = length(p - offset);
    if(l < size){
        i = color;
    }
}

void main(){
    // 座標を正規化する
    vec2 p = (gl_FragCoord.xy * 2.0 - r) / min(r.x, r.y);

    // 最終的に出力される色
    vec3 destColor = vec3(1.0);

    // 背景の後光を描く
    sunrise(p, destColor);
    circle(p, vec2(0.0), 0.35, noseColor, destColor);

    gl_FragColor = vec4(destColor, 1.0);
}