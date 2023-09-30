const search = (() => {
    function Node(value, parent=null, children=[]) {
        return {value, parent, children}
    }
    
    function Tree(rootValue) {
        let root = Node(rootValue)
        let leaves = [root]
    
        // Each leaf node gains whatever children the leafFunc
        // returns; the leafFunc takes a leaf node value as a param
        function insertLeafChildren(leafFunc) {
            const newLeaves = []
    
            for (const leaf of leaves) {
                const leafChildrenValues = leafFunc(leaf.value)
                const children = []
    
                for (const value of leafChildrenValues) {
                    children.push(Node(value, leaf))
                }

                leaf.children = children
                newLeaves.push(children)
            }
    
            leaves = newLeaves.flat()
        }
    
        function findLeaf(value, compareFunc=null) {
    
            if (!compareFunc) {
                compareFunc = (val1, val2) => val1 === val2 
            }
    
            for (const leaf of leaves) {
                if (compareFunc(leaf.value, value)) {
                    return leaf
                }
            }
    
            return null
        }
    
        return { insertLeafChildren, findLeaf }
    }

    return { Tree }

})()


export { search }