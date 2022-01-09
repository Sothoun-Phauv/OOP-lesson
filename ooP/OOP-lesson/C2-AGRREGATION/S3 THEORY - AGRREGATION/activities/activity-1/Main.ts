import { House } from "./House";
import { Tree } from "./Tree";

let houseRonan = new House(1, "Ronan")

let tree1 = new Tree(10)
let tree2 = new Tree(3)

houseRonan.tree.push(tree1,tree2)