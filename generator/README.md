# Custom Templates

To override how a file is generated:

1. Locate its built-in template here:
   https://github.com/OpenAPITools/openapi-generator/tree/v6.2.1/modules/openapi-generator/src/main/resources/typescript-fetch
2. Add a file with the same name to this directory.
3. Add an entry to `generator.yaml`

You can lookup most of the variables here:

- https://github.com/OpenAPITools/openapi-generator/blob/v6.2.1/modules/openapi-generator/src/main/java/org/openapitools/codegen/languages/TypeScriptFetchClientCodegen.java
