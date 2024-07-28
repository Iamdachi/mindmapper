const data = {
    name: "Arrays & Hashing",
    children: [
        { name: "Two Pointers", children: [{ name: "Sliding Window" }, { name: "Linked List" }] },
        { name: "Stack" },
        { name: "Binary Search", children: [{ name: "Trees" }] },
        { name: "Trees", children: [{ name: "Tries" }, { name: "Heap / Priority Queue" }, { name: "Backtracking" }] }
    ]
};

const width = 800;
const height = 600;

const svg = d3.select("#graph").append("svg")
    .attr("width", width)
    .attr("height", height);

const root = d3.hierarchy(data);
const treeLayout = d3.tree().size([width - 100, height - 100]);
treeLayout(root);

svg.selectAll('line')
    .data(root.links())
    .enter()
    .append('line')
    .attr('x1', d => d.source.x)
    .attr('y1', d => d.source.y)
    .attr('x2', d => d.target.x)
    .attr('y2', d => d.target.y)
    .attr('stroke', 'black');

svg.selectAll('circle')
    .data(root.descendants())
    .enter()
    .append('circle')
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .attr('r', 5)
    .attr('fill', 'blue');

svg.selectAll('text')
    .data(root.descendants())
    .enter()
    .append('text')
    .attr('x', d => d.x)
    .attr('y', d => d.y)
    .attr('dy', -10)
    .attr('text-anchor', 'middle')
    .text(d => d.data.name);

