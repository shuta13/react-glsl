precision mediump float;
uniform float t; // time
uniform vec2  r; // resolution

void main(void){
    vec2 p = (gl_FragCoord.xy * 2.0 - r) / min(r.x, r.y); // 正規化
    float l = 0.1 * abs(sin(t)) / length(p);
    gl_FragColor = vec4(vec3(l), 1.0);
}