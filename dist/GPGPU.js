import { RenderTarget, Triangle, Mesh } from 'ogl';

const rto = (gl, width, height, type) => ({
  width,
  height,
  type:
    type ||
    gl.HALF_FLOAT ||
    gl.renderer.extensions["OES_texture_half_float"].HALF_FLOAT_OES,
  internalFormat: gl.renderer.isWebgl2
    ? type === gl.FLOAT
      ? gl.RGBA32F
      : gl.RGBA16F
    : gl.RGBA,
  depth: false,
  unpackAlignment: 1,
});

export default class GPGPU {
  constructor(gl, { width, height, type }) {
    Object.assign(this, {
      gl,
      width,
      height,
      numVertexes: width * height,
      read: new RenderTarget(gl, rto(gl, width, height, type)),
      write: new RenderTarget(gl, rto(gl, width, height, type)),
      mesh: new Mesh(gl, { geometry: new Triangle(gl) }),
    });
  }

  renderProgram(program) {
    this.mesh.program = program;
    this.gl.renderer.render({
      scene: this.mesh,
      target: this.write,
      clear: false,
    });
    this.swap();
  }

  swap() {
    [this.read, this.write] = [this.write, this.read];
  }
}