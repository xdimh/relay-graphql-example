/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type App_count$ref = any;
export type srcQueryVariables = {||};
export type srcQueryResponse = {|
  +$fragmentRefs: App_count$ref
|};
export type srcQuery = {|
  variables: srcQueryVariables,
  response: srcQueryResponse,
|};
*/


/*
query srcQuery {
  ...App_count
}

fragment App_count on RootQueryType {
  count
}
*/

const node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "srcQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "App_count"
      }
    ],
    "type": "RootQueryType"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "srcQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "count",
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "srcQuery",
    "operationKind": "query",
    "text": "query srcQuery {\n  ...App_count\n}\n\nfragment App_count on RootQueryType {\n  count\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = '189af42222d4286498ad7f210df063be';

module.exports = node;
