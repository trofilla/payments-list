# Payments list Frontend app


## Local Development
### Dev server
- `npm install ` - to install dependencies
- ```nx serve``` to start the app

### Unit Tests
Run command: `nx run <library-name>:test`

## Nx
### Graph
Nx creates a graph of all the dependencies between projects in your workspace using two sources of information:
- Typescript import statements referencing a particular project's path alias
- Manually created implicitDependencies in the nx.json file

Run the following command to generate graph ``` nx dep-graph ```

### Scopes
Nx uses code analyses to make sure projects can only depend on each other's well-defined public API. It also allows you
to declaratively impose constraints on how projects can depend on each other.

Nx comes with a generic tags mechanism

Example in angular.json:
```
"payments-list-ang": {
      "tags": [
        "type:shared"
      ]
}
```

### Plugin
There is Nx plugin for different IDE, which really helps during development.

With its help you can run tasks (unit tests, e2e, lint, build) in easy way for each lib.
Recommend to install it.
