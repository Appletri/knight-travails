function Node(value) {
  return {
    data: value,
    distance: null,
    predecessor: null,
    pathToPredecessor: null,
  }
}

export default Node