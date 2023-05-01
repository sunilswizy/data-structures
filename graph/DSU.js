class DSU {
    constructor(n) {
        this.parent = [...Array(n).keys()];
        this.rank = Array(n).fill(0);
    }

   find(x) {
        if (this.parent[x] == x) {
        return x;
        }
        this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
   }

   union(x, y) {
    const xset = this.find(x);
    const yset = this.find(y);
    if (xset !== yset) {
      if (this.rank[xset] < this.rank[yset]) {
        this.parent[xset] = yset;
      } else {
        this.parent[yset] = xset;
        if (this.rank[xset] === this.rank[yset]) {
          this.rank[xset]++;
        }
      }
      return true;
    }
    return false;
  }
}