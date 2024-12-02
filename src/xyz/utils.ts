import { Vertex } from './types';

//Vector Operations
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~IMPORTANT this is a WIP ~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*Most functions currently don't have logic implemented, as of now this is purely
scaffolding to enforce types and act as part of this projects roadmap.*/


/*--add, scale--*/
export function add(v1: Vertex, v2: Vertex): Vertex {
  return { x: v1.x + v2.x, y: v1.y + v2.y, z: v1.z + v2.z };
}
//function scale(v: Vertex, scalar: number): Vertex { ... }

/*--cross product--*/
//function cross(v1: Vertex, v2: Vertex); Vertex { ... }


/*--dot product--*/
//function dot(v1: Vertex, v2: Vertex): number { ... }


/*--Matrix Transformations--*/
//~~~~~~~~~~4x4 Matrices for transformations
//~~~~~~~~~~rotation, translation, scaling matrices
//function applyMatrix(vertex: Vertex, matrix: number[][]): Vertex { ... }

/*--Normals Calculations*--/
/*Face Normal*/
//function computeFaceNormal(face: Face, vertices: Vertex[]): Normal { ... }

/*--Bounding Box--*/
//function computeBoundingBox(mesh: Mesh): { min: Vertex; max: Vertex; } { ... };