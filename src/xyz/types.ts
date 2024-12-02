
/*These types represent core data structures for 3D models.*/
//-><--><--><--><--><--><--><--><--><--><--><--><--><--><-//

/*~~~~~~~~~~~~~~~~Geometry~~~~~~~~~~~~~~~~*/

export type Vertex = { x: number; y: number; z: number; };
//A point in 3D space (x, y, z)

export type Edge = { vertex1: number; vertex2: number; };
//Edges connect two vertices

export type Face = { vertexIndices: [number, number, number]; };
//Triangle faces/polygons, indices point to vertices

/*~~~~~~~~~~~~~~~~Normals~~~~~~~~~~~~~~~~*/

export type Normal = { x: number; y: number; z: number; };
//For lighting calculations, associated with vertices (or faces).

/*~~~~~~~~~~~~~~~~UV Mapping~~~~~~~~~~~~~~~~*/
export type UV = { u: number; v: number; };
export type UVMap = UV[];

/*~~~~~~~~~~~~~~~~Textures~~~~~~~~~~~~~~~~*/
export type Texture = { url: string; width: number; height: number; };

/*~~~~~~~~~~~~~~~~Materials/Shaders~~~~~~~~~~~~~~~~*/
//Defines surface properties
export type Material = {
  name: string;
  diffuseColor: [number, number, number];
  specularColor?: [number, number, number];
  texture?: Texture;
};

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~3D Object~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
//-------------------------------------------------------------------------//
//Mesh containing all properties
export interface Mesh {
  vertices: Vertex[];
  faces: Face[];
  edges?: Edge[]; //Optional edges, can be reconstructed from faces
  normals: Normal[];
  uvs: UVMap;
  material: Material;
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Scene Object Container~~~~~~~~~~~~~~~~~~~~*/

export interface SceneObject {
  mesh: Mesh;
  position: Vertex; //Translation
  rotation: Vertex; //Euler angles
  scale: Vertex;  //Scaling factors
}