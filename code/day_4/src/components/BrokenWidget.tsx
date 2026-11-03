function BrokenWidget(): never {
  throw new Error("BrokenWidget crashed while rendering!");
}

export default BrokenWidget;
