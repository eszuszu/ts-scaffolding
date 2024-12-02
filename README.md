# TS-Scaffolding
**⚠️ This project is a work in progress (WIP). Expect changes and updates.**

A TypeScript scaffolding project for creating and referencing reusable common types and utilities related to the 3D modeling and rendering pipelines.

## Project Roadmap
- **Core Type Definitions:**  
  Define essential data structures:
  - [x] Vertices  
  - [ ] Faces  
  - [ ] Normals  

- **Utility Functions:**  
  Implement key operations:
  - [x] Vector math operations (add, scale, dot product)  
  - [ ] Normal calculations  
  - [ ] Matrix transformations  

- **Renderer/Prototyping Integration:**  
  Explore visualization options with:
  - [ ] Three.js  
  - [ ] Babylon.js  

- **Blender Export Tools:**  
  Develop Python scripts for:
  - [ ] Exporting models compatible with core type structures  

## Installation

```bash
git clone https://github.com/eszuszu/ts-scaffolding.git
cd ts-scaffolding
npm install
```

## Usage Example
```TypeScript
//from src/main.ts
import { Vertex, add } from './xyz';

const vertex1: Vertex = { x: 1, y: 2, z: 3};
const vertex2: Vertex = { x: 4, y: 5, z: 6};
//to add the vertices
const result = add(vertex1, vertex2);
```


This project is licensed under the MIT License. See LICENSE for details.